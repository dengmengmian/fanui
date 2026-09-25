import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const syncScript = path.join(root, 'scripts/sync-skill.mjs');
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'fanui-sync-contract-'));

try {
  const foreign = path.join(temporary, 'foreign-skill');
  fs.mkdirSync(foreign);
  fs.writeFileSync(path.join(foreign, 'SKILL.md'), '---\nname: another-skill\n---\n');
  fs.writeFileSync(path.join(foreign, 'sentinel.txt'), 'keep');
  const rejected = spawnSync(process.execPath, [syncScript, foreign], { cwd: root, encoding: 'utf8' });
  assert.equal(rejected.status, 2);
  assert.match(rejected.stderr, /Refusing to overwrite a non-FanUI directory/);
  assert.equal(fs.readFileSync(path.join(foreign, 'sentinel.txt'), 'utf8'), 'keep');

  const fanui = path.join(temporary, 'fanui');
  fs.mkdirSync(fanui);
  fs.writeFileSync(path.join(fanui, 'SKILL.md'), '---\nname: fanui\n---\nold\n');
  const updated = spawnSync(process.execPath, [syncScript, fanui], { cwd: root, encoding: 'utf8' });
  assert.equal(updated.status, 0, updated.stderr || updated.stdout);
  assert.ok(fs.existsSync(path.join(fanui, '.fanui-skill.json')));
  assert.match(fs.readFileSync(path.join(fanui, 'SKILL.md'), 'utf8'), /rule:fanui-route-progressive-disclosure/);

  console.log('FANUI_SYNC_SAFETY=PASS');
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}
