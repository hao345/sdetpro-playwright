import { Page } from "@playwright/test";
import FooterComponent from "../components/global/Footer/FooterComponent";

export default class BasePage {
    public page: Page;
    constructor(page: Page) {
        this.page = page
    }

    footerComponent(): FooterComponent {
        return new FooterComponent(this.page.locator(FooterComponent.LOCATOR))
    }
}
