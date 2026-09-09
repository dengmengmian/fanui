# FanUI Web Overview

## What FanUI is

FanUI is a design language and AI execution framework for modern web products. Its purpose is not to prescribe one visual template, but to constrain AI design decisions strongly enough that different pages and products remain coherent.

FanUI Web V0.1 treats five experience families as first-class:

- Product Website
- Documentation
- Editorial / Blog
- Pricing / Conversion
- Web Application

These families share a visual language but use different density, typography, navigation, and composition rules.

## Core model

```text
FanUI Web Core
      │
      ├── Website / Marketing
      ├── Documentation
      ├── Editorial / Blog
      ├── Pricing / Conversion
      └── Web Application
```

The design system should answer two different questions:

1. **What should this feel like?** — Visual DNA.
2. **How should this page behave?** — Page and interaction patterns.

## Reference model

### Primary: Apifox

Apifox is used as the primary reference because the same product family demonstrates several high-value properties:

- a product-led marketing site that uses real UI as evidence;
- a large documentation system with deep information architecture;
- an editorial/blog system with categories and long-form content;
- a pricing page that supports multiple plans, billing choices, enterprise options, feature comparison, and FAQ;
- a complex professional Web App with dense navigation, trees, tabs, toolbars, forms, tables, protocol states, and workspaces.

### Secondary: Pixso

Pixso complements Apifox in areas where stronger brand expression is useful:

- more expressive marketing composition;
- richer hero and section presentation;
- product demonstration at larger visual scale;
- stronger visual transitions between product stories;
- broader design/product storytelling.

## FanUI thesis

FanUI should not equate good design with minimal content.

The target is:

> **Reduce visual disorder without removing useful complexity.**

This produces the working phrase:

> **Dense, but calm.**

For marketing surfaces, the system allows more expression:

> **Product stays calm. Marketing may be expressive.**

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

They should not share identical density or composition.

For example:

- Web App controls may be compact, while marketing sections remain spacious.
- Documentation prioritizes scanability and navigation persistence.
- Blog/article pages prioritize reading rhythm and editorial typography.
- Pricing prioritizes comparison and decision confidence.

## V0.1 success criterion

FanUI Web V0.1 succeeds if an AI can generate a homepage, docs site, blog, pricing page, and dense Web App that:

- clearly belong to one design family;
- fit their different tasks;
- avoid generic AI/SaaS template patterns;
- remain usable in both Chinese and English;
- require substantially less subjective cleanup after generation.