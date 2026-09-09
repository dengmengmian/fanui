# FanUI

**FanUI is an AI-native UI design system for building consistent, polished web experiences with coding agents.**

FanUI is not primarily a component library. It is a design language, page-pattern system, AI decision framework, and evaluation rubric intended to help AI generate interfaces that feel like they were designed by one coherent product team.

## Current scope

FanUI Web V0.2 covers five first-class web experience families:

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

Reference products are used to extract principles, not to copy their appearance.

## Design direction

FanUI aims for interfaces that are:

- **Clean** — visual noise is reduced without deleting necessary information.
- **Structured** — hierarchy, grouping, navigation, and state are always legible.
- **Refined** — spacing, typography, surfaces, borders, states, and composition feel intentional.
- **Productive** — dense workflows remain efficient and navigable.
- **Calm under complexity** — information may be rich; the interface should not feel loud.
- **Visually finished** — correct structure is necessary but not sufficient.

Core formulations:

> **Dense, but calm.**

> **Structured, not sterile.**

> **Rich enough to feel designed. Calm enough to stay usable.**

> **Product stays calm. Marketing may be expressive.**

## V0.2 focus

V0.2 is the first dogfood-driven refinement.

The first generated demo exposed two systemic gaps:

1. structurally correct pages could still look too flat, border-heavy, and generic;
2. task-oriented Web Apps could drift into a generic SaaS management-console architecture.

V0.2 therefore adds:

- operational visual system rules;
- typography modes and hierarchy rules;
- visual amplitude and same-volume checks;
- Product Showcase scale (`Small / Medium / Large / Hero`);
- Web App archetype classification;
- workspace-first rules for Professional/AI products;
- management-console drift and noun-trap anti-patterns;
- stronger visual-finish and archetype-fit evaluation.

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
│   │   └── typography.md
│   ├── website/
│   │   ├── homepage.md
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
6. Apply Visual DNA, typography mode, and visual amplitude.
7. Choose components semantically.
8. For product websites, classify product evidence scale and crop.
9. Check FanUI anti-patterns.
10. Evaluate the result with the FanUI rubric.
11. Revise before considering the interface complete.

See [`skill/SKILL.md`](skill/SKILL.md) for the operational workflow.

## Reference policy

FanUI currently uses the following reference priority:

- **Primary:** Apifox website, docs, blog, pricing, and product UI
- **Secondary:** Pixso website and product presentation
- **Supplementary:** other products may be used to fill specific gaps only

When references conflict, FanUI should prefer the rule that best preserves clarity, hierarchy, productivity, visual calm, and product character rather than mechanically copying either reference.

## What FanUI is not

FanUI is not:

- an Apifox clone;
- a Pixso clone;
- a generic shadcn skin;
- a purple SaaS template;
- a management-console generator;
- a rule that every product needs a dashboard;
- a fixed component library yet.

## Status

**FanUI Web V0.2 — dogfood-driven visual + archetype closure.**

The next validation should regenerate the same demo (or a new equivalent product) using only the installed FanUI Skill and compare whether:

- product-led website evidence becomes stronger and more readable;
- section rhythm becomes less same-volume;
- Web App architecture becomes workspace-first when the core value loop requires it;
- visual finish improves without adding decorative noise.

Only after repeated dogfood should FanUI freeze concrete tokens and component APIs.