import { test, expect } from '../../fixtures/testFixtures';

const cases = [
  { value: 'playwright', expectedLength: 10 },
  { value: 'typescript', expectedLength: 10 },
  { value: 'automation', expectedLength: 10 },
];

for (const testCase of cases) {
  test(
    `data-driven example validates ${testCase.value}`,
    { tag: ['@framework', '@dataDriven'] },
    async ({ page }) => {
      await page.setContent(
        `<input id="value"><div id="length"></div>
         <script>
           const input = document.querySelector('#value');
           input.addEventListener('input', () => {
             document.querySelector('#length').textContent =
               String(input.value.length);
           });
         </script>`,
      );

      await page.locator('#value').fill(testCase.value);

      await expect(page.locator('#length')).toHaveText(
        String(testCase.expectedLength),
      );
    },
  );
}
