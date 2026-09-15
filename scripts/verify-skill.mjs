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
const webDelivery = read('docs/foundations/web-delivery.md');
const reactTailwind = read('docs/implementation/react-tailwind.md');
const theming = read('docs/implementation/theming.md');
const accessibility = read('docs/implementation/accessibility.md');
const testing = read('docs/implementation/testing.md');
const tokenIndex = read('tokens/index.css');
const lightTokens = read('tokens/light.css');
const darkTokens = read('tokens/dark.css');
const tailwindTokens = read('tokens/tailwind.css');
const componentCandidates = read('docs/components/candidates.md');
const apifoxStudy = read('references/apifox-page-study.md');
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
expect(
  'Skill selects layout model by content dimension',
  skill.includes('Layout implementation rule') &&
    skill.includes('Use Flexbox for one-dimensional flow') &&
    skill.includes('Use CSS Grid for genuine two-dimensional composition') &&
    skill.includes('semantic table markup'),
);
expect(
  'Checklist gates layout-model misuse',
  checklist.includes('genuine two-dimensional alignment/spanning may use CSS Grid') &&
    checklist.includes('No Layout-model Misuse'),
);
expect('Skill recognizes desktop_app', skill.includes('- `desktop_app`'));
expect(
  'Skill routes every Web implementation to delivery quality rules',
  skill.includes('For every Web implementation also read `docs/foundations/web-delivery.md`'),
);
expect(
  'Web delivery separates compatibility from public SEO and GEO scope',
  webDelivery.includes('Compatibility applies to every Web implementation') &&
    webDelivery.includes('Authenticated consoles/private workspaces normally remain `noindex`') &&
    webDelivery.includes('GEO has no separate universal technical standard'),
);
expect(
  'React and Tailwind implementation contract exists',
  reactTailwind.includes('React + Tailwind implementation contract') &&
    reactTailwind.includes('Do not construct Tailwind class names dynamically') &&
    reactTailwind.includes('CSS Grid'),
);
expect(
  'Theme contract separates stable roles from product values',
  theming.includes('Stable contract') && theming.includes('Product override') && theming.includes('Default theme'),
);
expect(
  'Accessibility baseline is WCAG 2.2 AA',
  accessibility.includes('WCAG 2.2 Level AA') && accessibility.includes('keyboard') && accessibility.includes('reduced motion'),
);
expect(
  'Testing contract covers semantic, browser, visual, and accessibility checks',
  testing.includes('Playwright') && testing.includes('axe') && testing.includes('visual regression') && testing.includes('WebKit'),
);
expect(
  'Executable theme tokens include light, dark, and Tailwind mappings',
  tokenIndex.includes("@import './light.css'") &&
    tokenIndex.includes("@import './dark.css'") &&
    lightTokens.includes('[data-theme="light"]') &&
    darkTokens.includes('[data-theme="dark"]') &&
    tailwindTokens.includes('@theme inline'),
);
expect(
  'Apifox study maps observed page families to candidate components',
  apifoxStudy.includes('Observed page families') && componentCandidates.includes('Button') && componentCandidates.includes('PricingCard'),
);
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
    expect('Packaged Skill includes executable tokens', fs.existsSync(path.join(output, 'tokens/index.css')));
    expect('Packaged Skill includes React candidates', fs.existsSync(path.join(output, 'packages/react/src/index.ts')));
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
