import { test, expect } from '../fixtures/base-test';

test.describe('Non-breaking Space Page Specs', () => {

  test.beforeEach(async ({ nonBreakingSpacePage }) => {
    await nonBreakingSpacePage.navigateTo();
  });

  test('verify page title is displayed', async ({ nonBreakingSpacePage }) => {
    await expect(nonBreakingSpacePage.title).toBeVisible();
  });

  test('verify My Button is displayed', async ({ nonBreakingSpacePage }) => {
    await expect(nonBreakingSpacePage.myButton).toBeVisible();
  });
});
