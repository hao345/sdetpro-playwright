import FooterColumnComponent from "../../models/components/global/Footer/FooterColumnComponent"
import FooterComponent from "../../models/components/global/Footer/FooterComponent";
import { Page } from "@playwright/test";
import HomePage from "../../models/pages/HomePage";
import { deepStrictEqual } from 'assert';

// Defines the step-by-step flow to verify different footer columns
// Prepares test data and delegates assertions to shared logic methods
// It uses methods from FooterComponent to access specific columns, and passes them into a reusable verification method below.
export default class FooterTestFlow {

    constructor(private page: Page) {
        this.page = page;
    }

    async verifyFooterComponent() {
        const homePage = new HomePage(this.page);
        const footerComponent = homePage.footerComponent();
        await this.verifyInformationColumnComponent(footerComponent);
        await this.verifyCustomerServiceColumnComponent(footerComponent);
        await this.verifyMyAccountColumnComponent(footerComponent);
        await this.verifyFollowUsColumnComponent(footerComponent);
    }

    // This method takes the whole footer, then grabs a specific column from it.
    // It passes that single column object into a generic verification method.
    async verifyInformationColumnComponent(footerComponent: FooterComponent) {
        const informationColumnComponent = footerComponent.infomationColumnComponent();
        const expectedTitle = 'INFORMATION';
        const expectedTexts = ['Sitemap', 'Shipping & Returns', 'Privacy Notice', 'Conditions of Use', 'About us', 'Contact us'];
        const expectedHrefs = ['/sitemap', '/shipping-returns', '/privacy-policy', '/conditions-of-use', '/about-us', '/contactus'];

        await this.verifyFooterColumnComponent(informationColumnComponent, expectedTitle, expectedTexts, expectedHrefs);
    }

    async verifyCustomerServiceColumnComponent(footerComponent: FooterComponent) {
        const customServiceComponent = footerComponent.customerServiceColumnComponent();
        const expectedTitle = 'CUSTOMER SERVICE';
        const expectedTexts = ['Search', 'News', 'Blog', 'Recently viewed products', 'Compare products list', 'New products'];
        const expectedHrefs = ['/search', '/news', '/blog', '/recentlyviewedproducts', '/compareproducts', '/newproducts'];

        await this.verifyFooterColumnComponent(customServiceComponent, expectedTitle, expectedTexts, expectedHrefs);
    }

    async verifyMyAccountColumnComponent(footerComponent: FooterComponent) {
        const myAccountComponent = footerComponent.myAccountColumnComponent();
        const expectedTitle = 'MY ACCOUNT';
        const expectedTexts = ['My account', 'Orders', 'Addresses', 'Shopping cart', 'Wishlist'];
        const expectedHrefs = ['/customer/info', '/customer/orders', '/customer/addresses', '/cart', '/wishlist'];

        await this.verifyFooterColumnComponent(myAccountComponent, expectedTitle, expectedTexts, expectedHrefs);
    }

    async verifyFollowUsColumnComponent(footerComponent: FooterComponent) {
        const followUsComponent = footerComponent.followUsColumnComponent();
        const expectedTitle = 'FOLLOW US';
        const expectedTexts = ['Facebook', 'Twitter', 'RSS', 'YouTube', 'Google+'];
        const expectedHrefs = ['http://www.facebook.com/nopCommerce', 'https://twitter.com/nopCommerce', '/news/rss/1', 'http://www.youtube.com/user/nopCommerce', 'https://plus.google.com/+nopcommerce'];

        await this.verifyFooterColumnComponent(followUsComponent, expectedTitle, expectedTexts, expectedHrefs);
    }

    // This method receives ONE column (not whole footer), so the type must be FooterColumnComponent
    // Technically, we *could* pass a `FooterComponent` here if child columns inherited it.
    // If InformationColumnComponent does NOT extend FooterColumnComponent, we can either: Change the parameter type to InformationColumnComponent (less reusable)
    // Instead, we must write separate verification methods for each column,and use their specific types: InformationColumnComponent, CustomerServiceColumnComponent, etc.
    private async verifyFooterColumnComponent(footerColumnComponent: FooterColumnComponent, expectedTitle: string, expectedTexts: string[], expectedHrefs: string[]) {
        const actualTitle: string = await footerColumnComponent.getTitleText();
        const actualTexts: string[] = await footerColumnComponent.getLinkListTexts();
        const actualHrefs: string[] = await footerColumnComponent.getLinkLists();

        deepStrictEqual(actualTitle, expectedTitle,
            `Actual title and expected title is not the same
            Actual: ${actualTitle}
            Expected: ${expectedTitle}`);

        deepStrictEqual(actualTexts, expectedTexts,
            `Actual texts and expected texts is not the same
            Actual: ${actualTexts}
            Expected: ${expectedTexts}`);

        deepStrictEqual(actualHrefs, expectedHrefs,
            `Actual hrefs and expected hrefs is not the same
            Actual: ${actualHrefs}
            Expected: ${expectedHrefs}`);
    }
}
