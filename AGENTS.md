# FanUI Agent Instructions

This repository defines an AI-native UI design system. Agents must preserve the distinction between **design rules**, **calibration bands**, **responsive transformations**, **mobile precision rules**, **fidelity gates**, and future **implementation tokens**.

## Mission

FanUI exists to help AI-generated Web UI feel structurally correct, visually finished, realistically operational, responsive by design, mobile-precise, and coherent across Website, Docs, Blog, Pricing, and Product UI.

## Reference priority

1. Apifox — primary reference across website, docs, blog, pricing, and product UI.
2. Pixso — secondary reference for Marketing expression, visual richness, and product presentation.
3. Other products — supplementary only when a specific FanUI gap exists.

References are evidence for principles. Do not copy proprietary assets, exact layouts, exact colors, or copywriting.

## V0.3.4 boundaries

Do:

- classify experience family before styling;
- classify Web App archetype before shell design;
- use page-family calibration bands instead of one generic spacing/type recipe;
- define responsive transformations explicitly rather than relying on framework breakpoints alone;
- close Mobile Precision after the main responsive transformation is structurally correct;
- reason about optical balance inside the remaining canvas;
- require Product Evidence Fidelity for Core/Hero product visuals at Desktop and Mobile;
- require realistic state, data, context, navigation, actions, and semantic roles in Product evidence;
- enforce Minimum Readability Floor instead of shrinking text to fake density;
- separate brand color from semantic product color;
- use Surface Radius Hierarchy rather than one rounded-card language;
- make Desktop Professional/AI Workspace own remaining viewport height;
- transform Mobile Workspace into a deliberate sequential/temporary-pane task model;
- preserve replacement access when Sidebar, Inspector, TOC, or Navigator collapses;
- use a single persistent Website phone header row plus a complete drawer by default;
- transform complex Docs navigation into a complete drawer/selector path rather than a truncated chip subset;
- keep Docs and Editorial mobile typography distinct;
- preserve code/configuration formatting through local horizontal scroll;
- use local scroll for tabs/categories when wrapping would destabilize navigation chrome;
- verify 44px-class touch targets and compact centered glyphs for phone icon controls;
- verify icon semantic fit, optical centering, first-line alignment, stroke consistency, and breakpoint invariance;
- pressure-test primary routes at both 390×844 and 375×812;
- use idea-bearing Editorial visuals rather than placeholder gradient tiles;
- dogfood rules before freezing them into tokens/components.

Do not:

- build a full component library yet;
- freeze calibration bands into universal constants;
- default task-oriented Web Apps to Overview + noun collections;
- accept a large but fake/sparse product screenshot as strong evidence;
- shrink Desktop evidence until it is technically visible but unreadable on Mobile;
- hide essential Mobile navigation/Inspector/TOC without replacement access;
- preserve cramped Desktop split layouts below mobile width;
- allow document-level horizontal scrolling as a responsive solution;
- allow Runtime/console stacking to accidentally take over a Mobile page;
- keep a double-decker permanent Website header on phone without a strong task reason;
- replace a complex Docs sidebar with a partial row of navigation chips;
- use Blog-scale typography in task-oriented Docs;
- wrap code/configuration as prose merely to eliminate all local horizontal movement;
- let category/tab navigation collapse into unstable multi-row chrome;
- expose a tiny SVG-sized hit target for an icon-only phone control;
- allow Mobile CSS to regress icon centering, semantics, stroke, or first-line alignment;
- allow Docs content to hug a sidebar while the opposite field is unused;
- accept a Desktop Professional/AI Workspace with a large blank region below its core working area;
- use giant article cover areas without meaningful editorial content;
- collapse Running, Selected, Approval, Success, and Brand into one accent color;
- use roughly the same 12–16px radius for every surface family;
- allow repeated operational text below FanUI readability floor;
- treat a successful build as visual acceptance.

## Required references

Use `skill/SKILL.md` as the operational entry point.

For substantial UI work, the V0.3.4 foundation set includes:

- `docs/foundations/experience-metrics.md`
- `docs/foundations/fidelity-density.md`
- `docs/foundations/optical-layout.md`
- `docs/foundations/semantic-product-color.md`
- `docs/foundations/surface-hierarchy.md`
- `docs/foundations/iconography.md`
- `docs/foundations/responsive.md`
- `docs/foundations/mobile-precision.md`
- existing Visual DNA / typography / layout / spacing / color / depth foundations.

For Website/Docs/Editorial/Pricing mobile behavior also read `docs/website/mobile.md`.

For Editorial work also read `docs/website/editorial-visuals.md`.

For Professional/AI Workspace read both:

- `docs/web-app/viewport-ownership.md`
- `docs/web-app/mobile-workspace.md`

Read anti-pattern sets:

- `docs/anti-patterns/core.md`
- `docs/anti-patterns/v032.md`
- `docs/anti-patterns/v033.md`
- `docs/anti-patterns/v034.md`

## Design hierarchy

When rules conflict, use this order:

1. User task / core value loop clarity
2. Experience / Web App archetype fit
3. Information hierarchy and current context
4. Responsive task/access preservation
5. Mobile navigation/access completeness
6. Interaction efficiency and authority
7. Readability
8. Product Evidence Fidelity / operational credibility
9. Optical composition and effective density
10. Cross-surface calibration
11. Component precision / icon semantics / touch geometry
12. Visual finish / surface hierarchy
13. Brand expression
14. Decoration

Never sacrifice the first ten to improve the last four.

## Completion standard

Before completion:

1. classify experience/archetype;
2. load relevant pattern and calibration;
3. define responsive transformations;
4. apply `mobile-precision.md` after structural responsive work;
5. validate 1440 / 768 / 390 / 375-class behavior where materially relevant;
6. verify one-row Website mobile chrome and complete Docs/navigation replacement paths;
7. verify surface-specific Mobile typography, local-scrolling strategy, and code semantics;
8. verify touch targets and icon semantics/centering/first-line alignment at Desktop and Mobile;
9. check optical layout;
10. check Product Evidence Fidelity at Desktop and Mobile when applicable;
11. check effective density/readability floor;
12. check semantic product color;
13. check viewport ownership / Mobile Workspace or Editorial visual rules where applicable;
14. check anti-pattern documents;
15. evaluate with `eval/checklist.md`;
16. score major work with `eval/rubric.md`;
17. revise on any hard failure.

Rendered screenshot review remains the visual authority. A passing build proves code validity and mechanical rule wiring, not FanUI visual acceptance.
