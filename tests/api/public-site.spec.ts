import { test, expect } from '@playwright/test';
import { testTargets } from '../../utils/testData';

test('public application entry point returns HTML @smoke @api', async ({ request }) => {
  const response = await request.get(testTargets.homePath);
  expect(response.ok(), `GET ${testTargets.homePath}: ${response.status()}`).toBeTruthy();
  expect(response.headers()['content-type'] ?? '').toContain('text/html');
  expect((await response.body()).length).toBeGreaterThan(0);
});
