import FooterColumnComponent from "../../models/components/global/Footer/FooterColumnComponent"
import FooterComponent from "../../models/components/global/Footer/FooterComponent";
import { Page } from "@playwright/test";
import HomePage from "../../models/pages/HomePage";

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
        await this.verifyInformationColumnComponent(footerComponent)
        await this.verifyCustomerServiceColumnComponent(footerComponent)
        //await this.verifyMyAccountColumnComponent(footerComponent)
        //await this.verifyFollowUsColumnComponent(footerComponent)
    }

    // This method takes the whole footer, then grabs a specific column from it.
    // It passes that single column object into a generic verification method.
    async verifyInformationColumnComponent(footerComponent: FooterComponent) {
        const informationColumnComponent = footerComponent.infomationColumnComponent();
        const expectedTexts = ['About Us', 'Contact Us', 'Privacy Policy', 'Terms of Use'];
        const expectedHrefs = ['/about-s', '/contact-us', '/privacy-policy', '/terms-of-use'];

        await this.verifyFooterColumnComponent(informationColumnComponent, expectedTexts, expectedHrefs);
    }

    async verifyCustomerServiceColumnComponent(footerComponent: FooterComponent) {
        const customServiceComponent = footerComponent.customerServiceColumnComponent();
        const expectedTexts = ['About Us', 'Contact Us', 'Privacy Policy', 'Terms of Use'];
        const expectedHrefs = ['/about-s', '/contact-us', '/privacy-policy', '/terms-of-use'];

        await this.verifyFooterColumnComponent(customServiceComponent, expectedTexts, expectedHrefs);
    }

    async verifyMyAccountColumnComponent(footerComponent: FooterComponent) {

    }

    // This method receives ONE column (not whole footer), so the type must be FooterColumnComponent
    // Technically, we *could* pass a `FooterComponent` here if child columns inherited it.
    // If InformationColumnComponent does NOT extend FooterColumnComponent, we can either: Change the parameter type to InformationColumnComponent (less reusable)
    // Instead, we must write separate verification methods for each column,and use their specific types: InformationColumnComponent, CustomerServiceColumnComponent, etc.
    private async verifyFooterColumnComponent(footerColumnComponent: FooterColumnComponent, expectedTexts: string[], expectedHrefs: string[]) {

    }
}
