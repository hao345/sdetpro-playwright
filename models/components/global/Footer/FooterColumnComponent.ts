import { Locator } from "@playwright/test";

/* This component doesn't define a specific locator.
It only keeps common selectors that can be reused.
The actual locator will be added when extending or using this component. */
export default class FooterColumnComponent {
    protected component: Locator;
    private titleSelector = 'h3';
    private linkSelector = 'li a';

    constructor(component: Locator) {
        this.component = component;
    }

    public async getTitleTest(): Promise<string> {
        return await this.component.locator(this.titleSelector).innerText();
    }

    public async getLinkList(): Promise<string[]> {
        const linkListTexts: string[] = []
        const linkList = await this.component.locator(this.linkSelector).all();
        //Method 1
        for (const link of linkList) {
            const linkText = await link.innerText();
            linkListTexts.push(linkText);
        }
        //Method 2
        /* return Promise.all(linkList.map(link => link.innerText()));*/
        return linkListTexts;
    }
}
