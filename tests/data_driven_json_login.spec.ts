import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import loginData from '../test-data/loginData.json'

test('valid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login(
        loginData.valid_user.username,
        loginData.valid_user.password
    );

    //Verify login success
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');
});

test('invalid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login(
        loginData.invalid_user.username,
        loginData.invalid_user.password

    );

    //verify login error message
    await expect(loginPage.errorMessage).toBeVisible();

});