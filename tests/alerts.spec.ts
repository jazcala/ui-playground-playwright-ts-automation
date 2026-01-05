import { test, expect } from '../fixtures/base-test';
import type { Dialog } from '@playwright/test';

test.describe(' Alerts Page Specs', () => {

  test.beforeEach(async ({ alertsPage }) => {
    await alertsPage.navigateTo();
  });

  test('verify page title is displayed', async ({ alertsPage }) => {
    await expect(alertsPage.title).toBeVisible();
  });

  test('should trigger alert with correct message when alert button is pressed', async ({ alertsPage }) => {

    await expect(alertsPage.alertButton).toBeVisible();
    expect(await alertsPage.getAlertMessageOnClick()).toBe('Today is a working day.\nOr less likely a holiday.');

  });

  test('should trigger confirm with correct message when confirm button is pressed', async ({ alertsPage }) => {

    await expect(alertsPage.confirmButton).toBeVisible();
    expect(await alertsPage.getConfirmMessageOnClick()).toBe('Today is Friday.\nDo you agree?');

  });

  test('should handle Confirm accept and vablidate the follow-up Alert', async ({ alertsPage, page }) => {

    let dialogCount = 0;

    // We use a promise to manage the lifecycle
    const dialogsFinished = new Promise<void>((resolve) => {
      const handler = async (dialog: Dialog): Promise<void> => {
        dialogCount++;
        if (dialogCount === 1) {
          await dialog.accept();
        } else if (dialogCount === 2) {
          expect(dialog.message()).toBe('Yes');
          await dialog.accept();
          // Remove the listener so it doesn't leak to other tests
          page.off('dialog', handler);
          resolve();
        }
      };
      page.on('dialog', handler);
    });

    await alertsPage.clickConfirm();
    await dialogsFinished;

    expect(dialogCount).toBe(2);

  });

  test('should handle Confirm Cancel and validate the follow-up Alert', async ({ alertsPage, page }) => {

    let dialogCount = 0;

    const dialogsFinished = new Promise<void>((resolve) => {
      const handler = async (dialog: Dialog): Promise<void> => {
        dialogCount++;
        if (dialogCount === 1) {
          await dialog.dismiss();
        } else if (dialogCount === 2) {
          expect(dialog.message()).toBe('No');
          await dialog.accept();
          // Remove the listener so it doesn't leak to other tests
          page.off('dialog', handler);
          resolve();
        }
      };
      page.on('dialog', handler);
    });

    await alertsPage.clickConfirm();
    await dialogsFinished;

    expect(dialogCount).toBe(2);

  });

  test('should accept the promp with a value and then validate the value in the following alert', async ({ alertsPage, page }) => {

    let dialogCount = 0;
    const testInput = 'hola';

    const dialogsFinished = new Promise<void>((resolve) => {
      const handler = async (dialog: Dialog): Promise<void> => {
        dialogCount++;
        if (dialogCount === 1) {
          await dialog.accept(testInput);
        } else if (dialogCount === 2) {
          expect(dialog.message()).toBe(`User value: ${testInput}`);
          await dialog.accept();
          // Remove the listener so it doesn't leak to other tests
          page.off('dialog', handler);
          resolve();
        }
      };
      page.on('dialog', handler);
    });

    await alertsPage.clickPromt();
    await dialogsFinished;

    expect(dialogCount).toBe(2);

  });

  test('should dismiss the promp with a value and then validate the message in the following alert', async ({ alertsPage, page }) => {

    let dialogCount = 0;

    // We use a promise to manage the lifecycle
    const dialogsFinished = new Promise<void>((resolve) => {
      const handler = async (dialog: Dialog): Promise<void> => {
        dialogCount++;
        if (dialogCount === 1) {
          await dialog.dismiss();
        } else if (dialogCount === 2) {
          expect(dialog.message()).toBe('User value: no answer');
          await dialog.accept();
          // Remove the listener so it doesn't leak to other tests
          page.off('dialog', handler);
          resolve();
        }
      };
      page.on('dialog', handler);
    });

    await alertsPage.clickPromt();
    await dialogsFinished;

    expect(dialogCount).toBe(2);

  });

});
