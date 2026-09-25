import fs from 'node:fs';
import crypto from 'node:crypto';
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

for (const directory of ['docs', 'eval', 'references', 'tokens', 'packages', 'schemas']) {
  fs.cpSync(path.join(root, directory), path.join(output, directory), {
    recursive: true,
    errorOnExist: true,
  });
}

const runtimeScripts = path.join(output, 'scripts');
fs.mkdirSync(runtimeScripts, { recursive: true });
for (const filename of ['verify-skill.mjs']) {
  fs.copyFileSync(path.join(root, 'scripts', filename), path.join(runtimeScripts, filename));
}

const agents = path.join(root, 'skill/agents');
if (fs.existsSync(agents)) {
  fs.cpSync(agents, path.join(output, 'agents'), {
    recursive: true,
    errorOnExist: true,
  });
}

const packagedFiles = [];
const visit = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) visit(absolute);
    else if (entry.isFile() && entry.name !== '.fanui-skill.json') {
      packagedFiles.push({
        path: path.relative(output, absolute).split(path.sep).join('/'),
        sha256: crypto.createHash('sha256').update(fs.readFileSync(absolute)).digest('hex'),
      });
    }
  }
};
visit(output);
packagedFiles.sort((left, right) => left.path.localeCompare(right.path));
const packageHash = crypto.createHash('sha256').update(JSON.stringify(packagedFiles)).digest('hex');
fs.writeFileSync(
  path.join(output, '.fanui-skill.json'),
  `${JSON.stringify({ schemaVersion: 2, name: 'fanui', packageHash, files: packagedFiles }, null, 2)}\n`,
  'utf8',
);

console.log(`Built installable FanUI skill package at ${output}`);
