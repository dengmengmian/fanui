import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const requestedTarget = process.argv[2];

if (!requestedTarget) {
  console.error('Usage: node scripts/sync-skill.mjs <explicit-fanui-skill-directory>');
  process.exit(2);
}

const target = path.resolve(process.cwd(), requestedTarget);
if (target === root || target.startsWith(`${root}${path.sep}`)) {
  console.error('Refusing to sync into the FanUI source repository.');
  process.exit(2);
}

function isFanUISkillDirectory(directory) {
  if (!fs.existsSync(directory)) return true;
  const entries = fs.readdirSync(directory);
  if (entries.length === 0) return true;

  const marker = path.join(directory, '.fanui-skill.json');
  if (fs.existsSync(marker)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(marker, 'utf8'));
      if (parsed?.name === 'fanui') return true;
    } catch {
      return false;
    }
  }

  const skillPath = path.join(directory, 'SKILL.md');
  if (!fs.existsSync(skillPath)) return false;
  const skill = fs.readFileSync(skillPath, 'utf8');
  return /^---\s*\nname:\s*fanui\s*$/m.test(skill);
}

if (!isFanUISkillDirectory(target)) {
  console.error(`Refusing to overwrite a non-FanUI directory: ${target}`);
  process.exit(2);
}

fs.mkdirSync(path.dirname(target), { recursive: true });
const stageParent = fs.mkdtempSync(path.join(path.dirname(target), '.fanui-sync-'));
const staged = path.join(stageParent, 'fanui');
const backup = `${target}.fanui-backup-${process.pid}`;

try {
  const packaged = spawnSync(process.execPath, [path.join(root, 'scripts/package-skill.mjs'), staged], {
    cwd: root,
    encoding: 'utf8',
  });
  if (packaged.status !== 0) {
    process.stderr.write(packaged.stderr || packaged.stdout || 'FanUI packaging failed.\n');
    process.exit(packaged.status || 1);
  }

  const verified = spawnSync(process.execPath, [path.join(staged, 'scripts/verify-skill.mjs')], {
    cwd: staged,
    encoding: 'utf8',
    env: { ...process.env, FANUI_SKIP_INSTALLED_DRIFT: '1' },
  });
  if (verified.status !== 0) {
    process.stderr.write(verified.stderr || verified.stdout || 'Staged FanUI verification failed.\n');
    process.exit(verified.status || 1);
  }

  const hadTarget = fs.existsSync(target);
  if (hadTarget) fs.renameSync(target, backup);
  try {
    fs.renameSync(staged, target);
  } catch (error) {
    if (hadTarget && fs.existsSync(backup) && !fs.existsSync(target)) fs.renameSync(backup, target);
    throw error;
  }
  if (hadTarget) fs.rmSync(backup, { recursive: true, force: true });
  console.log(`Synced FanUI skill package to ${target}`);
} finally {
  fs.rmSync(stageParent, { recursive: true, force: true });
}
