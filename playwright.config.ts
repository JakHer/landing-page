import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "line",
  use: {
    baseURL: "http://127.0.0.1:4173",
    channel: process.env.CI ? undefined : "chrome",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "desktop",
      grep: /@desktop/,
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } },
    },
    {
      name: "mobile",
      grep: /@mobile/,
      use: {
        ...devices["iPhone 13"],
        browserName: "chromium",
        channel: process.env.CI ? undefined : "chrome",
      },
    },
  ],
  webServer: {
    command: "npm run dev -- --host 127.0.0.1 --port 4173",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: true,
  },
});
