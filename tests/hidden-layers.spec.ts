import { test, expect } from '../fixtures/base-test';

test.describe('Hidden Layer Page specs', () => {

  test('User can navigate from Home to Hidden Layer page', async ({ landingPage }) => {
    await landingPage.navigateTo();
    const hiddenLayersPage = await landingPage.mapsToHiddenLayersPage();
    await expect(hiddenLayersPage.title).toBeVisible();
  });

  test('Verify green button is covered by blue button after click', async ({ hiddenLayersPage }) => {
    await hiddenLayersPage.navigateTo();
    await expect(hiddenLayersPage.greenButton).toBeVisible();
    await hiddenLayersPage.greenButton.click();

    await expect(hiddenLayersPage.blueButton).toBeVisible();
    await hiddenLayersPage.blueButton.click();
    await expect(hiddenLayersPage.blueButton).toBeFocused();

    await expect(async () => {
      await hiddenLayersPage.greenButton.click({ timeout: 2000 });
    }).rejects.toThrow();

  });

  // test('Verify green button is no longer located after being clicked', async ({ hiddenLayersPage }) => {
  //   await hiddenLayersPage.navigateTo();

  // });

});
