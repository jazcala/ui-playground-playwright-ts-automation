import { test, expect } from '../fixtures/base-test';

test.describe('Client Side Delay Page Specs', () => {

  test.beforeEach(async ({ clientSideDelayPage }) => {
    await clientSideDelayPage.navigateTo();

  });

  test('Verify page title is displayed', async ({ clientSideDelayPage }) => {
    await expect(clientSideDelayPage.title).toBeVisible();
  });

  test('Verify button gets with Client Side Delay is visible', async ({ clientSideDelayPage }) => {

    await expect(clientSideDelayPage.buttonTriggeringClientSideLogic).toBeVisible();
    await clientSideDelayPage.clickButtonTriggeringClientsideLogic();
    await expect(clientSideDelayPage.clientSideMessage).toBeVisible({ timeout: 20000 });

  });

});
