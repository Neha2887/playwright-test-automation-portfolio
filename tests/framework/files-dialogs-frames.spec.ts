import { test, expect } from '../../fixtures/testFixtures';

test(
  'handles iframe and JavaScript dialog',
  { tag: ['@framework', '@iframe', '@dialog'] },
  async ({ page }) => {
    await page.setContent(
      '<iframe srcdoc="<button id=inside>Inside frame</button>"></iframe>' +
        '<button id=alert onclick="alert(\'Playwright dialog\')">Open dialog</button>',
    );

    await expect(
      page.frameLocator('iframe').locator('#inside'),
    ).toBeVisible();

    let dialogMessage = '';
    page.once('dialog', async (dialog) => {
      dialogMessage = dialog.message();
      await dialog.accept();
    });

    await page.locator('#alert').click();
    expect(dialogMessage).toBe('Playwright dialog');
  },
);

test(
  'uploads a file and handles a download',
  { tag: ['@framework', '@files'] },
  async ({ page }) => {
    await page.setContent(
      '<input id=file type=file>' +
        '<a id=download download="playwright-report.txt" ' +
        'href="data:text/plain,Playwright%20download">Download report</a>',
    );

    const input = page.locator('#file');
    await input.setInputFiles({
      name: 'sample.txt',
      mimeType: 'text/plain',
      buffer: Buffer.from('Playwright file upload'),
    });

    await expect(input).toHaveValue(/sample\.txt/);

    const downloadPromise = page.waitForEvent('download');
    await page.locator('#download').click();
    const download = await downloadPromise;

    expect(download.suggestedFilename()).toBe('playwright-report.txt');
  },
);
