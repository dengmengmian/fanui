# FanUI Responsive Decision Layer

Responsive design in FanUI is not desktop compression. It is a controlled transformation of hierarchy, evidence, navigation, and interaction as available width changes.

After defining the main transformation strategy, always continue with `docs/foundations/mobile-precision.md` for phone-level navigation, typography, code, touch, overflow, and icon precision.

## Viewport classes

Use these as validation bands, not device-brand breakpoints:

```text
Wide desktop      >= 1280px
Desktop           1024–1279px
Tablet            768–1023px
Compact           560–767px
Mobile            < 560px
```

Reference acceptance matrix:

```text
1440 × 1000   Wide desktop
1024 × 900    Compact desktop / tablet landscape
768 × 1024    Tablet portrait
390 × 844     Mobile
375 × 812     Small mobile
```

390px is not the minimum acceptance width. A design that only works at 390px and breaks at 375px is unfinished.

## Transformation vocabulary

For every important region, explicitly choose one or more transformations:

```text
preserve   keep composition and function
scale      reduce size within readability limits
stack      turn multi-column content into vertical flow
reorder    change visual order to protect hierarchy
collapse   reduce persistent UI into a compact control
scroll     preserve width through intentional local scrolling
crop       show the most useful portion of evidence
replace    use a mobile-specific representation
sheet      move secondary detail to a bottom sheet / drawer pattern
drawer     move persistent navigation to temporary navigation
```

Do not default everything to `scale`.

## Core rules

### 1. Preserve task hierarchy, not desktop geometry

A mobile layout may look structurally different while preserving the same user task and current context.

### 2. Product evidence must transform

A desktop product screenshot that simply shrinks below readable scale is a responsive failure.

For core evidence choose one:

- crop to current task;
- remove low-priority panes;
- stack key panes;
- replace with a purpose-built mobile evidence composition.

The mobile evidence must remain believable and readable without pinch zoom.

### 3. Hidden essential UI needs a replacement path

If a sidebar, inspector, TOC, environment selector, or project navigator disappears, the mobile layout must provide a clear replacement entry point.

`display:none` is not an information architecture strategy.

### 4. Mobile persistent chrome must compress first

Prefer one primary mobile header row plus a drawer/sheet over stacking multiple permanent navigation rows.

Typical transformation:

```text
Desktop Website
Brand | Primary nav | Secondary action | CTA

Mobile Website
Brand | CTA | Menu
              ↓
           Drawer
```

For documentation, a complex desktop sidebar should normally become a full navigation drawer rather than a partial horizontal chip strip.

### 5. Touch targets

For mobile controls:

```text
primary touch target     44px minimum preferred
compact icon target      40px minimum when density requires it
horizontal gutter        16–20px
control gap              8–12px
```

Visual glyph size may remain 14–19px inside the larger touch target.

### 6. Mobile typography is surface-specific

Do not use one phone type scale across Marketing, Docs, Editorial, and Product UI.

Starting bands:

```text
Website Hero             34–42px
Website section H2       29–34px
Website Lead             16–17px
Docs Home H1             28–32px
Docs Article H1          29–33px
Docs H2                  23–26px
Docs Body                15.5–16.5px
Editorial Index Title    33–38px
Editorial Article H1     33–38px
Editorial Body           17.5–19px
Product primary text     13–15px
Product metadata         11–12.5px
```

Documentation optimizes retrieval and task reading. Editorial may breathe more.

### 7. Section rhythm compresses, hierarchy remains

Desktop 96–144px vertical bands usually compress to roughly 64–88px on mobile. Local gaps compress less aggressively.

Do not create giant desktop-style whitespace around mobile content.

### 8. Local horizontal scroll is allowed when semantically correct

Good uses:

- category tabs;
- comparison tables;
- compact secondary tab bars;
- code/configuration blocks;
- timeline/history strips.

Bad uses:

- the entire page;
- core paragraph reading;
- a desktop workspace screenshot that should have transformed.

Code is not prose: preserve code formatting and use internal horizontal scroll rather than destructive wrapping.

### 9. Icon precision survives breakpoints

Desktop icon correctness does not automatically carry over to Mobile.

At phone widths verify:

- semantic glyph still matches the action/concept;
- peer glyphs retain consistent size and stroke;
- glyph remains optically centered inside larger touch targets;
- icon + wrapped text still aligns to the first-line information anchor;
- mobile CSS does not override icon-box display, line-height, or margin;
- icon-only controls retain accessible labels and practical hit areas.

Read `iconography.md` and `mobile-precision.md` together.

## Responsive reasoning template

```yaml
responsive:
  viewport_family: mobile
  primary_task: ...
  preserve:
    - ...
  stack:
    - ...
  collapse:
    - ...
  replace:
    - ...
  local_scroll:
    - ...
  hidden_with_replacement:
    sidebar: drawer
    inspector: sheet
  product_evidence:
    strategy: crop | stack | replace
    readable_without_zoom: true
  chrome:
    persistent_rows: 1
  touch_targets: checked
  icon_precision: checked
  small_mobile_375: checked
```

## Hard failures

- Desktop evidence is merely scaled until unreadable.
- A two-column Marketing section remains two cramped columns below ~560px.
- Essential sidebar/inspector/navigation is removed without replacement access.
- Core actions are smaller than practical touch targets.
- Mobile page develops horizontal document-level overflow.
- Product Workspace becomes a long accidental desktop canvas rather than a deliberate mobile task flow.
- Website keeps a double-decker persistent mobile header without a strong reason.
- Docs replaces a complex sidebar with an incomplete chip strip.
- Code/configuration semantics are broken by ordinary prose wrapping.
- A repeated icon/control pattern regresses in centering or semantics only at Mobile widths.
- 375×812 produces header collision, tab wrapping, or document-level overflow.
