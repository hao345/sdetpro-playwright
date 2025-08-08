import { Page, test } from '@playwright/test'
import { LoginCreds } from '../types/DataType'
import LoginPageMethod1 from '../models/pages/traditional/LoginpageMethod1'
import LoginPageMethod2 from '../models/pages/traditional/LoginpageMethod2'
import HomePage from '../models/pages/HomePage'

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

//Component in page (Page contain Component, Component contain element inside)
test.describe('Day 30 - Page Object Model - Approach 3', () => {
    test('Home Page Test', async ({ page }) => {
        await page.goto('/login');
        const homePage = new HomePage(page);
        const footerComponent = homePage.footerComponent();
        const poweredByText = await footerComponent.powerByText();
        console.log('Powered by text:', poweredByText);
    })
})
