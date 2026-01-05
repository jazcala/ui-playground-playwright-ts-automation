import { Page, Locator, Dialog } from '@playwright/test';
import { BasePage } from './base.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';

export class AlertsPage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.ALERTS;
  readonly alertButton: Locator;
  readonly confirmButton: Locator;
  readonly promtButton: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Alerts' });
    this.alertButton = page.getByRole('button', { name: 'Alert' });
    this.confirmButton = page.getByRole('button', { name: 'Confirm' });
    this.promtButton = page.getByRole('button', { name: 'Prompt' });

  }

  async clickPromt(): Promise<void> {
    await this.promtButton.click();

  }

  async clickConfirm(): Promise<void> {
    await this.confirmButton.click();
  }

  async getAlertMessageOnClick(): Promise<string> {
    let message = '';

    // 1. Setup a "Once" listener. It will trigger the moment the dialog appears.
    this.page.once('dialog', async (dialog: Dialog) => {
      message = dialog.message();
      await dialog.accept();
    });

    // 2. Trigger the event.
    await this.alertButton.dispatchEvent('click');

    // 3. Small buffer to ensure the message variable is populated
    await this.page.waitForFunction((msg) => msg !== '', message, { timeout: 2000 }).catch(() => {
      console.error('No dialog message was captured');
    });

    return message;

  }

  async getConfirmMessageOnClick(): Promise<string> {
    let message = '';

    // 1. Setup a "Once" listener. It will trigger the moment the dialog appears.
    this.page.once('dialog', async (dialog: Dialog) => {
      message = dialog.message();
      await dialog.accept();
    });

    // 2. Trigger the event.
    await this.confirmButton.dispatchEvent('click');

    // 3. Small buffer to ensure the message variable is populated
    await this.page.waitForFunction((msg) => msg !== '', message, { timeout: 2000 }).catch(() => {
      console.error('No dialog message was captured');
    });

    return message;

  }

}
