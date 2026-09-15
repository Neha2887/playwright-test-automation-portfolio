import { test } from '../../fixtures/testFixtures';
import { users } from '../../test-data/users';
import { checkoutCustomer } from '../../test-data/checkout';

test(
  'user completes an end-to-end checkout',
  { tag: ['@smoke', '@regression', '@e2e', '@ui'] },
  async ({ loginPage, inventoryPage, cartPage, checkoutPage }) => {
    await test.step('Authenticate', async () => {
      await loginPage.goto();
      await loginPage.login(users.standard.username, users.standard.password);
      await loginPage.verifyLoginSucceeded();
    });

    await test.step('Add product and open cart', async () => {
      await inventoryPage.addFirstItemToCart();
      await inventoryPage.verifyCartCount(1);
      await inventoryPage.openCart();
      await cartPage.verifyItemPresent();
    });

    await test.step('Complete checkout', async () => {
      await cartPage.checkout();
      await checkoutPage.enterCustomerInformation(
        checkoutCustomer.firstName,
        checkoutCustomer.lastName,
        checkoutCustomer.postalCode,
      );
      await checkoutPage.finishOrder();
      await checkoutPage.verifyOrderComplete();
    });
  },
);
