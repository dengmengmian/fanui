import fs from 'node:fs';
import path from 'node:path';

const cwd = process.cwd();
const read = (p) => fs.readFileSync(path.join(cwd, p), 'utf8');
const checks = [];
const expect = (name, condition) => checks.push({ name, ok: Boolean(condition) });

const layout = read('app/layout.tsx');
const css = read('app/v034.css');
const site = read('components/site.tsx');
const docs = read('components/docs-shell.tsx');
const workspace = read('app/app/projects/atlas/page.tsx');
const skill = read('../../skill/SKILL.md');
const responsiveSpec = read('../../docs/foundations/responsive.md');
const mobileWorkspace = read('../../docs/web-app/mobile-workspace.md');

expect('responsive CSS is imported', layout.includes('import "./v034.css"'));
expect('responsive CSS loads after precision CSS', layout.indexOf('v034.css') > layout.indexOf('v033.css'));
expect('tablet breakpoint exists', css.includes('@media(max-width:820px)'));
expect('mobile breakpoint exists', css.includes('@media(max-width:640px)'));
expect('small-mobile breakpoint exists', css.includes('@media(max-width:460px)'));
expect('document overflow is guarded', css.includes('overflow-x:hidden'));
expect('mobile site navigation exists', site.includes('mobile-site-nav'));
expect('mobile docs navigation exists', docs.includes('docs-mobile-nav'));
expect('mobile workspace context exists', workspace.includes('mobile-workspace-bar'));
expect('mobile workspace Review path exists', workspace.includes('Review</span>'));
expect('mobile workspace graph reflows vertically', css.includes('.flow-lanes{height:auto;display:grid;grid-template-columns:1fr'));
expect('mobile runtime is capped', css.includes('.runtime-trace{max-height:210px'));
expect('mobile inspector remains rendered', css.includes('.inspector{display:block;height:auto'));
expect('pricing comparison uses local scroll', css.includes('.comparison{margin-top:58px;overflow-x:auto'));
expect('responsive spec contains transformation vocabulary', responsiveSpec.includes('preserve') && responsiveSpec.includes('replace') && responsiveSpec.includes('drawer'));
expect('mobile workspace spec defines inspector replacement', mobileWorkspace.includes('sheet_or_review_section'));
expect('FanUI skill routes through responsive spec', skill.includes('docs/foundations/responsive.md'));
expect('FanUI skill requires 390 reference validation', skill.includes('390 × 844'));

const failed = checks.filter((c) => !c.ok);
for (const check of checks) console.log(`${check.ok ? 'PASS' : 'FAIL'}  ${check.name}`);

if (failed.length) {
  console.error(`\nRESPONSIVE_CLOSURE=FAIL (${failed.length}/${checks.length} failed)`);
  process.exit(1);
}

console.log(`\nRESPONSIVE_CLOSURE=PASS (${checks.length}/${checks.length})`);
