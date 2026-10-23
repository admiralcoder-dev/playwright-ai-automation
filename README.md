# AdmiralCoder | Playwright + TypeScript QA Automation

> **Status: v0.1 foundation.** Tests have not yet been validated against the live app in CI. AI-assisted triage is planned, not implemented.

[AdmiralCoder](https://admiralcoder.com) · [Math Fun AI Tutor](https://math-fun-ai-tutor.web.app/index.html)

A maintainable, risk-based Playwright Test framework for real applications. Initial tests are **read-only** checks of the public Math Fun AI Tutor site.

## Features
- TypeScript, Page Object Model, reusable test data and diagnostics
- Desktop Chromium, Firefox, WebKit, and mobile Chromium
- UI smoke tests, HTTP endpoint check, separate axe-core accessibility check
- HTML reports, screenshots/videos on failure, traces on retry
- GitHub Actions smoke workflow and strict TypeScript type checking
- Environment-specific base URL via `TARGET_BASE_URL`

## Setup

Requires Node.js 22+ and npm.

```bash
npm install
npx playwright install
npm run typecheck
npm run test:smoke
npm run report
```

Windows PowerShell: `Copy-Item .env.example .env` before running tests.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run test:smoke` | Browser and HTTP smoke tests |
| `npm run test:api` | Public endpoint check |
| `npm run test:a11y` | Critical accessibility scan (separate gate) |
| `npm run test:ui` | Interactive runner |
| `npm run typecheck` | TypeScript validation |
| `npm run report` | View HTML report |

## Architecture

```text
pages/HomePage.ts
tests/smoke/home.spec.ts
tests/api/public-site.spec.ts
tests/accessibility/home.a11y.spec.ts
utils/testData.ts
utils/diagnostics.ts
docs/ARCHITECTURE.md
docs/TEST_STRATEGY.md
docs/ROADMAP.md
playwright.config.ts
.github/workflows/playwright.yml
```

**Quality principles:** no production mutations or real child data; prefer semantic locators; isolate authenticated tests with seeded test accounts; deterministic assertions remain the pass/fail oracle even when AI assistance is added.

## Known limitations

- Application-specific login, child profiles, math exercises, and persistence tests are not yet implemented.
- No AI-driven functionality exists in v0.1.
- Dependency lockfile pending. CI currently installs dependencies using `npm install`; generate and commit `package-lock.json` before switching to `npm ci`.
- Smoke checks cannot prove all application features work.

See [strategy](docs/TEST_STRATEGY.md), [architecture](docs/ARCHITECTURE.md), and [roadmap](docs/ROADMAP.md).
