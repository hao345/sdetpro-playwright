import { Locator } from "@playwright/test";

export default class HeaderLogo {
    public static readonly LOCATOR = '.header-logo';

    constructor (public component : Locator){
        this.component = component;
    }
}
