import test from "@playwright/test";
import FooterTestFlow from "../../test_flows/global/FooterTestFow";

test('Verify Footer Component', async ({ page }) => {
    const footerTestFlow = new FooterTestFlow(page);
    await footerTestFlow.verifyFooterComponent();
})
