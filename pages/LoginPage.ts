import { expect, Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  readonly username = this.page.locator('[data-test="username"]');
  readonly password = this.page.locator('[data-test="password"]');
  readonly loginButton = this.page.locator('[data-test="login-button"]');
  readonly errorMessage = this.page.locator('[data-test="error"]');

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginSucceeded() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async verifyError(message: string) {
    await expect(this.errorMessage).toContainText(message);
  }
}
