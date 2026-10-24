import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test.describe('Math Fun AI Tutor public landing page @smoke', () => {
  test('loads a visible document with a nonempty title', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await home.expectDocumentReady();
  });

  test('remains available after a browser reload', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await page.reload({ waitUntil: 'domcontentloaded' });
    await home.expectDocumentReady();
    expect(new URL(page.url()).origin).toBe(new URL(test.info().project.use.baseURL as string).origin);
  });
});
