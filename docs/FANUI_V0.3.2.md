# FanUI Web V0.3.2 — Product Fidelity Closure

## Why this version exists

Dogfood #3 showed that V0.3.1 materially improved scale, cross-surface density, Homepage confidence, and Web App archetype selection. The remaining gap was subtler: the output still sometimes looked like a high-quality design-system demo rather than a mature product.

V0.3.2 focuses on **fidelity, optical balance, and operational continuity**.

## New mandatory concepts

1. Product Evidence Fidelity
2. Effective Content Density
3. Minimum Readability Floor
4. Optical Layout
5. Workspace Viewport Ownership
6. Editorial Visual System
7. Semantic Product Color
8. Surface Radius Hierarchy

## New documents

- `docs/foundations/fidelity-density.md`
- `docs/foundations/optical-layout.md`
- `docs/foundations/semantic-product-color.md`
- `docs/foundations/surface-hierarchy.md`
- `docs/website/editorial-visuals.md`
- `docs/web-app/viewport-ownership.md`
- `docs/anti-patterns/v032.md`

## Product evidence gate

A Hero-scale screenshot can now fail FanUI even if its width is correct.

Core/Hero evidence must be judged on:

- context;
- navigation;
- state;
- realistic data;
- semantic roles;
- actions;
- depth;
- readability.

## Layout gate

Docs, Blog, and asymmetric product shells are judged optically, not only by container width. Sidebars and inspectors change the effective canvas.

## Workspace gate

Professional/AI Workspace must own the remaining viewport by default. A small workspace on top of an otherwise empty page is a hard failure for a core working screen.

## Editorial gate

Generic gradient placeholders are no longer acceptable as primary editorial visuals. Large visuals must contain an idea or be reduced/removed.

## Status

V0.3.2 is considered specification-complete when:

```text
SPEC_NEW_RULES=PASS
SKILL_ROUTING=PASS
EVAL_GATE_COVERAGE=PASS
DOGFOOD_003_REWORK_BUILD=PASS
RENDERED_ACCEPTANCE=PENDING
```

Rendered screenshots remain the authority for final visual acceptance.