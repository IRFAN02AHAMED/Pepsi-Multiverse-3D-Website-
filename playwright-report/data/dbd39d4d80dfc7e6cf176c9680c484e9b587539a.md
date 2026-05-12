# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: basic-flow.spec.ts >> Pepsi Multiverse E2E Flow >> navigation to viewer
- Location: tests\basic-flow.spec.ts:37:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText(/VENTURE/i).first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - link "Pepsi Multiverse" [ref=e3] [cursor=pointer]:
      - /url: /
    - generic [ref=e4]:
      - link "Multiverse" [ref=e5] [cursor=pointer]:
        - /url: /
      - link "Flavors" [ref=e6] [cursor=pointer]:
        - /url: /viewer
      - link "Collections" [ref=e7] [cursor=pointer]:
        - /url: /collections
      - link "Experience" [ref=e8] [cursor=pointer]:
        - /url: /story
    - link "Explore" [ref=e9] [cursor=pointer]:
      - /url: /collections
      - button "Explore" [ref=e10]:
        - img [ref=e11]
        - text: Explore
  - generic [ref=e15]:
    - heading "404" [level=1] [ref=e16]
    - heading "This page could not be found." [level=2] [ref=e18]
  - contentinfo [ref=e19]:
    - generic [ref=e20]: Pepsi Multiverse
    - generic [ref=e21]:
      - link "Privacy Protocol" [ref=e22] [cursor=pointer]:
        - /url: "#"
      - link "Terms of Service" [ref=e23] [cursor=pointer]:
        - /url: "#"
      - link "Contact HQ" [ref=e24] [cursor=pointer]:
        - /url: "#"
    - generic [ref=e26]: © 2024 Pepsi Multiverse. All Dimensions Reserved.
  - button "Open Next.js Dev Tools" [ref=e32] [cursor=pointer]:
    - img [ref=e33]
  - alert [ref=e36]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Pepsi Multiverse E2E Flow', () => {
  4  |   
  5  |   test('homepage should load and show hero elements', async ({ page }) => {
  6  |     await page.goto('/');
  7  |     
  8  |     // Check for main headline
  9  |     await expect(page.locator('h1')).toContainText('REFRESH REALITY');
  10 |     
  11 |     // Check for CTA button
  12 |     await expect(page.getByRole('button', { name: /INITIATE SYNC/i }).first()).toBeVisible();
  13 |     
  14 |     // Check for Bento grid items
  15 |     await expect(page.getByText(/A NEW DIMENSION/i)).toBeVisible();
  16 |     await expect(page.locator('h3', { hasText: /ACTIVE/i })).toBeVisible();
  17 |   });
  18 | 
  19 |   test('navigation to collections and filtering', async ({ page }) => {
  20 |     await page.goto('/');
  21 |     
  22 |     // Navigate to collections via bento grid (using the heading text)
  23 |     await page.getByText(/CHROME/i).first().click();
  24 |     await expect(page).toHaveURL('/collections');
  25 |     
  26 |     // Check for collection header
  27 |     await expect(page.locator('h1')).toContainText('Flavor Collections');
  28 |     
  29 |     // Check filtering
  30 |     const filterBtn = page.getByRole('button', { name: 'CORE FLAVORS' });
  31 |     await filterBtn.click();
  32 |     
  33 |     // Verify specific flavor is visible (e.g., ORIGINAL)
  34 |     await expect(page.getByText('ORIGINAL')).toBeVisible();
  35 |   });
  36 | 
  37 |   test('navigation to viewer', async ({ page }) => {
  38 |     await page.goto('/collections');
  39 |     
  40 |     // Click on a flavor to view it
> 41 |     await page.getByText(/VENTURE/i).first().click();
     |                                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  42 |     await expect(page).toHaveURL(/\/viewer\?flavor=original/);
  43 |     
  44 |     // Viewer client should load
  45 |     await expect(page.getByText(/360° ROTATE/i)).toBeVisible();
  46 |     await expect(page.getByText(/MOLECULAR PROFILE/i)).toBeVisible();
  47 |   });
  48 | 
  49 |   test('navigation to story page', async ({ page }) => {
  50 |     await page.goto('/');
  51 |     await page.getByText(/A NEW DIMENSION/i).first().click();
  52 |     await expect(page).toHaveURL('/story');
  53 |     await expect(page.locator('h1')).toContainText('Crafted Beyond');
  54 |   });
  55 | 
  56 |   test('navigation to CTA page and form submission', async ({ page }) => {
  57 |     await page.goto('/');
  58 |     await page.getByRole('button', { name: /INITIATE SYNC/i }).first().click();
  59 |     await expect(page).toHaveURL('/cta');
  60 |     
  61 |     // Fill the form
  62 |     await page.fill('#field-name', 'Test User');
  63 |     await page.fill('#field-email', 'test@example.com');
  64 |     await page.selectOption('#field-dimension', 'original');
  65 |     await page.fill('#field-quantity', '2');
  66 |     
  67 |     // Submit
  68 |     await page.click('#submit-btn');
  69 |     
  70 |     // Wait for success message
  71 |     await expect(page.getByText(/SYNC CONFIRMED/i)).toBeVisible({ timeout: 15000 });
  72 |   });
  73 | });
  74 | 
```