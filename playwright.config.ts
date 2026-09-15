import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const isCI = !!process.env.CI;
const uiBaseURL = process.env.BASE_URL || 'https://www.saucedemo.com';
const apiBaseURL = process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com';

export default defineConfig({
  testDir: './tests',
  outputDir: 'test-results',
  timeout: 30_000,
  globalTimeout: isCI ? 15 * 60_000 : undefined,
  expect: {
    timeout: 5_000,
  },
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 2 : '50%',
  maxFailures: isCI ? 10 : undefined,
  reporter: isCI
    ? [['blob'], ['line']]
    : [
        ['list'],
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
      ],
  use: {
    baseURL: uiBaseURL,
    testIdAttribute: 'data-test',
    actionTimeout: 10_000,
    navigationTimeout: 15_000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    ignoreHTTPSErrors: true,
    locale: 'en-US',
    timezoneId: 'America/New_York',
  },
  projects: [
    {
      name: 'api',
      testMatch: /api\/.*\.spec\.ts/,
      use: {
        baseURL: apiBaseURL,
      },
    },
    {
      name: 'chromium',
      testMatch: /ui\/.*\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      testMatch: /ui\/.*\.spec\.ts/,
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      testMatch: /ui\/.*\.spec\.ts/,
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'mobile-chrome',
      testMatch: /mobile\/.*\.spec\.ts/,
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'mobile-safari',
      testMatch: /mobile\/.*\.spec\.ts/,
      use: { ...devices['iPhone 13'] },
    },
    {
      name: 'framework',
      testMatch: /framework\/.*\.spec\.ts/,
      workers: 1,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
