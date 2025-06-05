import { Page, test } from '@playwright/test'
import HomePage from '../models/pages/HomePage'


test('POM - Component in parent Components', async ({ page }) => {
    await page.goto('/');
    const homePage = new HomePage(page);
    const productItemComponent = homePage.pageBodyComponent();
    const productItemCompList = await productItemComponent.productItemComponentList()
    for (const productItem of productItemCompList) {
        const productTitle = await productItem.getProductTitle();
        const productPrice = await productItem.getPriceTitle();
        console.log(`Product title: ${productTitle} and Product Price: ${productPrice}`);
    }
});

test('POM - Reusing Base Component', async ({ page }) => {
    await page.goto('/');
    const homePage = new HomePage(page);
    const footerComponent = homePage.footerComponent();
    const infomationColumnComp = footerComponent.infomationColumnComponent();
    const custerServiceColumnComp = footerComponent.customerServiceColumnComponent();
    const infomationColumnText = await infomationColumnComp.getTitleTest();
    console.log(infomationColumnText);
    const customServiceColumnText = await custerServiceColumnComp.getTitleTest();
    console.log(customServiceColumnText);
});
