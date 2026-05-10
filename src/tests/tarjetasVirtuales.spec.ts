import { test, expect,Page } from '@playwright/test';
import {LoginSteps} from "../steps/LoginSteps"
import { MenuPrincipalSteps } from '../steps/MenuPrincipalSteps';

import {UsuarioValido} from "../data/users.json"

import 'dotenv/config' 
import { TarjetasVirtualesSteps } from '../steps/TarjetasVirtualesSteps';


const url = process.env.URL_BANKING ?? ''


let page:Page;

test.beforeAll(async ({browser})=>{
    const context = await browser.newContext()
    page=await context.newPage()
    const loginSteps = new LoginSteps(page)
    await loginSteps.navegarWeb(url);
    await loginSteps.IniciarSesion(UsuarioValido.usuario,UsuarioValido.password);
})

test('Generar Tarjeta Exitosamente', async () => {
   const tarjetasVirtuales = new TarjetasVirtualesSteps(page)
   await tarjetasVirtuales.generarTarjetaVirtual()
})



