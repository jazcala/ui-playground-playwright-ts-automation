import { test, expect } from '../fixtures/base-test';

test.describe('Click Page Specs', () => {

  test.beforeEach(async ({ clickPage }) => {
    await clickPage.navigateTo();
  });

  test('verify page title is displayed', async ({ clickPage }) => {
    await expect(clickPage.title).toBeVisible();
  });

  test('verify button become green after click', async ({ browserName, clickPage }, testInfo) => {
    test.fixme(browserName === 'webkit', 'Webkit fails to register the click correctly.');
    test.fixme(!testInfo.project.use.headless, 'Challenge only works reliably in Headless mode.');

    await clickPage.badButton.click();
    await expect(clickPage.badButton).toHaveClass(/btn-success/);

  });

});
