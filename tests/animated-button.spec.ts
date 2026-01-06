import { test, expect } from '../fixtures/base-test';

test.describe('Animated Button Page Specs', () => {

  test.beforeEach(async ({ animatedButtonPage }) => {
    await animatedButtonPage.navigateTo();
  });

  test('verify page elements are displayed', async ({ animatedButtonPage }) => {
    await expect.soft(animatedButtonPage.title).toBeVisible();
    await expect.soft(animatedButtonPage.startButton).toBeVisible();
    await expect.soft(animatedButtonPage.movingButton).toBeVisible();
  });

  test('Click the button when its not moving', async ({ animatedButtonPage }) => {
    await animatedButtonPage.startButton.click();
    await expect(animatedButtonPage.movingButton).not.toHaveClass(/spin/, { timeout: 15000 });
    await expect(animatedButtonPage.movingButton).toHaveClass('btn btn-primary');
    await animatedButtonPage.movingButton.click();
    await expect(animatedButtonPage.statusMessage).toHaveText(/Animation done|Moving Target clicked\. It's class name is 'btn btn-primary'/);
  });

  test('Click the button when it is moving', async ({ animatedButtonPage }) => {
    await animatedButtonPage.startButton.click();
    await expect(animatedButtonPage.movingButton).toHaveClass('btn btn-primary spin');
    await animatedButtonPage.movingButton.click({ force: true });
    await expect(animatedButtonPage.statusMessage).toHaveText(/Moving Target clicked. It's class name is 'btn btn-primary spin/);
  });

});
