import { Locator } from "@playwright/test";
import FooterColumnComponent from "./FooterColumnComponent";

/* In contrast, components that reuse this will typically do the opposite:
they will define only the specific locator,
while leaving the shared logic and selectors untouched. */
export default class InformationColumnComponent extends FooterColumnComponent{
    public static readonly LOCATOR = '.column.information'

    constructor (component: Locator){
        super(component)
    }
}
