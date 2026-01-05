import { test, expect } from '../fixtures/base-test';
import path from 'path';

test.describe('File Upload Page Specs', () => {

  test.beforeEach(async ({ fileUploadPage }) => {
    await fileUploadPage.navigateTo();
  });

  test('verify page title is displayed', async ({ fileUploadPage }) => {
    await expect(fileUploadPage.title).toBeVisible();
  });

  test('should upload a file and verify the success message', async ({ fileUploadPage }) => {

    const filePath = path.resolve(__dirname, '../data/test-file.txt');
    await fileUploadPage.uploadFile(filePath);
    await expect(fileUploadPage.uploadStatus).toContainText('1 file(s) selected');

  });

});
