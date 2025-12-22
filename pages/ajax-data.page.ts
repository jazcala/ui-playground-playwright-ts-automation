import { Page, Locator } from '@playwright/test';
import { BasePage } from "./base.page";
import { URL_PATH_CONTSTANTS } from "../utils/test-constants";

export class AjaxDataPage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.AJAX_DATA;
  readonly button: Locator;
  readonly ajaxRequestMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'AJAX Data' });
    this.button = page.getByRole('button', { name: 'Button Triggering AJAX Request' });
    this.ajaxRequestMessage = page.getByRole('paragraph').filter({ hasText: 'Data loaded with AJAX get request.' });
  }

  async clickButtonTriggeringAjaxRequestButton(): Promise<void> {
    await this.button.click();
  }

}
