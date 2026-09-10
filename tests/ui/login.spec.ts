import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { users } from '../../test-data/users';

test.describe('Login', () => {
  test('valid user can log in and add an item to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await loginPage.verifyLoginSucceeded();
    await inventoryPage.verifyLoaded();
    await inventoryPage.addFirstItemToCart();
    await inventoryPage.verifyCartCount(1);
  });

  test('invalid user receives an error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.invalid.username, users.invalid.password);
    await loginPage.verifyError('Username and password do not match');
  });
});
