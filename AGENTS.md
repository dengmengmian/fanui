# FanUI Agent Instructions

This repository defines an AI-native UI design system. Agents working here must preserve the distinction between **design rules**, **calibration ranges**, and **implementation tokens**.

## Mission

FanUI exists to help AI-generated web interfaces remain visually coherent, structurally clear, productive, polished, correctly scaled, and recognizable as the output of one design team across websites and applications.

## Current reference priority

1. Apifox — primary reference across website, docs, blog, pricing, and product UI.
2. Pixso — secondary reference for marketing expression, visual richness, product presentation, and brand composition.
3. Other products — supplementary only when FanUI has an explicit gap.

Reference products are evidence for principles. Do not copy proprietary visual assets, copywriting, layouts, exact colors, or exact styles.

## V0.3.1 boundaries

Do:

- codify visual hierarchy, visual finish, density, surfaces, navigation, content composition, page patterns, and anti-patterns;
- provide calibrated ranges where dogfood/reference validation proves semantic guidance is insufficient;
- write rules in a way an AI can execute and verify;
- explain when a pattern applies and when it does not;
- distinguish Product Website, Documentation, Editorial, Pricing, and Web App behavior;
- use `docs/foundations/experience-metrics.md` to preserve cross-surface consistency without cross-surface sameness;
- classify Web Apps into Management Console / Professional Workspace / Data Application / AI Workspace before shell design;
- treat task-oriented products as workspace-first when the core value loop requires it;
- calibrate typography, container width, CTA/control scale, product evidence, spacing rhythm, brand expression, radius, and depth by experience family;
- keep rules compatible with Chinese and English interfaces;
- use dogfood findings to refine rules before freezing implementation primitives.

Do not:

- build a full React component library yet;
- treat calibration ranges as immutable tokens;
- freeze arbitrary exact hex values without repeated validation;
- turn FanUI into an Apifox clone;
- use generic SaaS aesthetics as a substitute for hierarchy;
- default every Web App to Overview + resource management pages;
- turn every domain noun into top-level navigation;
- accept structurally correct but visually unfinished or visibly underscaled UI as FanUI-compliant;
- silently fall back to framework defaults when FanUI has an explicit calibrated range;
- use one universal max-width, H1 scale, section padding, card gap, or control height across Homepage, Docs, Blog, Pricing, and Product UI;
- optimize for visual novelty over product clarity.

## Rule-writing format

Whenever possible, a FanUI rule should contain:

1. **Intent** — what problem the rule solves.
2. **Rule** — what to do.
3. **Use when** — context where it applies.
4. **Avoid** — common failure modes.
5. **Calibration** — range/scale where real dogfood/reference validation established one.
6. **AI decision** — how an agent chooses between alternatives.

## Design hierarchy

When rules conflict, use this order:

1. User task / core value loop clarity
2. Experience or Web App archetype fit
3. Information hierarchy
4. Navigation and state legibility
5. Interaction efficiency
6. Content readability
7. Cross-surface density / calibration fit
8. Visual finish and consistency
9. Brand expression
10. Decoration

Never sacrifice the first six to improve the last two.

## Required references for substantial UI work

Agents should use the installed skill entry point at `skill/SKILL.md`.

For all substantial surfaces, read:

- `docs/foundations/experience-metrics.md`
- `docs/02-visual-dna.md`
- `docs/foundations/visual-system.md`
- `docs/foundations/typography.md`
- `docs/foundations/layout-metrics.md`
- `docs/foundations/spacing-rhythm.md`
- `docs/foundations/color-expression.md`
- `docs/foundations/radius-depth.md`

For Web Apps, `docs/web-app/archetypes.md` is mandatory before shell implementation.

For product-led websites, additionally read:

- `docs/website/hero.md`
- `docs/website/navigation.md`
- `docs/website/product-showcase.md`

For page-family-specific work, read the matching Documentation / Editorial / Pricing / App Shell / Workspace pattern file.

## Calibration policy

V0.3.1 calibrated values are **bands**, not universal constants.

Agents should:

1. select a value inside the relevant page-family band;
2. adapt for copy length, language, viewport, and product character;
3. document a meaningful deviation when leaving the band;
4. compare implemented page families against each other so consistency does not collapse into sameness;
5. never copy the exact visual values of a reference product merely because it is a reference.

## Completion standard

A UI task is not complete because it renders or because its information architecture is technically valid.

Before completion, the agent should:

1. verify experience/archetype/pattern fit;
2. verify page-family calibration and cross-surface consistency;
3. check visual hierarchy, amplitude, and brand expression;
4. check FanUI anti-patterns;
5. evaluate against `eval/checklist.md`;
6. for substantial work, score with `eval/rubric.md`;
7. revise if the result is structurally correct but still feels like a wireframe, generic SaaS template, management-console drift, timid Hero, underscaled large-canvas composition, or one-size-fits-all product-family styling.