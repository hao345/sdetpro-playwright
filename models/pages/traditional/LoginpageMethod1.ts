import { Page } from "@playwright/test";
import { LoginCreds } from "../../../types/DataType";

export default class LoginPageMethod1 {
    //Scope to declare selectors
    private usernameSelector: string = '#username';
    private passwordSelector: string = '#password';
    private loginButtonSelector: string = 'button[type="submit"]';

    //Constructor
    constructor(private page: Page) {
        this.page = page;
    }

    //Main interaction method
    public async fillLogInForm({ username, password }: LoginCreds): Promise<void> {
        await this.inputUsername(username);
        await this.inputPassword(password);
        await this.clickLoginBtn();
    }

    public async inputUsername(username: string): Promise<void> {
        await this.page.locator(this.usernameSelector).fill(username)
    }
    public async inputPassword(password: string): Promise<void> {
        await this.page.locator(this.passwordSelector).fill(password)
    }
    public async clickLoginBtn(): Promise<void> {
        await this.page.locator(this.loginButtonSelector).click();
    }
}
