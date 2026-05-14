# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: basic-flow.spec.ts >> Pepsi Multiverse E2E Flow >> navigation to CTA page and form submission
- Location: tests\basic-flow.spec.ts:56:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://localhost:3000/cta"
Received: "http://localhost:3000/viewer"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    10 × unexpected value "http://localhost:3000/"
    3 × unexpected value "http://localhost:3000/viewer"

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
  - text: 360° FLAVOR INTERFACE // DIMENSION 001
  - heading "MULTIVERSE VIEWER" [level=1]
  - button "ORIGINAL ORIGINAL DIM-001":
    - img "ORIGINAL"
    - paragraph: ORIGINAL
    - paragraph: DIM-001
  - button "ZERO SUGAR ZERO SUGAR DIM-002":
    - img "ZERO SUGAR"
    - paragraph: ZERO SUGAR
    - paragraph: DIM-002
  - button "WILD CHERRY WILD CHERRY DIM-003":
    - img "WILD CHERRY"
    - paragraph: WILD CHERRY
    - paragraph: DIM-003
  - button "ELECTRIC EDITION ELECTRIC EDITION DIM-004":
    - img "ELECTRIC EDITION"
    - paragraph: ELECTRIC EDITION
    - paragraph: DIM-004
  - button "LIME LIME DIM-005":
    - img "LIME"
    - paragraph: LIME
    - paragraph: DIM-005
  - button "MANGO MANGO DIM-006":
    - img "MANGO"
    - paragraph: MANGO
    - paragraph: DIM-006
  - button "BLUE BLUE DIM-007":
    - img "BLUE"
    - paragraph: BLUE
    - paragraph: DIM-007
  - button "NITRO NITRO DIM-008":
    - img "NITRO"
    - paragraph: NITRO
    - paragraph: DIM-008
  - button "VANILLA VANILLA DIM-009":
    - img "VANILLA"
    - paragraph: VANILLA
    - paragraph: DIM-009
  - button "MAX MAX DIM-010":
    - img "MAX"
    - paragraph: MAX
    - paragraph: DIM-010
  - button
  - button
  - text: 3D INTERACTIVE MODE
  - button "SLOW ORBIT"
  - button "TECHNICAL ANALYSIS"
  - button "TRIGGER FIZZ"
  - heading "ORIGINAL" [level=2]
  - paragraph: "MOLECULAR PROFILE: 001"
  - text: FLAVOR ANALYSIS CO₂ Saturation 100% Chill Factor 85% Energy Level 72% DIMENSION TELEMETRY DIMENSION ID DIM-001 STATUS ACTIVE CATEGORY CORE FLAVORS SYNC 99.98%
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
> 59 |     await expect(page).toHaveURL('/cta');
     |                        ^ Error: expect(page).toHaveURL(expected) failed
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