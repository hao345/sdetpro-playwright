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

    //Fine all the figures locator
    const allFigureLoc = await page.locator('.figure').all();

    //Loop over all figures element
    for (const figureLocator of allFigureLoc) {
        //Scope down searching elements
        const imgLoc = figureLocator.locator("img")
        const userNameLoc = figureLocator.locator("h5")
        const hyperLinkLoc = figureLocator.locator("a")

        //Before mouse hover
        let usernameText = await userNameLoc.textContent();
        console.log(`Before mouse hover username: ${usernameText}`)
        let isUserNameVisible = await userNameLoc.isVisible();
        let isHyperLinkVisible = await hyperLinkLoc.isVisible();
        console.log(`Before mouse hover isUserNameVisible: ${isUserNameVisible}`);
        console.log(`Before mouse hover isHyperLinkVisible: ${isHyperLinkVisible}`);

        //Mouse Hover
        await imgLoc.hover();
        await page.waitForTimeout(2000);

        //After mouse hover
        usernameText = await userNameLoc.textContent();
        console.log(`After mouse hover username: ${usernameText}`)
        isUserNameVisible = await userNameLoc.isVisible();
        isHyperLinkVisible = await hyperLinkLoc.isVisible();
        console.log(`After mouse hover isUserNameVisible: ${isUserNameVisible}`);
        console.log(`After mouse hover isHyperLinkVisible: ${isHyperLinkVisible}`);
    }
})

test('Checking element states and handle dynamic control', async ({ page }) => {
    await page.goto('/dynamic_controls');

    //Find all parent components
    const checkboxComponent = page.locator('#checkbox-example');
    const inputComponent = page.locator('#input-example');

    //Interact with checkbox component's element
    const checkboxLoc = checkboxComponent.locator('#checkbox input')
    let isCheckboxEnabled = await checkboxLoc.isEnabled();
    let isCheckboxChecked = await checkboxLoc.isChecked();
    if (!isCheckboxChecked) {
        await checkboxLoc.click();
    }
    await page.waitForTimeout(2000);

    const removeBtnLoc = checkboxComponent.locator('button');
    await removeBtnLoc.click();
    await page.waitForSelector('#checkbox-example #checkbox input', { state: 'hidden' });

    //Interact with input component's element


})
