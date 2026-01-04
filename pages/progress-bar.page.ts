import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';

export class ProgressBarPage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.PROGRESS_BAR;
  readonly startButton: Locator;
  readonly stopButton: Locator;
  readonly progressBar: Locator;
  readonly progress75: Locator;
  readonly progress100: Locator;
  readonly resultLabel: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Progress Bar' });
    this.startButton = page.getByRole('button', { name: 'Start' });
    this.stopButton = page.getByRole('button', { name: 'Stop' });
    this.progressBar = page.getByRole('progressbar');
    this.progress75 = page.locator('#progressBar[aria-valuenow="75"]');
    this.progress100 = page.locator('#progressBar[aria-valuenow="100"]');
    this.resultLabel = page.locator('#result');
  }

}
