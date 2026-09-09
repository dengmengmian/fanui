# FanUI Iconography

Icons in FanUI are semantic controls and information anchors, not decoration.

## 1. Semantic fit before visual fit

Choose the icon whose meaning best matches the concept or action. Do not choose an icon only because it looks balanced in the layout.

Examples:

- workflow composition → workflow / nodes / route semantics;
- bounded authority → shield / lock / permission semantics;
- history / versions → history / clock / version semantics;
- continue / open downstream → directional arrow semantics;
- documentation navigation → sidebar / panel / navigation semantics;
- environment context → layers / environment semantics;
- integrations → plug / connection semantics.

Avoid approximate metaphors when a direct one exists. A Git branch icon should not stand in for a generic workflow merely because both contain branches. A robot icon should not stand in for agent permissions or boundaries. A decorative sparkle should not replace a direct workspace or navigation metaphor when one exists.

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

Desktop glyph geometry and mobile touch geometry are separate concerns. On phone widths, keep the glyph compact while increasing the clickable control:

```text
mobile touch target  40–44px minimum
mobile glyph          16–19px typical
stroke                1.7–2.0
```

Do not enlarge the icon to fill the larger hit area.

## 7. Breakpoint invariance

A correct desktop icon can still fail on Mobile if breakpoint CSS changes its box geometry.

At each responsive transformation verify:

- semantic meaning is unchanged unless the control itself changed role;
- the glyph remains centered in the control;
- peer glyph size/stroke remains consistent;
- icon + wrapped text keeps first-line alignment;
- mobile selectors do not overwrite `display`, `place-items`, `line-height`, `margin`, or color of dedicated icon boxes;
- drawer/menu icons use direct navigation semantics;
- hidden desktop controls that reappear in a mobile drawer do not acquire decorative or approximate replacement icons.

For Mobile Precision also read `docs/foundations/mobile-precision.md`.

## 8. Anti-patterns

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

### Tiny Icon Target
An icon-only control exposes only the SVG-sized hit area instead of a practical 40–44px touch target on phone widths.

### Mobile Icon Regression
A breakpoint makes a previously correct icon visibly off-center, semantically approximate, or inconsistent with its peers.

## Completion check

For every repeated icon + text pattern and icon-only control, verify at rendered size:

1. semantic meaning is immediately defensible;
2. glyph is centered inside its own box;
3. icon box aligns with the first line of text;
4. peer icons share size/stroke/box geometry;
5. no broad CSS rule overrides icon-specific layout;
6. icon-only controls have adequate hit targets and accessible labels;
7. the pattern still works with Chinese labels and wrapping;
8. the same checks pass at 390px and 375px when the pattern appears on Mobile.
