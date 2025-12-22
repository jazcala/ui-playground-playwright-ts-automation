import { Page, Locator } from '@playwright/test';
import { BasePage } from "./base.page";
import { URL_PATH_CONTSTANTS } from "../utils/test-constants";

export class SampleAppPage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.SAMPLE_APP;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Sample App' });
  }

}
