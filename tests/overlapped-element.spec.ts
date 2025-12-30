import { test, expect } from '../fixtures/base-test';

test.describe('Overlapped Elements Page Specs', () => {

  test.beforeEach(async ({ overlappedElementPage }) => {
    await overlappedElementPage.navigateTo();
  });

  test('verify page elements', async ({ overlappedElementPage }) => {
    await expect.soft(overlappedElementPage.title).toBeVisible();
    await expect.soft(overlappedElementPage.idField).toBeVisible();
    await expect.soft(overlappedElementPage.idField).toBeEmpty();
    await expect.soft(overlappedElementPage.nameField).toBeVisible();
    await expect.soft(overlappedElementPage.nameField).toBeEmpty();
  });

  test('fill the form with overlaps ', async ({ overlappedElementPage }) => {
    const id: string = "333";
    const name: string = "Susan";
    await overlappedElementPage.fillForm(id, name);
    await expect.soft(overlappedElementPage.idField).toHaveValue(id);
    await expect.soft(overlappedElementPage.nameField).toHaveValue(name);
  });
});
