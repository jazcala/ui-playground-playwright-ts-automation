import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';

export class NonBreakingSpacePage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.NON_BRAKING_SPACE;
  readonly myButton: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Non-Breaking Space' });
    this.myButton = page.getByRole('button', { name: ' My Button' });
  }

}
