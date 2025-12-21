import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { DynamicIdPage } from './dynamic-id.page';
import { ClassAttributePage } from './class-attribute.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';
import { HiddenLayersPage } from './hidden-layers.page';

export class LandingPage extends BasePage {

  readonly title: Locator;
  readonly dynamicIdLink: Locator;
  readonly classAttributeLink: Locator;
  readonly hiddenLayersLink: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'UI Test Automation Playground' });
    this.dynamicIdLink = page.getByRole('link', { name: 'Dynamic ID' });
    this.classAttributeLink = page.getByRole('link', { name: 'Class Attribute' });
    this.hiddenLayersLink = page.getByRole('link', { name: 'Hidden Layers' });
  }

  async mapsToDynamicId(): Promise<DynamicIdPage> {
    await this.dynamicIdLink.click();
    await this.page.waitForURL(URL_PATH_CONTSTANTS.DYNAMIC_ID);

    return new DynamicIdPage(this.page);

  }

  async mapsToClassAttributePage(): Promise<ClassAttributePage> {
    await this.classAttributeLink.click();
    await this.page.waitForURL(URL_PATH_CONTSTANTS.CLASS_ATTRIBUTE);

    return new ClassAttributePage(this.page);

  }

  async mapsToHiddenLayersPage(): Promise<HiddenLayersPage> {
    await this.hiddenLayersLink.click();
    await this.page.waitForURL(URL_PATH_CONTSTANTS.HIDDEN_LAYERS);

    return new HiddenLayersPage(this.page);
  }

}
