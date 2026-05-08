# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Exitoso
- Location: src\tests\login.spec.ts:12:5

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('listitem').filter({ hasText: 'Inicio' })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('listitem').filter({ hasText: 'Inicio' })

```

```
Error: browserContext.close: Target page, context or browser has been closed
```