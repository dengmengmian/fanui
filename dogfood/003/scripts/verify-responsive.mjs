import fs from 'node:fs';
import path from 'node:path';

const cwd = process.cwd();
const read = (p) => fs.readFileSync(path.join(cwd, p), 'utf8');
const checks = [];
const expect = (name, condition) => checks.push({ name, ok: Boolean(condition) });

const layout = read('app/layout.tsx');
const responsiveCss = read('app/v034.css');
const precisionCss = read('app/v035.css');
const site = read('components/site.tsx');
const docs = read('components/docs-shell.tsx');
const appShell = read('components/app-shell.tsx');
const workspace = read('app/app/projects/atlas/page.tsx');
const skill = read('../../skill/SKILL.md');
const responsiveSpec = read('../../docs/foundations/responsive.md');
const mobilePrecisionSpec = read('../../docs/foundations/mobile-precision.md');
const iconSpec = read('../../docs/foundations/iconography.md');
const mobileWorkspace = read('../../docs/web-app/mobile-workspace.md');

expect('responsive CSS is imported', layout.includes('import "./v034.css"'));
expect('mobile precision CSS is imported', layout.includes('import "./v035.css"'));
expect('mobile precision CSS loads last', layout.indexOf('v035.css') > layout.indexOf('v034.css'));
expect('tablet breakpoint exists', responsiveCss.includes('@media(max-width:820px)'));
expect('mobile breakpoint exists', responsiveCss.includes('@media(max-width:640px)'));
expect('375 pressure breakpoint exists', precisionCss.includes('@media(max-width:375px)'));
expect('document overflow is guarded', responsiveCss.includes('overflow-x:hidden'));

expect('website uses a mobile menu trigger', site.includes('mobile-site-menu') && site.includes('mobile-menu-trigger'));
expect('website uses a mobile drawer', site.includes('mobile-site-drawer'));
expect('mobile site header removes second nav band', precisionCss.includes('.site-nav,.mobile-site-nav{display:none!important}'));
expect('mobile menu target is at least 44px', precisionCss.includes('.mobile-menu-trigger{') && precisionCss.includes('width:44px;height:44px'));

expect('docs uses a mobile menu trigger', docs.includes('docs-mobile-menu') && docs.includes('docs-menu-trigger'));
expect('docs uses a full mobile drawer', docs.includes('docs-mobile-drawer') && docs.includes('Runs & traces') && docs.includes('Tools & MCP'));
expect('docs chip-row replacement is disabled', precisionCss.includes('.docs-mobile-nav{display:none!important}'));
expect('docs drawer targets are 44px', precisionCss.includes('.docs-mobile-drawer a') && precisionCss.includes('min-height:44px'));
expect('docs task-reading typography is calibrated', precisionCss.includes('.article h1{font-size:32px') && precisionCss.includes('.article p{font-size:16px'));
expect('code keeps semantics through local scroll', precisionCss.includes('white-space:pre!important') && precisionCss.includes('overflow-x:auto!important'));

expect('editorial category navigation scrolls locally', precisionCss.includes('.blog-cats{') && precisionCss.includes('overflow-x:auto!important'));
expect('editorial body has its own mobile scale', precisionCss.includes('.blog-body p{font-size:18px'));

expect('mobile workspace context exists', workspace.includes('mobile-workspace-bar'));
expect('mobile workspace Review path exists', workspace.includes('Review</span>'));
expect('mobile workspace graph reflows vertically', responsiveCss.includes('.flow-lanes{height:auto;display:grid;grid-template-columns:1fr'));
expect('mobile runtime is capped', precisionCss.includes('.runtime-trace{max-height:210px'));
expect('mobile inspector remains rendered', responsiveCss.includes('.inspector{display:block;height:auto'));
expect('workspace icon-only controls have explicit classes', appShell.includes('app-search') && appShell.includes('app-help') && appShell.includes('app-notifications'));
expect('workspace icon targets preserve 44px geometry', precisionCss.includes('.app-top .icon-btn{width:44px;height:44px'));

expect('pricing comparison uses local scroll', responsiveCss.includes('.comparison{margin-top:58px;overflow-x:auto'));
expect('responsive spec contains transformation vocabulary', responsiveSpec.includes('preserve') && responsiveSpec.includes('replace') && responsiveSpec.includes('drawer'));
expect('mobile precision spec defines single-row header', mobilePrecisionSpec.includes('Double-decker Mobile Header') && mobilePrecisionSpec.includes('Brand | Primary CTA | Menu'));
expect('mobile precision spec defines 375 pressure test', mobilePrecisionSpec.includes('375 × 812'));
expect('mobile precision spec gates icon regressions', mobilePrecisionSpec.includes('Mobile Icon Regression'));
expect('icon spec requires optical centering', iconSpec.includes('Optical centering') && iconSpec.includes('first-line information anchor'));
expect('mobile workspace spec defines inspector replacement', mobileWorkspace.includes('sheet_or_review_section'));
expect('FanUI skill routes through responsive spec', skill.includes('docs/foundations/responsive.md'));
expect('FanUI skill requires 390 reference validation', skill.includes('390 × 844'));

const failed = checks.filter((c) => !c.ok);
for (const check of checks) console.log(`${check.ok ? 'PASS' : 'FAIL'}  ${check.name}`);

if (failed.length) {
  console.error(`\nRESPONSIVE_PRECISION_CLOSURE=FAIL (${failed.length}/${checks.length} failed)`);
  process.exit(1);
}

console.log(`\nRESPONSIVE_PRECISION_CLOSURE=PASS (${checks.length}/${checks.length})`);
