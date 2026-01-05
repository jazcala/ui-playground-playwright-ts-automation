import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';

export class FileUploadPage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.FILE_UPLOAD;
  readonly uploadStatus: Locator;
  readonly fileInput: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'File Upload' });
    this.uploadStatus = page.frameLocator('iframe').locator('.success-file');
    this.fileInput = page.frameLocator('iframe').locator('#browse');
  }

  async uploadFile(filePath: string): Promise<void> {
    await this.fileInput.setInputFiles(filePath);
  }

}
