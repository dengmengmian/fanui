import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateTrace } from './harness.mjs';

const directory = path.dirname(fileURLToPath(import.meta.url));
const fixtures = JSON.parse(fs.readFileSync(path.join(directory, 'fixtures.json'), 'utf8'));

for (const fixture of fixtures) {
  assert.deepEqual(validateTrace(fixture), [], fixture.name);
  console.log(`PASS  ${fixture.name}`);
}

const shipWithHardFailure = structuredClone(fixtures.find((fixture) => fixture.name === 'review cannot ship a hard failure'));
shipWithHardFailure.trace.findLast((event) => event.type === 'disposition').value = 'ship';
assert.match(validateTrace(shipWithHardFailure).join('\n'), /hard failure cannot ship/);

const desktopWithMobileLeak = structuredClone(fixtures.find((fixture) => fixture.surface === 'desktop'));
desktopWithMobileLeak.trace.push({ type: 'read', path: 'docs/foundations/mobile-precision.md' });
assert.match(validateTrace(desktopWithMobileLeak).join('\n'), /forbidden reference read|incorrectly inherited/);

const missingViewport = structuredClone(fixtures.find((fixture) => fixture.requiredViewports));
missingViewport.trace = missingViewport.trace.filter((event) => event.viewport !== 375);
assert.match(validateTrace(missingViewport).join('\n'), /missing viewport capture: 375/);

const hiddenHardFinding = structuredClone(fixtures.find((fixture) => fixture.name === 'review cannot ship a hard failure'));
const hiddenDisposition = hiddenHardFinding.trace.findLast((event) => event.type === 'disposition');
hiddenDisposition.value = 'ship';
hiddenDisposition.hardFailures = 0;
assert.match(validateTrace(hiddenHardFinding).join('\n'), /hard failure cannot ship/);

const deleteInReview = structuredClone(fixtures.find((fixture) => fixture.readOnly));
deleteInReview.trace.push({ type: 'delete', path: 'src/page.tsx' });
assert.match(validateTrace(deleteInReview).join('\n'), /read-only workflow mutated files/);

const invalidCaptureShips = structuredClone(fixtures.find((fixture) => fixture.requiredViewports));
invalidCaptureShips.trace.find((event) => event.type === 'capture').valid = false;
assert.match(validateTrace(invalidCaptureShips).join('\n'), /invalid evidence must recapture/);

console.log(`FANUI_SKILL_BEHAVIOR=PASS (${fixtures.length} fixtures, 6 negative controls)`);
