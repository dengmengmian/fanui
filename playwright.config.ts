import { defineConfig, devices } from "@playwright/test";

const fixturePort = Number(process.env.FANUI_FIXTURE_PORT ?? 4177);
const fixtureOrigin = `http://127.0.0.1:${fixturePort}`;
const targetURL = process.env.FANUI_TARGET_URL ?? `${fixtureOrigin}/pass.html`;

const viewports = [
  { name: "1440x1000", width: 1440, height: 1000 },
  { name: "1024x900", width: 1024, height: 900 },
  { name: "768x1024", width: 768, height: 1024 },
  { name: "390x844", width: 390, height: 844 },
  { name: "375x812", width: 375, height: 812 },
] as const;

const themes = ["light", "dark"] as const;
const engines = [
  { name: "chromium", device: devices["Desktop Chrome"] },
  { name: "firefox", device: devices["Desktop Firefox"] },
  { name: "webkit", device: devices["Desktop Safari"] },
] as const;

export default defineConfig({
  testDir: "./tests/acceptance",
  outputDir: "./test-results/playwright-artifacts",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  timeout: 45_000,
  expect: { timeout: 8_000 },
  reporter: [
    ["list"],
    ["./scripts/acceptance/fanui-reporter.mjs"],
  ],
  metadata: {
    fanuiTargetURL: targetURL,
    fanuiFixtureOrigin: fixtureOrigin,
  },
  use: {
    ...devices["Desktop Chrome"],
    baseURL: targetURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "off",
    reducedMotion: "reduce",
  },
  projects: engines.flatMap((engine) => viewports.flatMap((viewport) =>
    themes.map((theme) => ({
      name: `${engine.name}-${viewport.name}-${theme}`,
      use: {
        ...engine.device,
        viewport: { width: viewport.width, height: viewport.height },
        colorScheme: theme,
      },
      metadata: {
        fanuiEngine: engine.name,
        fanuiTheme: theme,
        fanuiViewport: `${viewport.width}x${viewport.height}`,
      },
    })),
  )),
  webServer: process.env.FANUI_TARGET_URL ? undefined : {
    command: `node scripts/acceptance/serve-fixtures.mjs --port ${fixturePort}`,
    url: `${fixtureOrigin}/pass.html`,
    reuseExistingServer: true,
    timeout: 10_000,
  },
});
