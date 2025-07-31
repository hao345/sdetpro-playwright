import { Page } from "@playwright/test";

export default class HeaderComponent {
    constructor (public page: Page){
        this.page = page;
    }
}
