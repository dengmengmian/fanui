# FanUI Dogfood #3 — Screenshot Plan

FanUI V0.3.4 treats Mobile Precision as first-class acceptance. Desktop correctness and basic responsive stacking are no longer sufficient.

## Viewport matrix

```text
Wide desktop     1440 × 1000
Compact desktop  1024 × 900
Tablet portrait   768 × 1024
Mobile            390 × 844
Small mobile      375 × 812
Browser zoom      100%
Light mode
```

For clean visual review prefer a production build:

```bash
npm run build
npm run start
```

This removes development indicators that can interfere with screenshots.

## Phase A — Wide desktop baseline

Capture these routes at **1440 × 1000**:

1. `/` — Hero + Product Showcase
2. `/` — Design the work
3. `/pricing` — plan summary
4. `/docs` — Docs Home
5. `/docs/getting-started` — Docs article
6. `/blog` — Blog Index
7. `/blog/reliable-agents` — Blog article
8. `/app` — Product Home
9. `/app/projects/atlas` — primary AI / Professional Workspace
10. `/zh` — Chinese stress surface

## Phase B — Tablet transformation

At **768 × 1024**, capture:

- `/`
- `/pricing`
- `/docs`
- `/blog`
- `/app/projects/atlas`

Check:

- split sections stack before they become cramped;
- plans move to an appropriate narrower grid;
- Docs navigation remains reachable;
- Product evidence removes low-priority chrome rather than becoming unreadable;
- Workspace graph and panes begin their mobile transformation cleanly.

## Phase C — Mobile precision acceptance

At **390 × 844**, capture all of:

### 1. Homepage Hero

Route: `/`

Required evidence:

- **one persistent Website header row** only;
- Brand + primary CTA + Menu fit cleanly;
- menu control is a real ~44px touch target with centered glyph;
- opening Menu exposes Product / Docs / Blog / Pricing and secondary Sign in path;
- Hero title/lead/actions remain balanced;
- Product Showcase has no giant unused field;
- main product content remains readable without zoom.

Also capture the opened navigation drawer once.

### 2. Homepage Product Story

Route: `/`

Scroll to `Design the work`.

Required:

- text above evidence;
- no narrow side-by-side heading column;
- workflow graph vertically reflowed;
- feature icons remain semantically correct;
- icon glyphs remain centered inside peer boxes;
- icon boxes align with first-line title anchors after text wrapping.

### 3. Pricing

Route: `/pricing`

Required:

- one clear plan per row;
- price/unit readability;
- Enterprise path stacked;
- no page-level horizontal overflow;
- comparison matrix, when reached, uses **local** horizontal scrolling.

### 4. Docs Home

Route: `/docs`

Required:

- Brand + `Docs` navigation control + Search use compact mobile chrome;
- no permanent horizontal Docs chip row;
- opening `Docs` exposes the complete Start / Build / Operate / Reference IA;
- navigation trigger has direct sidebar/navigation semantics and centered glyph;
- Quickstart cards stack;
- Explore list remains readable;
- Docs type feels denser than Blog/Editorial.

Also capture the opened Docs drawer once.

### 5. Docs Article

Route: `/docs/getting-started`

Required:

- complete Docs drawer remains available;
- article title/intro/body use task-reading scale;
- code blocks preserve line structure and use **internal horizontal scroll** when needed;
- no missing navigation caused by hidden sidebar/TOC;
- no document-level horizontal overflow.

### 6. Blog Index

Route: `/blog`

Required:

- category row remains one line and scrolls locally if needed;
- Featured story stacks;
- editorial visual retains meaning;
- Editorial type remains intentionally more spacious than Docs;
- Latest list is one-column and readable.

### 7. Blog Article

Route: `/blog/reliable-agents`

Required:

- article title does not fragment into unstable lines;
- Hero visual earns its mobile area;
- body uses sustained-reading Editorial scale rather than Docs scale;
- useful body content appears without excessive delay.

### 8. Product Home

Route: `/app`

Required:

- no desktop sidebar squeeze;
- attention/continue content becomes task-first mobile flow;
- icon controls preserve semantic meaning and practical touch targets.

### 9. AI / Professional Workspace

Route: `/app/projects/atlas`

Required:

- project/workflow/run context remains visible;
- mobile Browse/Workflow/Run/Artifacts/Review path is visible;
- horizontal graph becomes vertical nodes;
- primary action remains a real touch target;
- top icon controls retain centered 16px-class glyphs inside ~44px targets;
- Runtime is capped and readable, not an accidental full-page takeover;
- Artifact output remains accessible;
- Approval Inspector remains accessible as a sequential mobile Review section;
- no document-level horizontal scrolling.

### 10. Chinese stress

Route: `/zh`

Required:

- Chinese display title wraps naturally;
- mixed Chinese/English labels remain stable;
- header controls still fit;
- stress cards stack without overflow.

## Phase D — Small mobile pressure test

At **375 × 812**, capture:

- `/` with closed and opened Website Menu;
- `/docs` with opened Docs drawer;
- `/docs/getting-started` with a code block in view;
- `/pricing`;
- `/blog` category navigation;
- `/app/projects/atlas`.

This is a real acceptance width, not an optional spot check.

Check specifically:

- Brand + CTA + Menu do not collide;
- drawer stays fully inside the viewport;
- no multi-row category/tab collapse;
- no document-level horizontal overflow;
- icon-only controls still have practical hit areas;
- glyph centering/stroke consistency does not regress;
- code scroll is local;
- workspace context/action remains usable.

## Mobile Precision hard-fail checklist

Do not accept screenshots with:

- Shrunk Desktop Evidence;
- Hidden Without Replacement;
- Cramped Split;
- Desktop Toolbar Wrap;
- Runtime Takeover;
- Whole-page Horizontal Scroll;
- Tiny Touch UI;
- Mobile Empty Canvas;
- Double-decker Mobile Header;
- Truncated Sidebar Replacement;
- Editorial-sized Documentation;
- Wrapped Code Semantics;
- Multi-row Category / Tab Collapse;
- Tiny Icon Target;
- Mobile Icon Regression;
- Header Collision at 375px.
