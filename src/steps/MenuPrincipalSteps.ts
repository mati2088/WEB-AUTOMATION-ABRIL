import { BaseSteps} from "./BaseSteps";
import { Page } from "@playwright/test";
import { MenuPrincipalPage } from "../pages/MenuPrincipalPage";

export class MenuPrincipalSteps extends BaseSteps {

    protected menuPrincipalPage:MenuPrincipalPage;

    constructor(page: Page) {
        super(page);
        this.menuPrincipalPage = new MenuPrincipalPage(page);
    }

    //metodos para validar el test

    async validarMenuPrincipal():Promise<void>{
         this.menuPrincipalPage.validarSeccionInicio();
         this.menuPrincipalPage.validarSeccionPagoServicios()
         this.menuPrincipalPage.validarSeccionPlazosFijos()
         this.menuPrincipalPage.validarSeccionPrestamos()
         this.menuPrincipalPage.validarSeccionTransferencias()
    }

    async generarTarjetaVirtual():Promise<void>{
        this.menuPrincipalPage.clickSeccionTarjetaVirtual();
    }

}