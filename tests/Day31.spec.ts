import { Page, test } from '@playwright/test'
import HomePage from '../models/pages/HomePage'

// Test: Extract all product titles and prices from the homepage using POM
test('POM - Component in parent Components', async ({ page }) => {
    await page.goto('/');
    // Create an instance of the HomePage object
    const homePage = new HomePage(page);
    // Get all product items inside the page body
    const productItemComponent = homePage.pageBodyComponent();
    const productItemCompList = await productItemComponent.productItemComponentList()
    for (const productItem of productItemCompList) {
        const productTitle = await productItem.getProductTitle();
        const productPrice = await productItem.getPriceTitle();
        console.log(`Product title: ${productTitle} and Product Price: ${productPrice}`);
    }
});

// ✅ Page Object Structure Summary:

// 1. HomePage.ts represents the entire page.

// 2. FooterComponent.ts represents the footer section of the page.

// 3. InformationColumnComponent and CustomServiceColumnComponent represent individual columns in the footer.
//    - If the order of the columns changes or a new column is added (e.g. MyAccountColumn),
//      simply create a new child class that extends FooterColumnComponent to represent it.

// 4. FooterColumnComponent is the base component that holds common selectors and shared logic between footer columns.
//    - If the footer columns share more behaviors in the future (e.g. getPrice, getRating),
//      just update this base class and all child components will inherit the changes.
test('POM - Reusing Base Component', async ({ page }) => {
    await page.goto('/');
    const homePage = new HomePage(page);
    const footerComponent = homePage.footerComponent();
    const infomationColumnComp = footerComponent.infomationColumnComponent();
    const custerServiceColumnComp = footerComponent.customerServiceColumnComponent();
    const myAccountColumnComp = footerComponent.myAccountColumnComponent();
    const infomationColumnText = await infomationColumnComp.getTitleTest();
    const infomationColumnLink = await infomationColumnComp.getLinkList();
    console.log(`Text is ${infomationColumnText} and Link include [${infomationColumnLink}]`);
    const customServiceColumnText = await custerServiceColumnComp.getTitleTest();
    const customServiceColumnLink = await custerServiceColumnComp.getLinkList();
    console.log(`Text is ${customServiceColumnText} and Link include [${customServiceColumnLink}]`);
    const myAccountColumnText = await myAccountColumnComp.getTitleTest();
    const myAccountColumnLink = await myAccountColumnComp.getLinkList();
    console.log(`Text is ${myAccountColumnText} and Link include [${myAccountColumnLink}]`);
});
