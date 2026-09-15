import { test, expect } from '../../fixtures/testFixtures';

test.describe('Posts API', () => {
  test.describe.configure({ mode: 'parallel' });

  test(
    'GET returns post details',
    { tag: ['@smoke', '@regression', '@api'] },
    async ({ apiClient }) => {
      const response = await apiClient.get('/posts/1');
      const body = await response.json();

      expect(response.status()).toBe(200);
      expect(body.id).toBe(1);
      expect(body.title).toBeTruthy();
    },
  );

  test(
    'POST creates a new post',
    { tag: ['@regression', '@api'] },
    async ({ apiClient }) => {
      const response = await apiClient.post('/posts', {
        title: 'Playwright API test',
        body: 'Created by automated test',
        userId: 1,
      });
      const body = await response.json();

      expect(response.status()).toBe(201);
      expect(body.title).toBe('Playwright API test');
    },
  );

  test(
    'PUT updates a post',
    { tag: ['@regression', '@api'] },
    async ({ apiClient }) => {
      const response = await apiClient.put('/posts/1', {
        id: 1,
        title: 'Updated by Playwright',
        body: 'Updated API payload',
        userId: 1,
      });
      const body = await response.json();

      expect(response.status()).toBe(200);
      expect(body.title).toBe('Updated by Playwright');
    },
  );

  test(
    'DELETE removes a post',
    { tag: ['@regression', '@api'] },
    async ({ apiClient }) => {
      const response = await apiClient.delete('/posts/1');
      expect(response.status()).toBe(200);
    },
  );
});
