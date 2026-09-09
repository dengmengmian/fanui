# FanUI Web Overview

## What FanUI is

FanUI is a design language, calibrated visual framework, and AI execution system for modern web products. Its purpose is not to prescribe one visual template, but to constrain AI design decisions strongly enough that different pages and products remain coherent and visually mature.

FanUI Web V0.3 treats five experience families as first-class:

- Product Website
- Documentation
- Editorial / Blog
- Pricing / Conversion
- Web Application

Web Application is further classified into:

- Management Console
- Professional Workspace
- Data Application
- AI Workspace

These families share a visual language but use different density, typography, navigation, composition, visual amplitude, and calibration ranges.

## Core model

```text
FanUI Web Core
      │
      ├── Website / Marketing
      ├── Documentation
      ├── Editorial / Blog
      ├── Pricing / Conversion
      └── Web Application
            ├── Management Console
            ├── Professional Workspace
            ├── Data Application
            └── AI Workspace
```

The design system should answer three different questions:

1. **What should this feel like?** — Visual DNA.
2. **How should this page behave?** — Page/archetype patterns.
3. **At what scale and intensity should it be rendered?** — V0.3 calibration ranges.

## Reference model

### Primary: Apifox

Apifox is used as the primary reference because the same product family demonstrates several high-value properties:

- a product-led marketing site that uses real UI as evidence;
- a large documentation system with deep information architecture;
- an editorial/blog system with categories and long-form content;
- a pricing page that supports multiple plans, billing choices, enterprise options, feature comparison, and FAQ;
- a complex professional Web App with dense navigation, trees, tabs, toolbars, forms, tables, protocol states, and workspaces;
- confident visual scale, product evidence, brand expression, and information density.

### Secondary: Pixso

Pixso complements Apifox in areas where stronger brand expression is useful:

- more expressive marketing composition;
- richer Hero and section presentation;
- product demonstration at larger visual scale;
- stronger visual transitions between product stories;
- broader design/product storytelling.

References are evidence for principles and calibration quality. FanUI does not copy their exact assets, layouts, colors, or values.

## FanUI thesis

FanUI should not equate good design with minimal content.

The target is:

> **Reduce visual disorder without removing useful complexity.**

Working principles:

> **Dense, but calm.**

> **Product stays calm. Marketing may be expressive.**

> **Large canvas requires proportionally confident content scale.**

## Shared vs specialized rules

All experience families should share:

- brand language;
- semantic color roles;
- typography family;
- radius logic;
- control language;
- icon style;
- spacing rhythm;
- interaction feedback;
- accessibility baseline.

They should not share identical scale, density, or composition.

For example:

- Web App controls may be compact, while Marketing Hero typography is substantially larger.
- Professional/AI Workspace remains fluid and task-first rather than centered like a marketing page.
- Documentation prioritizes scanability and navigation persistence.
- Blog/article pages prioritize reading rhythm and editorial typography.
- Pricing prioritizes comparison and decision confidence.
- Homepage Hero and core Product Showcase may use high Brand Expression and large evidence scale.

## Calibration model

V0.3 introduces ranges where repeated dogfood showed that semantic guidance alone was insufficient.

Calibration covers:

- desktop container widths;
- Hero typography;
- CTA scale;
- Product Showcase size;
- spacing rhythm;
- Brand Expression Levels;
- radius/border/depth bands;
- Product UI density.

Calibration values are **ranges, not tokens**. They should prevent timid framework defaults without forcing every product into one exact visual implementation.

## V0.3 success criterion

FanUI Web V0.3 succeeds if an AI can generate a Homepage, Docs site, Blog, Pricing page, and Web App that:

- clearly belong to one design family;
- fit their different tasks and archetypes;
- avoid generic AI/SaaS template patterns;
- use confident and proportionate visual scale at wide desktop widths;
- preserve Product UI density and workspace usability;
- show strong real product evidence on product-led websites;
- express brand without collapsing into decoration;
- remain usable in both Chinese and English;
- require substantially less subjective cleanup after generation.