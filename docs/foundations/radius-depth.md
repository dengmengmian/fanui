# FanUI Web — Radius, Border & Depth Calibration

## Purpose

FanUI uses controlled softness and restrained depth. V0.3 adds calibrated ranges so interfaces do not collapse into either hard wireframes or oversized rounded SaaS cards.

## 1. Radius bands

Use radius according to semantic scale.

### Compact controls

```text
4–6px
```

Good for:

- dense tabs;
- tree rows with background selection;
- compact input/button variants;
- small status controls.

### Default controls

```text
6–8px
```

Good for:

- buttons;
- inputs;
- selects;
- compact popover triggers.

### Product object surfaces

```text
8–12px
```

Good for:

- artifact cards;
- pricing plans;
- focused form groups;
- compact dashboards;
- independent object panels.

### Overlays

```text
10–14px
```

Good for:

- dialogs;
- command palettes;
- menus with substantial content.

### Marketing product frame

```text
12–20px
```

Use only where the larger visual scale justifies softer framing.

### Pills

Use full/pill radius only for genuine pill semantics:

- short status;
- tags;
- segmented toggles;
- compact category chips.

## 2. Border calibration

Default structural border:

```text
1px
```

Use border contrast rather than border thickness for most hierarchy.

Stronger border is appropriate for:

- focus-visible;
- selected/recommended pricing plan;
- drag/drop target;
- validation/error state;
- intentionally outlined CTA.

Avoid 1px rectangles around every region.

## 3. Divider vs enclosure

Prefer a divider when objects share one parent surface.

Prefer enclosure when an object is:

- independently selectable;
- movable/reorderable;
- comparable as one unit;
- visually detached from its surroundings;
- transient/elevated.

Do not convert every semantic group into a box.

## 4. Shadow bands

### Product persistent surfaces

Usually none or near-none.

### Marketing product frame

May use a soft broad shadow with low contrast.

### Floating UI

Menus, dialogs, command palettes may use clearer elevation.

Rules:

- one visible elevation cue is usually enough;
- avoid hard black shadows;
- shadow must not compete with borders and tints simultaneously;
- a screenshot frame should feel grounded, not floating like a card sticker.

## 5. Depth ladder

Use a small depth system:

```text
0 Canvas
1 Structural region
2 Object surface
3 Focused/floating surface
```

Marketing may visually amplify Level 2, but it does not create additional semantic depth levels.

## 6. Selected state

Selected state should normally use some combination of:

```text
low-saturation brand tint
+ stronger text/icon
+ optional subtle border/indicator
```

Do not rely on a large radius or shadow to show selection.

## 7. Wireframe-finish test

A page is too wireframe-like when:

- most structure is expressed with rectangles and 1px borders;
- every object has a white fill on a gray canvas;
- typography has little hierarchy;
- selected/current state is barely tinted;
- no surface relationship feels intentional.

Correction:

- remove unnecessary enclosures;
- increase typography contrast;
- introduce one or two structural surface shifts;
- strengthen selection semantics;
- use brand expression where the page archetype permits it.

## 8. Over-rounded test

A page is over-rounded when:

- rows, buttons, tabs, cards, screenshots, dialogs, and sections all share large radii;
- operational UI feels soft and bulky;
- density is lost because every object needs visual breathing room around its shape.

Correction:

- reduce radius on frequent controls and rows;
- reserve larger radius for independent surfaces and marketing frames.

## 9. Completion test

At normal desktop scale ask:

- Can hierarchy survive if shadows are removed?
- Are borders doing structural work rather than drawing the whole page?
- Do frequent controls feel compact?
- Do marketing frames feel more expressive than workspace panels?
- Are radius differences semantic rather than arbitrary?

If not, recalibrate depth before adding decoration.