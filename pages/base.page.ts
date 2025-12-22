import { Page, Locator } from '@playwright/test';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';

export abstract class BasePage {

  readonly page: Page;
  protected readonly path = URL_PATH_CONTSTANTS.LANGING_PAGE;
  abstract readonly title: Locator;

  constructor(page: Page) {
    this.page = page;

  }

  async navigateTo(): Promise<void> {
    await this.page.goto(this.path);
    await this.page.waitForURL(`**${this.path}`);
  }

}
