# FanUI

**FanUI is an AI-native UI design system for building consistent, polished web experiences with coding agents.**

FanUI is not primarily a component library. It is a design language, page-pattern system, calibration framework, product-fidelity model, responsive decision system, AI decision system, and evaluation rubric.

## Current scope

FanUI Web V0.3.4 covers five first-class web experience families:

1. Product Website
2. Documentation
3. Editorial / Blog
4. Pricing / Conversion
5. Web Application

Web Application archetypes:

- Management Console
- Professional Workspace
- Data Application
- AI Workspace

Primary reference: **Apifox** across website/docs/blog/pricing/product UI. Secondary reference: **Pixso** for brand expression, Marketing composition, and product presentation. References are used to extract quality characteristics, not copy appearance.

## Core direction

> **Dense, but calm.**

> **Structured, not sterile.**

> **Rich enough to feel designed. Calm enough to stay usable.**

> **Product stays calm. Marketing may be expressive.**

> **Large canvas requires proportionally confident content scale.**

> **Shared rhythm, different operating density.**

> **Large evidence must earn its area through fidelity.**

> **Workspace owns the viewport.**

> **Responsive preserves task hierarchy, not desktop geometry.**

> **Mobile precision preserves access, readability, touch geometry, and icon semantics.**

## Evolution

### V0.1 — structure

Design philosophy, Visual DNA, Website/Web App patterns, anti-patterns, first Skill/Eval.

### V0.2 — archetype + visual system

Added Web App archetype classification and stopped task-oriented products from defaulting to Management Console IA.

### V0.3 / V0.3.1 — visual calibration

Added calibrated bands for typography, containers, Hero/product evidence scale, spacing rhythm, color expression, radius/depth, and cross-surface density.

### V0.3.2 — product fidelity closure

Added Product Evidence Fidelity, effective density, readability floor, optical layout, viewport ownership, editorial visual system, semantic product color, and surface hierarchy.

### V0.3.3 — responsive / mobile closure

Added:

- Responsive Decision Layer;
- explicit preserve/stack/reorder/collapse/crop/replace/sheet/drawer transformations;
- Mobile Website patterns;
- Mobile Professional/AI Workspace transformation;
- touch-target and Mobile typography bands;
- replacement access for hidden Sidebar/Inspector/TOC;
- responsive hard-fail gates;
- mandatory multi-viewport Dogfood acceptance.

### V0.3.4 — mobile precision closure

Rendered phone dogfood exposed a second-level mobile gap after the main responsive transformation was already correct. V0.3.4 adds:

- single-row mobile Website header + complete navigation drawer;
- Docs Sidebar → full mobile drawer instead of truncated navigation chips;
- separate Docs vs Editorial mobile typography scales;
- category/tab local-scroll rules;
- code/configuration local horizontal scrolling without destructive wrapping;
- explicit 375 × 812 small-mobile pressure testing;
- 44px phone touch geometry for primary/icon-only controls;
- mobile icon semantic/centering/stroke/baseline invariance;
- mobile precision anti-patterns and hard-fail gates.

See `docs/foundations/mobile-precision.md`.

## Repository map

```text
fanui/
├── README.md
├── AGENTS.md
├── docs/
│   ├── 00-overview.md
│   ├── 01-philosophy.md
│   ├── 02-visual-dna.md
│   ├── FANUI_V0.3.2.md
│   ├── FANUI_V0.3.3.md
│   ├── foundations/
│   │   ├── visual-system.md
│   │   ├── typography.md
│   │   ├── layout-metrics.md
│   │   ├── spacing-rhythm.md
│   │   ├── color-expression.md
│   │   ├── radius-depth.md
│   │   ├── experience-metrics.md
│   │   ├── fidelity-density.md
│   │   ├── optical-layout.md
│   │   ├── semantic-product-color.md
│   │   ├── surface-hierarchy.md
│   │   ├── iconography.md
│   │   ├── responsive.md
│   │   └── mobile-precision.md
│   ├── website/
│   │   ├── homepage.md
│   │   ├── hero.md
│   │   ├── navigation.md
│   │   ├── product-showcase.md
│   │   ├── pricing.md
│   │   ├── documentation.md
│   │   ├── editorial-blog.md
│   │   ├── editorial-visuals.md
│   │   └── mobile.md
│   ├── web-app/
│   │   ├── archetypes.md
│   │   ├── app-shell.md
│   │   ├── workspace.md
│   │   ├── viewport-ownership.md
│   │   └── mobile-workspace.md
│   └── anti-patterns/
│       ├── core.md
│       ├── v032.md
│       ├── v033.md
│       └── v034.md
├── references/
├── skill/SKILL.md
├── eval/
└── dogfood/003/
```

## AI usage

The Skill requires agents to:

1. classify experience family;
2. classify Web App archetype;
3. identify core value loop / primary task;
4. choose page pattern and hierarchy;
5. apply cross-surface calibrated metrics;
6. define responsive transformations for important regions;
7. close mobile precision: navigation, surface-specific type, touch targets, local scrolling, 375px pressure, and icon invariance;
8. check optical balance;
9. enforce Product Evidence Fidelity and effective density at Desktop and Mobile;
10. apply semantic color, surface hierarchy, and iconography precision;
11. preserve Mobile access when Sidebar/Inspector/TOC collapses;
12. evaluate through FanUI hard gates before completion.

See `skill/SKILL.md`.

## Status

**FanUI Web V0.3.4 — Mobile Precision Closure.**

Specification rules are dogfooded against `dogfood/003` across Homepage, Pricing, Docs Home/Article, Blog Index/Article, Product Home, AI/Professional Workspace, and Chinese stress surface.

Mechanical validation now gates both Responsive Transformation and Mobile Precision before `next build`.

Rendered authority requires multi-viewport acceptance, including **1440 × 1000, 768 × 1024, 390 × 844, and 375 × 812**. A passing build proves implementation integrity, not final visual acceptance.
