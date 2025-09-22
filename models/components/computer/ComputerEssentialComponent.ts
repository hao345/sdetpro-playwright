import { Locator } from "@playwright/test";
import ProductEssentialComponent from "../ProductEssentialComponent";

export abstract class ComputerEssentialComponent extends ProductEssentialComponent {
    constructor(protected component: Locator) {
        super(component);
    }

    public abstract selectRam(value: string);

    protected async selectComputerOption(type: string) {
        const selectValue = `//label[contains(text(), "${type}")]`;
        await this.component.locator(selectValue).first().click();
    }
}
