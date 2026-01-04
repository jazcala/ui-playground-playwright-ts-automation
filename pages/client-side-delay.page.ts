import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';

export class ClientSideDelayPage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.CLIENT_SIDE_DELAY;
  readonly buttonTriggeringClientSideLogic: Locator;
  readonly clientSideMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Client Side Delay' });
    this.buttonTriggeringClientSideLogic = page.getByRole('button', { name: 'Button Triggering Client Side Logic' });
    this.clientSideMessage = page.getByRole('paragraph').filter({ hasText: 'Data calculated on the client side.' });
  }

  async clickButtonTriggeringClientsideLogic(): Promise<void> {
    await this.buttonTriggeringClientSideLogic.click();
  }

}
