# FanUI Dogfood #3 — Screenshot Plan

FanUI V0.3.3 treats responsive behavior as first-class acceptance. Desktop-only screenshots are no longer sufficient.

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

## Phase C — Mobile acceptance

At **390 × 844**, capture all of:

### 1. Homepage Hero

Route: `/`

Required evidence:

- brand + primary CTA;
- mobile navigation path;
- Hero title/lead/actions;
- Product Showcase with no giant unused field;
- main product content readable without zoom.

### 2. Homepage Product Story

Route: `/`

Scroll to `Design the work`.

Required:

- text above evidence;
- no narrow side-by-side heading column;
- workflow graph vertically reflowed;
- feature icons/text remain aligned.

### 3. Pricing

Route: `/pricing`

Required:

- one clear plan per row;
- price/unit readability;
- Enterprise path stacked;
- no page-level horizontal overflow.

The detailed comparison may use **local** horizontal scrolling.

### 4. Docs Home

Route: `/docs`

Required:

- search remains visible;
- replacement mobile Docs navigation is visible;
- quickstart cards stack;
- Explore list remains readable.

### 5. Docs Article

Route: `/docs/getting-started`

Required:

- active mobile Docs navigation;
- article title/intro/body readable;
- code blocks scroll locally if needed;
- no missing navigation caused by hidden sidebar/TOC.

### 6. Blog Index

Route: `/blog`

Required:

- category row remains usable;
- Featured story stacks;
- editorial visual retains meaning;
- Latest list is one-column and readable.

### 7. Blog Article

Route: `/blog/reliable-agents`

Required:

- article title does not fragment into unstable lines;
- Hero visual earns its mobile area;
- useful body content appears without excessive delay.

### 8. Product Home

Route: `/app`

Required:

- no desktop sidebar squeeze;
- attention/continue content becomes task-first mobile flow.

### 9. AI / Professional Workspace

Route: `/app/projects/atlas`

Required:

- project/workflow/run context remains visible;
- mobile Browse/Workflow/Run/Artifacts/Review path is visible;
- horizontal graph becomes vertical nodes;
- primary action remains a real touch target;
- Runtime is capped and readable, not an accidental full-page takeover;
- Artifact output remains accessible;
- Approval Inspector is still accessible as a sequential mobile Review section;
- no document-level horizontal scrolling.

### 10. Chinese stress

Route: `/zh`

Required:

- Chinese display title wraps naturally;
- mixed Chinese/English labels remain stable;
- stress cards stack without overflow.

## Phase D — Small mobile spot-check

At **375 × 812**, capture:

- `/`
- `/docs/getting-started`
- `/pricing`
- `/app/projects/atlas`

This pass specifically catches narrow-edge regressions hidden at 390px.

## Responsive hard-fail checklist

Do not accept screenshots with:

- Shrunk Desktop Evidence;
- Hidden Without Replacement;
- Cramped Split;
- Desktop Toolbar Wrap;
- Runtime Takeover;
- Whole-page Horizontal Scroll;
- Tiny Touch UI;
- Mobile Empty Canvas.
