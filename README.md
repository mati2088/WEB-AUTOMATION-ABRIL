# Web Automation con Playwright y TypeScript

Proyecto de automatización web para el curso de testing. Vamos a testear una aplicación de homebanking demo usando **Playwright** con **TypeScript**, aplicando el patrón **Page Object Model (POM)**.

---

## Requisitos previos

### 1. Instalar Node.js

Descargar e instalar **Node.js versión 18 o superior** desde:

[https://nodejs.org/](https://nodejs.org/)

> Elegir la versión **LTS** (la recomendada). Al instalar Node.js, también se instala `npm` automáticamente.

Para verificar que está bien instalado, abrir una terminal y ejecutar:

```bash
node --version
npm --version
```

Deberían mostrar algo como `v18.x.x` y `10.x.x` respectivamente.

---

### 2. Clonar o descargar el proyecto

Si recibiste el proyecto como archivo ZIP, descomprimirlo en una carpeta de tu elección.

Si lo vas a clonar con Git:

```bash
git clone <URL-del-repositorio>
```

---

## Instalación del proyecto

Abrir una terminal **dentro de la carpeta del proyecto** y ejecutar:

```bash
npm install
```

Esto va a descargar todas las dependencias necesarias (Playwright, TypeScript, etc.) dentro de la carpeta `node_modules/`.

Luego, instalar los navegadores que usa Playwright:

```bash
npx playwright install
```

> La primera vez puede tardar unos minutos porque descarga los binarios de Chromium (~200MB). Solo se hace una vez.

---

## Estructura del proyecto

```
WEB AUTOMATION/
├── playwright.config.ts        # Configuracion general de Playwright
├── package.json                # Dependencias del proyecto
└── src/
    ├── pages/                  # Capa de paginas (elementos de la UI)
    │   ├── BasePage.ts         # Acciones comunes reutilizables
    │   ├── LoginPage.ts        # Elementos de la pantalla de login
    │   └── MenuPrincipalPage.ts
    ├── steps/                  # Capa de pasos (logica de negocio)
    │   ├── BaseSteps.ts
    │   ├── LoginSteps.ts       # Pasos del flujo de login
    │   └── MenuPrincipalSteps.ts
    └── tests/                  # Tests / casos de prueba
        ├── login.spec.ts
        └── tarjetasVirtuales.spec.ts
```

### Arquitectura: Page Object Model (POM)

El proyecto usa tres capas separadas:

| Capa | Carpeta | Responsabilidad |
|------|---------|-----------------|
| **Pages** | `src/pages/` | Define los elementos de la pagina (locators) y acciones de bajo nivel |
| **Steps** | `src/steps/` | Agrupa acciones de Pages en pasos de negocio reutilizables |
| **Tests** | `src/tests/` | Escribe los casos de prueba usando los Steps |

---

## Aplicacion bajo prueba

La app que vamos a testear es un **homebanking de demo**:

**URL:** `https://homebanking-demo-tests.netlify.app/`

**Credenciales de prueba:**
- Usuario: `demo`
- Contrasena: `demo123`

---

## Ejecutar los tests

### Correr todos los tests

```bash
npx playwright test
```

### Correr los tests y ver el navegador (modo visual)

```bash
npx playwright test --headed
```

### Correr un test especifico

```bash
npx playwright test src/tests/login.spec.ts
```

```bash
npx playwright test src/tests/tarjetasVirtuales.spec.ts
```

### Correr en modo debug (paso a paso)

```bash
npx playwright test --debug
```

### Ver el reporte HTML de los tests

```bash
npx playwright show-report
```

> El reporte se genera automaticamente en la carpeta `playwright-report/` despues de cada ejecucion.

---

## Tests incluidos

### `login.spec.ts` - Login Exitoso

Verifica que al hacer login con las credenciales correctas, aparece el menu principal con las secciones:
- Inicio
- Transferencias
- Plazos Fijos
- Prestamos
- Pago de Servicios

### `tarjetasVirtuales.spec.ts` - Generar Tarjeta Exitosamente

Verifica el flujo de generacion de una tarjeta virtual desde el menu principal.

---

## Dependencias principales

| Paquete | Version | Para que sirve |
|---------|---------|----------------|
| `@playwright/test` | ^1.59.1 | Framework de automatizacion y testing |
| `@types/node` | ^25.6.0 | Tipos de TypeScript para Node.js |

---

## Problemas comunes

**`npm install` falla o da errores de permisos**
- Asegurarse de estar dentro de la carpeta del proyecto antes de ejecutar el comando.
- En Windows, abrir la terminal como administrador si persiste el problema.

**`npx playwright install` tarda mucho**
- Es normal la primera vez. Descarga los navegadores (~200MB). Esperar que termine.

**Los tests fallan con error de red**
- Verificar que tengas conexion a internet, los tests necesitan acceder a `https://homebanking-demo-tests.netlify.app/`.

**No aparece el reporte despues de los tests**
- Ejecutar `npx playwright show-report` desde la carpeta del proyecto.

---

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/) - Entorno de ejecucion JavaScript
- [TypeScript](https://www.typescriptlang.org/) - JavaScript tipado
- [Playwright](https://playwright.dev/) - Framework de automatizacion web
