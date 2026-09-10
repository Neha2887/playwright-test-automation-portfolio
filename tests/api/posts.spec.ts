import { expect, test } from '@playwright/test';
import { ApiClient } from '../../utils/apiClient';

const apiBaseUrl = process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com';

test.describe('Posts API', () => {
  test('GET returns post details', async ({ request }) => {
    const api = new ApiClient(request);
    const response = await api.get(`${apiBaseUrl}/posts/1`);
    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.title).toBeTruthy();
  });

  test('POST creates a new post', async ({ request }) => {
    const api = new ApiClient(request);
    const response = await api.post(`${apiBaseUrl}/posts`, {
      title: 'Playwright API test',
      body: 'Created by automated test',
      userId: 1
    });
    const body = await response.json();

    expect(response.status()).toBe(201);
    expect(body.title).toBe('Playwright API test');
  });
});
