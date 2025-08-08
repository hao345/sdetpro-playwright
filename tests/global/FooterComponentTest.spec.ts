import test from "@playwright/test";
import FooterTestFlow from "../../test_flows/global/FooterTestFow";

// Data-Driven
//Is a concept to reuse or loop over a suite of test data for a test logic
const PAGES = [
    { pageName: 'Home Page', slug: '/' },
    { pageName: 'Login Page', slug: '/login' },
    { pageName: 'Register Page', slug: '/register' },
];

/* Main test script to verify the footer component using Playwright.*/
// Follow top-down structure:
// Start from the main page (HomePage) → access big components (e.g., FooterComponent)
// → drill into sub-components (e.g., InformationColumnComponent) → then into DOM elements.

PAGES.forEach(page => {
    const { pageName, slug } = page
    test(`Verify Footer Component ${pageName}`, async ({ page }) => {
        await page.goto(slug);
        const footerTestFlow = new FooterTestFlow(page);
        await footerTestFlow.verifyFooterComponent();
    })
})
