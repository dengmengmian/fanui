import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { runFanUILayoutAudit } from "./fanui-audit";

test("built-in fixtures prove pass and fail detection", async ({ page }, testInfo) => {
  test.skip(Boolean(process.env.FANUI_TARGET_URL), "Fixture contract is separate from an external target run.");
  test.skip(testInfo.project.name !== "chromium-1440x1000-light", "Run fixture contract once.");
  const fixtureOrigin = String(testInfo.config.metadata.fanuiFixtureOrigin);

  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(`${fixtureOrigin}/pass.html`);
  const passing = await runFanUILayoutAudit(page, { mobile: true, minimumTouchTarget: 40 });
  const passingAxe = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(passing.findings).toEqual([]);
  expect(passingAxe.violations).toEqual([]);

  await page.goto(`${fixtureOrigin}/fail.html`);
  const failing = await runFanUILayoutAudit(page, { mobile: true, minimumTouchTarget: 40 });
  const failingAxe = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  const rules = new Set(failing.findings.map((finding) => finding.rule));

  expect([...rules]).toEqual(expect.arrayContaining([
    "document-horizontal-overflow",
    "icon-only-accessible-name",
    "mobile-touch-target",
    "code-local-horizontal-scroll",
    "code-causes-page-overflow",
    "collapsed-region-replacement",
  ]));
  expect(failingAxe.violations.length).toBeGreaterThan(0);
});
