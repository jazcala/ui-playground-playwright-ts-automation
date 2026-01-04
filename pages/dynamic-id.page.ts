import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';

export class DynamicIdPage extends BasePage {

  readonly title: Locator;
  readonly button: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.DYNAMIC_ID;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Dynamic ID' });
    this.button = page.getByRole('button', { name: 'Button with Dynamic ID' });
  }

}
