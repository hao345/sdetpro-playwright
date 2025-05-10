import { test } from '@playwright/test'

//Use with DOM tree select option, with the rest use Xpath or CSS selector 
test('Handle Dropdown', async ({ page }) => {
    await page.goto('/dropdown');
    const dropDownLoc = page.locator('#dropdown');

    //1. Select Option 1 - index
    await dropDownLoc.selectOption({ index: 1 });
    await page.waitForTimeout(2000)

    //2. Select Option 2 - Value
    await dropDownLoc.selectOption({ value: '2' });
    await page.waitForTimeout(2000);

    //3. Select Option 3 - Label/VisibleText 
    await dropDownLoc.selectOption({ label: 'Option 1' });
    await page.waitForTimeout(2000)
})

test('Handle Iframe', async ({ page }) => {
    await page.goto('/iframe');
    //CSS locator to detect first character
    const iFrameLoc = page.frameLocator('iframe[id^="mce"]');
    const textEditLocator = iFrameLoc.locator('body p')
    await textEditLocator.click({ force: true });
})

test('Handle Mouse Hover', async ({ page }) => {
    await page.goto('/hovers');
    //CSS locator to detect first character
   
})

