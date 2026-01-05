import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';

export class MouseOverPage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.MOUSE_OVER;
  readonly clickmeLink: Locator;
  readonly clickActiveLink: Locator;
  readonly clickmeCount: Locator;
  readonly linkButton: Locator;
  readonly linkButtonCount: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Mouse Over' });
    this.clickmeLink = page.locator('a[title = "Click me"]');
    this.clickActiveLink = page.locator('a[title = "Active Link"]');
    this.clickmeCount = page.locator('#clickCount');
    this.linkButton = page.locator('a[title = "Link Button"]');
    this.linkButtonCount = page.locator('#clickButtonCount');

  }

  async clickLink(): Promise<void> {
    await this.clickmeLink.hover({ force: true });
    await this.clickActiveLink.waitFor({ state: 'visible' });
    await this.clickActiveLink.click();
  }

  async clickLinkButton(): Promise<void> {
    await this.linkButton.click();
  }

}
