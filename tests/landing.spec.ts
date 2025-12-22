import { test, expect } from '../fixtures/base-test';
import { BasePage } from '../pages/base.page';
import { NAVIGATION_MAP } from '../utils/test-data';

test.describe("Landing Page Specs", () => {

  test.beforeEach(async ({ landingPage }) => {
    await landingPage.navigateTo();
  });

  test('Verify Landing Page Title is visible', async ({ landingPage }) => {
    await expect(landingPage.title).toBeVisible();
  });

  for (const { name, action } of NAVIGATION_MAP) {
    test(`should navigate to ${name} and verify URL and Heading`, async ({ landingPage }) => {
      const targetPage = await (landingPage[action] as () => Promise<BasePage>)();
      await expect(targetPage.title).toBeVisible();
    });
  }

});
