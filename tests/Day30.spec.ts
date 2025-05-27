import { Page, test } from '@playwright/test'
import LoginPageMethod1 from '../models/pages/LoginpageMethod1'
import { LoginCreds } from '../types/DataType'
import LoginPageMethod2 from '../models/pages/LoginpageMethod2'

const loginCreds: LoginCreds = {
    username: 'tomsmith',
    password: 'SuperSecretPassword!'
}

test.describe('Day 30 - Page Object Model - Approach 1', () => {
    test('Login Test', async ({ page }) => {
        const loginPage = new LoginPageMethod1(page);
        await page.goto('/login');
        await loginPage.fillLogInForm(loginCreds);
    })
})

test.describe('Day 30 - Page Object Model - Approach 2', () => {
    test('Login Test', async ({ page }) => {
        const loginPage = new LoginPageMethod2(page);
        await page.goto('/login');
        await loginPage.username().fill(loginCreds.username);
        await loginPage.password().fill(loginCreds.password);
        await loginPage.loginBtn().click();
    })
})

test.describe('Day 30 - Page Object Model - Approach 3', () => {
})