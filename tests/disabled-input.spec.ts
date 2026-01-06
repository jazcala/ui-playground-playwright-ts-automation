import { test, expect } from '../fixtures/base-test';

test.describe('Disabled Input Page Specs', () => {

  test.beforeEach(async ({ disabledInputPage }) => {
    await disabledInputPage.navigateTo();
  });

  test('verify page elements are displayed', async ({ disabledInputPage }) => {
    await expect.soft(disabledInputPage.title).toBeVisible();
    await expect.soft(disabledInputPage.inputField).toBeVisible();
    await expect.soft(disabledInputPage.enableButton).toBeVisible();
    await expect.soft(disabledInputPage.statusMessage).toBeVisible();
  });

  test('verify default status', async ({ disabledInputPage }) => {
    await expect.soft(disabledInputPage.inputField).toBeEnabled();
    await expect.soft(disabledInputPage.statusMessage).toHaveText('---');
  });

  test('verify input field enters 5-second cooldown after click', async ({ disabledInputPage }) => {

    await expect(disabledInputPage.inputField).toBeEnabled();

    await disabledInputPage.enableButton.click();

    await expect(disabledInputPage.inputField).toBeDisabled();
    await expect(disabledInputPage.statusMessage).toHaveText('Input Disabled...');

    await expect(disabledInputPage.inputField).toBeEnabled({ timeout: 6000 });
    await expect(disabledInputPage.statusMessage).toHaveText('Input Enabled...');

    await disabledInputPage.inputField.fill('Recovery successful');
    await expect(disabledInputPage.inputField).toHaveValue('Recovery successful');
    await disabledInputPage.statusMessage.click();

    await expect(disabledInputPage.statusMessage).toHaveText('Value changed to: Recovery successful');
  });

});
