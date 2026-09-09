# FanUI Web V0.3.3 — Responsive / Mobile Closure

## Why this release exists

Dogfood #3 reached a stable Desktop product language, but Mobile screenshots exposed a systemic gap: Desktop geometry was being compressed or partially hidden rather than deliberately transformed.

Observed failures included:

- Hero Product Evidence shrinking into a narrow readable strip with unused space beside it;
- Desktop split sections remaining side-by-side and producing word-by-word headings;
- Workspace side panes disappearing without a first-class mobile access model;
- Runtime stacking into an oversized mobile console;
- Docs sidebar disappearing without equivalent mobile navigation;
- Desktop control sizing and spacing surviving unchanged on narrow screens.

## V0.3.3 adds

### Responsive Decision Layer

`docs/foundations/responsive.md`

Defines:

- viewport classes;
- validation matrix;
- transformation vocabulary;
- Product Evidence transformation;
- touch-target floor;
- responsive hard failures.

### Mobile Website Patterns

`docs/website/mobile.md`

Defines Mobile behavior for:

- Website Header/Hero;
- Product Evidence;
- split feature sections;
- Pricing;
- Documentation;
- Editorial/Blog;
- Footer.

### Mobile Workspace

`docs/web-app/mobile-workspace.md`

Defines deliberate transformation for:

- Navigator;
- Workspace tabs;
- graph/canvas;
- Inspector/Approval;
- Runtime;
- Artifacts;
- current context.

### Responsive Anti-patterns

`docs/anti-patterns/v033.md`

Adds:

- Shrunk Desktop Evidence;
- Hidden Without Replacement;
- Cramped Split;
- Desktop Toolbar Wrap;
- Runtime Takeover;
- Whole-page Horizontal Scroll;
- Tiny Touch UI;
- Mobile Empty Canvas.

## Dogfood implementation

`dogfood/003` now includes a final-cascade responsive layer (`app/v034.css`) plus explicit mobile navigation/context paths.

Key transformations:

### Homepage

- Mobile navigation row replaces squeezed Desktop navigation.
- Hero typography scales to a stable Mobile display range.
- Hero Product Evidence removes low-priority Sidebar/Inspector chrome and lets the active run own the width.
- CTAs stack.
- Split product stories stack text-first.
- Workflow graph reflows vertically.
- Artifact evidence becomes task-first instead of keeping a Desktop mini-shell.

### Pricing

- Plans become one-column.
- Enterprise becomes a stacked alternate path.
- Detailed comparison uses local horizontal scrolling.

### Docs

- Persistent sidebar collapses.
- Search stays visible.
- Mobile Docs navigation replaces hidden sidebar access.
- Quickstart cards stack.
- Code blocks scroll locally.

### Blog

- Category navigation scrolls locally.
- Featured story stacks.
- Article cards become one-column.
- Hero visual and article typography compress deliberately.

### AI / Professional Workspace

- Desktop Navigator becomes compact mobile context.
- Mobile Browse/Workflow/Run/Artifacts/Review path remains visible.
- Horizontal graph becomes vertical.
- Runtime becomes capped/scrollable instead of taking over the page.
- Artifact output stacks below runtime trace.
- Approval Inspector remains accessible as a sequential Review section.

## Acceptance matrix

Rendered acceptance now requires:

```text
1440 × 1000
768 × 1024
390 × 844
375 × 812 spot-check
```

A page cannot become a FanUI reference from Desktop screenshots alone.

## Success condition

V0.3.3 passes when Mobile feels like the same product team intentionally redesigned the task for less width — not when the Desktop CSS happens to avoid crashing.
