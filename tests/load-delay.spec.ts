import { test, expect } from '../fixtures/base-test';

test.describe('Load Delay Specs', () => {

  test.beforeEach(async ({ loadDelaysPage }) => {
    await loadDelaysPage.navigateTo();
  });

  test('Verify page title is displayed', async ({ loadDelaysPage }) => {
    await expect(loadDelaysPage.title).toBeVisible();
  });

  test('should wait for button delay to be visible', async ({ loadDelaysPage }) => {
    await expect(loadDelaysPage.buttonAfterDelay).toBeVisible({ timeout: 10000 });
  });
});
