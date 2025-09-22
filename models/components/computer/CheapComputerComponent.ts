import { Locator } from "@playwright/test";
import { ComputerEssentialComponent } from "./ComputerEssentialComponent";

export default class CheapComputerComponent extends ComputerEssentialComponent {

    constructor(protected component: Locator) {
        super(component)
    }

    public async selectRam(value: string) {
        await this.selectComputerOption(value);
    }
}