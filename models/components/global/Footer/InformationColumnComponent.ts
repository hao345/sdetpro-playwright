import { Locator } from "@playwright/test";
import FooterColumnComponent from "./FooterColumnComponent";

export default class InformationColumnComponent extends FooterColumnComponent{
    public static readonly LOCATOR = '.column.information'

    constructor (private component: Locator){
        super(component)
    }
}
