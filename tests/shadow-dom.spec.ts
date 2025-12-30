import { test, expect } from '../fixtures/base-test';

test.describe('Shadow DOM Page Specs', () => {

  test.beforeEach(async ({ shadowDomPage }) => {
    await shadowDomPage.navigateTo();
  });

  test('verify page elements are displayed', async ({ shadowDomPage }) => {
    await expect.soft(shadowDomPage.title).toBeVisible();
    await expect.soft(shadowDomPage.field).toBeVisible();
    await expect.soft(shadowDomPage.field).toBeEmpty();
    await expect.soft(shadowDomPage.generateButton).toBeVisible();
    await expect.soft(shadowDomPage.copyButton).toBeVisible();
  });

  test('generate a value', async ({ shadowDomPage }) => {

    await expect.soft(shadowDomPage.field).toBeEmpty();
    await shadowDomPage.generateGuid();
    await expect(shadowDomPage.field).not.toBeEmpty();

  });

  test('generate a guid copy and compare value with clipboard', async ({ shadowDomPage, context }) => {
    test.skip(
      true,
      'Skipping clipboard validation: navigator.clipboard API is unavailable in non-secure (HTTP) contexts.'
    );
    await shadowDomPage.generateGuid();
    // Ensure permissions are granted for this specific test context
    await context.grantPermissions(['clipboard-read']);
    await shadowDomPage.copyValue();
    const clipValue: string = await shadowDomPage.getClipboardValue();
    console.log(`clipboar value ${clipValue}`);
    await expect(shadowDomPage.field).toHaveValue(clipValue);

  });
});
