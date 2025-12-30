import { test, expect } from '../fixtures/base-test';

test.describe('Visibility Page Specs', () => {

  test.beforeEach(async ({ visibilityPage }) => {
    await visibilityPage.navigateTo();
  });

  test('verify page title is displayed', async ({ visibilityPage }) => {
    await expect(visibilityPage.title).toBeVisible();
  });

  test('verify buttons are displayed on load', async ({ visibilityPage }) => {

    await expect.soft(visibilityPage.hideButton).toBeVisible();
    await expect.soft(visibilityPage.removedButton).toBeVisible();
    await expect.soft(visibilityPage.zeroWidthButton).toBeVisible();
    await expect.soft(visibilityPage.overlappedButton).toBeVisible();
    await expect.soft(visibilityPage.opacity0Button).toBeVisible();
    await expect.soft(visibilityPage.visibilityHiddenButton).toBeVisible();
    await expect.soft(visibilityPage.displayNoneButton).toBeVisible();
    await expect.soft(visibilityPage.offscreenButton).toBeVisible();

  });

  test('verify hide button is visible after clicking hide', async ({ visibilityPage }) => {

    await visibilityPage.hideButton.click();
    await expect(visibilityPage.hideButton).toBeVisible();

  });

  test('verify remove button is not visible after clicking hide', async ({ visibilityPage }) => {

    await visibilityPage.hideButton.click();
    await expect(visibilityPage.removedButton).not.toBeVisible();

  });

  test('verify Zero Width button is not visible after clicking hide', async ({ visibilityPage }) => {

    await visibilityPage.hideButton.click();
    await expect(visibilityPage.zeroWidthButton).not.toBeVisible();

  });

  test('verify Overlapped button is not visible after clicking hide', async ({ visibilityPage }, testInfo) => {

    if (testInfo.project.name === 'Mobile Safari') {
      test.skip(true, 'Overlapping logic is known to be inconsistent on Mobile Safari');
    }
    await visibilityPage.hideButton.click();

    const isCovered: boolean = await visibilityPage.isTopElementCovering();

    expect(isCovered).toBe(true);

  });

  test('verify Opacity 0 button is not visible after clicking hide', async ({ visibilityPage }) => {

    await visibilityPage.hideButton.click();
    expect(visibilityPage.opacity0Button).toHaveCSS('opacity', '0');

  });

  test('verify Display None button is not visible after clicking hide', async ({ visibilityPage }) => {

    await visibilityPage.hideButton.click();
    await expect(visibilityPage.displayNoneButton).not.toBeVisible();

  });

  test('verify Offscreen button is not visible after clicking hide', async ({ visibilityPage }) => {

    await visibilityPage.hideButton.click();
    await expect(visibilityPage.offscreenButton).not.toBeInViewport();

  });

});
