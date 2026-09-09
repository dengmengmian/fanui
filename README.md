# FanUI

**FanUI is an AI-native UI design system for building consistent, polished web experiences with coding agents.**

FanUI is not primarily a component library. It is a design language, page-pattern system, calibration framework, AI decision system, and evaluation rubric intended to help AI generate interfaces that feel like they were designed by one coherent product team.

## Current scope

FanUI Web V0.3 covers five first-class web experience families:

1. Product Website
2. Documentation
3. Editorial / Blog
4. Pricing / Conversion
5. Web Application

Web Application is further classified into four archetypes:

- Management Console
- Professional Workspace
- Data Application
- AI Workspace

The current primary reference is **Apifox** across its website, documentation, blog, pricing, and product UI. **Pixso** is the secondary reference for brand expression, marketing composition, product presentation, and visual richness.

Reference products are used to extract quality characteristics and principles, not to copy their appearance.

## Design direction

FanUI aims for interfaces that are:

- **Clean** — visual noise is reduced without deleting necessary information.
- **Structured** — hierarchy, grouping, navigation, and state are always legible.
- **Refined** — spacing, typography, surfaces, borders, states, and composition feel intentional.
- **Productive** — dense workflows remain efficient and navigable.
- **Calm under complexity** — information may be rich; the interface should not feel loud.
- **Visually finished** — correct structure is necessary but not sufficient.
- **Correctly scaled** — wide canvases, marketing type, controls, and product evidence use proportionate visual scale.

Core formulations:

> **Dense, but calm.**

> **Structured, not sterile.**

> **Rich enough to feel designed. Calm enough to stay usable.**

> **Product stays calm. Marketing may be expressive.**

> **Large canvas requires proportionally confident content scale.**

## V0.3 focus

V0.3 is the second dogfood-driven refinement.

Dogfood #2 showed that V0.2 corrected Web App architecture but still allowed a large visual quality gap between FanUI output and the intended reference quality. The remaining problem was calibration: AI chose safe framework defaults for type size, container width, CTA scale, screenshot size, color expression, spacing, and radius.

V0.3 therefore adds **calibrated ranges** for:

- Website container widths;
- Hero typography and CTA scale;
- Marketing / Product / Docs / Editorial type systems;
- Hero/Large/Medium/Small Product Showcase dimensions;
- website and product spacing rhythm;
- Brand Expression Levels (`Low / Medium / High`);
- radius, border, and depth bands;
- website navigation scale;
- wide-desktop underscaling detection.

These are **calibration bands, not frozen tokens**. Agents choose within a range according to content, language, viewport, and product character.

## Repository map

```text
fanui/
├── README.md
├── AGENTS.md
├── docs/
│   ├── 00-overview.md
│   ├── 01-philosophy.md
│   ├── 02-visual-dna.md
│   ├── foundations/
│   │   ├── visual-system.md
│   │   ├── typography.md
│   │   ├── layout-metrics.md
│   │   ├── spacing-rhythm.md
│   │   ├── color-expression.md
│   │   └── radius-depth.md
│   ├── website/
│   │   ├── homepage.md
│   │   ├── hero.md
│   │   ├── navigation.md
│   │   ├── product-showcase.md
│   │   ├── pricing.md
│   │   ├── documentation.md
│   │   └── editorial-blog.md
│   ├── web-app/
│   │   ├── archetypes.md
│   │   ├── app-shell.md
│   │   └── workspace.md
│   └── anti-patterns/
│       └── core.md
├── references/
│   ├── apifox.md
│   └── pixso.md
├── skill/
│   └── SKILL.md
└── eval/
    ├── rubric.md
    └── checklist.md
```

## AI usage model

When an AI builds or revises a web interface with FanUI, it should:

1. Identify the experience family.
2. If Web App, classify the primary/secondary archetype.
3. Identify the core value loop and primary task.
4. Establish information hierarchy and one primary visual anchor.
5. Select the relevant FanUI pattern.
6. Apply Visual DNA and calibrated foundation ranges.
7. Choose Visual Amplitude and Brand Expression Level.
8. Choose components semantically.
9. For product websites, classify Product Showcase scale/crop and enforce calibrated dimensions.
10. Check Chinese/English behavior.
11. Check FanUI anti-patterns.
12. Evaluate with the FanUI checklist/rubric.
13. Revise before considering the interface complete.

See [`skill/SKILL.md`](skill/SKILL.md) for the operational workflow.

## Reference policy

FanUI currently uses the following reference priority:

- **Primary:** Apifox website, docs, blog, pricing, and product UI
- **Secondary:** Pixso website and product presentation
- **Supplementary:** other products may be used to fill specific gaps only

When references conflict, FanUI should prefer the rule that best preserves clarity, hierarchy, productivity, visual calm, product character, and calibrated scale rather than mechanically copying either reference.

## What FanUI is not

FanUI is not:

- an Apifox clone;
- a Pixso clone;
- a generic shadcn skin;
- a purple SaaS template;
- a management-console generator;
- a rule that every product needs a dashboard;
- a fixed component library yet;
- a collection of arbitrary exact pixel values.

## Status

**FanUI Web V0.3 — visual calibration closure.**

The next validation should rerun the same Flowbit dogfood with the updated installed Skill and compare against Dogfood #2 at the same viewport.

The most important checks are:

- Hero display/CTA/evidence scale is visibly more confident;
- Wide Product evidence becomes readable without zoom;
- Website navigation and container proportions feel mature;
- brand expression is richer than neutral + one accent but remains controlled;
- Web App stays workspace-first rather than regressing into management-console IA;
- Product UI becomes richer through hierarchy/state semantics rather than decoration;
- Chinese and English layouts remain stable.

Repeated dogfood should decide which calibration bands become future tokens or component defaults.