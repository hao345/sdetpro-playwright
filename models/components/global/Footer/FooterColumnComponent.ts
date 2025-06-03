import { Locator } from "@playwright/test";
import { link } from "fs";

export default class FooterColumnComponent {

    private titleSelector = 'h3';
    private linkSelector = 'li a';

    constructor(private component: Locator) {
        this.component = component;
    }

    async getTitleTest(): Promise<string> {
        return await this.component.locator(this.titleSelector).innerText();
    }

    async getLinkList(): Promise<string[]> {
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
