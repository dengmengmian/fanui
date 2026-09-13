# FanUI Agent Instructions

This repository defines an AI-native UI design system. Agents must preserve the distinction between **design rules**, **calibration bands**, **responsive transformations**, **mobile precision rules**, **fidelity gates**, and future **implementation tokens**.

## Mission

FanUI exists to help AI-generated Web and native Desktop App UI feel structurally correct, visually finished, realistically operational, adaptive by design, and coherent across Website, Docs, Blog, Pricing, Web App, and Desktop Application surfaces.

## Reference priority

1. Apifox — primary reference across website, docs, blog, pricing, and product UI.
2. Pixso — secondary reference for Marketing expression, visual richness, and product presentation.
3. Other products — supplementary only when a specific FanUI gap exists.

References are evidence for principles. Do not copy proprietary assets, exact layouts, exact colors, or copywriting.

## V0.3.4 boundaries

Do:

- classify experience family before styling;
- distinguish `desktop_app` from `web_app` by runtime contract, not rendering technology;
- preserve native window chrome, command routing, focus, keyboard/pointer behavior, lifecycle, system appearance, and accessibility for Desktop Apps;
- validate Desktop Apps at compact, normal, and large windows plus maximized/full-screen states where supported;
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
- treat a successful build as visual acceptance;
- apply phone breakpoints to a Desktop App that does not target mobile;
- wrap a Web dashboard in fake native chrome and call it a Desktop App;
- collapse a Desktop sidebar/inspector without a discoverable replacement command.

## Required references

Use `skill/SKILL.md` as the operational entry point.

For substantial UI work, the shared foundation set includes:

- `docs/foundations/experience-metrics.md`
- `docs/foundations/fidelity-density.md`
- `docs/foundations/optical-layout.md`
- `docs/foundations/semantic-product-color.md`
- `docs/foundations/surface-hierarchy.md`
- `docs/foundations/iconography.md`

For Web responsive/mobile work also read:

- `docs/foundations/responsive.md`
- `docs/foundations/mobile-precision.md`

Also use the existing Visual DNA / typography / layout / spacing / color / depth foundations.

For Website/Docs/Editorial/Pricing mobile behavior also read `docs/website/mobile.md`.

For Editorial work also read `docs/website/editorial-visuals.md`.

For Professional/AI Workspace read both:

- `docs/web-app/viewport-ownership.md`
- `docs/web-app/mobile-workspace.md`

For Desktop App work read:

- `docs/desktop-app/classification.md`
- `docs/desktop-app/native-shell.md`
- `docs/desktop-app/acceptance.md`

Read `docs/anti-patterns/core.md` for every experience.

For Web work, read `docs/anti-patterns/v032.md`; for Web responsive/mobile work also read `docs/anti-patterns/v033.md` and `docs/anti-patterns/v034.md`.

For Desktop App work, read `docs/anti-patterns/desktop-app.md`; read `docs/anti-patterns/v032.md` only when its fidelity, color, or surface rules are relevant.

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

### Shared completion

1. classify experience/archetype;
2. load relevant pattern and calibration;
3. check optical layout, effective density/readability, semantic color, surface hierarchy, and applicable Product Evidence Fidelity;
4. verify icon semantics, centering, first-line alignment, and input geometry;
5. check the anti-pattern documents routed for the selected family;
6. evaluate with `eval/checklist.md`, score major work with `eval/rubric.md`, and revise on any hard failure.

### Web experiences

1. define responsive transformations;
2. apply `docs/foundations/mobile-precision.md` after structural responsive work;
3. validate 1440 / 768 / 390 / 375-class behavior where materially relevant;
4. verify Website/Docs navigation replacement, surface-specific Mobile typography, local scrolling, code semantics, touch targets, and applicable Workspace/Editorial rules;
5. re-evaluate Product Evidence Fidelity at Desktop and Mobile.

### Desktop App

1. read `docs/desktop-app/classification.md`, `docs/desktop-app/native-shell.md`, and `docs/desktop-app/acceptance.md`;
2. validate the actual minimum plus compact, normal, and large rendered windows;
3. verify maximized/full-screen, restoration, multi-window, command, focus, keyboard/pointer, localization, and accessibility behavior where supported;
4. confirm every collapsed pane retains a discoverable replacement command and the primary task remains reachable.

Rendered screenshot review remains the visual authority. A passing build proves code validity and mechanical rule wiring, not FanUI visual acceptance.
