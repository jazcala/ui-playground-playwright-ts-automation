import { test as base } from '@playwright/test';
import { LandingPage } from '../pages/landing.page';
import { DynamicIdPage } from '../pages/dynamic-id.page';
import { ClassAttributePage } from '../pages/class-attribute.page';

type MyPageObjects = {
  landingPage: LandingPage;
  dynamicIdPage: DynamicIdPage;
  classAttributePage: ClassAttributePage;
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
  }

});

export { expect } from '@playwright/test';
