
import {Page,Locator, expect} from "@playwright/test";

export class BasePage{
    protected page:Page; //this del constructor hacer referencia a este atributo PAGE

    constructor(page:Page){
        this.page=page;
    }

    async clickElement(locator:Locator):Promise<void>{
        await locator.click();
    }

    async fillData(locator:Locator,data:string|number){
        await locator.fill(String(data));
    }

    async elementIsVisible(locator:Locator):Promise <void>{
        await expect(locator).toBeVisible();
    }

    async validateText(locator:Locator, texto:string):Promise <void>{
        await expect(locator).toHaveText(texto)
    }


    
}