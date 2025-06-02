import { Page } from "@playwright/test";
import FooterComponent from "../components/global/FooterComponent";
import ProductItemComponent from "../components/ProductItemComponent";

export default class HomePage {
    constructor(private page: Page) {
        this.page = page
    }

    footerComponent(): FooterComponent {
        return new FooterComponent(this.page.locator(FooterComponent.LOCATOR))
    }

    async productItemComponentList(): Promise<ProductItemComponent[]>{
        const productItemCompList = await this.page.locator(ProductItemComponent.LOCATOR).all();
        return productItemCompList.map(locator => new ProductItemComponent(locator));
    }
}
