import { test, expect } from '../fixtures/base-test';

test.describe('Load Delay Specs', () => {

  test('Verify page title is displayed', async ({ loadDelaysPage }) => {
    await loadDelaysPage.navigateTo();
    await expect(loadDelaysPage.title).toBeVisible();
  });

});
