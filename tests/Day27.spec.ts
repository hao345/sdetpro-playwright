import { test } from '@playwright/test'

test('Link Text - XPATH', async ({ page }) => {
    await page.goto('/');

    const footerLoc = await page.waitForSelector("//a[contains(text(),'Elemental Selenium')]",{timeout: 5000});
    await footerLoc.click();

    //DEBUG PURPOSE ONLY
    await page.waitForTimeout(5000);
})

test('Link Text - CSS', async ({ page }) => {
    await page.goto('/');

    const footerLoc = await page.waitForSelector("a:has-text('Elemental Selenium')",{timeout: 5000});
    await footerLoc.click();

    //DEBUG PURPOSE ONLY
    await page.waitForTimeout(5000);
})