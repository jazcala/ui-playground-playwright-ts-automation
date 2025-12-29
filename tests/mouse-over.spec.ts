import { test, expect } from '../fixtures/base-test';

test.describe('Mouse Over Page Specs', () => {

  test.beforeEach(async ({ mouseOverPage }) => {
    await mouseOverPage.navigateTo();
  });

  test('verify page elements are visible', async ({ mouseOverPage }) => {
    await expect(mouseOverPage.title).toBeVisible();
    await expect.soft(mouseOverPage.clickmeLink).toBeVisible();
    await expect.soft(mouseOverPage.clickmeCount).toBeVisible();
    await expect.soft(mouseOverPage.linkButton).toBeVisible();
    await expect.soft(mouseOverPage.linkButtonCount).toBeVisible();

  });

  test('verify link count default value', async ({ mouseOverPage }) => {
    await expect(mouseOverPage.clickmeCount).toHaveText('0');
  });

  test('verify button count default value', async ({ mouseOverPage }) => {
    await expect(mouseOverPage.linkButtonCount).toHaveText('0');
  });

  test('verify click on mouse over is increasing the count', async ({ mouseOverPage }) => {
    await mouseOverPage.clickLink();
    await expect(mouseOverPage.clickmeCount).toHaveText('1');
  });

  test('verify multiple clicks on mouse over increase the count correctly', async ({ mouseOverPage }) => {
    await mouseOverPage.clickLink();
    await mouseOverPage.clickActiveLink.click();
    await expect(mouseOverPage.clickmeCount).toHaveText('2');
  });

  test('verify click on Link Button is increasing the count', async ({ mouseOverPage }) => {
    await mouseOverPage.clickLinkButton();
    await expect(mouseOverPage.linkButtonCount).toHaveText('1');
  });
  
});
