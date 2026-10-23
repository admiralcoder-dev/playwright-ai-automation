# Test strategy — Math Fun AI Tutor

## Initial scope

Read-only checks of public application availability: browser document rendering, reload, and HTTP HTML response. Run across desktop Chromium, Firefox, WebKit, and mobile Chromium.

## Separate non-blocking check

An axe-core scan checks critical accessibility violations. Triage findings before making it a release gate.

## Out of scope for v0.1

Parent authentication, child profiles, stars and progress persistence, math answer correctness, API contracts, destructive workflows, performance, and AI analysis.

## Entry/exit criteria

Entry: approved test target and no secrets in repository. Exit: tests execute on CI, results reviewed, flaky behavior investigated, and test evidence retained. Never interpret a green smoke suite as full product quality.

## Data protection

Use isolated test identities and disposable seeded data for future authenticated tests. Never use real child accounts or production mutations.
