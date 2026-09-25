import fs from 'node:fs';
import crypto from 'node:crypto';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const packagedLayout = fs.existsSync(path.join(scriptDirectory, '..', 'SKILL.md'));
const root = path.resolve(scriptDirectory, '..');
const checks = [];
const warnings = [];
const expect = (name, condition, detail = '') => checks.push({ name, ok: Boolean(condition), detail });
const warn = (name, detail) => warnings.push({ name, detail });
const read = (relativePath) => {
  const absolutePath = path.join(root, relativePath);
  return fs.existsSync(absolutePath) ? fs.readFileSync(absolutePath, 'utf8') : '';
};

const skillPath = packagedLayout ? 'SKILL.md' : 'skill/SKILL.md';
const skill = read(skillPath);
const checklist = read('eval/checklist.md');
const rubric = read('eval/rubric.md');
const agents = read('AGENTS.md');
const webDelivery = read('docs/foundations/web-delivery.md');
const responsive = read('docs/foundations/responsive.md');
const authentication = read('docs/web-app/authentication.md');
const publicMarketplace = read('docs/website/public-marketplace.md');
const reactTailwind = read('docs/implementation/react-tailwind.md');
const theming = read('docs/implementation/theming.md');
const accessibility = read('docs/implementation/accessibility.md');
const testing = read('docs/implementation/testing.md');
const desktopAcceptance = read('docs/desktop-app/acceptance.md');
const tokenIndex = read('tokens/index.css');
const lightTokens = read('tokens/light.css');
const darkTokens = read('tokens/dark.css');
const tailwindTokens = read('tokens/tailwind.css');
const componentCandidates = read('docs/components/candidates.md');
const apifoxStudy = read('references/apifox-page-study.md');

function ruleIds(markdown) {
  return [...markdown.matchAll(/<!--\s*rule:([a-z0-9-]+)\s*-->/g)].map((match) => match[1]);
}

function hasRule(id) {
  return ruleIds(skill).includes(id);
}

function localMarkdownReferences(markdown) {
  const codeRefs = [...markdown.matchAll(/`((?:docs|eval|references|tokens|packages)\/[^`\n]+?\.md)`/g)].map((match) => match[1]);
  const linkRefs = [...markdown.matchAll(/\[[^\]]*\]\((?!https?:|#)([^)]+?\.md)(?:#[^)]+)?\)/g)].map((match) => match[1]);
  return [...new Set([...codeRefs, ...linkRefs])];
}

function markdownFilesUnder(relativeDirectory) {
  const directory = path.join(root, relativeDirectory);
  if (!fs.existsSync(directory)) return [];
  const files = [];
  const visit = (current) => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const absolute = path.join(current, entry.name);
      if (entry.isDirectory()) visit(absolute);
      else if (entry.isFile() && entry.name.endsWith('.md')) files.push(absolute);
    }
  };
  visit(directory);
  return files;
}

function resolveReference(fromFile, reference) {
  if (/^(docs|eval|references|tokens|packages)\//.test(reference)) return path.join(root, reference);
  return path.resolve(path.dirname(fromFile), reference);
}

function validateReferenceClosure(label, files) {
  const missing = [];
  for (const file of files) {
    const contents = fs.readFileSync(file, 'utf8');
    for (const reference of localMarkdownReferences(contents)) {
      if (!fs.existsSync(resolveReference(file, reference))) missing.push(`${path.relative(root, file)} -> ${reference}`);
    }
  }
  expect(label, missing.length === 0, missing.join('; '));
}

function matchesAll(value, patterns) {
  return patterns.every((pattern) => pattern.test(value));
}

function compareInstalledSkill(installed) {
  if (!fs.existsSync(installed)) {
    warn('Installed skill drift', `No installed FanUI skill found at ${installed}`);
    return;
  }
  const installedMarker = path.join(installed, '.fanui-skill.json');
  if (!fs.existsSync(installedMarker)) {
    warn('Installed skill drift', `${installed} has no package manifest; sync it to establish full-package drift detection`);
    return;
  }
  const tempParent = fs.mkdtempSync(path.join(os.tmpdir(), 'fanui-drift-'));
  const desired = path.join(tempParent, 'fanui');
  try {
    const packaged = spawnSync(process.execPath, [path.join(root, 'scripts/package-skill.mjs'), desired], {
      cwd: root,
      encoding: 'utf8',
    });
    if (packaged.status !== 0) {
      warn('Installed skill drift', `Could not build comparison package: ${packaged.stderr || packaged.stdout}`);
      return;
    }
    const expected = JSON.parse(fs.readFileSync(path.join(desired, '.fanui-skill.json'), 'utf8'));
    const actual = JSON.parse(fs.readFileSync(installedMarker, 'utf8'));
    const actualFiles = [];
    const visit = (directory) => {
      for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const absolute = path.join(directory, entry.name);
        if (entry.isDirectory()) visit(absolute);
        else if (entry.isFile() && absolute !== installedMarker) {
          actualFiles.push({
            path: path.relative(installed, absolute).split(path.sep).join('/'),
            sha256: crypto.createHash('sha256').update(fs.readFileSync(absolute)).digest('hex'),
          });
        }
      }
    };
    visit(installed);
    actualFiles.sort((left, right) => left.path.localeCompare(right.path));
    const actualPackageHash = crypto.createHash('sha256').update(JSON.stringify(actualFiles)).digest('hex');
    const markerFilesMatch = JSON.stringify(actual.files ?? []) === JSON.stringify(actualFiles);
    if (!actual.packageHash || actual.packageHash !== actualPackageHash || !markerFilesMatch || actual.packageHash !== expected.packageHash) {
      warn('Installed skill drift', `${installed} differs from the complete source package; use scripts/sync-skill.mjs with that explicit target when ready`);
    }
  } finally {
    fs.rmSync(tempParent, { recursive: true, force: true });
  }
}

expect('Skill has valid YAML frontmatter', /^---\s*\nname:\s*fanui\s*$/m.test(skill));

const ids = ruleIds(skill);
const duplicates = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
expect('Skill rule IDs are unique', duplicates.length === 0, duplicates.join(', '));

const requiredRuleIds = [
  'fanui-route-progressive-disclosure',
  'fanui-route-workflow-references',
  'fanui-workflow-step-boundaries',
  'fanui-context-brief-read',
  'fanui-context-change-mode',
  'fanui-context-expression-profile',
  'fanui-route-experience-family',
  'fanui-route-desktop-runtime',
  'fanui-pattern-capsule-first',
  'fanui-web-multiviewport-obligation',
  'fanui-desktop-window-obligation',
  'fanui-hard-failures-override-score',
  'fanui-hard-failure-disposition',
];
const missingRequiredRules = requiredRuleIds.filter((id) => !hasRule(id));
expect('Skill carries required routing and hard-invariant rule IDs', missingRequiredRules.length === 0, missingRequiredRules.join(', '));

for (const mode of ['shape', 'build', 'review', 'audit', 'adapt', 'polish']) {
  expect(`Progressive router declares ${mode}`, skill.includes(`**\`${mode}\`**`));
}

expect('Workflow context declares brief_read', /\bbrief_read:\s*true\s*\|\s*false/.test(skill));
expect('Workflow context declares change_mode', /\bchange_mode:\s*greenfield\s*\|\s*preserve\s*\|\s*overhaul/.test(skill));
expect('Workflow context declares expression_profile', /\bexpression_profile:\s*quiet\s*\|\s*balanced\s*\|\s*expressive/.test(skill));
expect('Hard-failure disposition has four states', /\brecapture\b[\s\S]*\brebuild\b[\s\S]*\bfix\b[\s\S]*\bship\b/.test(skill));
expect('Skill preserves content-dimension layout routing', matchesAll(skill, [/Flexbox for one-dimensional/i, /CSS Grid for genuine two-dimensional/i, /semantic table/i]));
expect('Skill routes Web delivery, authentication, and Desktop acceptance', matchesAll(skill, [/docs\/foundations\/web-delivery\.md/, /docs\/web-app\/authentication\.md/, /docs\/desktop-app\/acceptance\.md/]));

validateReferenceClosure('Skill Markdown references resolve', [path.join(root, skillPath)]);
validateReferenceClosure('Workflow Markdown references resolve', markdownFilesUnder('docs/workflows'));

const workflowFiles = ['context.md', 'redesign.md', 'review-protocol.md', 'pattern-capsules.md'];
for (const filename of workflowFiles) expect(`Workflow resource exists: ${filename}`, fs.existsSync(path.join(root, 'docs/workflows', filename)));

expect('Checklist exists', Boolean(checklist));
expect('Rubric exists', Boolean(rubric));
expect('Rubric has hard-failure families', /^## Shared hard failures$/m.test(rubric) && /^## Web experience hard failures$/m.test(rubric) && /^## Desktop App hard failures$/m.test(rubric));
expect('Checklist routes Web and Desktop separately', /^## C\. Web-only responsive transformation$/m.test(checklist) && /^## Q\. Desktop Application$/m.test(checklist));
expect('Web delivery retains compatibility and indexing contracts', matchesAll(webDelivery, [/Compatibility applies to every Web implementation/i, /route-level index policy/i, /Authenticated consoles\/private workspaces normally remain `noindex`/i]));
expect('Responsive guidance retains composed-container gutter contract', /Composed page-container classes must preserve the narrowest required inline gutter/i.test(responsive));
expect('Authentication retains intent, focus, and credential contracts', matchesAll(authentication, [/requested destination and action intent/i, /focus trap/i, /password visibility/i, /one-time-code/i]));
expect('Public marketplace retains discovery and decision patterns', matchesAll(publicMarketplace, [/Discovery index/i, /Decision detail/i, /Platform signal strip/i]));
expect('React and Tailwind guidance retains implementation invariants', matchesAll(reactTailwind, [/React \+ Tailwind implementation contract/i, /Do not construct Tailwind class names dynamically/i, /CSS Grid/i]));
expect('Theme guidance preserves behavior across theme changes', matchesAll(theming, [/Stable contract/i, /Product override/i, /same information architecture/i, /network behavior/i]));
expect('Accessibility baseline remains WCAG 2.2 AA', matchesAll(accessibility, [/WCAG 2\.2 Level AA/i, /keyboard/i, /reduced motion/i]));
expect('Testing contract retains journey, accessibility, visual, and engine coverage', matchesAll(testing, [/Playwright/i, /axe/i, /visual regression/i, /WebKit/i]));
expect('Desktop acceptance retains compact, normal, and large windows', matchesAll(desktopAcceptance, [/1280 × 720/, /1440 × 900/, /1728 × 1117/, /maximized/i, /full-screen/i]));
if (!packagedLayout) expect('Agent instructions retain separate Web and Desktop completion lanes', matchesAll(agents, [/### Web experiences/, /### Desktop App/, /docs\/desktop-app\/acceptance\.md/]));
expect('Executable theme tokens retain Light, Dark, and Tailwind mappings', /@import '.\/light\.css'/.test(tokenIndex) && /@import '.\/dark\.css'/.test(tokenIndex) && /data-theme="light"/.test(lightTokens) && /data-theme="dark"/.test(darkTokens) && /@theme inline/.test(tailwindTokens));
expect('Apifox evidence remains connected to component candidates', /Observed page families/i.test(apifoxStudy) && /Button/.test(componentCandidates) && /PricingCard/.test(componentCandidates));

for (const schema of ['fanui-context.schema.json', 'pattern-capsule.schema.json', 'review-report.schema.json']) {
  const schemaPath = path.join(root, 'schemas', schema);
  let valid = false;
  try {
    valid = Boolean(JSON.parse(fs.readFileSync(schemaPath, 'utf8')).$schema);
  } catch {
    valid = false;
  }
  expect(`Schema is valid JSON: ${schema}`, valid);
}
const contextSchema = JSON.parse(read('schemas/fanui-context.schema.json'));
const capsuleSchema = JSON.parse(read('schemas/pattern-capsule.schema.json'));
const reviewSchema = JSON.parse(read('schemas/review-report.schema.json'));
expect('Context schema matches workflow_context field names', ['workflow', 'experience', 'primary_task', 'change_mode', 'brief_read', 'expression_profile'].every((key) => contextSchema.required?.includes(key)));
expect('Pattern capsule schema matches documented wrapper', capsuleSchema.required?.includes('page_pattern_capsule') && capsuleSchema.properties?.page_pattern_capsule?.required?.includes('experience_families'));
expect('Review schema declares release evidence and independence', ['score', 'source_revision', 'checklist_passed', 'reviewer', 'hard_failures', 'accepted_limitations'].every((key) => reviewSchema.required?.includes(key)));
expect('Review schema encodes ship invariants', JSON.stringify(reviewSchema).includes('accepted_with_reason') && JSON.stringify(reviewSchema).includes('minimum') && Array.isArray(reviewSchema.allOf));

const behaviorRunner = path.join(root, 'tests/skill-behavior/run.mjs');
if (!packagedLayout) expect('Deterministic Skill trace-contract harness exists', fs.existsSync(behaviorRunner));
if (!packagedLayout && fs.existsSync(behaviorRunner)) {
  const behavior = spawnSync(process.execPath, [behaviorRunner], { cwd: root, encoding: 'utf8' });
  expect('Skill trace-contract fixtures pass', behavior.status === 0, behavior.stderr || behavior.stdout);
}

const packageScript = path.join(root, 'scripts/package-skill.mjs');
if (!packagedLayout) {
  expect('Skill package builder exists', fs.existsSync(packageScript));
  expect('Safe explicit-target sync script exists', fs.existsSync(path.join(root, 'scripts/sync-skill.mjs')));
  const syncSafety = path.join(root, 'tests/skill-contract/sync-safety.mjs');
  expect('Sync safety contract exists', fs.existsSync(syncSafety));
  if (fs.existsSync(syncSafety)) {
    const syncResult = spawnSync(process.execPath, [syncSafety], { cwd: root, encoding: 'utf8' });
    expect('Sync safety contract passes', syncResult.status === 0, syncResult.stderr || syncResult.stdout);
  }
}

if (!packagedLayout && fs.existsSync(packageScript)) {
  const tempParent = fs.mkdtempSync(path.join(os.tmpdir(), 'fanui-skill-test-'));
  const output = path.join(tempParent, 'fanui');
  try {
    const result = spawnSync(process.execPath, [packageScript, output], { cwd: root, encoding: 'utf8' });
    expect('Skill package builds successfully', result.status === 0, result.stderr || result.stdout);
    expect('Packaged Skill has ownership marker', fs.existsSync(path.join(output, '.fanui-skill.json')));
    const packageManifest = JSON.parse(fs.readFileSync(path.join(output, '.fanui-skill.json'), 'utf8'));
    expect('Packaged Skill manifest fingerprints the full package', packageManifest.schemaVersion === 2 && Boolean(packageManifest.packageHash) && packageManifest.files?.length > 0);
    expect('Packaged Skill includes workflow resources', workflowFiles.every((file) => fs.existsSync(path.join(output, 'docs/workflows', file))));
    expect('Packaged Skill includes schemas', fs.existsSync(path.join(output, 'schemas/fanui-context.schema.json')) && fs.existsSync(path.join(output, 'schemas/review-report.schema.json')));
    expect('Packaged Skill includes executable tokens', fs.existsSync(path.join(output, 'tokens/index.css')));
    expect('Packaged Skill includes React candidates', fs.existsSync(path.join(output, 'packages/react/src/index.ts')));
    expect('Packaged Skill includes verifier', fs.existsSync(path.join(output, 'scripts/verify-skill.mjs')));

    const packagedVerification = spawnSync(process.execPath, [path.join(output, 'scripts/verify-skill.mjs')], {
      cwd: output,
      encoding: 'utf8',
      env: { ...process.env, FANUI_SKIP_INSTALLED_DRIFT: '1' },
    });
    expect('Packaged Skill verifies in isolation', packagedVerification.status === 0, packagedVerification.stderr || packagedVerification.stdout);
  } finally {
    fs.rmSync(tempParent, { recursive: true, force: true });
  }
}

if (!packagedLayout) {
  const readme = read('README.md');
  const dogfoodRefs = [...readme.matchAll(/`(dogfood\/[^`\n]+)`/g)].map((match) => match[1]);
  for (const reference of dogfoodRefs) {
    if (!fs.existsSync(path.join(root, reference))) warn('README dogfood reference', `${reference} is not present in this checkout`);
  }
  validateReferenceClosure('README Markdown references resolve', [path.join(root, 'README.md')]);
  if (process.env.FANUI_SKIP_INSTALLED_DRIFT !== '1') compareInstalledSkill(path.resolve(process.env.FANUI_INSTALLED_SKILL || path.join(os.homedir(), '.codex/skills/fanui')));
}

const failed = checks.filter((check) => !check.ok);
for (const check of checks) console.log(`${check.ok ? 'PASS' : 'FAIL'}  ${check.name}${check.detail ? ` — ${check.detail}` : ''}`);
for (const warning of warnings) console.log(`WARN  ${warning.name} — ${warning.detail}`);

if (failed.length) {
  console.error(`\nFANUI_SKILL_VERIFICATION=FAIL (${failed.length}/${checks.length} failed)`);
  process.exit(1);
}

console.log(`\nFANUI_SKILL_VERIFICATION=PASS (${checks.length}/${checks.length}; ${warnings.length} warnings)`);
