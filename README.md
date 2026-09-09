# FanUI

**FanUI is an AI-native UI design system for building consistent, polished web experiences with coding agents.**

FanUI is not primarily a component library. It is a design language, page-pattern system, AI decision framework, and evaluation rubric intended to help AI generate interfaces that feel like they were designed by one coherent product team.

## Current scope

FanUI Web V0.1 covers five first-class web experience families:

1. Product Website
2. Documentation
3. Editorial / Blog
4. Pricing / Conversion
5. Web Application

The current primary reference is **Apifox** across its website, documentation, blog, pricing, and product UI. **Pixso** is the secondary reference for brand expression, marketing composition, product presentation, and visual richness.

Reference products are used to extract principles, not to copy their appearance.

## Design direction

FanUI aims for interfaces that are:

- **Clean** — visual noise is reduced without deleting necessary information.
- **Structured** — hierarchy, grouping, navigation, and state are always legible.
- **Refined** — spacing, typography, surfaces, borders, and states feel intentional.
- **Productive** — dense workflows remain efficient and navigable.
- **Calm under complexity** — information may be rich; the interface should not feel loud.

A concise formulation:

> **Dense, but calm. Structured, not sterile.**

## V0.1 priorities

V0.1 intentionally prioritizes rules before implementation primitives:

- Design philosophy
- Visual DNA
- Website patterns
- Documentation patterns
- Editorial patterns
- Pricing patterns
- Web App shell and workspace patterns
- Anti-patterns
- AI generation workflow
- FanUI evaluation rubric

V0.1 does **not** attempt to freeze a complete React component library or hard-code every token value. Tokens and components should be derived after the design rules survive real product usage.

## Repository map

```text
fanui/
├── README.md
├── AGENTS.md
├── docs/
│   ├── 00-overview.md
│   ├── 01-philosophy.md
│   ├── 02-visual-dna.md
│   ├── website/
│   │   ├── homepage.md
│   │   ├── pricing.md
│   │   ├── documentation.md
│   │   └── editorial-blog.md
│   ├── web-app/
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
2. Identify the primary user task.
3. Establish information hierarchy before styling.
4. Select the relevant FanUI page pattern.
5. Use the minimum set of meaningful surfaces and controls.
6. Apply FanUI visual DNA.
7. Check anti-patterns.
8. Evaluate the result with the FanUI rubric.
9. Revise before considering the interface complete.

See [`skill/SKILL.md`](skill/SKILL.md) for the operational workflow.

## Reference policy

FanUI currently uses the following reference priority:

- **Primary:** Apifox website, docs, blog, pricing, and product UI
- **Secondary:** Pixso website and product presentation
- **Supplementary:** other products may be used to fill specific gaps only

When references conflict, FanUI should prefer the rule that best preserves clarity, hierarchy, productivity, and visual calm rather than mechanically copying either reference.

## Status

**FanUI Web V0.1 — design-language foundation.**

The next phase after V0.1 is validation against real projects, then foundations/tokens, components, examples, automated auditing, and a reusable package/CLI if the rules prove stable.
