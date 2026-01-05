import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';

export class ShadowDomPage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.SHADOW_DOM;
  readonly field: Locator;
  readonly generateButton: Locator;
  readonly copyButton: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Shadow DOM' });
    this.field = page.locator('#editField');
    this.generateButton = page.locator('#buttonGenerate');
    this.copyButton = page.locator('#buttonCopy');
  }

  async generateGuid(): Promise<void> {
    await this.generateButton.click();
  }

  async copyValue(): Promise<void> {
    await this.copyButton.click();
  }

  async getClipboardValue(): Promise<string> {
    return await this.page.evaluate(async () => {
      return await navigator.clipboard.readText();
    });
  }

}
