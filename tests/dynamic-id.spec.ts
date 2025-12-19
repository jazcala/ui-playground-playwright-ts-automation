import { test, expect } from '../fixtures/base-test';

test.describe('Dynamic Id Page Specs', () => {

  test('User can navigate from Home to Dynamic ID page', async ({ landingPage }) => {
    await landingPage.navigateTo();
    const dynamicIdPage = await landingPage.mapsToDynamicId();
    await expect(dynamicIdPage.title).toBeVisible();
  });

  test('Verify button with dynamic Id can be located', async ({ dynamicIdPage }) => {
    await dynamicIdPage.navigateTo();
    await expect(dynamicIdPage.button).toBeVisible();
  });

});
