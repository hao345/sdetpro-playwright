import { Page, test } from '@playwright/test'
import HomePage from '../models/pages/HomePage'


test('POM - List of Components', async ({ page }) => {
    await page.goto('/');
    const homePage = new HomePage(page);
    const productItemCompList = await homePage.productItemComponentList()
    for (const productItem of productItemCompList) {
        const productTitle = await productItem.getProductTitle();
        const productPrice = await productItem.getPriceTitle();
        console.log(`Product Title: ${productTitle} and Product Price: ${productPrice}`);
    }
});
