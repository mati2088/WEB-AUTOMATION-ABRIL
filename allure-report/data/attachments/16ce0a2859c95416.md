# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login failed2
- Location: src\tests\login.spec.ts:46:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('listitem').filter({ hasText: 'Inicio' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('listitem').filter({ hasText: 'Inicio' })

```

```
Error: page.waitForTimeout: Test ended.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5]: 📂
      - heading "Documentación" [level=3] [ref=e6]
    - link "Plan de Pruebas" [ref=e7] [cursor=pointer]:
      - /url: https://docs.google.com/document/d/1mw2tHUOUtaQeuTKEvuixQkx5sPYfQTgVr5d5Hxb17q8/edit?tab=t.0
    - link "Doc. Funcional" [ref=e8] [cursor=pointer]:
      - /url: https://docs.google.com/document/d/1KcJmUn0KpLSNQxVGpXlYsOVFYvabJrrsrYG_KFsHDq4/edit?tab=t.0
  - generic [ref=e10]:
    - img [ref=e12]
    - heading "HOME BANKING" [level=1] [ref=e15]
    - paragraph [ref=e16]: Personal Banking Excellence
    - generic [ref=e17]:
      - generic [ref=e18]:
        - generic [ref=e19]: Usuario
        - textbox "Usuario" [ref=e20]: demo
      - generic [ref=e21]:
        - generic [ref=e22]: Contraseña
        - textbox "Contraseña" [ref=e23]: demo3123
      - generic [ref=e25] [cursor=pointer]:
        - checkbox "Recordarme" [ref=e26]
        - generic [ref=e27]: Recordarme
      - generic [ref=e28]: "Usuario o contraseña incorrectos. Intentos restantes: 2"
      - button "Ingresar" [ref=e29] [cursor=pointer]:
        - generic [ref=e30]: Ingresar
    - generic [ref=e31]:
      - paragraph [ref=e32]: "Credenciales de prueba:"
      - generic [ref=e33]:
        - generic [ref=e34]:
          - strong [ref=e35]: "Usuario válido:"
          - text: demo / demo123
        - generic [ref=e36]:
          - strong [ref=e37]: "Error credenciales:"
          - text: wrong / wrong
        - generic [ref=e38]:
          - strong [ref=e39]: "Cuenta bloqueada:"
          - text: locked / locked
```

# Test source

```ts
  1  | import { Page } from "@playwright/test";
  2  | 
  3  | export class BaseSteps{
  4  | 
  5  |     protected page:Page;
  6  | 
  7  |     constructor(page:Page){
  8  |         this.page=page
  9  |     }
  10 | 
  11 |    async navegarWeb(url:string){
  12 |         await this.page.goto(url)
  13 |     }
  14 | 
  15 |     async waitFor(time:number){
> 16 |         await this.page.waitForTimeout(time);
     |                         ^ Error: page.waitForTimeout: Test ended.
  17 |     }
  18 | 
  19 |     //agregar steps
  20 | }
```