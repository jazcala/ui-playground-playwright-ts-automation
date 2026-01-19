import { test, expect } from '../fixtures/base-test';
import path from 'path';
import fs from 'fs';

test.describe('File Upload Page Specs', () => {

  const fileName = `test-file-${process.env.TEST_WORKER_INDEX || 0}.txt`;
  const dataDir = path.resolve(__dirname, '../data');
  const filePath = path.join(dataDir, fileName);

  test.beforeAll(async () => {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(filePath, 'Hello! This file was created dynamically by the test suite.');
  });

  test.afterAll(async () => {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  });

  test.beforeEach(async ({ fileUploadPage }) => {
    await fileUploadPage.navigateTo();
  });

  test('verify page title is displayed', async ({ fileUploadPage }) => {
    await expect(fileUploadPage.title).toBeVisible();
  });

  test('should upload a file and verify the success message', async ({ fileUploadPage }) => {

    await fileUploadPage.uploadFile(filePath);
    await expect(fileUploadPage.uploadStatus).toContainText('1 file(s) selected');

  });

});
