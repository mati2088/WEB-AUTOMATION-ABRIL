import { test, expect } from '@playwright/test';
import {LoginSteps} from "../steps/LoginSteps"
import { MenuPrincipalSteps } from '../steps/MenuPrincipalSteps';
import {UsuarioValido} from "../data/users.json"

import 'dotenv/config' 


const url = process.env.URL_BANKING ?? ''


test('Login Exitoso',{ tag: ["@smoke"] }, async ({ page }) => {
    const loginSteps = new LoginSteps(page)
    await loginSteps.navegarWeb(url);

    
    await loginSteps.IniciarSesion(UsuarioValido.usuario,UsuarioValido.password);
   
    //agregar assertions
    const menuPrincipalSteps=new MenuPrincipalSteps(page)
    await menuPrincipalSteps.validarMenuPrincipal()
    await loginSteps.waitFor(10000);
    
})

