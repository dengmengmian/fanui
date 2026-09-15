# UI testing contract

Test in proportion to risk and preserve the host repository's test stack.

## Minimum layers

1. Static: typecheck, lint, production build, and invalid token/class checks.
2. Component: behavior, states, accessible name/role, keyboard interaction, and critical content-pressure cases.
3. Journey: Playwright tests for the primary task and material error/permission paths.
4. Accessibility: axe automation plus manual keyboard, focus, zoom/reflow, and screen-reader smoke checks.
5. Automated visual regression: stable screenshots for representative states, Light/Dark themes, and relevant viewport/window sizes.

## Browser and viewport matrix

Derive browser support from the host Browserslist/product evidence. For general Web work, cover current Chromium, Firefox, and WebKit when those engines are in scope. A passing Chromium run is not Safari/WebKit compatibility proof.

For responsive Web surfaces, sample content pressure around 1440, 1024, 768, 390, and 375-class widths when relevant. Test the supported minimum, not only named device presets.

## Public pages

For indexable pages, verify rendered title, description, canonical, robots, status code, primary HTML content, links, structured data validity, and sitemap inclusion. Lighthouse is a diagnostic signal: document budgets by page class and investigate regressions; do not treat a universal score of 100 as the product requirement.

## Visual acceptance

Stabilize time, animations, fonts, data, and network-dependent regions before screenshot comparison. Review diffs for hierarchy, overflow, clipping, focus, state, theme, and text expansion. Update baselines only after the visual change is intentionally accepted.
