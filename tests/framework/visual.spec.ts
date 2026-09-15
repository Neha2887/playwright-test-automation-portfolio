import { test, expect } from '../../fixtures/testFixtures';

test(
  'captures a full-page screenshot artifact',
  { tag: ['@framework', '@visual'] },
  async ({ page }, testInfo) => {
    await page.goto('/');
    await page.screenshot({
      path: testInfo.outputPath('login-page.png'),
      fullPage: true,
    });
  },
);

test(
  'visual regression example with toHaveScreenshot',
  { tag: ['@visual'] },
  async ({ page }) => {
    test.skip(
      !process.env.RUN_VISUAL,
      'Set RUN_VISUAL=true when intentionally creating or checking snapshot baselines.',
    );

    await page.goto('/');
    await expect(page).toHaveScreenshot('login-page.png', {
      fullPage: true,
      animations: 'disabled',
    });
  },
);
