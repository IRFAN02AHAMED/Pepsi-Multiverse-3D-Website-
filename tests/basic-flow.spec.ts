import { test, expect } from '@playwright/test';

test.describe('Pepsi Multiverse E2E Flow', () => {
  
  test('homepage should load and show hero elements', async ({ page }) => {
    await page.goto('/');
    
    // Check for main headline
    await expect(page.locator('h1')).toContainText('REFRESH REALITY');
    
    // Check for CTA button
    await expect(page.getByRole('button', { name: /INITIATE SYNC/i }).first()).toBeVisible();
    
    // Check for Bento grid items
    await expect(page.getByText(/A NEW DIMENSION/i)).toBeVisible();
    await expect(page.locator('h3', { hasText: /ACTIVE/i })).toBeVisible();
  });

  test('navigation to collections and filtering', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to collections via bento grid (using the heading text)
    await page.getByText(/CHROME/i).first().click();
    await expect(page).toHaveURL('/collections');
    
    // Check for collection header
    await expect(page.locator('h1')).toContainText('FLAVOR COLLECTIONS');
    
    // Check filtering
    const filterBtn = page.getByRole('button', { name: 'CORE FLAVORS' });
    await filterBtn.click();
    
    // Verify specific flavor is visible (e.g., ORIGINAL)
    await expect(page.getByText('ORIGINAL')).toBeVisible();
  });

  test('navigation to viewer', async ({ page }) => {
    await page.goto('/collections');
    
    // Click on a flavor to view it
    await page.getByText(/VENTURE/i).first().click();
    await expect(page).toHaveURL(/\/viewer\?flavor=original/);
    
    // Viewer client should load
    await expect(page.getByText(/360° ROTATE/i)).toBeVisible();
    await expect(page.getByText(/MOLECULAR PROFILE/i)).toBeVisible();
  });

  test('navigation to story page', async ({ page }) => {
    await page.goto('/');
    await page.getByText(/A NEW DIMENSION/i).first().click();
    await expect(page).toHaveURL('/story');
    await expect(page.locator('h1')).toContainText('Crafted Beyond');
  });

  test('navigation to CTA page and form submission', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /INITIATE SYNC/i }).first().click();
    await expect(page).toHaveURL('/cta');
    
    // Fill the form
    await page.fill('#field-name', 'Test User');
    await page.fill('#field-email', 'test@example.com');
    await page.selectOption('#field-dimension', 'original');
    await page.fill('#field-quantity', '2');
    
    // Submit
    await page.click('#submit-btn');
    
    // Wait for success message
    await expect(page.getByText(/SYNC CONFIRMED/i)).toBeVisible({ timeout: 15000 });
  });
});
