import { Locator } from "@playwright/test";
import InformationColumnComponent from "./InformationColumnComponent";
import CustomServiceColumnComponent from "./CustomServiceColumnComponent";
import MyAccountColumnComponent from "./MyAccountColumnComponent";

// Represents the entire <footer> section of the page
// Provides methods to access each footer column component (Information, Customer Service, etc.)
// Each method returns a component that represents ONE specific column.

export default class FooterComponent {
    public static readonly LOCATOR = '.footer';
    constructor(private component: Locator) {
        this.component = component;
    }

    // This method returns a column (not the whole footer).
    // The returned object can be passed to verification methods that expect a single column.
    public infomationColumnComponent(): InformationColumnComponent{
        return new InformationColumnComponent(this.component.locator(InformationColumnComponent.LOCATOR));
    }

    // Same as above, this gets the Customer Service column specifically
    public customerServiceColumnComponent():CustomServiceColumnComponent{
        return new CustomServiceColumnComponent(this.component.locator(CustomServiceColumnComponent.LOCATOR));
    }

    public myAccountColumnComponent(): MyAccountColumnComponent{
        return new MyAccountColumnComponent(this.component.locator(MyAccountColumnComponent.LOCATOR));
    }

    public async powerByText(): Promise<string> {
        return await this.component.locator('.footer-poweredby').innerText();
    }
}
