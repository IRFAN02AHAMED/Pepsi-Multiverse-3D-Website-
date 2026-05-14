# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: basic-flow.spec.ts >> Pepsi Multiverse E2E Flow >> homepage should load and show hero elements
- Location: tests\basic-flow.spec.ts:5:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/A NEW DIMENSION/i)
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/A NEW DIMENSION/i)

```

```yaml
- navigation:
  - link "Pepsi Multiverse":
    - /url: /
  - link "Multiverse":
    - /url: /
  - link "Flavors":
    - /url: /viewer
  - link "Collections":
    - /url: /collections
  - link "Experience":
    - /url: /story
  - link "Explore":
    - /url: /collections
    - button "Explore"
- main:
  - text: Dimension 001 // Core Sync
  - heading "REFRESH REALITY" [level=1]
  - text: Molecular State STABLE Synchronization 99.98%
  - button "INITIATE SYNC"
  - link "VIEW ARCHIVES":
    - /url: /collections
  - link "THE MULTIVERSE STORY Go beyond the fizz. Explore how we re-engineered hydration across temporal dimensions to create the ultimate sensory node.":
    - /url: /story
    - heading "THE MULTIVERSE STORY" [level=3]
    - paragraph: Go beyond the fizz. Explore how we re-engineered hydration across temporal dimensions to create the ultimate sensory node.
  - text: System Status
  - paragraph: Current state of the multiverse environment
  - heading "CORE SYNC OPTIMAL" [level=3]
  - paragraph: "Flavor dimension stability: 100%"
  - text: Active Particles OAK_SMOKE 12% CITRUS_GLITCH 84% VANILLA_STREAM 04%
  - link "CHROME COLLECTION Limited edition skins for your dimensional interface. Available for immediate synchronization.":
    - /url: /collections
    - heading "CHROME COLLECTION" [level=3]
    - paragraph: Limited edition skins for your dimensional interface. Available for immediate synchronization.
- contentinfo:
  - text: Pepsi Multiverse
  - link "Privacy Protocol":
    - /url: "#"
  - link "Terms of Service":
    - /url: "#"
  - link "Contact HQ":
    - /url: "#"
  - text: © 2024 Pepsi Multiverse. All Dimensions Reserved.
- alert
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
> 15 |     await expect(page.getByText(/A NEW DIMENSION/i)).toBeVisible();
     |                                                      ^ Error: expect(locator).toBeVisible() failed
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
  27 |     await expect(page.locator('h1')).toContainText('FLAVOR COLLECTIONS');
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
  41 |     await page.getByText(/VENTURE/i).first().click();
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