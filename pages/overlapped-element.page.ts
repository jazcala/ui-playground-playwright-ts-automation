import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';

export class OverlappedElementPage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.OVERLAPPED_ELEMENT;
  readonly idField: Locator;
  readonly nameField: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Overlapped Element' });
    this.idField = page.getByRole('textbox', { name: 'Id' });
    this.nameField = page.getByRole('textbox', { name: 'Name' });
  }

  async fillForm(id: string, name: string): Promise<void> {
    await this.idField.fill(id);
    await this.nameField.click();
    await this.nameField.fill(name);
  }

}
