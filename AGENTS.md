# FanUI Agent Instructions

This repository defines an AI-native UI design system. Agents must preserve the distinction between **design rules**, **calibration bands**, **responsive transformations**, **fidelity gates**, and future **implementation tokens**.

## Mission

FanUI exists to help AI-generated Web UI feel structurally correct, visually finished, realistically operational, responsive by design, and coherent across Website, Docs, Blog, Pricing, and Product UI.

## Reference priority

1. Apifox — primary reference across website, docs, blog, pricing, and product UI.
2. Pixso — secondary reference for Marketing expression, visual richness, and product presentation.
3. Other products — supplementary only when a specific FanUI gap exists.

References are evidence for principles. Do not copy proprietary assets, exact layouts, exact colors, or copywriting.

## V0.3.3 boundaries

Do:

- classify experience family before styling;
- classify Web App archetype before shell design;
- use page-family calibration bands instead of one generic spacing/type recipe;
- define responsive transformations explicitly rather than relying on framework breakpoints alone;
- reason about optical balance inside the remaining canvas;
- require Product Evidence Fidelity for Core/Hero product visuals at Desktop and Mobile;
- require realistic state, data, context, navigation, actions, and semantic roles in Product evidence;
- enforce Minimum Readability Floor instead of shrinking text to fake density;
- separate brand color from semantic product color;
- use Surface Radius Hierarchy rather than one rounded-card language;
- make Desktop Professional/AI Workspace own remaining viewport height;
- transform Mobile Workspace into a deliberate sequential/temporary-pane task model;
- preserve replacement access when Sidebar, Inspector, TOC, or Navigator collapses;
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
- allow Docs content to hug a sidebar while the opposite field is unused;
- accept a Desktop Professional/AI Workspace with a large blank region below its core working area;
- use giant article cover areas without meaningful editorial content;
- collapse Running, Selected, Approval, Success, and Brand into one accent color;
- use roughly the same 12–16px radius for every surface family;
- allow repeated operational text below FanUI readability floor;
- treat a successful build as visual acceptance.

## Required references

Use `skill/SKILL.md` as the operational entry point.

For substantial UI work, the V0.3.3 foundation set includes:

- `docs/foundations/experience-metrics.md`
- `docs/foundations/fidelity-density.md`
- `docs/foundations/optical-layout.md`
- `docs/foundations/semantic-product-color.md`
- `docs/foundations/surface-hierarchy.md`
- `docs/foundations/iconography.md`
- `docs/foundations/responsive.md`
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

## Design hierarchy

When rules conflict, use this order:

1. User task / core value loop clarity
2. Experience / Web App archetype fit
3. Information hierarchy and current context
4. Responsive task/access preservation
5. Interaction efficiency and authority
6. Readability
7. Product Evidence Fidelity / operational credibility
8. Optical composition and effective density
9. Cross-surface calibration
10. Visual finish / surface hierarchy / component precision
11. Brand expression
12. Decoration

Never sacrifice the first eight to improve the last two.

## Completion standard

Before completion:

1. classify experience/archetype;
2. load relevant pattern and calibration;
3. define responsive transformations;
4. validate 1440 / 768 / 390-class behavior where materially relevant;
5. check optical layout;
6. check Product Evidence Fidelity at Desktop and Mobile when applicable;
7. check effective density/readability floor;
8. check semantic product color and iconography precision;
9. check viewport ownership / Mobile Workspace or Editorial visual rules where applicable;
10. check anti-pattern documents;
11. evaluate with `eval/checklist.md`;
12. score major work with `eval/rubric.md`;
13. revise on any hard failure.

Rendered screenshot review remains the visual authority. A passing build proves code validity, not FanUI visual acceptance.
