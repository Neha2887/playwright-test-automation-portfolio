import { test, expect } from '../../fixtures/testFixtures';

test(
  'network request is intercepted and mocked',
  { tag: ['@framework', '@network'] },
  async ({ page }) => {
    await page.route('**/posts/1', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: 1,
          title: 'Mocked by Playwright',
          body: 'Network interception example',
          userId: 99,
        }),
      });
    });

    const responsePromise = page.waitForResponse('**/posts/1');
    await page.goto('https://jsonplaceholder.typicode.com/posts/1');
    const response = await responsePromise;
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body.title).toBe('Mocked by Playwright');
    expect(body.userId).toBe(99);
  },
);
