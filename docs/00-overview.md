# FanUI Web Overview

## What FanUI is

FanUI is a design language, calibrated visual framework, and AI execution system for modern web products. Its purpose is not to prescribe one visual template, but to constrain AI design decisions strongly enough that different pages and products remain coherent and visually mature.

FanUI Web V0.3.1 treats five experience families as first-class:

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

The design system should answer four different questions:

1. **What should this feel like?** — Visual DNA.
2. **How should this page behave?** — Page/archetype patterns.
3. **At what scale and intensity should it be rendered?** — calibration ranges.
4. **How should this surface differ from the rest of the product family?** — cross-surface experience metrics.

## Reference model

### Primary: Apifox

Apifox is used as the primary reference because the same product family demonstrates several high-value properties:

- a product-led marketing site that uses real UI as evidence;
- a large documentation system with deep information architecture;
- an editorial/blog system with categories and long-form content;
- a pricing page that supports multiple plans, billing choices, enterprise options, feature comparison, and FAQ;
- a complex professional Web App with dense navigation, trees, tabs, toolbars, forms, tables, protocol states, and workspaces;
- confident visual scale, product evidence, brand expression, and information density;
- clear cross-surface density differences without losing brand coherence.

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

> **Shared rhythm, different operating density.**

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

They should not share identical scale, density, reading measure, or composition.

For example:

- Web App controls may be compact, while Marketing Hero typography is substantially larger.
- Professional/AI Workspace remains fluid and task-first rather than centered like a marketing page.
- Documentation uses compact navigation + comfortable technical reading.
- Blog index prioritizes discovery while article pages prioritize sustained reading.
- Pricing prioritizes plan comparison and decision confidence.
- Homepage Hero and core Product Showcase may use high Brand Expression and large evidence scale.

## Calibration model

V0.3 introduced ranges where repeated dogfood showed that semantic guidance alone was insufficient.

V0.3.1 extends those ranges into a **cross-surface calibration model** through:

`docs/foundations/experience-metrics.md`

Calibration now covers:

- Website container widths and Hero/product evidence scale;
- Documentation shell, reading measure, navigation density, article spacing;
- Editorial index/article typography and reading rhythm;
- Pricing plan/comparison density and stage spacing;
- Web App shell widths, workspace padding, control and table density;
- cross-surface Brand Expression Levels;
- radius/border/depth bands;
- Chinese/English scale behavior.

Calibration values are **ranges, not tokens**. They should prevent timid framework defaults and one-size-fits-all styling without forcing every product into one exact implementation.

## Cross-surface consistency model

Consistency means the surfaces share a design language.

Consistency does **not** mean:

```text
same max-width
same H1
same section padding
same Card gap
same control height
```

The product family should instead preserve shared semantics while adapting operating density to the job.

Reference order for macro spacing is generally:

```text
Homepage narrative transitions
>
Editorial / Pricing stage transitions
>
Documentation article transitions
>
Product UI task-region transitions
```

## V0.3.1 success criterion

FanUI Web V0.3.1 succeeds if an AI can generate a Homepage, Docs site, Blog, Pricing page, and Web App that:

- clearly belong to one design family;
- fit their different tasks and archetypes;
- avoid generic AI/SaaS template patterns;
- use confident and proportionate visual scale at wide desktop widths;
- use page-family-specific spacing, typography, width, and density;
- preserve Product UI density and workspace usability;
- show strong real product evidence on product-led websites;
- express brand without collapsing into decoration;
- remain usable in both Chinese and English;
- require substantially less subjective cleanup after generation.

See `docs/FANUI_V0.3.1_REFERENCE_VALIDATION.md` for the current cross-surface reference validation.