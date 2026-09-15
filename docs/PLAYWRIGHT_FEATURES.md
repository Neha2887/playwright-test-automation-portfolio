# Playwright Feature Guide

This repository demonstrates the Playwright capabilities most useful in a production SDET framework.

## Execution and scale

- **Workers:** configured in `playwright.config.ts`; CI uses 2 workers.
- **Fully parallel:** enabled globally; independent tests can execute concurrently.
- **Sharding:** GitHub Actions runs 2 shards and merges blob reports.
- **Retries:** enabled on CI.
- **maxFailures:** limits wasted CI execution after repeated failures.
- **Project-level workers:** the `framework` project is capped at one worker to demonstrate project-specific control.
- **Repeat and last-failed execution:** available through npm scripts.

## Projects and environments

- Authentication setup project
- Authenticated Chromium project with a dependency on setup
- API-only project
- Chromium, Firefox and WebKit desktop projects
- Pixel 5 and iPhone 13 mobile projects
- Dedicated framework-capability project
- Environment-driven UI and API base URLs

## Authentication

- `tests/auth.setup.ts` logs in once.
- Authenticated state is saved to `playwright/.auth/user.json`.
- `authenticated-chromium` depends on the setup project.
- Tests in `tests/authenticated/` reuse `storageState`.
- The auth directory is ignored by Git so session data is not committed.

## Test organization

- Page Object Model
- Custom test fixtures
- Worker-scoped fixture with `workerIndex` and `parallelIndex`
- Automatic fixture adding worker metadata to reports
- Hooks with `beforeEach`
- `test.step()` for readable actions
- Native Playwright tags and grep-based smoke/regression commands
- Soft assertions with `expect.soft()`
- Data-driven tests generated from test-data arrays

## Browser automation features

- Role, locator and custom `getByTestId()` strategies
- Custom `testIdAttribute` mapped to SauceDemo's `data-test` attribute
- BrowserContext isolation
- Multiple pages in one context
- `storageState()` capture and reuse
- Mobile device emulation
- Locale, timezone and dark-mode emulation
- Permissions and geolocation
- Iframe handling with `frameLocator()`
- JavaScript dialog handling
- File upload with `setInputFiles()`
- Download event handling
- Network interception with `page.route()`
- Response synchronization with `waitForResponse()`
- Playwright Clock

## API testing

`tests/api/posts.spec.ts` and `utils/apiClient.ts` demonstrate GET, POST, PUT and DELETE requests using Playwright's API request fixture and response assertions.

## Diagnostics and reporting

- Trace on first retry
- Screenshot on failure
- Video retained on failure
- Unique `testInfo.outputPath()` artifacts
- `testInfo.attach()` metadata
- HTML reports locally
- Blob reports in sharded CI
- Merged HTML report in GitHub Actions

## Developer tooling

- UI Mode: `npm run test:ui-mode`
- Inspector/debug: `npm run test:debug`
- Codegen: `npm run codegen`
- Trace-enabled execution: `npm run test:trace`
- Test listing: `npm run test:list`
- Repeat-each and last-failed commands
- Worker-count override scripts
- Shard-specific scripts

## Visual testing

`tests/framework/visual.spec.ts` always captures a screenshot artifact. It also includes an opt-in `toHaveScreenshot()` visual-regression example. Snapshot baselines are not forced into normal CI because visual baselines should be intentionally generated and reviewed for the target operating system/browser.

## Features intentionally not forced into this demo

A few Playwright capabilities are target-application or infrastructure specific rather than universally useful: a local `webServer`, corporate proxy configuration, HAR replay, branded Chrome/Edge channels, and component testing. Those should be added when the system under test actually needs them rather than only for checkbox coverage.
