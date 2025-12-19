import { test as base } from '@playwright/test';
import { LandingPage } from '../pages/landing.page';
import { DynamicIdPage } from '../pages/dynamic-id.page';

type MyPageObjects = {
  landingPage: LandingPage;
  dynamicIdPage: DynamicIdPage;
}

export const test = base.extend<MyPageObjects>({

  landingPage: async ({ page }, use) => {
    const landingPage = new LandingPage(page);
    await use(landingPage);
  },
  dynamicIdPage: async ({ page }, use) => {
    const dynamicIdPage = new DynamicIdPage(page);
    await use(dynamicIdPage);
  }

});

export { expect } from '@playwright/test';
