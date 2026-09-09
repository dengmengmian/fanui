# FanUI Dogfood #3 — Flowbit

## Purpose

Dogfood #3 validates **FanUI Web V0.3.1** after the first two rounds exposed two classes of failure:

1. task-oriented AI products drifting into generic management-console IA;
2. visually timid scale, uniform spacing, weak brand expression, and one-size-fits-all page density.

This implementation is intentionally a **cross-surface** test rather than a Homepage-only test.

## FanUI classification

### Product Website

```yaml
experience: website
page_archetype: product_home
primary_story: reliable_ai_workflow_operations
primary_visual_anchor: hero_product_showcase
visual_amplitude: high
brand_expression: high
standard_container: 1160
wide_product_container: 1240
hero_display: 64
hero_lead: 20
hero_cta_height: 42
hero_showcase: 86vw
section_rhythm: varied
```

### Pricing

```yaml
experience: pricing
primary_task: choose_plan_confidently
visual_amplitude: medium
brand_expression: medium
plan_container: 1220
price_scale: 44
plan_padding: 26-28
comparison_density: 48px_rows
```

### Documentation

```yaml
experience: documentation
primary_task: retrieve_and_learn
navigation_depth: deep
visual_amplitude: low_medium
brand_expression: low
left_nav: 250
article_measure: 820
body: 16
nav_row: 34
```

### Editorial

```yaml
experience: editorial
index_priority: discover
article_priority: read
visual_amplitude: medium_index_low_article
brand_expression: medium_index_low_article
index_container: 1160
article_measure: 730
article_body: 17
article_title: 56
```

### Web App

```yaml
experience: web_app
primary_archetype: ai_workspace
secondary_archetype: professional_workspace
core_value_loop: define_configure_run_observe_review_act
default_home: continue_work
visual_amplitude: low
brand_expression: low
density: medium_compact
```

## Architecture decision

The Web App does **not** use this primary navigation:

```text
Overview
Projects
Agents
Runs
Artifacts
```

Instead:

```text
Continue
Workspace
Recent runs
  ↓
Project: Atlas
  ↓
Workflows / project-local Agents / Artifacts
  ↓
Current workflow canvas + runtime + inspector
```

`Projects`, `Agents`, `Runs`, and `Artifacts` remain domain concepts, but are not mechanically promoted to equal global navigation.

## Cross-surface differences deliberately implemented

### Homepage

- largest display scale;
- strongest brand expression;
- largest product evidence;
- 100px-class narrative transitions;
- multiple composition types instead of a repeated feature-card grid.

### Pricing

- smaller title than Homepage Hero;
- tighter vertical rhythm;
- compact plan surfaces;
- dense comparison table;
- Enterprise buying path separated from self-serve plans.

### Docs

- 60px header;
- 250px persistent navigation;
- 34px nav rows;
- 16px technical body;
- article spacing in the 20–56px range rather than Marketing section spacing.

### Blog

- discovery-oriented 1160px index;
- reading-oriented 730px article body;
- 17px / 1.85 reading typography;
- CTA pressure kept out of the article body.

### Product UI

- 52px global bar;
- compact navigation and tree rows;
- fluid workspace rather than centered Website container;
- low brand expression;
- semantic run / approval / completion states provide useful color.

## Brand approach

Flowbit uses a violet → rose accent family for Marketing identity, but brand is not reduced to a purple button.

Brand character also comes from:

- large Product Showcase framing;
- gradient display treatment only in high-expression regions;
- recurring soft violet selection surfaces;
- restrained depth language;
- product-specific workflow/run visual motifs.

Operational status colors remain separate from the brand palette.

## Anti-pattern checks performed during implementation

- Management Console Drift — avoided.
- Noun-trap Navigation — avoided.
- Timid Product Hero — addressed with 64px display and wide Product Showcase.
- Product Screenshot as Thumbnail — addressed with a readable full product composition.
- Uniform-spacing Product Family — avoided through dedicated page-family metrics.
- Marketing-sized Documentation — avoided.
- Dashboard-sized Editorial — avoided.
- Landing-page Pricing — avoided.
- Website-sized Product UI — avoided.
- Card Soup — monitored; cards are used for comparable/independent objects, not every structural region.
- Generic Purple SaaS Identity — partially guarded through composition/product visuals; rendered inspection still required.

## Mechanical validation

Actual repository validation:

```text
ROUTES_IMPLEMENTED=9
CROSS_SURFACE_FAMILIES=5
CHINESE_STRESS_ROUTE=YES
BUILD_CHECK=PASS
GITHUB_ACTIONS_RUN=34329704536
RENDERED_VISUAL_ACCEPTANCE=PENDING
```

GitHub Actions `FanUI Dogfood 003 Build` completed successfully on Node 20:

- dependency install: PASS;
- `npm run build`: PASS;
- job conclusion: `success`.

This proves the committed Next.js implementation compiles. It does not prove rendered visual quality.

## Rendered acceptance gate

This implementation must **not** be accepted from this document alone.

After local run, inspect all screenshots in `SCREENSHOT_PLAN.md` at 1440 × 1000.

The rendered gate should answer:

1. Does Homepage scale now materially approach the intended FanUI reference quality?
2. Is product evidence genuinely readable and visually dominant?
3. Do later Homepage sections have different amplitude/rhythm?
4. Does Pricing feel like a decision surface rather than a marketing-card gallery?
5. Do Docs and Blog clearly use different reading/density systems?
6. Does the Web App feel like a real working environment rather than a SaaS admin shell?
7. Are Tree / Toolbar / Table-like / Inspector densities comfortable for sustained use?
8. Does Chinese copy preserve hierarchy and spacing?
9. Is Flowbit visually distinct enough that changing the accent hex would not fully rebrand it?

## Status

```text
IMPLEMENTATION=COMPLETE
REMOTE_BUILD=PASS
FULL_RENDERED_ACCEPTANCE=PENDING
```
