import { Page, Locator } from '@playwright/test';
import { BasePage } from "./base.page";
import { URL_PATH_CONTSTANTS } from "../utils/test-constants";

export class ScrollbarsPage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.SCROLLBARS;
  readonly scrollarea: Locator;
  readonly button: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Scrollbars' });
    this.scrollarea = page.locator('div[style="height:150px;overflow-y: scroll;width:300px;overflow-x:scroll"]');
    this.button = page.getByRole('button', { name: 'Hiding Button' });
  }

}
