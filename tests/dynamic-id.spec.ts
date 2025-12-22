import { test, expect } from '../fixtures/base-test';

test.describe('Dynamic Id Page Specs', () => {
  test.beforeEach(async ({ dynamicIdPage }) => {
    await dynamicIdPage.navigateTo();

  });

  test('Verify page title is displayed', async ({ dynamicIdPage }) => {
    await expect(dynamicIdPage.title).toBeVisible();
  });

  test('Verify button with dynamic Id can be located', async ({ dynamicIdPage }) => {
    await expect(dynamicIdPage.button).toBeVisible();
  });

});
