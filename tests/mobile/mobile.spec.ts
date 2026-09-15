import { test, expect } from '../../fixtures/testFixtures';

test(
  'login page is usable on an emulated mobile device',
  { tag: ['@smoke', '@mobile'] },
  async ({ page, loginPage }) => {
    await loginPage.goto();

    const viewport = page.viewportSize();
    expect(viewport).not.toBeNull();
    expect(viewport!.width).toBeLessThan(500);

    await expect(loginPage.username).toBeVisible();
    await expect(loginPage.password).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  },
);
