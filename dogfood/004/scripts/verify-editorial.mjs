import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const css = readFileSync(resolve(root, "app/globals.css"), "utf8");
const home = readFileSync(resolve(root, "app/zh/page.tsx"), "utf8");
const writing = readFileSync(resolve(root, "app/zh/writing/page.tsx"), "utf8");
const article = readFileSync(resolve(root, "app/zh/writing/agent-eval/page.tsx"), "utf8");

const checks = [
  ["1440 editorial shell", css.includes("--shell: 1160px")],
  ["reading measure", css.includes("--reading: 720px")],
  ["1024 transformation", css.includes("@media (max-width: 1024px)")],
  ["tablet transformation", css.includes("@media (max-width: 820px)")],
  ["mobile transformation", css.includes("@media (max-width: 640px)")],
  ["390 pressure test", css.includes("@media (max-width: 390px)")],
  ["375 pressure test", css.includes("@media (max-width: 375px)")],
  ["mobile replacement nav", css.includes(".mobile-menu") && css.includes(".mobile-menu-panel")],
  ["mobile TOC replacement", css.includes(".toc-mobile") && article.includes("toc-mobile")],
  ["local category scroll", css.includes(".category-scroller") && css.includes("overflow-x: auto")],
  ["idea-bearing homepage visual", home.includes("EVAL LOOP") && home.includes("REAL TASK / EVIDENCE")],
  ["idea-bearing editorial visual", writing.includes("AGENT QUALITY") && writing.includes("NOT A FEELING")],
  ["article evidence visual", article.includes("RELEASE GATE / TWO EVIDENCE LAYERS")],
  ["no generic hero image slot", !home.includes("<Image") && !article.includes("<Image")],
  ["touch geometry", css.includes("width: 44px; height: 44px") && css.includes("min-height: 44px")],
];

let failed = 0;
for (const [name, pass] of checks) {
  console.log(`${pass ? "PASS" : "FAIL"}  ${name}`);
  if (!pass) failed++;
}

if (failed > 0) {
  console.error(`\nFanUI Dogfood #004 verification failed: ${failed} check(s).`);
  process.exit(1);
}

console.log("\nFanUI Dogfood #004 editorial/responsive static gate: PASS");
