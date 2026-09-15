# React component candidates

These components are the first experimental extraction from the Apifox page-family study. They are usable code, but their API may change before `stable` status.

| Component | Status | Repeated evidence | Responsibility |
| --- | --- | --- | --- |
| `Button` | candidate | global CTA, pricing, login, workspace actions | semantic action hierarchy, busy/disabled/focus behavior |
| `SearchField` | candidate | Help, API Hub, API Skills | labelled search input with optional leading icon |
| `SegmentedControl` | candidate | pricing cycle and mode selection | one-of-many compact selection using radio semantics |
| `Disclosure` | candidate | homepage features, FAQ, navigation explanations | native expandable content with keyboard semantics |
| `ResourceCard` | candidate | API Hub, Docs home, API Skills | reusable identity/metadata/description/category order |
| `PricingCard` | candidate | pricing page | plan hierarchy, features, price, recommendation and action |

Source: `packages/react/src/index.ts`.

## Promotion gates

A candidate becomes stable only after:

- use in real FanUI-guided product work;
- Light/Dark and product-theme override review;
- responsive/content-pressure review in Chinese and English;
- keyboard, focus, accessible-name/state, and screen-reader smoke checks;
- component and visual-regression coverage;
- an API review confirming that business fields and page-specific layout did not leak into the primitive.

Do not create a public component merely because a Tailwind class group repeats. Site headers, docs shells, article layouts, authentication shells, and product workspaces remain page patterns until their slots and interaction contracts are validated in implementation.

