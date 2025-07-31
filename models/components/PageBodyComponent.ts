import { Locator } from "@playwright/test";
import ProductItemComponent from "./ProductItemComponent";

// PageBodyComponent represents the main content section inside the homepage.
// It contains a list of product items displayed on the UI.
export default class PageBodyComponent {
    // Locator that identifies the page body container
    public static readonly LOCATOR = '.page-body';

    constructor(private component: Locator) {
        this.component = component;
    }

    // Returns a list of ProductItemComponent instances found inside the page body.
    async productItemComponentList(): Promise<ProductItemComponent[]> {
        const productItemCompList = await this.component.locator(ProductItemComponent.LOCATOR).all();
        return productItemCompList.map(locator => new ProductItemComponent(locator));
    }
}
