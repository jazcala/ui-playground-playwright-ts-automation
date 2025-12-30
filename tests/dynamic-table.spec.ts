import { test, expect } from '../fixtures/base-test';

test.describe('Dynamic Table Specs', () => {

  test.beforeEach(async ({ dynamicTablePage }) => {
    await dynamicTablePage.navigateTo();
  });

  test('verify page title is displayed', async ({ dynamicTablePage }) => {
    await expect(dynamicTablePage.title).toBeVisible();
  });

  test('get value from chorme process', async ({ dynamicTablePage }) => {

    const labelText: string = await dynamicTablePage.getLabelText();
    const tableValue: string = await dynamicTablePage.getChromeCpuValue();

    expect(labelText).toContain(tableValue);

  });
});
