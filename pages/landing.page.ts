import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { DynamicIdPage } from './dynamic-id.page';
import { ClassAttributePage } from './class-attribute.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';
import { HiddenLayersPage } from './hidden-layers.page';
import { LoadDelayPage } from './load-delay.page';
import { AjaxDataPage } from './ajax-data.page';

export class LandingPage extends BasePage {

  readonly title: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'UI Test Automation Playground' });
  }

  private async navigateToChallenge<T extends BasePage>(
    linkName: string,
    expectedUrl: string,
    pageClass: new (page: Page) => T

  ): Promise<T> {
    await this.page.getByRole('link', { name: linkName }).click();
    await this.page.waitForURL(expectedUrl);

    return new pageClass(this.page);
  }

  async mapsToDynamicId(): Promise<DynamicIdPage> {

    return this.navigateToChallenge('Dynamic ID', URL_PATH_CONTSTANTS.DYNAMIC_ID, DynamicIdPage);
  }

  async mapsToClassAttributePage(): Promise<ClassAttributePage> {

    return this.navigateToChallenge('Class Attribute', URL_PATH_CONTSTANTS.CLASS_ATTRIBUTE, ClassAttributePage);
  }

  async mapsToHiddenLayersPage(): Promise<HiddenLayersPage> {

    return this.navigateToChallenge('Hidden Layers', URL_PATH_CONTSTANTS.HIDDEN_LAYERS, HiddenLayersPage);
  }

  async mapsToLoadDelay(): Promise<LoadDelayPage> {

    return this.navigateToChallenge('Load Delay', URL_PATH_CONTSTANTS.LOAD_DELAY, LoadDelayPage);
  }

  async mapsToAjaxData(): Promise<AjaxDataPage> {
    return this.navigateToChallenge('AJAX DATA', URL_PATH_CONTSTANTS.AJAX_DATA, AjaxDataPage);
  }

}
