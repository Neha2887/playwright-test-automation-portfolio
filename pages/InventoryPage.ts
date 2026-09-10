import { expect, Page } from '@playwright/test';

export class InventoryPage {
  constructor(private readonly page: Page) {}

  readonly title = this.page.locator('.title');
  readonly inventoryItems = this.page.locator('.inventory_item');
  readonly cartBadge = this.page.locator('.shopping_cart_badge');

  async verifyLoaded() {
    await expect(this.title).toHaveText('Products');
    await expect(this.inventoryItems.first()).toBeVisible();
  }

  async addFirstItemToCart() {
    await this.inventoryItems.first().getByRole('button', { name: /add to cart/i }).click();
  }

  async verifyCartCount(count: number) {
    await expect(this.cartBadge).toHaveText(String(count));
  }
}
