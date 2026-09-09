# FanUI

**FanUI is an AI-native UI design system for building consistent, polished web experiences with coding agents.**

FanUI is not primarily a component library. It is a design language, page-pattern system, calibration framework, product-fidelity model, AI decision system, and evaluation rubric.

## Current scope

FanUI Web V0.3.2 covers five first-class web experience families:

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

## Evolution

### V0.1 — structure

Design philosophy, Visual DNA, Website/Web App patterns, anti-patterns, first Skill/Eval.

### V0.2 — archetype + visual system

Added Web App archetype classification and stopped task-oriented products from defaulting to Management Console IA.

### V0.3 / V0.3.1 — visual calibration

Added calibrated bands for typography, containers, Hero/product evidence scale, spacing rhythm, color expression, radius/depth, and cross-surface density.

### V0.3.2 — product fidelity closure

Dogfood #3 showed that correct scale can still produce a high-quality demo rather than mature product UI. V0.3.2 adds:

- Product Evidence Fidelity;
- Effective Content Density;
- Minimum Readability Floor;
- Optical Layout;
- Workspace Viewport Ownership;
- Editorial Visual System;
- Semantic Product Color;
- Surface Radius Hierarchy.

See `docs/FANUI_V0.3.2.md`.

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
│   │   └── surface-hierarchy.md
│   ├── website/
│   │   ├── homepage.md
│   │   ├── hero.md
│   │   ├── navigation.md
│   │   ├── product-showcase.md
│   │   ├── pricing.md
│   │   ├── documentation.md
│   │   ├── editorial-blog.md
│   │   └── editorial-visuals.md
│   ├── web-app/
│   │   ├── archetypes.md
│   │   ├── app-shell.md
│   │   ├── workspace.md
│   │   └── viewport-ownership.md
│   └── anti-patterns/
│       ├── core.md
│       └── v032.md
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
6. check optical balance;
7. enforce Product Evidence Fidelity and effective density;
8. apply semantic color and surface hierarchy;
9. enforce workspace viewport ownership or editorial visual rules when relevant;
10. evaluate through FanUI hard gates before completion.

See `skill/SKILL.md`.

## Status

**FanUI Web V0.3.2 — Product Fidelity Closure.**

Specification rules are being dogfooded against `dogfood/003` across Homepage, Pricing, Docs Home/Article, Blog Index/Article, Product Home, AI/Professional Workspace, and Chinese stress surface.

Final visual authority remains rendered screenshots at 1440 × 1000. Only rendered acceptance should promote calibration bands into future tokens/component defaults.