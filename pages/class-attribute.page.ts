import { Page, Locator, Dialog } from '@playwright/test';
import { BasePage } from './base.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';

export class ClassAttributePage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.CLASS_ATTRIBUTE;
  readonly primaryButton: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Class Attribute' });
    this.primaryButton = page.getByRole('button', { name: 'Button' }).and(page.locator('.btn-primary'));
  }

  async clickPrimaryButton(): Promise<void> {
    await this.primaryButton.click();
  }

  async getAlertMessageOnClick(): Promise<string> {
    let message = '';

    // 1. Setup a "Once" listener. It will trigger the moment the dialog appears.
    this.page.once('dialog', async (dialog: Dialog) => {
      message = dialog.message();
      await dialog.accept();
    });

    // 2. Trigger the event.
    await this.primaryButton.dispatchEvent('click');

    // 3. Small buffer to ensure the message variable is populated
    await this.page.waitForFunction((msg) => msg !== '', message, { timeout: 2000 }).catch(() => {
      console.error('No dialog message was captured');
    });

    return message;

  }

}
