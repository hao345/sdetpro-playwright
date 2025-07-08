import test from "@playwright/test";
import FooterTestFlow from "../../test_flows/global/FooterTestFow";

/* Main test script to verify the footer component using Playwright.*/
test('Verify Footer Component', async ({ page }) => {
    const footerTestFlow = new FooterTestFlow(page);
    await footerTestFlow.verifyFooterComponent();
})
