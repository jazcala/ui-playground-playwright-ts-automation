import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { DynamicIdPage } from './dynamic-id.page';

export class LandingPage extends BasePage {

  readonly title: Locator;
  readonly dynamicIdLink: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'UI Test Automation Playground' });
    this.dynamicIdLink = page.getByRole('link', { name: 'Dynamic ID' });
  }

  async mapsToDynamicId(): Promise<DynamicIdPage> {
    await this.dynamicIdLink.click();
    await this.page.waitForURL('/dynamicid');

    return new DynamicIdPage(this.page);

  }

}
