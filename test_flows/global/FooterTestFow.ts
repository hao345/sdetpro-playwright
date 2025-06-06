import FooterColumnComponent from "../../models/components/global/Footer/FooterColumnComponent"
import FooterComponent from "../../models/components/global/Footer/FooterComponent";
import { Page } from "@playwright/test";
import HomePage from "../../models/pages/HomePage";

export default class FooterTestFlow {

    constructor(private page: Page) {
        this.page = page;
    }

    async verifyFooterComponent() {
        const homePage = new HomePage(this.page)
        const footerComponent = homePage.footerComponent();
        await this.verifyInformationColumnComponent(footerComponent)
        await this.verifyCustomerServiceColumnComponent(footerComponent)
        //await this.verifyMyAccountColumnComponent(footerComponent)
        /* await this.verifyFollowUsColumnComponent() */
    }

    async verifyInformationColumnComponent(footerComponent: FooterComponent) {
        const informationColumnComponent = footerComponent.infomationColumnComponent();
        const expectedTexts = ['About Us', 'Contact Us', 'Privacy Policy', 'Terms of Use'];
        const expectedHyperLink = ['/about-s', '/contact-us', '/privacy-policy', '/terms-of-use'];

        await this.verifyFooterColumnComponent(informationColumnComponent, expectedTexts, expectedHyperLink);
    }

    async verifyCustomerServiceColumnComponent(footerComponent: FooterComponent) {
        const customServiceComponent = footerComponent.customerServiceColumnComponent();
        const expectedTexts = ['About Us', 'Contact Us', 'Privacy Policy', 'Terms of Use'];
        const expectedHyperLink = ['/about-s', '/contact-us', '/privacy-policy', '/terms-of-use'];

        await this.verifyFooterColumnComponent(customServiceComponent, expectedTexts, expectedHyperLink);
    }

    private async verifyFooterColumnComponent(footerColumnComponent: FooterColumnComponent, expectedTexts: string[], expectedHyperLink: string[]) {
        //Logic to verify here
    }
}
