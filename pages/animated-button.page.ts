import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';

export class AnimatedButtonPage extends BasePage {

  readonly title: Locator;
  protected readonly path = URL_PATH_CONTSTANTS.ANIMATED_BUTTON;
  readonly startButton: Locator;
  readonly movingButton: Locator;
  readonly statusMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Animated Button' });
    this.startButton = page.getByRole('button', { name: 'Start Animation' });
    this.movingButton = page.getByRole('button', { name: 'Moving Target' });
    this.statusMessage = page.locator('#opstatus');
  }

}
