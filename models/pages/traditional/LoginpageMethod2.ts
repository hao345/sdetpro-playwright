import { Locator, Page } from "@playwright/test";

export default class LoginPageMethod2 {
    //Scope to declare selectors
    private usernameSelector: string = '#username';
    private passwordSelector: string = '#password';
    private loginButtonSelector: string = 'button[type="submit"]';

    //Constructor
    constructor(private page: Page) {
        this.page = page;
    }

    public username(): Locator {
        return this.page.locator(this.usernameSelector);
    }
    public password(): Locator {
        return this.page.locator(this.passwordSelector);
    }
    public loginBtn(): Locator {
        return this.page.locator(this.loginButtonSelector);
    }
}