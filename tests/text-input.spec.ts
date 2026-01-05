import { test, expect } from '../fixtures/base-test';

test.describe('Text Input Page Specs', () => {

  test.beforeEach(async ({ textInputPage }) => {
    await textInputPage.navigateTo();
  });

  test('Verify page title is displayed', async ({ textInputPage }) => {
    await expect(textInputPage.title).toBeVisible();
  });

  test('verify button name is changed', async ({ textInputPage }) => {

    let newName: string = 'This is my new name';
    await expect(textInputPage.input).toBeVisible();
    await textInputPage.setButtonNewName(newName);
    await expect(textInputPage.button).toHaveText(newName);

  });

});
