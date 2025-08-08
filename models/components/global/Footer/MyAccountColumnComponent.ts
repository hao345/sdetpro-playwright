import { Locator } from "@playwright/test";
import FooterColumnComponent from "./FooterColumnComponent";

// Represent individual footer columns
// Only define their unique locator (e.g., '.column.information')
// Inherit shared logic from FooterColumnComponent

export default class MyAccountColumnComponent extends FooterColumnComponent {
    public static readonly LOCATOR = '.column.my-account';

    constructor(component: Locator) {
        super(component);
    }
}
