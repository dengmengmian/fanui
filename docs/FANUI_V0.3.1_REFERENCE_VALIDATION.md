# FanUI Web V0.3.1 — Cross-Surface Reference Validation

## Purpose

This report validates FanUI against the complete primary reference set rather than validating only the Homepage Hero.

Primary reference family:

- Apifox Product Website
- Apifox Documentation
- Apifox Blog / Editorial
- Apifox Pricing
- Apifox Product UI / Professional Workspace

Secondary reference remains Pixso for additional marketing expression.

The validation focuses on **relative proportions, typography hierarchy, container behavior, spacing rhythm, density, color/brand expression, and task fit**.

It does not claim to reproduce or measure Apifox's exact source CSS.

## Result

```text
REFERENCE_COVERAGE_HOMEPAGE=PASS
REFERENCE_COVERAGE_DOCUMENTATION=PASS
REFERENCE_COVERAGE_EDITORIAL=PASS
REFERENCE_COVERAGE_PRICING=PASS
REFERENCE_COVERAGE_WEB_APP=PASS
CROSS_SURFACE_DENSITY_MODEL=PASS
CROSS_SURFACE_SPACING_MODEL=PASS
CROSS_SURFACE_TYPOGRAPHY_MODEL=PASS
CROSS_SURFACE_BRAND_MODEL=PASS
SKILL_ROUTING=PASS
EVAL_GATE_COVERAGE=PASS
EXACT_SOURCE_CSS_MEASUREMENT=NOT_CLAIMED
DOGFOOD_003_RENDERED_VALIDATION=PENDING
```

## 1. Reference evidence reviewed

### Product Website

Current source:

- `https://apifox.com/`

Observed content structure includes:

- strong product/category Hero;
- early product-interface evidence;
- API design, debugging, automated testing, documentation, Mock, and AI-era capability stories;
- trust/social proof;
- pricing/enterprise/security content;
- FAQ and conversion areas.

Validation implication:

Homepage is a long product story with different visual chapters, not a repeated uniform Feature Card grid.

### Pricing

Current source:

- `https://apifox.com/pricing/`

Observed current decision model includes:

- Free plan;
- multiple commercial self-serve plans;
- monthly/yearly purchase modes;
- explicit seat/year units;
- discount/original-price information;
- private-deployment buying path;
- extensive categorized comparison;
- FAQ.

Validation implication:

Pricing needs denser decision rhythm than Homepage Marketing and must support plan comparison before exhaustive detail.

### Blog / Editorial

Current source:

- `https://apifox.com/blog/`

Observed current category model includes:

- 观点;
- 最佳实践;
- 资讯;
- 产品动态;
- 客户案例.

The index also distinguishes recent/featured content, popular articles, article summaries, metadata, and category-specific sections.

Validation implication:

Blog is a content-discovery system with editorial hierarchy, not a Product Website section grid.

### Documentation

Current source:

- `https://docs.apifox.com/`
- current public Apifox help/reference pages

Observed current documentation content covers deep product domains including API design/debug/test, Mock, documentation publishing, CLI, AI/MCP, subscription/deployment, and reference topics.

Public article pages demonstrate long-form technical content with screenshots, steps, callouts, headings, and task-level navigation.

Validation implication:

Docs requires dual density: compact navigation + comfortable technical reading. It must not inherit Homepage spacing or Product UI text density.

### Product UI / Workspace

Evidence:

- current public product screenshots;
- current help documentation screenshots;
- documented project/navigation/workspace behavior.

Observed product characteristics include:

- persistent context/navigation;
- project/object hierarchy;
- trees;
- tabs;
- toolbars;
- forms;
- dense request/response/data regions;
- semantic method/status color;
- configuration and result panels.

Validation implication:

Product UI uses the densest operating mode and spends canvas on work rather than marketing whitespace.

## 2. Cross-surface calibration matrix

### Homepage

```text
Reference role: product story / conversion
Visual amplitude: high in Hero and core stories
Brand expression: medium-high/high
Density: medium
Primary container: 1080–1200px
Wide product container: 1200–1320px
Hero display: 56–64px
Chinese Hero display: 52–60px
Hero CTA: 40–48px
Hero evidence: ~78–90vw; max ~1120–1280px
Major section gap: 96–144px
Local module gap: 24–40px
```

Validation: PASS.

The Hero/Marketing ranges are intentionally the strongest scale in the system.

### Documentation

```text
Reference role: retrieval + technical reading
Visual amplitude: low/medium
Brand expression: low/medium
Density: compact navigation + comfortable reading
Header: 56–64px
Left nav: 232–280px
Reading measure: 720–840px
Docs-home content: 880–1040px
Article H1: 32–40px
Body: 15–17px
Nav row: 30–36px
Article H2 top: 40–56px
Paragraph gap: 12–20px
```

Validation: PASS.

Documentation scale is materially smaller/tighter than Homepage, while article reading is more comfortable than Product UI.

### Editorial / Blog

```text
Reference role: discovery + sustained reading
Visual amplitude: medium on index; low-medium in article body
Brand expression: medium on index; low in body
Density: editorial
Index container: 1080–1200px
Article body: 680–760px
Index title: 40–52px
Article title: 44–58px
Chinese article title: 40–54px
Body: 16–18px
Body line-height: ~1.75–1.9
Major index section gap: 56–88px
Paragraph gap: 16–24px
```

Validation: PASS.

Blog correctly separates discovery composition from article reading composition.

### Pricing

```text
Reference role: plan decision + detailed comparison
Visual amplitude: medium
Brand expression: medium
Density: decision/comparison
Plan container: 1120–1240px
Pricing H1: 40–50px
Price: 36–48px
Plan padding: 24–32px
Plan CTA: 40–44px
Inter-plan gap: 12–20px
Comparison container: 1160–1320px
Comparison rows: 42–52px
Plan → comparison: 72–104px
Comparison → FAQ: 72–112px
```

Validation: PASS.

Pricing is intentionally denser than Homepage and more spacious than Product UI. The plan area is not allowed to become giant decorative Marketing cards.

### Product Web App

```text
Reference role: repeated professional work
Visual amplitude: low
Brand expression: low
Density: medium-compact/high
Top bar: 48–56px
Primary sidebar: 200–240px
Secondary navigator: 232–300px
Inspector: 280–360px
Workspace padding: 16–24px dense
Tree/nav row: 30–36px
Tabs/toolbar: 36–42px
Default control: 34–40px
Table row: 36–46px
Object title: 14–15px
Metadata: 12–13px
```

Validation: PASS.

Product UI does not use centered Website containers as its default canvas model and does not inherit Marketing CTA/heading sizes.

## 3. Spacing validation

### Shared rhythm

All families remain compatible with a 4/8-based rhythm.

Common values can include:

```text
4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 120 / 144
```

The important rule is not using the same subset everywhere.

### Relative macro-spacing order

Validated intended order:

```text
Homepage narrative transitions
>
Editorial/Pricing stage transitions
>
Documentation article/section transitions
>
Product UI task-region transitions
```

### Relative micro-spacing order

Validated intended order:

```text
Product UI repeated controls: smallest
Documentation nav / pricing comparison: compact
Editorial reading: comfortable
Homepage Hero/story composition: largest where earned
```

## 4. Typography validation

Validated scale separation:

```text
Homepage Hero display
>
Editorial article title / Pricing heading
>
Docs article H1
>
Product UI page/object title
>
Product UI row/control/metadata
```

This prevents the Dogfood failure where Marketing, Docs, Pricing, and Product UI all converged around safe framework defaults.

## 5. Container / width validation

Validated container separation:

```text
Homepage normal: 1080–1200px
Homepage product evidence: 1200–1320px / 78–90vw Hero evidence
Pricing: 1120–1240px plans; 1160–1320px comparison
Docs: 720–840px reading; 880–1040px Docs-home main content
Editorial: 680–760px article body; 1080–1200px index
Product UI: task-dependent full workspace; no default centered marketing container
```

This is intentional cross-surface differentiation, not inconsistency.

## 6. Color / brand expression validation

Validated hierarchy:

```text
Homepage Hero/core story: Medium-High / High brand expression
Pricing / Blog Index / Docs Home: Low-Medium / Medium
Docs Article / Editorial Body: Low
Professional / AI Workspace: Low
```

Semantic status/data colors remain separate from brand/decorative colors.

A product should not become visually anonymous when the primary CTA color is removed.

## 7. Page-specific failure gates

### Homepage

Reject/revise when:

- Hero type is timid on wide canvas;
- product evidence is thumbnail scale;
- every section uses the same spacing/composition;
- brand identity is neutral + one accent.

### Documentation

Reject/revise when:

- article spacing approaches Marketing section spacing;
- reading column is too wide/narrow for technical content;
- navigation is spacious/oversized;
- Docs-home is only an identical-card grid.

### Editorial

Reject/revise when:

- body uses compact dashboard typography;
- index is just a marketing-card grid;
- metadata competes with titles;
- CTA pressure interrupts reading.

### Pricing

Reject/revise when:

- plan cards are so large that comparison suffers;
- billing unit is weak/hidden;
- comparison uses Marketing-level spacing;
- enterprise buying path is visually/structurally ambiguous.

### Product UI

Reject/revise when:

- workspace is a narrow centered content island;
- controls use Website dimensions;
- core task is displaced by overview/admin pages;
- state hierarchy depends on decoration rather than operational semantics.

## 8. Skill routing validation

Expected route:

```text
experience family
→ Web App archetype when applicable
→ primary task / value loop
→ page pattern
→ cross-surface experience metrics
→ visual DNA / type / color / depth
→ page-specific calibration
→ anti-pattern pass
→ Eval
```

Status: PASS.

`skill/SKILL.md` explicitly requires `docs/foundations/experience-metrics.md` for every substantial page family.

## 9. Eval gate validation

The checklist now has dedicated calibration checks for:

- Homepage;
- Documentation;
- Editorial;
- Pricing;
- Web App.

The rubric explicitly treats one-size-fits-all cross-surface spacing/type/container usage as a quality failure.

Status: PASS.

## 10. What is verified vs pending

### Verified now

```text
Reference family coverage
Cross-surface relative density
Cross-surface typography hierarchy
Cross-surface container logic
Cross-surface spacing bands
Cross-surface brand-expression hierarchy
Skill routing
Anti-pattern coverage
Eval gate coverage
```

### Not claimed

```text
Exact Apifox CSS pixel values
Exact Apifox font/radius/shadow recipes
```

FanUI values are calibrated operating ranges, not copied measurements.

### Still pending

```text
DOGFOOD_003_RENDERED_VALIDATION=PENDING
```

Actual generated surfaces must still be rendered and visually inspected at a consistent viewport.

## 11. Dogfood #3 required rendered set

Do not validate only Homepage.

Required rendered comparison at approximately 1440px:

1. Homepage Hero + at least two later product sections;
2. Pricing plan group + comparison + FAQ;
3. Documentation Home;
4. Documentation article sample;
5. Blog index;
6. Blog article sample;
7. Web App Home/current-work entry;
8. primary Project/AI/Professional Workspace;
9. at least one dense table/list/tree state;
10. Chinese stress sample for Homepage title, Docs title/body, Pricing labels, and Product UI navigation.

## Conclusion

FanUI V0.3.1 cross-surface specification/reference validation is complete.

The specification is now calibrated as a **product family system**, not only a Homepage design system.

Next gate:

```text
Dogfood #3 full rendered surface validation
```

Only rendered inspection should decide whether these bands are tightened, loosened, or promoted to formal tokens/defaults.