import test from "@playwright/test";
import FooterTestFlow from "../../test_flows/global/FooterTestFow";

/* Main test script to verify the footer component using Playwright.*/

// ✅ Follow top-down structure:
// Start from the main page (HomePage) → access big components (e.g., FooterComponent)
// → drill into sub-components (e.g., InformationColumnComponent) → then into DOM elements.
test('Verify Footer Component', async ({ page }) => {
    const footerTestFlow = new FooterTestFlow(page);
    await footerTestFlow.verifyFooterComponent();
})
