import { test as base } from '@playwright/test';
import { LandingPage } from '../pages/landing.page';
import { DynamicIdPage } from '../pages/dynamic-id.page';
import { ClassAttributePage } from '../pages/class-attribute.page';
import { HiddenLayersPage } from '../pages/hidden-layers.page';
import { LoadDelayPage } from '../pages/load-delay.page';
import { AjaxDataPage } from '../pages/ajax-data.page';

type MyPageObjects = {
  landingPage: LandingPage;
  dynamicIdPage: DynamicIdPage;
  classAttributePage: ClassAttributePage;
  hiddenLayersPage: HiddenLayersPage;
  loadDelaysPage: LoadDelayPage;
  ajaxDataPage: AjaxDataPage;
}

export const test = base.extend<MyPageObjects>({

  landingPage: async ({ page }, use) => {
    const landingPage = new LandingPage(page);
    await use(landingPage);
  },
  dynamicIdPage: async ({ page }, use) => {
    const dynamicIdPage = new DynamicIdPage(page);
    await use(dynamicIdPage);
  },
  classAttributePage: async ({ page }, use) => {
    const classAttributePage = new ClassAttributePage(page);
    await use(classAttributePage);
  },
  hiddenLayersPage: async ({ page }, use) => {
    const hiddenLayersPage = new HiddenLayersPage(page);
    await use(hiddenLayersPage);
  },
  loadDelaysPage: async ({ page }, use) => {
    const loadDelaysPage = new LoadDelayPage(page);
    await use(loadDelaysPage);
  },
  ajaxDataPage: async ({ page }, use) => {
    const ajaxDataPage = new AjaxDataPage(page);
    await use(ajaxDataPage);
  },
});

export { expect } from '@playwright/test';
