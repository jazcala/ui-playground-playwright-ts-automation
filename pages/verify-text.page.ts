import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';

export class VerifyTextPage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.VERIFY_TEXT;
  readonly text: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Verify Text' });
    this.text = page.locator('.badge-secondary').filter({ hasText: /Welcome .*!/ });
  }

}
