import { test, expect } from '../fixtures/base-test';
import { loginScenarios } from '../utils/sample-app.data';

test.describe('Sample App Page Specs', () => {

  test.beforeEach(async ({ sampleAppPage }) => {
    await sampleAppPage.navigateTo();
  });

  test('verify page title is displayed', async ({ sampleAppPage }) => {
    await expect(sampleAppPage.title).toBeVisible();
  });

  test('verify login elements are displayed', async ({ sampleAppPage }) => {

    await expect.soft(sampleAppPage.usernameField).toBeVisible();
    await expect.soft(sampleAppPage.passwordfield).toBeVisible();
    await expect.soft(sampleAppPage.loginButton).toBeVisible();

  });

  for (const scenario of loginScenarios) {
    test(`verify ${scenario.desc}`, async ({ sampleAppPage }) => {
      await sampleAppPage.login(scenario.username, scenario.password);
      await expect(sampleAppPage.loginStatus).toHaveText(scenario.expectedStatus);
    });
  }

  test('verify user can logout', async ({ sampleAppPage }) => {
    const username = 'John';
    await sampleAppPage.login(username, 'pwd');
    await sampleAppPage.logout();
    await expect(sampleAppPage.loginStatus).toHaveText(`User logged out.`);

  });

});
