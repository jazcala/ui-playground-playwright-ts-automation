import { test, expect } from '../fixtures/base-test';

test.describe('Class Attribute Page Specs', () => {

  test('User can navigate from Home to Class Attribute Page', async ({ landingPage }) => {
    await landingPage.navigateTo();
    const classAttributePage = await landingPage.mapsToClassAttributePage();
    await expect(classAttributePage.title).toBeVisible();
  });

  test('should trigger alert with correct message when primary button is pressed', async ({ classAttributePage }) => {
    await classAttributePage.navigateTo();
    await expect(classAttributePage.primaryButton).toBeVisible();
    expect(await classAttributePage.getAlertMessageOnClick()).toBe('Primary button pressed');

  });
});
