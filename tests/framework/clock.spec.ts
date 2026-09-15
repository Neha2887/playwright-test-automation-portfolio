import { test, expect } from '../../fixtures/testFixtures';

test(
  'controls browser time with Playwright Clock',
  { tag: ['@framework', '@clock'] },
  async ({ page }) => {
    await page.clock.setFixedTime(new Date('2026-01-15T10:00:00Z'));
    await page.setContent(
      '<div id=time></div><script>' +
        'document.querySelector("#time").textContent = new Date().toISOString();' +
        '</script>',
    );

    await expect(page.locator('#time')).toHaveText('2026-01-15T10:00:00.000Z');
  },
);
