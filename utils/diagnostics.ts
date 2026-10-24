import type { Page, TestInfo } from '@playwright/test';

export function capturePageErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  return errors;
}

export async function attachDiagnostics(info: TestInfo, errors: string[]): Promise<void> {
  await info.attach('page-errors', {
    body: Buffer.from(errors.join('\n') || 'No page errors captured'),
    contentType: 'text/plain',
  });
}
