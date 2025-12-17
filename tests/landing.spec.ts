import { test, expect } from '../fixtures/baseTest';

test.describe("Landing Page Specs", () => {

  test.beforeEach(async ({ landingPage }) => {
    await landingPage.navigateTo();
  });

  test('Verify Landing Page Title is visible', async ({ landingPage }) => {
    await expect(landingPage.title).toBeVisible();
  });

});
