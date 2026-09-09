# FanUI Responsive Decision Layer

Responsive design in FanUI is not desktop compression. It is a controlled transformation of hierarchy, evidence, navigation, and interaction as available width changes.

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

### 4. Touch targets

For mobile controls:

```text
primary touch target     44px minimum preferred
compact icon target      40px minimum when density requires it
horizontal gutter        16–20px
control gap              8–12px
```

Visual glyph size may remain 14–18px inside the larger touch target.

### 5. Mobile typography

Typical mobile starting bands:

```text
Website Hero             38–44px
Website section H2       30–36px
Page title               30–38px
Lead                     16–18px
Body                     15–17px
Product primary text     13–15px
Product metadata         11.5–13px
Docs body                16–17px
Editorial body           16.5–18px
```

Do not preserve 56–64px desktop display type when it creates unstable 3–5 word line fragments.

### 6. Section rhythm compresses, hierarchy remains

Desktop 96–144px vertical bands usually compress to roughly 64–88px on mobile. Local gaps compress less aggressively.

Do not create giant desktop-style whitespace around mobile content.

### 7. Local horizontal scroll is allowed when semantically correct

Good uses:

- category tabs;
- comparison tables;
- compact secondary tab bars;
- timeline/history strips.

Bad uses:

- the entire page;
- core paragraph reading;
- a desktop workspace screenshot that should have transformed.

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
  touch_targets: checked
```

## Hard failures

- Desktop evidence is merely scaled until unreadable.
- A two-column Marketing section remains two cramped columns below ~560px.
- Essential sidebar/inspector navigation is removed without replacement access.
- Core actions are smaller than practical touch targets.
- Mobile page develops horizontal document-level overflow.
- Product Workspace becomes a long accidental desktop canvas rather than a deliberate mobile task flow.
