# Playwright Test Automation Portfolio

A professional **UI + API automation framework** built with **Playwright and TypeScript**. This repository demonstrates framework design, Page Object Model, reusable utilities, cross-browser execution, test data separation, BDD/Gherkin scenario design, reporting, parallel execution, and CI/CD integration with GitHub Actions.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- REST API testing
- Gherkin / BDD scenario design
- GitHub Actions CI/CD
- HTML reporting
- Chromium, Firefox, and WebKit

## Project Structure

```text
.
├── .github/workflows/      # CI pipeline
├── features/               # Gherkin / BDD scenarios
│   ├── login.feature
│   ├── cart.feature
│   ├── api.feature
│   └── purchase.feature
├── pages/                  # Page Object classes
├── test-data/              # Test data
├── tests/
│   ├── api/                # REST API tests
│   └── ui/                 # Browser UI tests
├── utils/                  # Reusable helpers / API clients
├── playwright.config.ts    # Playwright configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

## What This Framework Demonstrates

This is a portfolio-safe implementation of common enterprise SDET practices. It uses public demo systems and contains no proprietary employer code or data.

## Key Automation Features

- Clean Page Object Model design
- UI and REST API tests in one framework
- BDD-style business scenarios written in Gherkin
- Reusable API client
- Environment-based configuration
- Cross-browser execution
- Parallel test execution using Playwright workers
- Retry strategy for CI
- Screenshots, traces, and video on failures
- HTML reports
- GitHub Actions quality gate

## BDD / Gherkin Scenarios

The `features/` folder documents key business scenarios using **Given / When / Then** syntax. These scenarios are used for readable test design and traceability, while the executable automation currently runs with the native Playwright Test runner.

Current feature coverage includes:

- Valid and invalid login
- Add product to cart
- REST API GET and POST validation
- End-to-end purchase flow

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Neha2887/playwright-test-automation-portfolio.git
cd playwright-test-automation-portfolio
```

### 2. Install dependencies

```bash
npm install
npx playwright install
```

### 3. Configure environment variables

Copy `.env.example` to `.env`.

```bash
cp .env.example .env
```

### 4. Run all tests

```bash
npm test
```

### Run only UI tests

```bash
npm run test:ui
```

### Run only API tests

```bash
npm run test:api
```

### Run tests in headed mode

```bash
npm run test:headed
```

### View the HTML report

```bash
npm run report
```

## Example Test Coverage

### UI
- Positive login
- Negative login
- Product page validation
- Add-to-cart workflow

### API
- GET resource validation
- POST request validation
- HTTP status validation
- Response body assertions

## CI/CD

The GitHub Actions workflow runs automatically on pushes and pull requests to `main`. It installs Node.js dependencies and Playwright browsers, executes the automation suite, and uploads the Playwright HTML report as a build artifact.

## Why This Project

This project demonstrates the type of automation architecture I use for enterprise QA: readable tests, reusable components, maintainable locators, API coverage, BDD-style test design, parallel execution, diagnostics for failures, and CI/CD integration.

## Future Enhancements

- Database validation with SQL Server
- Authentication storage state
- Data-driven testing
- Custom fixtures
- Accessibility testing
- Visual regression testing
- Docker execution
- Allure reporting

## Author

**Neha Joshi**  
Senior SDET | QA Automation Engineer  
Playwright | TypeScript | Selenium | API Testing | SQL | CI/CD
