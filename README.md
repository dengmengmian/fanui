# FanUI

**FanUI is an AI-native UI design system for building consistent, polished web experiences with coding agents.**

FanUI is not primarily a component library. It is a design language, page-pattern system, calibration framework, AI decision system, and evaluation rubric intended to help AI generate interfaces that feel like they were designed by one coherent product team.

## Current scope

FanUI Web V0.3.1 covers five first-class web experience families:

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
- **Cross-surface coherent** — Homepage, Docs, Blog, Pricing, and Product UI belong to one family without using one density recipe.

Core formulations:

> **Dense, but calm.**

> **Structured, not sterile.**

> **Rich enough to feel designed. Calm enough to stay usable.**

> **Product stays calm. Marketing may be expressive.**

> **Large canvas requires proportionally confident content scale.**

> **Shared rhythm, different operating density.**

## V0.3.1 focus

V0.3 introduced calibrated visual ranges after Dogfood #2 showed that semantic rules alone still allowed safe framework defaults for type size, container width, CTA scale, screenshot size, color expression, spacing, and radius.

V0.3.1 extends calibration across the **entire product family**, not only Homepage Marketing.

It adds/strengthens calibrated bands for:

- Product Website container widths, Hero type, CTA, Product Showcase, and section rhythm;
- Documentation shell, reading measure, navigation density, article type, and article spacing;
- Editorial/Blog index and article typography, reading measure, discovery rhythm, and metadata hierarchy;
- Pricing plan density, price/CTA scale, comparison rows, enterprise path, FAQ rhythm;
- Professional/AI Web App shell widths, workspace padding, tree/tab/toolbar/table density;
- cross-surface Brand Expression and Visual Amplitude differences;
- cross-surface anti-patterns for one-size-fits-all spacing/type/container systems.

These are **calibration bands, not frozen tokens**. Agents choose within a range according to content, language, viewport, page family, and product character.

## Repository map

```text
fanui/
├── README.md
├── AGENTS.md
├── docs/
│   ├── 00-overview.md
│   ├── 01-philosophy.md
│   ├── 02-visual-dna.md
│   ├── FANUI_V0.3_VALIDATION.md
│   ├── FANUI_V0.3.1_REFERENCE_VALIDATION.md
│   ├── foundations/
│   │   ├── visual-system.md
│   │   ├── typography.md
│   │   ├── layout-metrics.md
│   │   ├── spacing-rhythm.md
│   │   ├── color-expression.md
│   │   ├── radius-depth.md
│   │   └── experience-metrics.md
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
6. Load `experience-metrics.md` and the page-family calibration.
7. Apply Visual DNA and calibrated foundation ranges.
8. Choose Visual Amplitude and Brand Expression Level.
9. Choose components semantically.
10. For product websites, classify Product Showcase scale/crop and enforce calibrated dimensions.
11. Check Chinese/English behavior.
12. Check FanUI anti-patterns.
13. Evaluate with the FanUI checklist/rubric, including cross-surface comparison when multiple families exist.
14. Revise before considering the interface complete.

See [`skill/SKILL.md`](skill/SKILL.md) for the operational workflow.

## Reference policy

FanUI currently uses the following reference priority:

- **Primary:** Apifox website, docs, blog, pricing, and product UI
- **Secondary:** Pixso website and product presentation
- **Supplementary:** other products may be used to fill specific gaps only

When references conflict, FanUI should prefer the rule that best preserves clarity, hierarchy, productivity, visual calm, product character, calibrated scale, and appropriate page-family density rather than mechanically copying either reference.

## Measurement policy

FanUI does not claim that its calibrated ranges are exact CSS measurements copied from reference products.

They are operating bands derived from:

- visible proportion;
- page purpose;
- information density;
- repeated reference characteristics;
- Chinese/English behavior;
- real FanUI dogfood failures.

The goal is to reproduce **quality characteristics**, not source values.

## What FanUI is not

FanUI is not:

- an Apifox clone;
- a Pixso clone;
- a generic shadcn skin;
- a purple SaaS template;
- a management-console generator;
- a rule that every product needs a dashboard;
- a fixed component library yet;
- a collection of arbitrary exact pixel values;
- one universal max-width / H1 / section-padding recipe applied to every page.

## Status

**FanUI Web V0.3.1 — cross-surface visual calibration closure.**

Specification/reference validation now covers:

- Homepage;
- Documentation;
- Editorial / Blog;
- Pricing;
- Professional / AI Web App;
- cross-surface spacing, typography, width, density, and brand-expression relationships.

See `docs/FANUI_V0.3.1_REFERENCE_VALIDATION.md`.

The next validation is **Dogfood #3 full rendered validation**. It must inspect all major surface families at a consistent desktop viewport, not only the Homepage.

Only rendered dogfood should decide which calibration bands become future tokens or component defaults.