# Framework architecture

## Layers

- `playwright.config.ts`: browser matrix, retry policy, environment, diagnostics.
- `pages/`: reusable page interactions and assertions.
- `tests/`: small, independent, purpose-tagged scenarios.
- `utils/`: safe test data and opt-in diagnostics.
- `.github/workflows/`: CI smoke gate and artifact retention.

## Design decisions

Use semantic selectors where possible, avoid fixed sleeps, keep tests independent, do not expose secrets or real child data, and collect traces only when useful. AI assistance is a future diagnostic layer, never the assertion oracle.
