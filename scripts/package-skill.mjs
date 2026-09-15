import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const requestedOutput = process.argv[2];

if (!requestedOutput) {
  console.error('Usage: node scripts/package-skill.mjs <new-output-directory>');
  process.exit(2);
}

const output = path.resolve(process.cwd(), requestedOutput);
if (output === root || output.startsWith(`${root}${path.sep}`)) {
  console.error('Output must be outside the FanUI source repository.');
  process.exit(2);
}

if (fs.existsSync(output)) {
  console.error(`Output already exists: ${output}`);
  process.exit(2);
}

fs.mkdirSync(output, { recursive: true });
fs.copyFileSync(path.join(root, 'skill/SKILL.md'), path.join(output, 'SKILL.md'));

for (const directory of ['docs', 'eval', 'references', 'tokens', 'packages']) {
  fs.cpSync(path.join(root, directory), path.join(output, directory), {
    recursive: true,
    errorOnExist: true,
  });
}

const agents = path.join(root, 'skill/agents');
if (fs.existsSync(agents)) {
  fs.cpSync(agents, path.join(output, 'agents'), {
    recursive: true,
    errorOnExist: true,
  });
}

console.log(`Built installable FanUI skill package at ${output}`);
