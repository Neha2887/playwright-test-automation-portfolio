import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ApiClient } from '../utils/apiClient';

type TestFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  apiClient: ApiClient;
  attachWorkerMetadata: void;
};

type WorkerFixtures = {
  workerIdentity: string;
};

export const test = base.extend<TestFixtures, WorkerFixtures>({
  workerIdentity: [
    async ({}, use, workerInfo) => {
      const identity =
        'worker-' +
        workerInfo.workerIndex +
        '-parallel-' +
        workerInfo.parallelIndex;
      await use(identity);
    },
    { scope: 'worker' },
  ],

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  apiClient: async ({ request }, use) => {
    await use(new ApiClient(request));
  },

  attachWorkerMetadata: [
    async ({ workerIdentity }, use, testInfo) => {
      testInfo.annotations.push({
        type: 'worker',
        description: workerIdentity,
      });
      await use();
      await testInfo.attach('worker-metadata', {
        body: Buffer.from(workerIdentity),
        contentType: 'text/plain',
      });
    },
    { auto: true },
  ],
});

export { expect } from '@playwright/test';
