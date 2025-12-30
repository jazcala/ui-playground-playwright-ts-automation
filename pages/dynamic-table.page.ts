import { Page, Locator } from '@playwright/test';
import { BasePage } from "./base.page";
import { URL_PATH_CONTSTANTS } from "../utils/test-constants";

export class DynamicTablePage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.DYNAMIC_TABLE;
  readonly label: Locator;
  readonly headers: Locator;
  readonly chromeRow: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Dynamic Table' });
    this.label = page.locator('.bg-warning').filter({ hasText: 'Chrome' });
    this.headers = page.locator('[role="columnheader"]');
    this.chromeRow = page.locator('[role="row"]').filter({ hasText: 'Chrome' });
  }

  async getChromeCpuValue(): Promise<string> {
    const headerTexts = await this.headers.allInnerTexts();
    const cpuColumnIndex = headerTexts.indexOf('CPU');

    return await this.chromeRow.locator('[role="cell"]').nth(cpuColumnIndex).innerText();

  }

  async getLabelText(): Promise<string> {

    return await this.label.innerText();
  }

}
