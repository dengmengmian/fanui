# FanUI Web Visual DNA

This document describes the target visual character of FanUI Web. Exact token values remain intentionally unfrozen, but V0.2 adds stronger rules for visual finish, hierarchy contrast, and composition.

Read together with:

- `docs/foundations/visual-system.md`
- `docs/foundations/typography.md`
- `docs/website/product-showcase.md`

## Character

FanUI should feel:

- modern;
- clear;
- professional;
- polished;
- approachable;
- productive;
- visually calm even when information is dense;
- rich enough to feel intentionally designed.

It should not feel:

- cold for the sake of minimalism;
- excessively gray;
- template-like;
- toy-like;
- over-rounded;
- glassy by default;
- decorated with arbitrary gradients;
- spacious to the point of inefficiency;
- structurally correct but visually unfinished.

## Core formulations

> **Dense, but calm.**

> **Structured, not sterile.**

> **Rich enough to feel designed. Calm enough to stay usable.**

> **Product stays calm. Marketing may be expressive.**

## Visual hierarchy order

Default hierarchy should be established in this order:

1. Typography
2. Spacing and grouping
3. Surface/background contrast
4. Object scale
5. Border and divider
6. Color emphasis
7. Shadow/elevation
8. Decorative effects

If a layout requires strong shadows or saturated color merely to reveal hierarchy, the underlying structure is probably weak.

If all regions still look equally important after applying the first five channels, the page has a **same-volume hierarchy problem**.

## Visual amplitude

Pages should intentionally vary visual amplitude.

- **Low:** operational tables, settings, inspectors, dense editors.
- **Medium:** dashboards, docs home, onboarding, product overview.
- **High:** selected marketing hero/product showcase sections only.

Do not render every section at the same amplitude.

A polished page should contain quiet and strong regions rather than repeating one card/heading/screenshot rhythm from top to bottom.

## Density

### Web App

Default density: **medium-compact**.

- frequent controls should remain compact;
- rows should support fast scanning;
- metadata should be visually weaker than object names and states;
- repeated whitespace should not consume the workspace;
- task areas should remain comfortable for long sessions.

### Website

Default density: **medium with generous section rhythm**.

- larger separation between story sections;
- concise text blocks;
- product visuals may occupy substantial area;
- navigation remains compact and efficient.

### Documentation

Default density: **compact navigation + comfortable reading column**.

### Editorial

Default density: **reading-first** with longer vertical rhythm and lower control density.

## Color

FanUI should use a neutral foundation plus a restrained brand accent.

Color roles:

- **Canvas:** page-level foundation.
- **Surface:** local semantic grouping.
- **Elevated surface:** transient or focused layer.
- **Primary text:** high-contrast content.
- **Secondary text:** explanation and support.
- **Tertiary text:** metadata.
- **Border/subtle divider:** structure without visual noise.
- **Brand/primary:** primary action and brand identity.
- **Selection:** low-saturation brand tint.
- **Semantic:** success, warning, danger, information, protocol/state.
- **Data:** visualization/category differentiation.
- **Decorative:** marketing-only visual expression.

Do not let brand color dominate every interactive element.

## Surface language

FanUI is **surface-friendly, not card-first**.

Prefer:

- subtle background changes for large structural regions;
- light borders for explicit boundaries;
- tinted selection backgrounds;
- cards for genuinely independent or comparable objects;
- clear parent/child surface relationships;
- selective use of open/unboxed regions to create hierarchy contrast.

Avoid:

- card-per-section layouts;
- nested rounded containers without semantic need;
- floating every region above the canvas;
- identical visual treatment for unrelated hierarchy levels;
- enclosing every region with a full border rectangle.

## Borders

Borders are structural, not decorative.

Use them to:

- separate adjacent interactive regions;
- define tables and controls where necessary;
- clarify panels and inspector boundaries;
- reinforce focus or selection.

Prefer subtle dividers over boxing every group. A page where every object is enclosed can feel like a polished wireframe rather than a finished product.

## Radius

FanUI uses moderate softness.

The semantic relationship should generally be:

```text
compact control < product surface < overlay < marketing showcase
```

Avoid using one large radius everywhere. Marketing may use softer, larger frames than dense application UI.

## Shadow and elevation

Default Web App depth should come primarily from surface contrast and borders.

Use shadow for:

- popovers;
- dialogs;
- menus;
- drag states;
- important floating overlays;
- selected marketing product compositions where depth helps storytelling.

Do not shadow every card.

## Typography

FanUI uses one coherent typographic family but four operating modes:

1. **Product typography** — compact, high scanability.
2. **Marketing typography** — stronger scale contrast and concise display text.
3. **Documentation typography** — navigation density plus code/readability support.
4. **Editorial typography** — long-form reading rhythm and comfortable measure.

Typography should do more hierarchy work than color.

The page should retain clear hierarchy even if brand color, icons, and shadows are temporarily removed.

See `docs/foundations/typography.md`.

## Product evidence

For product-led websites, product UI must receive visual weight proportional to the importance of the claim.

Do not repeatedly render core product evidence as small browser-window thumbnails.

Use the Product Showcase scale system:

- Small;
- Medium;
- Large;
- Hero.

A core or hero claim usually requires Large or Hero evidence.

See `docs/website/product-showcase.md`.

## Iconography

Icons should:

- clarify recognizable actions;
- reduce repeated text where conventions are strong;
- communicate file/object types;
- support navigation scanning;
- reinforce semantic state.

Avoid icons on every heading, every row, and every button.

## Interaction states

Every interactive element should define at least:

- default;
- hover;
- active/pressed;
- focus-visible;
- selected/current where applicable;
- disabled;
- loading when asynchronous.

Selected/current state is especially important in dense tools. It should not rely on text color alone.

## Motion

Motion should explain change.

Use motion for:

- panel opening/closing;
- context transitions;
- state changes;
- expansion/collapse;
- feedback;
- marketing storytelling where motion reveals product behavior.

Avoid ambient motion in professional workspaces.

## Marketing expression boundary

Website surfaces may use controlled:

- gradient fields;
- glows;
- large product frames;
- background color changes;
- oversized product details;
- illustration;
- motion.

But the product must remain the content anchor. Decoration should never be the only evidence in a feature section.

## Visual completion test

Before considering a page finished, check:

- one clear visual anchor exists;
- major hierarchy levels are visibly different;
- important regions do not all share the same card/heading rhythm;
- product evidence is readable at normal browser scale;
- border usage is selective;
- removing brand color would not destroy hierarchy;
- the page feels richer than a wireframe but quieter than a concept shot.