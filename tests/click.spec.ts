import { test, expect } from '../fixtures/base-test';

test.describe('Click Page Specs', () => {

  test.beforeEach(async ({ clickPage }) => {
    await clickPage.navigateTo();
  });

  test('verify page title is displayed', async ({ clickPage }) => {
    await expect(clickPage.title).toBeVisible();
  });

  test('verify button become green after click', async ({ browserName, clickPage }) => {

    //Next line works for Chrome and Firefox but not for webkit - the button is not being clicked
    await clickPage.badButton.click();

    if (browserName === 'webkit') {
      test.fixme(true, 'Webkit fails to register the click/color change correctly.');
    }

    await expect(clickPage.badButton).toHaveClass(/btn-success/);

  });

});
