import { test, expect } from '../../fixtures/testFixtures';

test(
  'authenticated project reuses saved login state',
  { tag: ['@smoke', '@authenticated', '@storageState'] },
  async ({ page }) => {
    await page.goto('/inventory.html');

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
    await expect(page.locator('.inventory_item').first()).toBeVisible();
  },
);
