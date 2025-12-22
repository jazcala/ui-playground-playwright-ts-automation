import { Page, Locator } from '@playwright/test';
import { BasePage } from "./base.page";
import { URL_PATH_CONTSTANTS } from "../utils/test-constants";

export class DynamicTablePage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.DYNAMIC_TABLE;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Dynamic Table' });
  }

}
