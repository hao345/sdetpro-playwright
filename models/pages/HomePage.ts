import { Page } from "@playwright/test";

export default class HomePage {
    constructor(private page: Page) {
        this.page = page
    }
}