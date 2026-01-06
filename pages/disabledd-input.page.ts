import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';

export class DisabledInputPage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.DISABLED_INPUT;
  readonly inputField: Locator;
  readonly enableButton: Locator;
  readonly statusMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Disabled Input' });
    this.inputField = page.getByPlaceholder('Change me...');
    this.enableButton = page.getByRole('button', { name: 'Enable Edit Field with 5 seconds delay' });
    this.statusMessage = page.locator('#opstatus');
  }

}
