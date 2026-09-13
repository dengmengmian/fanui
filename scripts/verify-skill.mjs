import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const checks = [];
const expect = (name, condition) => checks.push({ name, ok: Boolean(condition) });
const read = (relativePath) => {
  const absolutePath = path.join(root, relativePath);
  return fs.existsSync(absolutePath) ? fs.readFileSync(absolutePath, 'utf8') : '';
};

const skill = read('skill/SKILL.md');
const readme = read('README.md');
const overview = read('docs/00-overview.md');
const agents = read('AGENTS.md');
const checklist = read('eval/checklist.md');
const rubric = read('eval/rubric.md');
const classification = read('docs/desktop-app/classification.md');
const nativeShell = read('docs/desktop-app/native-shell.md');
const acceptance = read('docs/desktop-app/acceptance.md');
const packageScript = path.join(root, 'scripts/package-skill.mjs');
const markdownReferences = [...skill.matchAll(/`([^`\n]*\.md)`/g)].map((match) => match[1]);
const basenameOnlyReferences = markdownReferences.filter((reference) => !reference.includes('/'));
const viewportSection = skill.match(/### 16\.[\s\S]*?(?=### 17\.)/)?.[0] ?? '';
const antiPatternSection = skill.match(/### 18\.[\s\S]*?(?=### 19\.)/)?.[0] ?? '';
const languageSection = skill.match(/### 19\.[\s\S]*?(?=### 20\.)/)?.[0] ?? '';
const agentCompletion = agents.match(/## Completion standard[\s\S]*?(?=Rendered screenshot review)/)?.[0] ?? '';
const desktopAgentCompletion = agentCompletion.match(/### Desktop App[\s\S]*$/)?.[0] ?? '';
const desktopReferenceAcceptance = rubric.match(/## Desktop App reference acceptance[\s\S]*$/)?.[0] ?? '';

expect('Skill has valid YAML frontmatter', skill.startsWith('---\nname: fanui\n'));
expect('Skill recognizes desktop_app', skill.includes('- `desktop_app`'));
expect(
  'Skill routes desktop work to desktop references',
  skill.includes('docs/desktop-app/classification.md') &&
    skill.includes('docs/desktop-app/native-shell.md') &&
    skill.includes('docs/desktop-app/acceptance.md'),
);
expect('Desktop classification distinguishes Web App and Desktop App', classification.includes('Web App') && classification.includes('Desktop App'));
expect('Desktop shell guidance covers native chrome and window states', nativeShell.includes('native chrome') && nativeShell.includes('maximized') && nativeShell.includes('full-screen'));
expect('Desktop guidance covers keyboard, pointer, and accessibility', nativeShell.includes('keyboard') && nativeShell.includes('pointer') && nativeShell.includes('accessibility'));
expect('Desktop acceptance defines multiple window sizes', acceptance.includes('1280 × 720') && acceptance.includes('1440 × 900') && acceptance.includes('1728 × 1117'));
expect('Desktop acceptance requires compact, normal, and large validation', acceptance.includes('compact') && acceptance.includes('normal') && acceptance.includes('large'));
expect('Checklist contains a Desktop App gate', checklist.includes('## Q. Desktop Application'));
expect('Rubric contains Desktop App hard failures', rubric.includes('Desktop App hard failures'));
expect('README advertises Desktop App support', readme.includes('Desktop Application'));
expect('Overview includes desktop_app', overview.includes('desktop_app'));
expect('Repository agent instructions route desktop work', agents.includes('docs/desktop-app/acceptance.md'));
expect('Skill package builder exists', fs.existsSync(packageScript));
expect('Skill has no basename-only Markdown references', basenameOnlyReferences.length === 0);
expect('Viewport/mobile-workspace step is conditional on web_app', viewportSection.includes('`web_app`') && viewportSection.includes('Desktop App'));
expect('Mobile language checks are conditional on a Web or mobile target', languageSection.includes('Web') && languageSection.includes('mobile target'));
expect(
  'Anti-pattern references are routed by experience family',
  antiPatternSection.includes('For `desktop_app`') &&
    antiPatternSection.includes('when relevant') &&
    antiPatternSection.includes('For Web responsive/mobile work'),
);
expect(
  'Checklist routes sections by experience family before Web gates',
  checklist.includes('Select sections by experience family') &&
    checklist.includes('## C. Web-only responsive transformation') &&
    checklist.includes('### C1. Web-only mobile precision closure'),
);
expect(
  'Agent completion has a Desktop branch without Web mobile gates',
  agentCompletion.includes('### Web experiences') &&
    desktopAgentCompletion.includes('docs/desktop-app/acceptance.md') &&
    !desktopAgentCompletion.includes('mobile-precision.md') &&
    !desktopAgentCompletion.includes('390') &&
    !desktopAgentCompletion.includes('375'),
);
expect(
  'Rubric hard failures and acceptance are routed by experience family',
  rubric.includes('## Shared hard failures') &&
    rubric.includes('## Web experience hard failures') &&
    rubric.includes('## Web reference acceptance') &&
    desktopReferenceAcceptance.includes('1280 × 720') &&
    !desktopReferenceAcceptance.includes('390') &&
    !desktopReferenceAcceptance.includes('375'),
);

if (fs.existsSync(packageScript)) {
  const tempParent = fs.mkdtempSync(path.join(os.tmpdir(), 'fanui-skill-test-'));
  const output = path.join(tempParent, 'fanui');
  try {
    const result = spawnSync(process.execPath, [packageScript, output], {
      cwd: root,
      encoding: 'utf8',
    });
    expect('Skill package builds successfully', result.status === 0);

    const packagedSkillPath = path.join(output, 'SKILL.md');
    const packagedSkill = fs.existsSync(packagedSkillPath)
      ? fs.readFileSync(packagedSkillPath, 'utf8')
      : '';
    const referencedFiles = [...packagedSkill.matchAll(/`([^`\n]*\.md)`/g)].map((match) => match[1]);

    expect('Packaged Skill has an entrypoint', Boolean(packagedSkill));
    expect('Packaged Skill declares supporting references', referencedFiles.length > 0);
    expect(
      'Every packaged Skill reference resolves inside the package',
      referencedFiles.length > 0 && referencedFiles.every((file) => fs.existsSync(path.join(output, file))),
    );
  } finally {
    fs.rmSync(tempParent, { recursive: true, force: true });
  }
}

const failed = checks.filter((check) => !check.ok);
for (const check of checks) {
  console.log(`${check.ok ? 'PASS' : 'FAIL'}  ${check.name}`);
}

if (failed.length) {
  console.error(`\nFANUI_SKILL_VERIFICATION=FAIL (${failed.length}/${checks.length} failed)`);
  process.exit(1);
}

console.log(`\nFANUI_SKILL_VERIFICATION=PASS (${checks.length}/${checks.length})`);
