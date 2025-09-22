import { Locator } from "@playwright/test";
import { ComputerEssentialComponent } from "./ComputerEssentialComponent";

export default class StandardComputerComponent extends ComputerEssentialComponent {
    // Selector to find all dropdowns whose id starts with "product_attribute"
    private allDropdownSelector: string = `$$('select[id^="product_attribute"]')`;

    constructor(protected component: Locator) {
        super(component);
    }

    // Method to select PROCESSSOR from the dropdown
    public async selectProcessor(value: string) {
        // Define the index of the PROCESSOR dropdown (PROCESSOR is assumed to be the 1st dropdown => index = 0)
        const PROCESSOR_DROPDOWN_INDEX = 0;
        // Find all dropdowns inside the current component
        // Then pick the dropdown at the PROCESSOR index
        const processorDropdown: Locator = await this.component.locator(this.allDropdownSelector).all()[PROCESSOR_DROPDOWN_INDEX];
    }

    // Method to select RAM from the dropdown
    public async selectRam(value: string) {
        // Define the index of the RAM dropdown (RAM is assumed to be the 2nd dropdown => index = 1)
        const RAM_DROPDOWN_INDEX = 1;
        // Find all dropdowns inside the current component
        // Then pick the dropdown at the RAM index
        const ramDropdow: Locator = await this.component.locator(this.allDropdownSelector).all()[RAM_DROPDOWN_INDEX];
        // Get all <option> elements inside the RAM dropdown
        const allOptionLocator: Locator[] = await ramDropdow.locator('option').all();
        // Initialize the index of the option to -1 (meaning: "not found yet")
        let optionIndex: number = -1;
        // Temporary variable to hold the full text of the current option in the loop
        // Default = '' (empty string), type is string | null because textContent() might return null
        let optionFullText: string | null = '';

        for (const optionLocator of allOptionLocator) {
            optionFullText = await optionLocator.innerText();
            // Check if the text of the option starts with the input value (partial match at the beginning)
            if (optionFullText?.startsWith(value)) {
                // If found, save the index of this option
                optionIndex = allOptionLocator.indexOf(optionLocator)
                break;
            }
        }
        // If no option matched (index is still -1), throw an error
        if (optionIndex === -1) {
            throw new Error(`There is no matching option for ${value}`)
        }
        await ramDropdow.selectOption({ index: optionIndex });
    }
}