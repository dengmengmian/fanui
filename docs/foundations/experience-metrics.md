# FanUI Web — Cross-Surface Experience Metrics

## Purpose

FanUI pages must feel like one design family without forcing Homepage, Documentation, Editorial, Pricing, and Product UI into one density or spacing recipe.

This document calibrates each experience family at a reference wide-desktop viewport of approximately **1440px**.

Values are operating bands, not immutable tokens. Choose deliberately inside the band. Deviate only when content, product, language, or brand gives a concrete reason.

The rule is:

> **Shared rhythm, different operating density.**

## 1. Shared wide-desktop frame

### Website standard content container

```text
1080–1200px
```

Use for:

- navigation inner content;
- normal marketing sections;
- pricing plan groups;
- blog index composition.

### Wide product / comparison container

```text
1200–1320px
```

Use for:

- Hero product evidence;
- large workflow visuals;
- complex pricing comparisons;
- wide editorial/media compositions when justified.

### Reading measure

```text
Editorial body: 680–760px
Documentation article body: 720–840px
```

Do not use the standard marketing container as the paragraph measure.

## 2. Product Website / Homepage

### Header

```text
Height: 64–72px
Navigation text: 14–15px
Primary header CTA: 36–42px
```

### Hero

```text
Top composition gap after header: 72–112px
Hero display: 56–64px
Chinese Hero display: 52–60px
Hero lead: 18–20px
Hero lead line-height: ~1.55–1.7
Primary Hero CTA: 40–48px
CTA group gap: 12–16px
Hero copy → product evidence: 48–80px
```

### Product evidence

```text
Hero: ~78–90vw; max ~1120–1280px
Large: ~65–85% of local/wide composition
Medium: ~50–65%
Small: ~30–45%
```

Core UI details must remain readable at normal browser scale.

### Section rhythm

```text
Major narrative transition: 96–144px
Section title → main content: 32–56px
Related product modules: 24–40px
Trust/social-proof band: 64–96px vertical breathing room
Final CTA zone: 80–120px vertical breathing room
```

Homepage should not use one spacing recipe for every section.

## 3. Documentation

Documentation uses dense navigation plus comfortable reading.

### Shell

```text
Docs header: 56–64px
Left navigation: 232–280px
Right local TOC when present: 176–224px
Shell gutters between regions: 24–40px
Article content measure: 720–840px
Docs-home main content: 880–1040px
```

### Navigation density

```text
Nav row: 30–36px
Group label height: 24–32px
Nested indentation step: 12–20px
Search field height: 40–44px
Docs-home search width: ~560–760px
```

### Typography

```text
Docs-home title: 30–38px
Article H1: 32–40px
Chinese Article H1: 30–38px
Article H2: 24–28px
Article H3: 18–22px
Body: 15–17px
Code/technical UI: 13–14px
```

### Article spacing

```text
Title → intro: 12–20px
Intro → first content: 28–40px
H2 top: 40–56px
H2 bottom: 16–24px
H3 top: 28–40px
Paragraph gap: 12–20px
Code block vertical gap: 20–28px
Callout vertical gap: 20–28px
Previous/Next region top: 48–72px
```

Docs must never inherit Homepage-scale 96–144px gaps inside article flow.

## 4. Editorial / Blog

Editorial index optimizes discovery; article pages optimize sustained reading.

### Blog index frame

```text
Standard container: 1080–1200px
Category/navigation band: 44–56px
Featured-story composition gap: 48–72px
Major index section separation: 56–88px
Article grid/list gap: 24–36px
```

### Blog index typography

```text
Index/page title: 40–52px
Featured article title: 32–44px
Normal article title: 18–24px
Summary: 15–17px
Metadata: 12–14px
Category label: 12–14px
```

### Article page

```text
Article header container: 880–1040px
Article title: 44–58px
Chinese article title: 40–54px
Deck/summary: 18–21px
Article body: 16–18px
Body line-height: ~1.75–1.9
Body measure: 680–760px
Hero/cover max width: 960–1160px when visually useful
```

### Editorial vertical rhythm

```text
Category → title: 12–20px
Title → deck: 20–28px
Deck → metadata: 20–28px
Metadata → cover/body: 32–56px
Paragraph gap: 16–24px
H2 top: 48–64px
H3 top: 32–44px
Related-content top: 64–96px
End CTA/newsletter separation: 72–112px
```

Editorial should feel more breathable than Product UI, but less theatrical than a Homepage Hero.

## 5. Pricing

Pricing must keep comparison density high enough to support decisions.

### Header / intro

```text
Website header: 64–72px
Pricing intro top: 72–104px
Pricing H1: 40–50px
Chinese Pricing H1: 38–48px
Lead: 16–18px
Intro → billing control: 28–40px
Billing control height: 36–42px
```

### Plan group

```text
Plan group container: 1120–1240px
Billing control → plans: 40–64px
Inter-plan gap: 12–20px
Plan surface padding: 24–32px
Plan name: 18–21px
Price value: 36–48px
Billing unit: 13–15px
Plan CTA: 40–44px
Feature text: 14–15px
Feature row gap: 10–16px
```

When 4+ self-serve plans exist, do not inflate cards so much that meaningful comparison disappears below the fold.

### Enterprise path

```text
Separation from self-serve plans: 32–56px
Enterprise panel padding: 24–36px
```

Enterprise may use a different composition when the buying motion is structurally different.

### Comparison matrix

```text
Plan group → comparison: 72–104px
Comparison container: 1160–1320px
Sticky/header row: 44–52px
Normal row: 42–52px
Category separator row: 34–44px
Cell horizontal padding: 12–20px
```

### FAQ / conversion

```text
Comparison → FAQ: 72–112px
FAQ item: 48–60px minimum when accordion-like
FAQ group width: 720–880px
FAQ → final CTA: 80–112px
```

## 6. Professional / AI Web App

Product UI is the densest mode.

### Persistent shell

```text
Top/global bar: 48–56px
Primary/global sidebar: 200–240px
Project/secondary navigator: 232–300px
Inspector: 280–360px
Workspace header: 48–56px
Workspace padding: 16–24px dense / 24–32px normal
```

### Operational typography

```text
Current page/object title: 20–24px
Major workspace section: 16–18px
Object/row title: 14–15px
Body/control label: 13–15px
Metadata: 12–13px
Code/technical: 12–14px
```

### Operational controls

```text
Tree/nav row: 30–36px
Compact control: 30–34px
Default control: 34–40px
Tabs: 36–42px
Toolbar: 36–42px
Compact table row: 36–40px
Normal table row: 40–46px
Panel padding: 12–20px
Local object gap: 8–16px
Task-region gap: 16–24px
```

### Workspace composition

Avoid large empty page margins. The current project/task/workflow should occupy the useful canvas.

Professional/AI Workspace should typically use:

```text
low visual amplitude
low brand expression
high state clarity
medium-compact density
```

## 7. Cross-surface consistency rules

The same product should retain:

- one font family or intentionally coordinated family;
- consistent primary/secondary/tertiary text semantics;
- consistent brand/semantic color meaning;
- consistent radius bands by object type;
- a shared 4/8-compatible spacing rhythm;
- recognizable button/control language;
- coherent icon language.

But do **not** force the same:

- heading scale;
- section gap;
- control density;
- content measure;
- visual amplitude;
- brand expression level.

## 8. Calibration failure patterns

### Marketing-sized Docs

Docs uses 80–120px section gaps and oversized 48px+ content headings.

### Dashboard-sized Editorial

Blog index/article body uses compact 14px product text and boxed card density everywhere.

### Landing-page Pricing

Plans become giant decorative cards with low comparison density.

### Website-sized Product UI

Operational buttons/rows inflate to 44–52px without task need.

### Uniform-spacing Product Family

Every page uses the same `py-24`, same max-width, and same heading scale.

These are failures even if individual pages look clean.

## 9. AI calibration output

Before implementing a substantial surface, the agent should be able to state internally:

```yaml
experience_metrics:
  reference_viewport: 1440
  family: website | documentation | editorial | pricing | web_app
  primary_container: ...
  reading_measure: ... | none
  header_height: ...
  title_scale: ...
  primary_control_height: ...
  major_vertical_rhythm: ...
  local_vertical_rhythm: ...
  density: ...
  visual_amplitude: ...
  brand_expression: ...
```

If the agent cannot identify these values, it has not completed visual calibration.