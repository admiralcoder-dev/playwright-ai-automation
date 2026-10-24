import { expect, type Page } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await this.page.goto('/index.html', { waitUntil: 'domcontentloaded' });
  }

  async expectDocumentReady(): Promise<void> {
    await expect(this.page.locator('body')).toBeVisible();
    await expect.poll(() => this.page.title()).not.toBe('');
  }
}
