import { test, expect } from '../../fixtures/testFixtures';

const appUrl = process.env.BASE_URL || 'https://www.saucedemo.com';

test(
  'browser contexts isolate state and storageState can be reused',
  { tag: ['@framework', '@storageState'] },
  async ({ browser }) => {
    const firstContext = await browser.newContext();
    const firstPage = await firstContext.newPage();

    await firstPage.goto(appUrl);
    await firstPage.evaluate(() =>
      localStorage.setItem('portfolio-framework-key', 'playwright'),
    );

    const savedState = await firstContext.storageState();
    await firstContext.close();

    const secondContext = await browser.newContext({ storageState: savedState });
    const secondPage = await secondContext.newPage();
    await secondPage.goto(appUrl);

    const restoredValue = await secondPage.evaluate(() =>
      localStorage.getItem('portfolio-framework-key'),
    );

    expect(restoredValue).toBe('playwright');
    await secondContext.close();
  },
);

test(
  'multiple pages can be managed in one browser context',
  { tag: ['@framework', '@context'] },
  async ({ context, page }) => {
    await page.goto(appUrl);

    const secondPage = await context.newPage();
    await secondPage.goto(appUrl);

    expect(context.pages()).toHaveLength(2);
    await secondPage.close();
  },
);
