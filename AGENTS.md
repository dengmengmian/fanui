# FanUI Agent Instructions

This repository defines an AI-native UI design system. Agents working here must preserve the distinction between **design rules** and **implementation details**.

## Mission

FanUI exists to help AI-generated web interfaces remain visually coherent, structurally clear, productive, and recognizable as the output of one design team across websites and applications.

## Current reference priority

1. Apifox — primary reference across website, docs, blog, pricing, and product UI.
2. Pixso — secondary reference for marketing expression, visual richness, product presentation, and brand composition.
3. Other products — supplementary only when FanUI has an explicit gap.

Reference products are evidence for principles. Do not copy proprietary visual assets, copywriting, layouts, or exact styles.

## V0.1 boundaries

Do:

- codify visual hierarchy, density, surfaces, navigation, content composition, page patterns, and anti-patterns;
- write rules in a way an AI can execute;
- explain when a pattern applies and when it does not;
- prefer semantic guidance over arbitrary numbers;
- distinguish Website, Documentation, Editorial, Pricing, and Web App behavior;
- keep rules compatible with Chinese and English interfaces.

Do not:

- build a full React component library yet;
- freeze arbitrary hex values or spacing values without validation;
- turn FanUI into an Apifox clone;
- use generic SaaS aesthetics as a substitute for hierarchy;
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

1. User task clarity
2. Information hierarchy
3. Navigation and state legibility
4. Interaction efficiency
5. Content readability
6. Visual consistency
7. Brand expression
8. Decoration

Never sacrifice the first four to improve the last two.

## Completion standard

A UI task is not complete because it renders. Before completion, the agent should evaluate it against `eval/checklist.md` and, for substantial work, score it with `eval/rubric.md`.