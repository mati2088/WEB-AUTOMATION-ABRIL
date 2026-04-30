import { test, expect,Page } from '@playwright/test';
import {LoginSteps} from "../steps/LoginSteps"
import { MenuPrincipalSteps } from '../steps/MenuPrincipalSteps';

let page:Page;

test.beforeAll(async ({browser})=>{
    const context = await browser.newContext()
    page=await context.newPage()
    const loginSteps = new LoginSteps(page)
    await loginSteps.navegarWeb("https://homebanking-demo-tests.netlify.app/");
    await loginSteps.IniciarSesion("demo","demo123");
})

test('Generar Tarjeta Exitosamente', async () => {
   
    const menuPrincipalSteps=new MenuPrincipalSteps(page)
    await menuPrincipalSteps.generarTarjetaVirtual()
    await menuPrincipalSteps.waitFor(10000);
})



