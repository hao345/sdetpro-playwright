import { Locator } from "@playwright/test";
import HeaderLogo from "./HeaderLogoComponent";

export default class HeaderComponent {
    public static readonly LOCATOR = '.header';

    constructor (public component: Locator){
        this.component = component;
    }

    public headerLogo(): HeaderLogo {
        return new HeaderLogo(this.component.locator(HeaderLogo.LOCATOR));
    }
}
