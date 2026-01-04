import { BasePage } from './base.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';
import { Page, Locator } from '@playwright/test';

export class LoadDelayPage extends BasePage {

  protected readonly path = URL_PATH_CONTSTANTS.LOAD_DELAY;
  readonly title: Locator;
  readonly buttonAfterDelay: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Load Delays' });
    this.buttonAfterDelay = page.getByRole('button', { name: 'Button Appearing After Delay' });
  }

}
