import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class TarjetasVirtualesPage extends BasePage {

   //private readonly validarCuentaVinculada=this.page.getByText('ACTIVA - VINCULADA A **** **** **** 1234')
  private readonly textoVisaDebit= this.page.getByText('ACTIVA - VINCULADA A **** **** **** 1234');
   private readonly botonGenerarTarjetaVirutal= this.page.getByRole('button', { name: '+ Generar Nueva Tarjeta' });

  //constructor
  constructor(page: Page) {
    super(page);
  }


    async validarTextoVisaDebit(){
    await this.elementIsVisible(this.textoVisaDebit)
  }

    async clickGenerarTarjetaVirtual(){
        await this.clickElement(this.botonGenerarTarjetaVirutal);
    }
}


/*

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByLabel('Sincronizar con cuenta:').selectOption('ACC002');
  await expect(page.getByText('VISA DEBIT')).toBeVisible();
  await page.getByText('ACTIVA - VINCULADA A **** **** **** 1234').click();
  await page.locator('.card-chip').click();
  await page.getByText('VISA DEBIT NÚMERO DE TARJETA').click();
});
*/