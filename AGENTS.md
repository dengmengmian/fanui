# FanUI Agent Instructions

This repository defines an AI-native UI design system. Agents must preserve the distinction between **design rules**, **calibration bands**, **fidelity gates**, and future **implementation tokens**.

## Mission

FanUI exists to help AI-generated Web UI feel structurally correct, visually finished, realistically operational, and coherent across Website, Docs, Blog, Pricing, and Product UI.

## Reference priority

1. Apifox — primary reference across website, docs, blog, pricing, and product UI.
2. Pixso — secondary reference for Marketing expression, visual richness, and product presentation.
3. Other products — supplementary only when a specific FanUI gap exists.

References are evidence for principles. Do not copy proprietary assets, exact layouts, exact colors, or copywriting.

## V0.3.2 boundaries

Do:

- classify experience family before styling;
- classify Web App archetype before shell design;
- use page-family calibration bands instead of one generic spacing/type recipe;
- reason about optical balance inside the remaining canvas;
- require Product Evidence Fidelity for Core/Hero product visuals;
- require realistic state, data, context, navigation, actions, and semantic roles in Product evidence;
- enforce Minimum Readability Floor instead of shrinking text to fake density;
- separate brand color from semantic product color;
- use Surface Radius Hierarchy rather than one rounded-card language;
- make Professional/AI Workspace own remaining viewport height;
- use idea-bearing Editorial visuals rather than placeholder gradient tiles;
- dogfood rules before freezing them into tokens/components.

Do not:

- build a full component library yet;
- freeze calibration bands into universal constants;
- default task-oriented Web Apps to Overview + noun collections;
- accept a large but fake/sparse product screenshot as strong evidence;
- allow Docs content to hug a sidebar while the opposite field is unused;
- accept a Professional/AI Workspace with a large blank region below its core working area;
- use giant article cover areas without meaningful editorial content;
- collapse Running, Selected, Approval, Success, and Brand into one accent color;
- use roughly the same 12–16px radius for every surface family;
- allow repeated operational text below FanUI readability floor;
- treat a successful build as visual acceptance.

## Required references

Use `skill/SKILL.md` as the operational entry point.

For substantial UI work, the V0.3.2 foundation set includes:

- `docs/foundations/experience-metrics.md`
- `docs/foundations/fidelity-density.md`
- `docs/foundations/optical-layout.md`
- `docs/foundations/semantic-product-color.md`
- `docs/foundations/surface-hierarchy.md`
- existing Visual DNA / typography / layout / spacing / color / depth foundations.

For Editorial work also read `docs/website/editorial-visuals.md`.

For Professional/AI Workspace also read `docs/web-app/viewport-ownership.md`.

Read both anti-pattern sets:

- `docs/anti-patterns/core.md`
- `docs/anti-patterns/v032.md`

## Design hierarchy

When rules conflict, use this order:

1. User task / core value loop clarity
2. Experience / Web App archetype fit
3. Information hierarchy and current context
4. Interaction efficiency and authority
5. Readability
6. Product Evidence Fidelity / operational credibility
7. Optical composition and effective density
8. Cross-surface calibration
9. Visual finish / surface hierarchy
10. Brand expression
11. Decoration

Never sacrifice the first seven to improve the last two.

## Completion standard

Before completion:

1. classify experience/archetype;
2. load relevant pattern and calibration;
3. check optical layout;
4. check Product Evidence Fidelity when applicable;
5. check effective density/readability floor;
6. check semantic product color;
7. check viewport ownership or Editorial visual rules where applicable;
8. check both anti-pattern documents;
9. evaluate with `eval/checklist.md`;
10. score major work with `eval/rubric.md`;
11. revise on any hard failure.

Rendered screenshot review remains the visual authority. A passing build proves code validity, not FanUI visual acceptance.