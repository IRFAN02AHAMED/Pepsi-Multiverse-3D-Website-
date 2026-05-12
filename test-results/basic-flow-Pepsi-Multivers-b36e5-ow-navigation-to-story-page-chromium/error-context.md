# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: basic-flow.spec.ts >> Pepsi Multiverse E2E Flow >> navigation to story page
- Location: tests\basic-flow.spec.ts:49:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText(/A NEW DIMENSION/i).first()

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
  - main [ref=e14]:
    - generic [ref=e19]:
      - generic [ref=e20]:
        - generic [ref=e21]: Dimension 001 // Core Sync
        - heading "REFRESH REALITY" [level=1] [ref=e22]
      - generic [ref=e23]:
        - generic:
          - generic:
            - generic: Molecular State
            - generic: STABLE
          - generic:
            - generic: Synchronization
            - generic: 99.98%
      - generic [ref=e27]:
        - link "INITIATE SYNC" [ref=e28] [cursor=pointer]:
          - /url: /cta
          - button "INITIATE SYNC" [ref=e29]:
            - text: INITIATE SYNC
            - img [ref=e30]
        - link "VIEW ARCHIVES" [ref=e33] [cursor=pointer]:
          - /url: /collections
          - text: VIEW ARCHIVES
          - img [ref=e34]
    - generic [ref=e38]:
      - link "THE MULTIVERSE STORY Go beyond the fizz. Explore how we re-engineered hydration across temporal dimensions to create the ultimate sensory node." [ref=e39] [cursor=pointer]:
        - /url: /story
        - generic [ref=e40]:
          - img [ref=e42]
          - generic [ref=e45]:
            - heading "THE MULTIVERSE STORY" [level=3] [ref=e46]
            - paragraph [ref=e47]: Go beyond the fizz. Explore how we re-engineered hydration across temporal dimensions to create the ultimate sensory node.
      - generic [ref=e48]:
        - img [ref=e50]
        - generic [ref=e56]:
          - generic [ref=e57]: System Status
          - heading "CORE SYNC OPTIMAL" [level=3] [ref=e58]:
            - text: CORE SYNC
            - text: OPTIMAL
      - generic [ref=e59]:
        - generic [ref=e60]: Active Particles
        - generic [ref=e61]:
          - generic [ref=e63]:
            - generic [ref=e64]: OAK_SMOKE
            - generic [ref=e65]: 12%
          - generic [ref=e68]:
            - generic [ref=e69]: CITRUS_GLITCH
            - generic [ref=e70]: 84%
          - generic [ref=e73]:
            - generic [ref=e74]: VANILLA_STREAM
            - generic [ref=e75]: 04%
      - link "CHROME COLLECTION Limited edition skins for your dimensional interface. Available for immediate synchronization." [ref=e77] [cursor=pointer]:
        - /url: /collections
        - generic [ref=e78]:
          - generic [ref=e79]:
            - heading "CHROME COLLECTION" [level=3] [ref=e80]
            - paragraph [ref=e81]: Limited edition skins for your dimensional interface. Available for immediate synchronization.
          - img [ref=e83]
  - contentinfo [ref=e86]:
    - generic [ref=e87]: Pepsi Multiverse
    - generic [ref=e88]:
      - link "Privacy Protocol" [ref=e89] [cursor=pointer]:
        - /url: "#"
      - link "Terms of Service" [ref=e90] [cursor=pointer]:
        - /url: "#"
      - link "Contact HQ" [ref=e91] [cursor=pointer]:
        - /url: "#"
    - generic [ref=e93]: © 2024 Pepsi Multiverse. All Dimensions Reserved.
  - button "Open Next.js Dev Tools" [ref=e99] [cursor=pointer]:
    - img [ref=e100]
  - alert [ref=e103]
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
> 51 |     await page.getByText(/A NEW DIMENSION/i).first().click();
     |                                                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
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