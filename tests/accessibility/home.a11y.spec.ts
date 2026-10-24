import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('landing page has no critical accessibility violations @a11y', async ({ page }) => {
  await page.goto('/index.html', { waitUntil: 'domcontentloaded' });
  const results = await new AxeBuilder({ page }).analyze();
  const critical = results.violations.filter(v => v.impact === 'critical');
  expect(critical, JSON.stringify(critical, null, 2)).toEqual([]);
});
