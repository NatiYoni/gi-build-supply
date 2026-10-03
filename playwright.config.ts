import { defineConfig } from "@playwright/test";

const baseURL = "http://127.0.0.1:3012";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  forbidOnly: true,
  retries: 0,
  workers: 1,
  reporter: "list",
  use: {
    baseURL,
    browserName: "chromium",
    serviceWorkers: "block",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    { name: "desktop", use: { viewport: { width: 1280, height: 900 } } },
    { name: "mobile", use: { viewport: { width: 390, height: 844 } } },
  ],
  webServer: {
    command: "npm run build && npm run preview -- --host 127.0.0.1 --port 3012 --strictPort",
    url: baseURL,
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
