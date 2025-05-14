import { Page, test } from '@playwright/test'

test.describe('Handle Alert', () => {
    test('Handle JS Alert', async ({ page }) => {
        await page.goto('/javascript_alerts');
        const jsAlertLoc = page.locator('button[onclick="jsAlert()"]');

        //Must define event hanlder
        page.on('dialog', async dialog => {
            await dialog.accept();
        })

        //Trigger the JS alert 
        await jsAlertLoc.click();
        await page.waitForTimeout(2000);
    })

    test('Handle JS Confirm', async ({ page }) => {
        await page.goto('/javascript_alerts');
        const jsConfirmLoc = page.locator('button[onclick="jsConfirm()"]');

        //Must define event hanlder
        page.on('dialog', async dialog => {
            await dialog.dismiss();
        })

        //Trigger the JS Confirm 
        await jsConfirmLoc.click();
        await page.waitForTimeout(2000);
    })

    test('Handle JS Prompt', async ({ page }) => {
        await page.goto('/javascript_alerts');
        const jsPromptLoc = page.locator('button[onclick="jsPrompt()"]');
        const resultLoc = page.locator('#result')

        //Must define event hanlder
        page.on('dialog', async dialog => {
            await dialog.accept('123');
        })

        //Trigger the JS Prompt 
        await jsPromptLoc.click();
        await page.waitForTimeout(2000);

        //Get the result text
        const reusltText = await resultLoc.innerText();
        console.log(reusltText.split(':')[1].trim());
    })
})

test.describe('Excute JS snippet', () => {
    test('Excute without params', async ({ page }) => {
        await page.goto('/floating_menu');
        await scrollToBottom(page);

        await page.evaluate(() => {
            const elementToRemove = document.querySelectorAll('h3');
            elementToRemove.forEach(element => element.remove());
        })
    })

    //Excute with params and get return values
    test('Excute with params and get return value', async ({ page }) => {
        await page.goto('https://www.foodandwine.com');
        const adID = 'leaderboard-flex-1';
        const leaderBoardFlexLoc = `#${adID}`;
        //Scroll Down a little
        await page.mouse.wheel(0, 100);
        //Click on any blank area
        await page.mouse.click(0, 0);
        //Scroll up again
        await page.mouse.wheel(0, -100);
        await page.waitForSelector(leaderBoardFlexLoc, { timeout: 10000 });
        const adParam = await getAdsParam(page, adID)
        console.log(JSON.stringify(adParam));
    })
})

async function scrollToBottom(page: Page): Promise<void> {
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight)
    })
}

async function getAdsParam(page: Page, adSlotID: string): Promise<any> {
    //Using binding to provide arg for the callback function
    return await page.evaluate((adSlotID) => {
        window.scrollTo(0, document.body.scrollHeight);
        const slot = googletag.pubads().getSlots().find(({ getSlotElementId }) => getSlotElementId() === adSlotID);
        return slot.getTargetingMap();
    }, adSlotID)
}