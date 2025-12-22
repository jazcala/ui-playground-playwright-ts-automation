import { test, expect } from '../fixtures/base-test';

test.describe('Hidden Layer Page specs', () => {
  test.beforeEach(async ({ hiddenLayersPage }) => {
    await hiddenLayersPage.navigateTo();
  });

  test('Verify page title is displayed', async ({ hiddenLayersPage }) => {
    await expect(hiddenLayersPage.title).toBeVisible();
  });

  test('Verify green button is covered by blue button after click', async ({ hiddenLayersPage }) => {

    await expect(hiddenLayersPage.greenButton).toBeVisible();
    await hiddenLayersPage.greenButton.click();

    await expect(hiddenLayersPage.blueButton).toBeVisible();
    await hiddenLayersPage.blueButton.click();

    await expect(async () => {
      await hiddenLayersPage.greenButton.click({ timeout: 2000 });
    }).rejects.toThrow();

  });

});
