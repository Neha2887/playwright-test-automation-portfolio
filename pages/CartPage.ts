import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;

  constructor(private readonly page: Page) {
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.getByTestId('checkout');
  }

  async verifyItemPresent() {
    await expect(this.cartItems.first()).toBeVisible();
  }

  async checkout() {
    await this.checkoutButton.click();
    await expect(this.page).toHaveURL(/checkout-step-one/);
  }
}
