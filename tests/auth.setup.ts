import { test as setup, expect } from '@playwright/test';
import fs from 'fs';

const authFile = 'playwright/.auth/user.json';

setup('authenticate standard user', async ({ page }) => {
  fs.mkdirSync('playwright/.auth', { recursive: true });

  await page.goto('/');
  await page.getByTestId('username').fill(
    process.env.STANDARD_USER || 'standard_user',
  );
  await page.getByTestId('password').fill(
    process.env.STANDARD_PASSWORD || 'secret_sauce',
  );
  await page.getByTestId('login-button').click();

  await expect(page).toHaveURL(/inventory/);
  await page.context().storageState({ path: authFile });
});
