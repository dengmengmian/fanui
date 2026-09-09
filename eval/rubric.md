# FanUI Evaluation Rubric

Score major pages out of 100. A normal pass target is **85+**, but hard failures override the score.

## 1. Product / information architecture — 15

- 13–15: task hierarchy and page archetype are unmistakably correct.
- 9–12: usable but some noun-driven or generic structure remains.
- 0–8: wrong archetype, fake dashboard, or management-console drift.

## 2. Hierarchy & optical composition — 15

Evaluate visual anchor, remaining-canvas balance, split proportions, section amplitude, and current context.

- 13–15: strong optical hierarchy; asymmetric shells remain balanced.
- 9–12: orderly but one area feels left/right heavy or same-volume.
- 0–8: content hugs one edge, large unearned fields dominate, or primary anchor is weak.

## 3. Calibration & typography — 15

Evaluate page-family metrics, type scale, reading measure, controls, and readability floor.

- 13–15: family-specific metrics feel intentional and readable.
- 9–12: mostly calibrated with some safe framework defaults.
- 0–8: one-size-fits-all metrics or repeated tiny operational typography.

## 4. Product Evidence Fidelity / task realism — 15

For Product Websites and Web Apps, evaluate context, navigation, state, data, actions, semantic roles, and depth.

- 13–15: product looks operational and credible.
- 9–12: readable but still somewhat demo-like.
- 0–8: large wireframe, placeholder data, sparse nodes, or fake product evidence.

For non-product editorial surfaces, use this category for content/visual credibility.

## 5. Effective density & viewport use — 10

- 9–10: evidence/workspace area is earned and proportionate.
- 6–8: some sparse/empty regions but task remains coherent.
- 0–5: oversized frames with tiny content or large workspace voids.

## 6. Color & semantic state — 10

- 9–10: brand, selection, status, process, and object roles are distinct and disciplined.
- 6–8: mostly correct but overly dependent on brand accent.
- 0–5: semantic-color collapse, decorative status color, or gray-on-gray sterility.

## 7. Surface hierarchy & finish — 10

- 9–10: radius, borders, dividers, and elevation change appropriately by context.
- 6–8: polished but repeated rounded-card language remains.
- 0–5: wireframe finish, nested surface maze, or rounded rectangle everywhere.

## 8. Cross-surface coherence — 10

Evaluate whether Website, Docs, Blog, Pricing, and Web App feel like one product family while preserving different operating densities.

- 9–10: clear family resemblance without sameness.
- 6–8: mostly coherent; one surface feels templated or detached.
- 0–5: generic templates or identical density recipe across families.

# Hard failures

Any of these prevents pass regardless of total score:

1. Task-oriented Web App uses the wrong primary archetype and behaves mainly as a Management Console.
2. Core/Hero product evidence is unreadable at normal desktop scale.
3. Core/Hero evidence is large but obviously fake/sparse: generic boxes, placeholder data, little state, or little task structure.
4. Homepage materially ignores calibrated Hero/container/evidence ranges without a justified design reason.
5. Homepage, Docs, Blog, Pricing, and Web App collapse into the same max-width/H1/spacing/control-density recipe.
6. Professional/AI Workspace does not own remaining viewport and leaves a major blank region below its core working area.
7. Primary Blog/Editorial visual is obviously a generic placeholder and consumes major page area.
8. Documentation is severely optically imbalanced due to sidebar-edge alignment while the opposite field is unused.
9. Repeated Product UI text sits materially below the Minimum Readability Floor.
10. Brand, running, selection, approval, and success states collapse into the same accent treatment.

# Reference acceptance

Before promoting a Dogfood page into a FanUI reference:

- score 90+;
- no hard failures;
- rendered review at 1440 × 1000;
- cross-surface comparison performed;
- Chinese stress behavior checked where relevant;
- page demonstrates at least one reusable FanUI principle rather than only good local styling.