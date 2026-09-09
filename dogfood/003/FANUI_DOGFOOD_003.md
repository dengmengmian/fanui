# FanUI Dogfood #3 — V0.3.4 Mobile Precision Render Target

## Purpose

Dogfood #3 now validates **FanUI Web V0.3.4 Mobile Precision Closure** on top of the V0.3.3 Responsive Transformation and V0.3.2 Product Fidelity baselines.

Desktop acceptance established the major IA, scale, fidelity, semantic color, editorial, Docs optical layout, and Workspace ownership direction. V0.3.3 then fixed structural Mobile transformation. Real phone screenshots exposed the next layer: mobile chrome, navigation replacement completeness, task-vs-editorial typography, local scrolling, 375px pressure, touch geometry, and breakpoint icon precision.

## V0.3.4 findings addressed

```text
Double-decker Website Header  → one persistent row + complete Menu drawer
Truncated Docs Chips          → complete Start/Build/Operate/Reference drawer
Editorial-sized Docs          → dedicated task-reading mobile scale
Wrapped Code Semantics        → preserved preformatted code + local scroll
Multi-row Tab Risk            → one-line local-scroll category/tab strategy
390-only Confidence           → required 375 × 812 pressure rules
Tiny Icon Target              → 40–44px control geometry, compact glyph
Mobile Icon Regression        → semantic/centering/stroke/baseline invariance
```

## Responsive + precision decision model

Reference viewport matrix:

```text
1440 × 1000   Wide desktop
1024 × 900    Compact desktop / landscape tablet
768 × 1024    Tablet portrait
390 × 844     Mobile
375 × 812     Required small-mobile pressure test
```

Important regions continue to use explicit transformations:

```text
preserve
scale
stack
reorder
collapse
scroll
crop
replace
sheet
drawer
```

V0.3.4 adds a second pass after the transformation:

```text
chrome budget
navigation completeness
surface-specific typography
local-scroll semantics
touch geometry
icon precision
375px pressure
```

## Surface implementation

### Homepage

- phone Website header is now one persistent row;
- Product/Docs/Blog/Pricing move into a Menu drawer;
- Open Flowbit remains the primary phone CTA;
- menu glyph remains compact inside a 44px target;
- Hero/product evidence keeps the V0.3.3 task-first mobile transformation;
- split stories stack text-first;
- workflow graph reflows vertically;
- repeated feature icons retain semantic fit and first-line alignment.

### Pricing

- one self-serve plan per row on phone widths;
- Enterprise remains a stacked alternate purchasing path;
- detailed comparison uses local horizontal scrolling;
- document-level horizontal scrolling remains forbidden;
- 375px title/gutter pressure is explicitly calibrated.

### Documentation

- Desktop Sidebar now transforms into a **full Docs Drawer** rather than a partial chip strip;
- Search remains persistent and first-class;
- the drawer exposes Start / Build / Operate / Reference sections;
- Docs Home/Article use a denser task-reading type scale than Blog;
- code/configuration keeps line semantics through local horizontal scroll;
- drawer trigger uses direct sidebar/navigation icon semantics with ~44px touch geometry.

### Editorial / Blog

- category navigation is a one-line local scroller when width is insufficient;
- Featured composition stacks;
- article cards become a one-column discovery flow;
- Editorial visuals retain idea-bearing content;
- Blog index/article use a distinct sustained-reading mobile scale rather than Docs scale.

### Product Home / AI Workspace

- Desktop application/sidebar transformation remains task-first;
- top icon controls now use explicit semantic classes;
- low-priority Help/Notification controls collapse on narrow phones while Search remains;
- phone icon targets use ~44px geometry with compact centered glyphs;
- Workspace graph remains vertical on phone;
- Runtime remains capped;
- Artifact output remains accessible;
- Approval Inspector remains a sequential Mobile Review section.

## Icon precision changes

The Mobile pass explicitly checks the same failures previously found on Desktop:

```text
Approximate Icon Semantics
Glyph Drift
Icon-box Override
Text-block Centering
```

and adds:

```text
Tiny Icon Target
Mobile Icon Regression
```

Workspace navigation semantics were tightened:

```text
Workspace     → Workflow
Recent runs   → Activity
Environments  → Layers
Integrations  → Plug
```

The goal is not more icons. It is more defensible icons.

## Static / mechanical validation

The repository contains `dogfood/003/scripts/verify-responsive.mjs` and CI runs it before `next build`.

The gate checks:

- `v035.css` is imported after `v034.css`;
- 820 / 640 / 390 / 375 response bands exist;
- Website Menu/Drawer exists and the old second nav band is disabled;
- Docs full Mobile Drawer exists and includes deeper IA;
- Docs task-reading typography is present;
- code semantics use local scrolling;
- Blog categories use local scrolling and Blog body has its own scale;
- Workspace Mobile context/Review path remains available;
- Runtime is capped;
- Inspector remains accessible;
- icon-only workspace controls have explicit classes and ~44px geometry;
- responsive/mobile-precision/icon specifications are connected to the Skill path.

Latest validated implementation before this status-only report update:

```text
workflow: FanUI Dogfood 003 Build
run: #32 / 34353583358
head: 4d9f48cf98d6a101006ee8e33ba23c546a3df91f
Verify responsive precision closure: PASS
Next build: PASS
conclusion: success
```

## Current status

```text
SPEC_V034_MOBILE_PRECISION=PASS
RESPONSIVE_DECISION_LAYER=PASS
ICONOGRAPHY_PRECISION=PASS
EVAL_GATE_COVERAGE=PASS
DOGFOOD_V035_IMPLEMENTATION=COMPLETE
RESPONSIVE_PRECISION_STATIC_GATE=PASS
REMOTE_BUILD=PASS
RENDERED_DESKTOP_ACCEPTANCE=PROVISIONAL_PASS
RENDERED_TABLET_ACCEPTANCE=PENDING
RENDERED_MOBILE_390_ACCEPTANCE=PENDING
RENDERED_SMALL_MOBILE_375_ACCEPTANCE=PENDING
```

## Final visual authority

Static gates prove that Mobile Precision is wired into the implementation. They do **not** prove optical quality in a real browser.

Final V0.3.4 acceptance requires screenshots according to `SCREENSHOT_PLAN.md`, especially:

- 390 × 844 with Website and Docs drawers opened;
- 375 × 812 pressure checks;
- Docs code block with internal scrolling behavior;
- Website feature icon alignment;
- Workspace touch/icon geometry.

Only rendered acceptance should promote these Mobile bands into future primitives/tokens.
