# FanUI Web — Visual System

## Purpose

This document turns FanUI's visual character into operational rules. It exists because correct information architecture alone can still produce interfaces that feel generic, flat, or unfinished.

FanUI visual quality is not created by adding more decoration. It is created by controlling **contrast, scale, rhythm, surface depth, and emphasis** deliberately.

Core target:

> **Rich enough to feel designed. Calm enough to stay usable.**

## 1. Visual amplitude

Every page has an intentional visual amplitude.

- **Low:** dense operational UI, tables, inspectors, settings, editors.
- **Medium:** dashboards, docs home, product overview, onboarding.
- **High:** homepage hero, major product showcase, launch/campaign section.

Do not render every section at the same amplitude.

A polished page needs variation:

```text
quiet
→ emphasis
→ quiet
→ strong product evidence
→ quiet
→ conversion
```

If every region uses the same heading size, border strength, card shape, and whitespace, the page will feel mechanically correct but visually unfinished.

## 2. Hierarchy contrast budget

Use contrast deliberately across these channels:

1. typography size/weight;
2. spacing;
3. surface/background;
4. object scale;
5. border strength;
6. brand/semantic color;
7. elevation;
8. decorative effects.

A primary region should usually differ in **two or three** channels, not all eight.

Avoid both extremes:

- no contrast → everything feels equal;
- maximum contrast everywhere → everything competes.

## 3. Surface depth ladder

FanUI uses a small semantic depth ladder.

### Level 0 — Canvas

The page/workspace foundation.

### Level 1 — Structural surface

Used for persistent regions such as sidebars, headers, inspectors, or a major section background.

### Level 2 — Object surface

Used for independent objects, comparable plans, artifacts, cards, forms, or focused content groups.

### Level 3 — Focus/elevated surface

Used for menus, popovers, dialogs, command palettes, floating editors, and temporary overlays.

Do not create depth levels merely to make the page feel richer.

### Surface rule

Prefer changing one structural property at a time:

```text
background shift
OR
border
OR
spacing separation
OR
shadow
```

Do not automatically combine rounded container + border + tinted background + shadow for every object.

## 4. Border policy

Borders should be used selectively.

Use stronger borders for:

- focused fields;
- selected objects when needed;
- pricing recommendation emphasis;
- explicit panel boundaries;
- tables where alignment depends on structure.

Use weak dividers for:

- repeated rows;
- navigation grouping;
- article metadata;
- local separation.

Avoid drawing a full rectangle around every region.

A page where every object is enclosed will read as a wireframe even if spacing is correct.

## 5. Radius policy

Radius expresses object type, not taste alone.

Recommended semantic relationship:

```text
compact control < product surface < overlay < marketing showcase
```

Rules:

- operational rows may have little or no radius;
- controls use moderate radius;
- object cards may be slightly softer;
- marketing media frames may be softer still;
- pills are reserved for pills, tags, segmented controls, compact status, or short toggles.

Do not make tables, nav rows, cards, dialogs, buttons, and full-page sections all share the same large radius.

## 6. Shadow policy

Shadow is not the default method of hierarchy.

In product UI:

- prefer surface and border separation;
- use shadow mainly for transient elevated elements;
- avoid persistent floating-card appearance.

In marketing:

- a product showcase may use controlled depth;
- shadow should support the product frame rather than become the visual subject.

## 7. Density rhythm

FanUI distinguishes **control density** from **composition density**.

### Operational UI

Controls, rows, tabs, toolbars, filters, and tree items should be medium-compact.

### Page composition

Major sections and major task regions may have more breathing room.

Rule:

> **Compact controls, generous composition.**

Do not solve a weak composition by enlarging all controls.

## 8. Primary visual object

Every substantial page should have one clear visual anchor.

Examples:

- Website → hero product view or major claim;
- Pricing → plan decision area;
- Docs home → search + entry model;
- Web App → current work object/task;
- Data App → table/view;
- AI Workspace → task/run/artifact state.

If the eye cannot identify the page's anchor within a few seconds, hierarchy is too flat.

## 9. Same-volume page test

A page fails this test when most regions look equally important.

Symptoms:

- same card size everywhere;
- same heading scale everywhere;
- same background and border treatment everywhere;
- repeated 3-column grids;
- identical section spacing;
- all screenshots shown at similar small size.

Correction:

- choose one or two hero regions;
- reduce secondary modules;
- vary composition instead of adding more color;
- allow some sections to be almost purely typographic;
- let important product UI occupy meaningful area.

## 10. Visual richness without noise

FanUI allows visual richness through:

- meaningful tinted surfaces;
- product-specific accent details;
- real screenshots / product mock UI;
- cropped close-ups of important interactions;
- varied section composition;
- restrained gradients in marketing;
- semantic data/status color;
- typographic contrast.

FanUI does not use richness as an excuse for:

- random glow;
- decorative gradients on every section;
- overbuilt glassmorphism;
- huge drop shadows;
- illustrated AI clichés;
- excessive badges;
- colored icons on every row.

## 11. Product vs marketing boundary

### Product UI

Target visual amplitude: low to medium.

Prefer:

- quiet canvas;
- compact controls;
- explicit current context;
- restrained state color;
- dense but readable information;
- limited decorative effects.

### Marketing UI

Target visual amplitude: medium to high, but only in selected regions.

May use:

- larger type;
- larger product frames;
- controlled gradient fields;
- stronger section contrast;
- richer product compositions;
- narrative transitions.

The product itself remains the strongest evidence.

## 12. Completion test

Before declaring a page visually complete, ask:

- Is there a clear visual anchor?
- Are at least two hierarchy levels visibly distinct?
- Do major sections vary in amplitude?
- Is border usage selective?
- Does product evidence occupy enough space?
- Is the design richer than a wireframe but quieter than a concept shot?
- Could removing the brand color still leave a coherent hierarchy?

If the answer to several is no, the page is structurally correct but not visually finished.