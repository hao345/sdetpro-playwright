import { Locator } from "@playwright/test";

export default class FooterComponent {
    constructor(private component: Locator){
        this.component = component;
    }
}