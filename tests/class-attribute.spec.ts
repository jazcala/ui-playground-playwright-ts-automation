import { test, expect } from '../fixtures/base-test';

test.describe('Class Attribute Page Specs', () => {

  test.beforeEach(async ({ classAttributePage }) => {
    await classAttributePage.navigateTo();
  });

  test('Verify page title is displayed', async ({ classAttributePage }) => {
    await expect(classAttributePage.title).toBeVisible();
  });

  test('should trigger alert with correct message when primary button is pressed', async ({ classAttributePage }) => {
    await expect(classAttributePage.primaryButton).toBeVisible();
    expect(await classAttributePage.getAlertMessageOnClick()).toBe('Primary button pressed');

  });
});
