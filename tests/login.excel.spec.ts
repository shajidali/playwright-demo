import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { readExcel } from '../utils/excelReader'

const testdata = readExcel('test-data/loginData.xlsx', 'Sheet1');

test.describe('Login Tests', () => {

    for (const data of testdata as any[]) {
        if (data.run !== 'yes') continue;

        test('Login test for ${data.username}', async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.gotoLoginPage();
            await loginPage.login(data.username, data.password)

            if (data.expected === 'success') {
                await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
            } else {
                await expect(loginPage.errorMessage).toBeVisible();
            }
        });
    }

});