# FanUI Agent Instructions

This repository defines an AI-native UI design system. Agents working here must preserve the distinction between **design rules** and **implementation details**.

## Mission

FanUI exists to help AI-generated web interfaces remain visually coherent, structurally clear, productive, polished, and recognizable as the output of one design team across websites and applications.

## Current reference priority

1. Apifox — primary reference across website, docs, blog, pricing, and product UI.
2. Pixso — secondary reference for marketing expression, visual richness, product presentation, and brand composition.
3. Other products — supplementary only when FanUI has an explicit gap.

Reference products are evidence for principles. Do not copy proprietary visual assets, copywriting, layouts, or exact styles.

## V0.2 boundaries

Do:

- codify visual hierarchy, visual finish, density, surfaces, navigation, content composition, page patterns, and anti-patterns;
- write rules in a way an AI can execute;
- explain when a pattern applies and when it does not;
- prefer semantic guidance over arbitrary numbers;
- distinguish Website, Documentation, Editorial, Pricing, and Web App behavior;
- classify Web Apps into Management Console / Professional Workspace / Data Application / AI Workspace before shell design;
- treat task-oriented products as workspace-first when the core value loop requires it;
- keep rules compatible with Chinese and English interfaces;
- use dogfood findings to refine rules before freezing implementation primitives.

Do not:

- build a full React component library yet;
- freeze arbitrary hex values or spacing values without validation;
- turn FanUI into an Apifox clone;
- use generic SaaS aesthetics as a substitute for hierarchy;
- default every Web App to Overview + resource management pages;
- turn every domain noun into top-level navigation;
- accept structurally correct but visually unfinished UI as FanUI-compliant;
- optimize for visual novelty over product clarity.

## Rule-writing format

Whenever possible, a FanUI rule should contain:

1. **Intent** — what problem the rule solves.
2. **Rule** — what to do.
3. **Use when** — context where it applies.
4. **Avoid** — common failure modes.
5. **AI decision** — how an agent chooses between alternatives.

## Design hierarchy

When rules conflict, use this order:

1. User task / core value loop clarity
2. Experience or Web App archetype fit
3. Information hierarchy
4. Navigation and state legibility
5. Interaction efficiency
6. Content readability
7. Visual finish and consistency
8. Brand expression
9. Decoration

Never sacrifice the first five to improve the last two.

## Required references for substantial UI work

Agents should use the installed skill entry point at `skill/SKILL.md`.

For Web Apps, `docs/web-app/archetypes.md` is mandatory before shell implementation.

For visual polish, read:

- `docs/02-visual-dna.md`
- `docs/foundations/visual-system.md`
- `docs/foundations/typography.md`

For product-led websites, use `docs/website/product-showcase.md` to choose product evidence scale.

## Completion standard

A UI task is not complete because it renders or because its information architecture is technically valid.

Before completion, the agent should:

1. verify archetype/pattern fit;
2. check visual hierarchy and amplitude;
3. check FanUI anti-patterns;
4. evaluate against `eval/checklist.md`;
5. for substantial work, score with `eval/rubric.md`;
6. revise if the result is structurally correct but still feels like a wireframe, generic SaaS template, or management-console drift.