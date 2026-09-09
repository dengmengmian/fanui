# FanUI Surface Hierarchy

## Purpose

FanUI does not use one radius, one border, or one elevation across Website, Docs, Pricing, and Product UI.

## Radius bands

Approximate desktop operating bands:

```text
Marketing Hero frame / major visual field   18–24px
Marketing major surface                     14–20px
Marketing ordinary card                     10–14px
Pricing plan / enterprise surface            10–12px
Docs entry surface                             8–10px
Product panel / inspector / editor             6–9px
Product input / button / tab                   6–8px
Tree / table / repeated row                    0–6px
Pill semantic status                         999px only when pill semantics are real
```

The exact value may vary, but the hierarchy should be visible.

## Border hierarchy

Use borders selectively:

- structural pane boundary: subtle 1px;
- selected object: stronger outline or selection surface;
- repeated rows: dividers are often better than individual cards;
- major Marketing visual: border may combine with tint/elevation;
- article/reading areas: avoid enclosing the entire text in a bordered card.

## Elevation

### Product UI

Prefer surface contrast and borders. Shadows should be small and local, mostly for overlays, selected draggable objects, floating controls, or temporary layers.

### Marketing

Larger product frames may use restrained deep shadows because they represent a physical visual anchor.

## Surface count

Every additional nested surface must explain one of:

- ownership;
- interaction boundary;
- selection;
- state;
- comparison;
- layering.

If it explains none, remove the surface.

## Hard rule

> The closer the interface gets to sustained operational work, the quieter and tighter its radius/elevation language should become.