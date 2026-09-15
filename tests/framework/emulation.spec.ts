import { test, expect } from '../../fixtures/testFixtures';

test.use({
  colorScheme: 'dark',
  locale: 'en-GB',
  timezoneId: 'Europe/London',
  geolocation: {
    latitude: 51.5072,
    longitude: -0.1276,
  },
  permissions: ['geolocation'],
});

test(
  'emulates locale, timezone, color scheme and geolocation',
  { tag: ['@framework', '@emulation'] },
  async ({ page }) => {
    await page.goto('/');

    const browserSettings = await page.evaluate(async () => {
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) =>
          navigator.geolocation.getCurrentPosition(resolve, reject),
      );

      return {
        darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    });

    expect(browserSettings.darkMode).toBe(true);
    expect(browserSettings.timezone).toBe('Europe/London');
    expect(browserSettings.language).toBe('en-GB');
    expect(browserSettings.latitude).toBeCloseTo(51.5072, 3);
    expect(browserSettings.longitude).toBeCloseTo(-0.1276, 3);
  },
);
