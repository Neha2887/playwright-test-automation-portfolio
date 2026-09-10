import { expect, Locator, Page } from '@playwright/test';

export class InventoryPage {
  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly cartBadge: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

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
