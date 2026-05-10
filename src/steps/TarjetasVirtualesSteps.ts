import { BaseSteps } from "./BaseSteps";
import { Page } from "@playwright/test";
import { TarjetasVirtualesPage } from "../pages/TarjetasVirtualesPage";

export class TarjetasVirtualesSteps extends BaseSteps {

    protected tarjetasVirtualesPage:TarjetasVirtualesPage;
   

    constructor(page: Page) {
        super(page);
        this.tarjetasVirtualesPage = new TarjetasVirtualesPage(page);
    }

    

    async generarTarjetaVirtual(){
        await this.clickSeccionTarjetaVirtual();
        await this.tarjetasVirtualesPage.clickGenerarTarjetaVirtual()
        await this.tarjetasVirtualesPage.validarTextoVisaDebit()
    }
    
    //metodos para validar el test
    


}