
import { BasePage } from "./BasePage";
import { Page } from "@playwright/test";

export class MenuPrincipalPage extends BasePage{ //locators
 readonly tituloPanelPrincipal = this.page.getByRole('heading', { name: 'Panel Principal' })
   readonly seccionInicio = this.page.getByRole('listitem').filter({ hasText: 'Inicio' })
  readonly seccionTransferencias = this.page.getByRole('listitem').filter({ hasText: 'Transferencias' })
   readonly seccionPlazosFijos = this.page.getByRole('listitem').filter({ hasText: 'Plazos Fijos' })
    readonly seccionPrestamos = this.page.getByRole('listitem').filter({ hasText: 'Préstamos' })
  readonly seccionPagoServicios = this.page.getByRole('listitem').filter({ hasText: 'Pago de Servicios' })
    readonly seccionTarjetaVirtual = this.page.getByText('Tarjeta Virtual', { exact: true })


  //constructor
  constructor(page: Page) {
    super(page);
  }

  //metodos, acciones
  async validarTextoPanelPrincipal(){
    await this.elementIsVisible(this.tituloPanelPrincipal)
  }
  async validarSeccionTarjetaVirtul(){
    await this.elementIsVisible(this.seccionTarjetaVirtual)
  }

  async validarSeccionInicio(){
    await this.elementIsVisible(this.seccionInicio)
  }

  async validarSeccionTransferencias(){
    await this.elementIsVisible(this.seccionTransferencias)
  }

  async validarSeccionPlazosFijos(){
    await this.elementIsVisible(this.seccionPlazosFijos)
  }

  async validarSeccionPrestamos(){
    await this.elementIsVisible(this.seccionPrestamos)
  }

  async validarSeccionPagoServicios(){
    await this.elementIsVisible(this.seccionPagoServicios)
  }

  async clickSeccionInicio(){
    this.validarSeccionInicio()
    this.clickElement(this.seccionInicio)
  }

  async clickSeccionTransferencias(){
   this.validarSeccionTransferencias()
    this.clickElement(this.seccionTransferencias)

  }

  async clickSeccionPlazosFijos(){
    this.validarSeccionPlazosFijos() 
    this.clickElement(this.seccionPlazosFijos)
 }

  async clickSeccionPrestamos(){
    this.validarSeccionPrestamos() 
    this.clickElement(this.seccionPrestamos)
  }

  async clickSeccionPagoServicios(){
     this.validarSeccionPagoServicios() 
    this.clickElement(this.seccionPagoServicios)
  }

  async clickSeccionTarjetaVirtual(){
     this.validarSeccionTarjetaVirtul() 
    this.clickElement(this.seccionTarjetaVirtual)
  }

}

 