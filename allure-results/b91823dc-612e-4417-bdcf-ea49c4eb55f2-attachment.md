# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tarjetasVirtuales.spec.ts >> Generar Tarjeta Exitosamente
- Location: src\tests\tarjetasVirtuales.spec.ts:24:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Tarjeta Virtual', { exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Tarjeta Virtual', { exact: true })
    5 × locator resolved to <span>Tarjeta Virtual</span>
      - unexpected value "hidden"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e5]: ✅ Tarjeta virtual generada exitosamente
  - generic [ref=e6]:
    - navigation [ref=e7]:
      - generic [ref=e8]:
        - img [ref=e9]
        - generic [ref=e12]: Home Banking
      - generic [ref=e13]:
        - generic [ref=e14]: Juan Pérez
        - button "Salir" [ref=e15] [cursor=pointer]
    - generic [ref=e16]:
      - complementary [ref=e17]:
        - list [ref=e18]:
          - listitem [ref=e19] [cursor=pointer]:
            - img [ref=e20]
            - generic [ref=e25]: Inicio
          - listitem [ref=e26] [cursor=pointer]:
            - img [ref=e27]
            - generic [ref=e29]: Transferencias
          - listitem [ref=e30] [cursor=pointer]:
            - img [ref=e31]
            - generic [ref=e33]: Plazos Fijos
          - listitem [ref=e34] [cursor=pointer]:
            - img [ref=e35]
            - generic [ref=e37]: Préstamos
          - listitem [ref=e38] [cursor=pointer]:
            - img [ref=e39]
            - generic [ref=e41]: Pago de Servicios
          - listitem [ref=e42] [cursor=pointer]:
            - img [ref=e43]
            - generic [ref=e45]: Tarjeta Virtual ACTIVA
          - listitem [ref=e46] [cursor=pointer]:
            - img [ref=e47]
            - generic [ref=e50]: Mis Datos
      - main [ref=e51]:
        - generic [ref=e52]:
          - generic [ref=e53]:
            - heading "Tarjetas Virtuales" [level=2] [ref=e54]
            - paragraph [ref=e55]: Genera tarjetas de débito virtuales para compras online
          - generic [ref=e56]:
            - generic [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]:
                  - generic [ref=e60]: "Sincronizar con cuenta:"
                  - combobox "Sincronizar con cuenta:" [ref=e61]:
                    - option "Cuenta Corriente - **** **** **** 1234" [selected]
                    - option "Caja de Ahorro - **** **** **** 5678"
                - button "+ Generar Nueva Tarjeta" [ref=e62] [cursor=pointer]
              - paragraph [ref=e63]: "Límite: 1 tarjeta virtual activa por cuenta (Caja de Ahorro / Cta Cte)"
            - generic [ref=e65]:
              - generic [ref=e67]: VISA DEBIT
              - generic [ref=e68]:
                - generic [ref=e69]: NÚMERO DE TARJETA
                - generic [ref=e70]: 4399 8850 1996 8055
              - generic [ref=e71]:
                - generic [ref=e72]:
                  - text: VENCIMIENTO
                  - generic [ref=e73]: 07/29
                - generic [ref=e74]:
                  - text: CVV
                  - generic [ref=e75]: "157"
              - generic [ref=e76]:
                - text: TITULAR
                - generic [ref=e77]: JUAN PÉREZ
              - generic [ref=e78]:
                - button "📋 Copiar" [ref=e79] [cursor=pointer]:
                  - generic [ref=e80]: 📋
                  - generic [ref=e81]: Copiar
                - button "🗑️ Eliminar" [ref=e82] [cursor=pointer]:
                  - generic [ref=e83]: 🗑️
                  - generic [ref=e84]: Eliminar
              - generic [ref=e85]: ACTIVA - VINCULADA A **** **** **** 1234
```

# Test source

```ts
  1  | 
  2  | import {Page,Locator, expect} from "@playwright/test";
  3  | 
  4  | export class BasePage{
  5  |     protected page:Page; //this del constructor hacer referencia a este atributo PAGE
  6  | 
  7  |     constructor(page:Page){
  8  |         this.page=page;
  9  |     }
  10 | 
  11 |     async clickElement(locator:Locator):Promise<void>{
  12 |         await locator.click();
  13 |     }
  14 | 
  15 |     async fillData(locator:Locator,data:string|number){
  16 |         await locator.fill(String(data));
  17 |     }
  18 | 
  19 |     async elementIsVisible(locator:Locator):Promise <void>{
> 20 |         await expect(locator).toBeVisible();
     |                               ^ Error: expect(locator).toBeVisible() failed
  21 |     }
  22 | 
  23 |     async validateText(locator:Locator, texto:string):Promise <void>{
  24 |         await expect(locator).toHaveText(texto)
  25 |     }
  26 | 
  27 | 
  28 |     
  29 | }
```