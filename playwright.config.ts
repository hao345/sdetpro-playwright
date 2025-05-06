import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
    testDir: './tests',
    projects: [
        {
            name: 'Chromium',
            use: { ...devices['Desktop Chrome'] }
        },
        {
            name: 'Webkit',
            use: { ...devices['Desktop Safari'] }
        }
    ],
    use: {
        headless: false,
        baseURL: 'https://the-internet.herokuapp.com/',
        actionTimeout: 5000
    }
})