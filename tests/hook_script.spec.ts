import { test, expect } from '@playwright/test'

test.describe('navigation', () => {

    test.beforeEach(async ({ page }) => {

        // Go to the starting url before each test.n
        await page.goto('https://playwright.dev/')
    });

    test('main navigation', async ({ page }) => {

        // Assertions use the expect API.
        await expect(page).toHaveURL('https://playwright.dev/');
    });

    test('page title', async ({ page }) => {
        // Expect a title to contain a substring
        await expect(page).toHaveTitle(/Playwright/);
    });

    test('Get page link', async ({ page }) => {
        // Click the get started link.
        await page.getByRole('link', { name: 'Get started' }).click();

        // Expects page to have a heading with the name of Installation.
        await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });

});
