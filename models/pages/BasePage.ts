import { Page } from "@playwright/test";
import FooterComponent from "../components/global/Footer/FooterComponent";

// 🔰 BasePage.ts
// This is the base class for all page objects (e.g., HomePage, ProductPage, etc.).
// Purpose:
// - To hold common components such as footerComponent(), headerComponent(), etc.
// - Promotes code reuse by avoiding duplicate code across individual page classes
// - If a shared selector like footer changes, we only need to update it here
// - Follows DRY principle (Don't Repeat Yourself) and Object-Oriented Design (OOP)
// Example: HomePage extends BasePage will automatically inherit footerComponent()

export default class BasePage {
    public page: Page;
    constructor(page: Page) {
        this.page = page
    }

    footerComponent(): FooterComponent {
        return new FooterComponent(this.page.locator(FooterComponent.LOCATOR))
    }
}
