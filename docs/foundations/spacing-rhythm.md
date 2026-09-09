# FanUI Web — Spacing & Rhythm Calibration

## Purpose

Spacing controls perceived quality, density, and hierarchy. V0.3 adds calibrated ranges so AI does not solve every page with generic framework defaults or excessive whitespace.

These are ranges, not frozen tokens.

## 1. Base rhythm

FanUI should normally resolve to a 4px or 8px compatible rhythm.

Common useful steps:

```text
4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 120 / 144
```

Do not use every value. A product should converge on a small subset.

## 2. Website vertical rhythm

### Header to Hero content

```text
64–112px
```

### Hero internal spacing

```text
Eyebrow → headline: 16–24px
Headline → lead: 20–28px
Lead → CTA: 28–40px
CTA → supporting note: 12–16px
Hero copy → product showcase: 48–80px
```

### Major section separation

```text
96–144px
```

### Section title → section content

```text
32–56px
```

### Related modules inside one section

```text
24–40px
```

Use the larger end for marketing narrative, smaller end for denser product explanation.

## 3. Pricing rhythm

Plan decision area should be compact enough for comparison.

Typical:

```text
Intro → billing switch: 28–40px
Billing switch → plan group: 40–64px
Plan group → detailed comparison: 64–96px
Comparison → FAQ: 72–112px
```

Do not isolate each pricing stage with huge empty bands.

## 4. Documentation rhythm

Docs combines dense navigation with comfortable reading.

Typical:

```text
Search → title/intro: 24–36px
Intro → entry group: 32–48px
Entry group → next group: 40–64px
Article H2 top margin: 40–56px
Article H3 top margin: 28–40px
Paragraph spacing: 12–20px
```

Avoid marketing-level 100px+ gaps inside article flow.

## 5. Product Web App density

### Page / workspace padding

```text
Dense workspace: 16–24px
Normal application page: 24–32px
Large overview/list page: 28–40px
```

### Repeated controls

```text
Tree/list row: 30–36px
Compact table row: 36–40px
Normal table row: 40–48px
Tabs: 36–44px
Toolbar: 36–44px
Compact control height: 30–34px
Default control height: 34–40px
Primary prominent control: 38–44px
```

Do not make operational controls 44–48px by default merely to look modern.

## 6. Panel rhythm

Inside a focused product panel:

```text
Panel padding: 12–20px
Section inside panel: 16–24px
Label → control: 6–10px
Form field group gap: 16–24px
Inline control gap: 8–12px
```

## 7. Compact controls, generous composition

FanUI distinguishes:

```text
micro spacing → control readability
local spacing → semantic grouping
macro spacing → composition rhythm
```

Do not increase micro spacing to solve a macro composition problem.

## 8. Same-rhythm anti-pattern

A long website should not repeat identical vertical spacing for every section.

Good rhythm intentionally changes:

```text
Hero: open
Proof: compact
Core feature: open
Detail feature: medium
Workflow: wide/open
Trust: compact
CTA: open
```

The page should feel composed, not generated from one reusable section template.

## 9. Whitespace legitimacy test

Every large gap should answer at least one:

- Does it separate narratives?
- Does it isolate a major decision?
- Does it give a large product visual room?
- Does it improve reading?
- Does it mark a context transition?

If not, reduce it.

## 10. Completion test

Check at 1440px:

- Does the page feel sparse because important content is underscaled?
- Are controls unnecessarily tall?
- Are related objects visually too far apart?
- Does every section use the same padding/gap recipe?
- Is the workspace dense enough for repeated professional use?

Spacing should make hierarchy obvious without becoming the design itself.