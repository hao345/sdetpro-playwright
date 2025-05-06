import { test } from '@playwright/test'

test('Link Text - XPATH', async ({ page }) => {
    await page.goto('/');

    const footerLoc = await page.waitForSelector("//a[contains(text(),'Elemental Selenium')]", { timeout: 5000 });
    await footerLoc.click();
})

test('Link Text - CSS', async ({ page }) => {
    await page.goto('/');

    const footerLoc = await page.waitForSelector("a:has-text('Elemental Selenium')", { timeout: 5000 });
    await footerLoc.click();
})

test('Link Text - Filtering', async ({ page }) => {
    await page.goto('/')

    const footerLoc = page.locator('a').filter({ hasText: 'Form Authentication' });
    footerLoc.click();
})

test('Hanle multiple matching', async ({ page }) => {
    await page.goto('/')

    const items = page.locator('a')
    const matchItemNumber = await items.count();
    console.log(`Total Number: ${matchItemNumber}`)

    //Interact on specific index item
    //await items.nth(2).click();

    //Interact on firsr item
    //await items.first().click({ force: true });

    //Interact on last item
    await items.last().click();
})

test('Fill form authen', async ({ page }) => {
    await page.goto('/')

    const formAuthenLink = page.locator('a').filter({ hasText: 'Form Authentication' });
    await formAuthenLink.click();

    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('button:has-text("Login")').click()

    //Get the heading text on dashboard page
    const dashboardHeadingLoc = 'h2';
    let textContent = await page.locator(dashboardHeadingLoc).textContent();
    console.log(textContent)

    let innerText = await page.locator(dashboardHeadingLoc).innerText();
    console.log(innerText)
})
