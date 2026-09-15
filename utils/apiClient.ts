import { APIRequestContext, expect } from '@playwright/test';

export class ApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async get(path: string) {
    const response = await this.request.get(path);
    expect(response.ok()).toBeTruthy();
    return response;
  }

  async post(path: string, data: unknown) {
    const response = await this.request.post(path, { data });
    expect(response.ok()).toBeTruthy();
    return response;
  }

  async put(path: string, data: unknown) {
    const response = await this.request.put(path, { data });
    expect(response.ok()).toBeTruthy();
    return response;
  }

  async delete(path: string) {
    const response = await this.request.delete(path);
    expect(response.ok()).toBeTruthy();
    return response;
  }
}
