import { test, expect } from '../../fixtures/testFixtures';
import { users } from '../../test-data/users';

test.describe('Login', () => {
  test.describe.configure({ mode: 'parallel' });

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test(
    'valid user can log in and add an item to cart',
    { tag: ['@smoke', '@regression', '@ui'] },
    async ({ loginPage, inventoryPage, workerIdentity }) => {
      await test.step('Log in with a valid user', async () => {
        await loginPage.login(users.standard.username, users.standard.password);
        await loginPage.verifyLoginSucceeded();
      });

      await test.step('Verify inventory and add an item', async () => {
        await inventoryPage.verifyLoaded();
        await inventoryPage.addFirstItemToCart();
        await inventoryPage.verifyCartCount(1);
      });

      expect(workerIdentity).toContain('worker-');
    },
  );

  test(
    'invalid user receives an error message',
    { tag: ['@regression', '@negative', '@ui'] },
    async ({ loginPage }) => {
      await loginPage.login(users.invalid.username, users.invalid.password);

      await expect.soft(loginPage.errorMessage).toBeVisible();
      await loginPage.verifyError('Username and password do not match');
    },
  );
});
