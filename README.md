# Playwright Test Automation Portfolio

A professional **Playwright + TypeScript automation framework** demonstrating UI, API, mobile, framework architecture, BDD/Gherkin test design, parallel execution, authentication reuse, and CI/CD.

## Core Playwright Capabilities

- Page Object Model and reusable custom fixtures
- Test-scoped and worker-scoped fixtures
- Workers and fully parallel execution
- Two-shard GitHub Actions execution with merged reports
- Retries, max-failure protection, test/expect/action/navigation/global timeouts
- Chromium, Firefox, WebKit, Pixel 5 and iPhone 13 projects
- Project dependencies with authentication setup
- Reusable `storageState` authentication
- Data-driven testing
- Tags such as `@smoke`, `@regression`, `@api`, `@ui`, `@mobile`, and `@framework`
- UI Mode, Inspector/debug mode, Codegen and trace execution scripts
- Traces, screenshots and videos for failure diagnostics
- API testing with GET, POST, PUT and DELETE
- Network interception and response mocking
- BrowserContext isolation, multiple pages and storage-state reuse
- Mobile/device emulation
- Locale, timezone, dark mode, permissions and geolocation emulation
- File upload/download, iframe and dialog handling
- Playwright Clock for deterministic time
- Soft assertions, test steps, hooks, annotations and `testInfo` attachments
- Screenshot capture and an opt-in visual-regression example
- Gherkin scenarios for readable BDD-style test design

## Project Structure

```text
.
├── .github/workflows/       # Sharded CI pipeline and merged HTML report
├── docs/                    # Playwright feature guide
├── features/                # Gherkin / BDD scenarios
├── fixtures/                # Custom test and worker fixtures
├── pages/                   # Page Object classes
├── test-data/               # Reusable test data
├── tests/
│   ├── api/                 # REST API tests
│   ├── authenticated/       # Tests using saved authentication state
│   ├── framework/           # Playwright capability examples
│   ├── mobile/              # Mobile emulation tests
│   ├── ui/                  # Cross-browser UI and E2E tests
│   └── auth.setup.ts        # Authentication setup project
├── utils/                   # Reusable API client
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

## Run the Project

```bash
npm install
npx playwright install
npm test
```

Useful commands:

```bash
npm run test:smoke
npm run test:regression
npm run test:ui
npm run test:api
npm run test:mobile
npm run test:framework
npm run test:authenticated
npm run test:data-driven
npm run test:chromium
npm run test:workers:4
npm run test:ui-mode
npm run test:debug
npm run test:trace
npm run codegen
npm run report
```

## Workers and Parallel Execution

`fullyParallel: true` allows independent tests to run concurrently. CI uses **2 workers per shard** and GitHub Actions splits the suite across **2 shards**, allowing multiple worker processes and CI machines to execute tests concurrently.

## Authentication and Project Dependencies

The `setup` project logs in once and stores authenticated browser state in `playwright/.auth/user.json`. The `authenticated-chromium` project declares a dependency on `setup` and reuses that state instead of repeating login steps in every test.

## Cross-Browser and Mobile Projects

The framework separates API, desktop UI, authenticated UI, mobile and framework-capability tests into Playwright projects. Desktop UI coverage runs on Chromium, Firefox and WebKit. Mobile coverage runs with Pixel 5 and iPhone 13 device emulation.

## BDD / Gherkin

The `features/` folder contains Given/When/Then scenarios for business-readable test design and traceability. Executable automation uses the native Playwright Test runner.

## CI/CD

GitHub Actions performs TypeScript validation, installs Playwright browsers, runs the suite in two shards, uploads failure artifacts, merges Playwright blob reports, and publishes one HTML report.

## Detailed Feature Guide

See [`docs/PLAYWRIGHT_FEATURES.md`](docs/PLAYWRIGHT_FEATURES.md) for where each Playwright capability is implemented.

## Author

**Neha Joshi**  
Senior SDET | QA Automation Engineer  
Playwright | TypeScript | Selenium | API Testing | SQL | CI/CD
