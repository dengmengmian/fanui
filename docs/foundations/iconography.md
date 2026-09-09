# FanUI Iconography

Icons in FanUI are semantic controls and information anchors, not decoration.

## 1. Semantic fit before visual fit

Choose the icon whose meaning best matches the concept or action. Do not choose an icon only because it looks balanced in the layout.

Examples:

- workflow composition → workflow / nodes / route semantics;
- bounded authority → shield / lock / permission semantics;
- history / versions → history / clock / version semantics;
- continue / open downstream → directional arrow semantics.

Avoid approximate metaphors when a direct one exists. A Git branch icon should not stand in for a generic workflow merely because both contain branches. A robot icon should not stand in for agent permissions or boundaries.

## 2. Icon + text optical alignment

When an icon precedes a title plus supporting copy, align the icon container to the **first-line information anchor**, not the geometric center of the full two-line text block.

Recommended compact feature-row geometry:

```text
icon container      28–32px
icon glyph           14–16px
column gap           10–12px
optical Y correction 0–2px when required
```

The icon container should use explicit centering:

```css
.icon-box {
  display: grid;
  place-items: center;
  line-height: 1;
}

.icon-box svg {
  display: block;
}
```

Do not allow generic descendant selectors such as `.row span { ... }` to override icon-box display, margin, line-height, or color.

## 3. Optical centering beats mathematical centering

SVG view boxes are mathematically centered but individual glyphs can carry uneven visual mass. Inspect rendered output at actual size.

Allowed correction:

- translate or margin adjustment of roughly 1px when needed;
- alternate icon with better visual mass if the glyph remains unbalanced.

Do not compensate with large offsets. If more than ~2px correction is required, reconsider the icon or container geometry.

## 4. Stroke consistency

Within one icon family/region:

- use a consistent library where possible;
- keep glyph size consistent for peers;
- keep stroke weight consistent for peers;
- avoid mixing filled, outlined, emoji, text glyphs, and line icons without a semantic reason.

For Lucide-like line icons in compact Web UI, a practical starting band is:

```text
glyph size    14–16px
stroke width  1.7–2.0
```

## 5. Icon containers

Do not put every icon in a colored rounded square.

Use a container when it helps establish a repeated feature/list rhythm or creates a semantic anchor. In dense Product UI, icons often work better without decorative containers.

If a container is used:

- its radius should follow Surface Radius Hierarchy;
- icon and background contrast must remain readable;
- all peer containers must share geometry;
- the icon itself must remain optically centered.

## 6. Icon-only controls

Icon-only controls require:

- recognizable conventional meaning;
- tooltip or accessible label;
- adequate hit area;
- consistent control geometry;
- visible hover/focus state.

Do not make ambiguous product concepts icon-only.

## 7. Anti-patterns

### Icon Confetti
Icons appear beside nearly every label without improving scanning or meaning.

### Approximate Icon Semantics
A visually related but semantically wrong glyph is used because it was convenient.

### Glyph Drift
Peer icons use inconsistent sizes, strokes, vertical positions, or visual weight.

### Icon-box Override
A broad CSS selector accidentally changes the centering, margin, line-height, or color of an icon container.

### Text-block Centering
An icon is vertically centered against an entire title + description block, leaving it visibly lower than the title anchor.

## Completion check

For every repeated icon + text pattern, verify at rendered size:

1. semantic meaning is immediately defensible;
2. glyph is centered inside its own box;
3. icon box aligns with the first line of text;
4. peer icons share size/stroke/box geometry;
5. no broad CSS rule overrides icon-specific layout;
6. the pattern still works with Chinese labels and wrapping.
