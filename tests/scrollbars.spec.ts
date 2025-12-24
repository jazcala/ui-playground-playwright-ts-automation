import { test, expect } from '../fixtures/base-test';

test.describe('Scrollbars Page specs', () => {

  test.beforeEach(async ({ scrollbarsPage }) => {
    await scrollbarsPage.navigateTo();
  });

  test('verify page title is displayed', async ({ scrollbarsPage }) => {
    await expect(scrollbarsPage.title).toBeVisible();
  });

  test('scroll and find the button', async ({ scrollbarsPage }) => {
    await scrollbarsPage.button.scrollIntoViewIfNeeded();
    await expect(scrollbarsPage.button).toBeInViewport();
  });

  test('verify button is NOT in viewport on initial load', async ({ scrollbarsPage }) => {
    await expect(scrollbarsPage.button).not.toBeInViewport();
  });

});
