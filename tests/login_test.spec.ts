import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'

test('valid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');

    //Verify login success
    await loginPage.verify_Login_Success();

});

test('invalid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('locked_out_user', 'secret_sauce');

    //verify login error message
    await expect(loginPage.errorMessage).toBeVisible();

});