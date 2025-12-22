import { test, expect } from '../fixtures/base-test';

test.describe('AJAX Data Page Specs', () => {

  test.beforeEach(async ({ ajaxDataPage }) => {
    await ajaxDataPage.navigateTo();
  });

  test('verify page title is displayed', async ({ ajaxDataPage }) => {
    await expect(ajaxDataPage.title).toBeVisible();
  });

  test('should display AJAX loaded message after delay', async ({ ajaxDataPage }) => {

    await ajaxDataPage.clickButtonTriggeringAjaxRequestButton();
    await expect(ajaxDataPage.ajaxRequestMessage).toBeVisible({ timeout: 20000 });

  });
});
