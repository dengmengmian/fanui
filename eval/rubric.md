# FanUI Evaluation Rubric

Score major pages out of 100. A normal pass target is **85+**, but hard failures override the score.

## 1. Product / information architecture — 15

- 13–15: task hierarchy and page archetype are unmistakably correct across Desktop and Mobile.
- 9–12: usable but some noun-driven or generic structure remains.
- 0–8: wrong archetype, fake dashboard, management-console drift, or Mobile loses the core task.

## 2. Hierarchy & optical composition — 15

Evaluate visual anchor, remaining-canvas balance, split proportions, section amplitude, current context, and responsive recomposition.

- 13–15: strong optical hierarchy; asymmetric shells remain balanced; Mobile recomputes the canvas cleanly.
- 9–12: orderly but one area feels left/right heavy, same-volume, or mechanically stacked.
- 0–8: content hugs one edge, large unearned fields dominate, primary anchor is weak, or Mobile preserves broken Desktop geometry.

## 3. Calibration, typography & responsive transformation — 20

Evaluate page-family metrics, type scale, reading measure, controls, readability floor, touch targets, and breakpoint transformations.

- 17–20: family-specific metrics remain intentional from 1440 through 375-class widths; important regions use deliberate preserve/stack/collapse/crop/replace strategies.
- 12–16: mostly calibrated with a few safe framework defaults or minor cramped transitions.
- 0–11: one-size-fits-all metrics, unreadable mobile type/evidence, tiny touch controls, whole-page overflow, or Desktop simply shrunk into Mobile.

## 4. Product Evidence Fidelity / task realism — 15

For Product Websites and Web Apps, evaluate context, navigation, state, data, actions, semantic roles, depth, and Mobile evidence transformation.

- 13–15: product looks operational and credible at Desktop and Mobile; Mobile evidence remains readable without pinch zoom.
- 9–12: readable but still somewhat demo-like or Mobile loses some useful context.
- 0–8: large wireframe, placeholder data, sparse nodes, fake product evidence, or compressed unreadable Desktop evidence on Mobile.

For non-product editorial surfaces, use this category for content/visual credibility.

## 5. Effective density & viewport use — 10

- 9–10: evidence/workspace area is earned and proportionate; Mobile avoids empty canvas and Runtime takeover.
- 6–8: some sparse/empty regions but task remains coherent.
- 0–5: oversized frames with tiny content, large workspace voids, or stacked panes accidentally monopolize Mobile.

## 6. Color & semantic state — 10

- 9–10: brand, selection, status, process, and object roles are distinct and disciplined.
- 6–8: mostly correct but overly dependent on brand accent.
- 0–5: semantic-color collapse, decorative status color, or gray-on-gray sterility.

## 7. Surface hierarchy, iconography & finish — 10

Evaluate radius, borders, dividers, elevation, icon semantics, glyph centering, first-line alignment, and control finish.

- 9–10: component geometry is precise and context-appropriate.
- 6–8: polished but repeated rounded-card language or small optical issues remain.
- 0–5: wireframe finish, nested surface maze, misleading icons, broken icon alignment, or rounded rectangle everywhere.

## 8. Cross-surface coherence — 5

Evaluate whether Website, Docs, Blog, Pricing, and Web App feel like one product family while preserving different operating densities and Mobile transformations.

- 5: clear family resemblance without sameness.
- 3–4: mostly coherent; one surface feels templated or detached.
- 0–2: generic templates or identical density/response recipe across families.

# Hard failures

Any of these prevents pass regardless of total score:

1. Task-oriented Web App uses the wrong primary archetype and behaves mainly as a Management Console.
2. Core/Hero product evidence is unreadable at normal Desktop scale.
3. Core/Hero evidence is large but obviously fake/sparse: generic boxes, placeholder data, little state, or little task structure.
4. Homepage materially ignores calibrated Hero/container/evidence ranges without a justified design reason.
5. Homepage, Docs, Blog, Pricing, and Web App collapse into the same max-width/H1/spacing/control-density recipe.
6. Desktop Professional/AI Workspace does not own remaining viewport and leaves a major blank region below its core working area.
7. Primary Blog/Editorial visual is obviously a generic placeholder and consumes major page area.
8. Documentation is severely optically imbalanced due to sidebar-edge alignment while the opposite field is unused.
9. Repeated Product UI text sits materially below the Minimum Readability Floor.
10. Brand, running, selection, approval, and success states collapse into the same accent treatment.
11. Desktop product evidence is merely shrunk on Mobile until content is unreadable or only a narrow sliver remains usable.
12. A sidebar, Inspector, TOC, or project/workflow navigation is hidden on Mobile with no replacement path.
13. Core Mobile composition causes document-level horizontal scrolling at 390px or 375px reference width.
14. A Desktop split remains cramped side-by-side on Mobile and creates unstable word-by-word headings.
15. A Professional/AI Workspace Runtime or console accidentally consumes most of the Mobile page without a deliberate compact/dedicated strategy.
16. Repeated mobile primary controls materially miss practical touch-target size.

# Reference acceptance

Before promoting a Dogfood page into a FanUI reference:

- score 90+;
- no hard failures;
- rendered review at 1440 × 1000;
- rendered review at 768 × 1024;
- rendered review at 390 × 844;
- spot check at 375 × 812;
- cross-surface comparison performed;
- Chinese stress behavior checked where relevant;
- page demonstrates at least one reusable FanUI principle rather than only good local styling.
