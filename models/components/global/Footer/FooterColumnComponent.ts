import { Locator } from "@playwright/test";

/* This component doesn't define a specific locator.
It only keeps common selectors that can be reused.
The actual locator will be added when extending or using this component. */

// Base class that contains common logic for all footer columns
// Includes reusable methods like: getLinkList(), getTitleText(), getLinkElements()
// Easy to extend for more verifications (e.g., check for images, icons, etc.)

export default class FooterColumnComponent {
    protected component: Locator;
    private titleSelector = 'h3';
    private linkSelector = 'li a';

    constructor(component: Locator) {
        this.component = component;
    }

    //Get the title Text
    public async getTitleText(): Promise<string> {
        return await this.component.locator(this.titleSelector).innerText();
    }

    //Get the text of the link
    public async getLinkListTexts(): Promise<string[]> {
        const linkListTexts: string[] = [];
        const linkList = await this.component.locator(this.linkSelector).all()
        //Method 1
        for (const link of linkList) {
            const linkText = await link.textContent();
            linkListTexts.push(linkText || '');
        }
        //Method 2
        /* return Promise.all(linkList.map(link => link.innerText()));*/
        return linkListTexts;
    }

    //Get the list of the link
    public async getLinkLists(): Promise<string[]> {
        const hrefList :string[] = [];
        const linkList = await this.component.locator(this.linkSelector).all()
        for(const link of linkList){
            const href = await link.getAttribute('href');
            hrefList.push(href || '');
        }
        return hrefList;
    }
}
