import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { runFanUILayoutAudit } from "./fanui-audit";

const screenshotRoot = resolve("test-results/fanui-screenshots");

test("FanUI rendered acceptance", async ({ page }, testInfo) => {
  const metadata = testInfo.project.metadata as Record<string, string>;
  const theme = metadata.fanuiTheme ?? "light";
  const targetURL = String(testInfo.config.metadata.fanuiTargetURL);
  const viewport = page.viewportSize();
  if (!viewport) throw new Error("FanUI acceptance requires a configured viewport.");

  await page.addInitScript((resolvedTheme) => {
    document.documentElement.dataset.theme = resolvedTheme;
  }, theme);
  await page.goto(targetURL, { waitUntil: "networkidle" });
  await page.evaluate((resolvedTheme) => {
    document.documentElement.dataset.theme = resolvedTheme;
  }, theme);
  await page.locator("body").waitFor({ state: "visible" });
  await page.evaluate(async () => document.fonts?.ready);

  const layout = await runFanUILayoutAudit(page, {
    mobile: viewport.width <= 390,
    minimumTouchTarget: Number(process.env.FANUI_TOUCH_TARGET_MIN ?? 40),
  });
  const axe = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();

  await mkdir(screenshotRoot, { recursive: true });
  const screenshotPath = resolve(screenshotRoot, `${testInfo.project.name}.png`);
  await page.screenshot({
    path: screenshotPath,
    fullPage: true,
    animations: "disabled",
    caret: "hide",
  });
  await testInfo.attach("rendered-page", { path: screenshotPath, contentType: "image/png" });

  const evidence = {
    url: page.url(),
    project: testInfo.project.name,
    engine: metadata.fanuiEngine ?? testInfo.project.use.browserName,
    viewport,
    theme,
    document: layout.document,
    declarations: layout.declarations,
    layoutFindings: layout.findings,
    axe: {
      violations: axe.violations.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        help: violation.help,
        helpUrl: violation.helpUrl,
        targets: violation.nodes.map((node) => node.target),
      })),
      passes: axe.passes.length,
      incomplete: axe.incomplete.length,
    },
  };
  await testInfo.attach("fanui-review-evidence", {
    body: Buffer.from(JSON.stringify(evidence)),
    contentType: "application/json",
  });

  expect(layout.findings, layout.findings.map((finding) => finding.message).join("\n")).toEqual([]);
  expect(
    axe.violations,
    axe.violations.map((violation) => `${violation.id}: ${violation.help}`).join("\n"),
  ).toEqual([]);
});
