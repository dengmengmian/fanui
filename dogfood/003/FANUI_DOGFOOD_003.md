# FanUI Dogfood #3 — V0.3.3 Responsive Render Target

## Purpose

Dogfood #3 now validates **FanUI Web V0.3.3 Responsive / Mobile Closure** on top of the V0.3.2 Product Fidelity baseline.

Desktop visual acceptance established that the major IA, scale, fidelity, semantic color, editorial, Docs optical layout, and Workspace ownership directions were viable. Mobile screenshots then exposed a separate system-level gap: narrow-screen behavior was still largely Desktop compression rather than deliberate task transformation.

## V0.3.3 findings addressed

```text
Shrunk Desktop Evidence       → task-first crop / chrome removal / reflow
Cramped Split                 → deliberate text-first stacking
Hidden Without Replacement    → mobile site/docs/workspace context paths
Mobile Empty Canvas           → remaining canvas recomputed after panes collapse
Desktop Toolbar Wrap          → mobile context + primary action + compact view path
Runtime Takeover              → capped trace + stacked artifacts
Whole-page Horizontal Scroll  → local scroll only where semantically appropriate
Tiny Touch UI                 → 40–44px-class mobile primary controls
```

## Responsive decision model

Reference viewport matrix:

```text
1440 × 1000   Wide desktop
1024 × 900    Compact desktop / landscape tablet
768 × 1024    Tablet portrait
390 × 844     Mobile
375 × 812     Small-mobile spot check
```

Important regions are now classified with explicit transformations:

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

## Surface implementation

### Homepage

- explicit mobile navigation path;
- Hero display/lead/action scale recalibrated;
- CTA group stacks;
- Hero product evidence removes low-priority Desktop Sidebar/Inspector and lets the active run own mobile width;
- product steps remain readable without pinch zoom;
- split stories stack text-first;
- workflow graph reflows vertically;
- artifact evidence becomes task-first rather than retaining Desktop mini-shell geometry.

### Pricing

- one self-serve plan per row on phone widths;
- Enterprise becomes a stacked alternate purchasing path;
- comparison matrix uses local horizontal scrolling;
- document-level horizontal scrolling is forbidden.

### Documentation

- Desktop sidebar collapses;
- search remains first-class;
- explicit mobile Docs navigation replaces hidden sidebar access;
- active Getting Started route is retained;
- Quickstart cards and link groups stack;
- code blocks scroll locally.

### Editorial / Blog

- category navigation scrolls locally;
- Featured composition stacks;
- article cards become a one-column discovery flow;
- Editorial visuals retain idea-bearing content;
- article title/deck/Hero/body rhythm compresses deliberately.

### Product Home

- Desktop application sidebar collapses;
- attention and continue-work surfaces become a task-first single-column flow.

### AI / Professional Workspace

Desktop classification remains:

```yaml
experience: web_app
primary_archetype: ai_workspace
secondary_archetype: professional_workspace
core_value_loop: define_configure_run_observe_review_act
```

Mobile transformation:

```text
Desktop Navigator     → compact project/workflow context + Browse path
Desktop horizontal graph → vertical workflow nodes
Desktop Workspace tabs → mobile Browse / Workflow / Run / Artifacts / Review path
Desktop Runtime       → capped, internally scrollable trace
Desktop Artifact pane → stacked below trace
Desktop Inspector     → sequential Review / Approval section
Desktop primary action → 40px+ mobile Run control
```

This is intentionally not a scaled Desktop shell.

## Static / mechanical validation

The repository contains `dogfood/003/scripts/verify-responsive.mjs` and CI runs it before `next build`.

The gate verifies that:

- `v034.css` is loaded after Desktop/fidelity/precision layers;
- tablet/mobile/small-mobile breakpoints exist;
- document overflow guard exists;
- mobile Website, Docs, and Workspace replacement paths are present;
- workflow graph reflow exists;
- Runtime is capped;
- Inspector remains accessible;
- Pricing comparison uses local scroll;
- responsive specification and Skill routing are connected.

Latest validated responsive implementation gate:

```text
workflow: FanUI Dogfood 003 Build
run: #18 / 34340780742
head: 1deff3c28a5a791b10cc095ae64a8d90d5ab8d20
Verify responsive closure: PASS
Next build: PASS
conclusion: success
```

## Current status

```text
SPEC_V033_RESPONSIVE=PASS
SKILL_ROUTING=PASS
EVAL_GATE_COVERAGE=PASS
DOGFOOD_RESPONSIVE_IMPLEMENTATION=COMPLETE
RESPONSIVE_STATIC_GATE=PASS
REMOTE_BUILD=PASS
RENDERED_DESKTOP_ACCEPTANCE=PROVISIONAL_PASS
RENDERED_TABLET_ACCEPTANCE=PENDING
RENDERED_MOBILE_ACCEPTANCE=PENDING
SMALL_MOBILE_SPOT_CHECK=PENDING
```

## Final visual authority

Static gates prove that the responsive model is wired into the implementation; they do **not** prove optical quality in a real browser.

Final V0.3.3 acceptance requires rendered screenshots according to `SCREENSHOT_PLAN.md`, especially:

- 768 × 1024;
- 390 × 844;
- 375 × 812 spot checks.

Only rendered acceptance should promote V0.3.3 responsive bands into future component/token defaults.
