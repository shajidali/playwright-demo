import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('navigation', { name: 'Main' })).toBeVisible();

  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('navigation', { name: 'Docs sidebar' })).toBeVisible();

  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'First testDirect link to' })).toBeVisible();

  await page.getByRole('link', { name: 'How to write the first test' }).click();
});