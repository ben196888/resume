import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('resume layout matches baseline', async ({ page }) => {
  // Set a consistent viewport size
  await page.setViewportSize({ width: 1280, height: 800 });

  // Navigate to the local development server
  await page.goto('http://localhost:4321');

  // Wait for the page to be fully loaded
  await page.waitForLoadState('networkidle');

  // Define the paths for screenshots
  const baselinePath = path.join(__dirname, 'baseline', 'resume.png');
  const actualPath = path.join(__dirname, 'actual', 'resume.png');

  // Create the necessary directories if they don't exist
  for (const dir of ['baseline', 'actual']) {
    const dirPath = path.join(__dirname, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }

  // Take a screenshot of the entire page
  await page.screenshot({
    path: actualPath,
    fullPage: true
  });

  // If baseline doesn't exist, create it
  if (!fs.existsSync(baselinePath)) {
    fs.copyFileSync(actualPath, baselinePath);
    console.log(`Created baseline screenshot at ${baselinePath}`);
  } else {
    // Compare with baseline
    const screenshot = await page.screenshot({ fullPage: true });
    await expect(screenshot).toMatchSnapshot(baselinePath, {
      maxDiffPixels: 100, // Allow for small differences
      threshold: 0.1 // 10% threshold for pixel differences
    });
    console.log('Screenshot matches baseline within tolerance');
  }
});
