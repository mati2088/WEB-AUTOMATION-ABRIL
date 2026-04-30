import { test, expect } from '@playwright/test';
import {LoginSteps} from "../steps/LoginSteps"
import { MenuPrincipalSteps } from '../steps/MenuPrincipalSteps';


test('Login Exitoso', async ({ page }) => {
    const loginSteps = new LoginSteps(page)
    await loginSteps.navegarWeb("https://homebanking-demo-tests.netlify.app/");
    await loginSteps.IniciarSesion("demo","demo123");
   
    //agregar assertions
    const menuPrincipalSteps=new MenuPrincipalSteps(page)
    await menuPrincipalSteps.validarMenuPrincipal()
    await loginSteps.waitFor(10000);
    
})

