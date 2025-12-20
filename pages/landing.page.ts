import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { DynamicIdPage } from './dynamic-id.page';
import { ClassAttributePage } from './class-attribute.page';
import { URL_PATH_CONTSTANTS } from '../utils/test-constants';

export class LandingPage extends BasePage {

  readonly title: Locator;
  readonly dynamicIdLink: Locator;
  readonly classAttributeLink: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'UI Test Automation Playground' });
    this.dynamicIdLink = page.getByRole('link', { name: 'Dynamic ID' });
    this.classAttributeLink = page.getByRole('link', { name: 'Class Attribute' });
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

}
