import { test, expect } from '../fixtures/base-test';

test.describe('verify text page specs', () => {

  test.beforeEach(async ({ verifyTextPage }) => {
    await verifyTextPage.navigateTo();
  });

  test('verify page title is displayed', async ({ verifyTextPage }) => {
    await expect(verifyTextPage.title).toBeVisible();
  });

  test('finds an element with Welcome... text', async ({ verifyTextPage }) => {

    let username: string = 'UserName';
    await expect(verifyTextPage.text).toBeVisible();
    await expect(verifyTextPage.text).toHaveText(`Welcome ${username}!`);

  });

});
