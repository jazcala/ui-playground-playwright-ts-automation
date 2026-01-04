import { test, expect } from '../fixtures/base-test';

test.describe('Progress Bar Page Specs', () => {

  test.beforeEach(async ({ progressBarPage }) => {
    await progressBarPage.navigateTo();
  });

  test('verify page title is displayed', async ({ progressBarPage }) => {
    await expect(progressBarPage.title).toBeVisible();
  });

  test('should have all control elements visible on load', async ({ progressBarPage }) => {

    await expect(progressBarPage.startButton).toBeVisible();
    await expect(progressBarPage.stopButton).toBeVisible();
    await expect(progressBarPage.progressBar).toBeVisible();

  });

  test('should reach 100% completion when left running', async ({ progressBarPage }) => {

    test.slow();
    await progressBarPage.startButton.click();
    await expect(progressBarPage.progress100).toBeVisible({ timeout: 45000 });

  });

  test('should stop the progress bar with high precision at 75%', async ({ progressBarPage, page }) => {

    test.slow();
    await progressBarPage.startButton.click();

    await page.waitForFunction(() => {
      const bar = document.getElementById('progressBar');

      return bar && bar.getAttribute('aria-valuenow') === '75';
    }, { polling: 'raf', timeout: 45000 });

    await progressBarPage.stopButton.click();
    await expect(progressBarPage.resultLabel).toHaveText(/Result: [0-5],.*/);
    await expect(progressBarPage.progress75).toBeVisible();

  });

  test('should handle invalid stop sequence (Stop before Start)', async ({ progressBarPage }) => {

    await progressBarPage.stopButton.click();
    await expect(progressBarPage.resultLabel).toHaveText('Result: n/a, duration: n/a');

  });
});
