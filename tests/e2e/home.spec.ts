import { test, expect } from '@playwright/test';

test('homepage has correct title and loads successfully', async ({ page }) => {
  await page.goto('/');

  // Verify the page title matches the one in docusaurus.config.ts
  await expect(page).toHaveTitle(/Rendy's AWS Notes/);

  // You can also add a basic check for an element on the homepage
  // For example, checking if the navbar exists
  await expect(page.locator('.navbar')).toBeVisible();
});
