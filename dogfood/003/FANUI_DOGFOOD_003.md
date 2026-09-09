# FanUI Dogfood #3 — V0.3.2 Render Target

## Purpose

Dogfood #3 now validates **FanUI Web V0.3.2 Product Fidelity Closure**.

The first rendered V0.3.1 pass confirmed major improvement in scale/archetype/cross-surface density, but still exposed a gap between a polished design-system demo and a mature product.

## Rework findings addressed

```text
Product Evidence Fidelity      → richer Hero/product state, data, roles, actions
Effective Content Density      → denser workflow evidence; fewer oversized sparse frames
Optical Layout                 → Docs centered in remaining canvas
Minimum Readability Floor      → larger Docs/Product navigation and supporting text
Editorial Visual System        → idea-bearing workflow/trace/artifact visuals
Semantic Product Color         → Running / Agent / Tool / Approval / Artifact separated
Surface Radius Hierarchy       → tighter Product/Docs/Pricing radii
Workspace Viewport Ownership   → full-height project workspace + persistent runtime pane
```

## Web App classification

```yaml
experience: web_app
primary_archetype: ai_workspace
secondary_archetype: professional_workspace
core_value_loop: define_configure_run_observe_review_act
viewport_ownership: full_remaining_height
```

The core app remains workspace-first rather than `Overview / Projects / Agents / Runs / Artifacts` administration-first.

## Mechanical validation

Implementation commit:

```text
ccf799bb8018a4b9fda1e7cac9d3323a2a45a7c2
```

GitHub Actions:

```text
workflow: FanUI Dogfood 003 Build
run: #3 / 34335653290
install: PASS
next build: PASS
conclusion: success
```

This proves the committed V0.3.2 Next.js implementation compiles.

## Rendered acceptance is still required

At 1440 × 1000, inspect:

1. Homepage Hero product evidence readability and realism.
2. Homepage workflow section effective density.
3. Docs optical centering and navigation readability.
4. Blog featured/latest visual credibility.
5. Blog Article first-viewport balance.
6. Pricing plan hierarchy and radius/semantic polish.
7. Atlas workspace full-height ownership and runtime pane.
8. Semantic color distinction among Running / Approval / Artifact / Agent / Tool.
9. Chinese stress behavior.

## Current status

```text
SPEC_V032=PASS
SKILL_ROUTING=PASS
EVAL_GATE_COVERAGE=PASS
DOGFOOD_003_REWORK=COMPLETE
REMOTE_BUILD=PASS
FULL_RENDERED_ACCEPTANCE=PENDING
```

Rendered screenshots remain the final visual authority.