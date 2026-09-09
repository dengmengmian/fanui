# FanUI Website — Hero Calibration

## Intent

The Hero must establish product category, value, brand character, and evidence at a confident scale. V0.3 adds calibration because AI-generated heroes were structurally correct but visually timid.

## 1. Hero composition

A FanUI product Hero normally contains:

```text
Category / eyebrow (optional)
→ Primary value proposition
→ Lead / clarification
→ Primary + secondary CTA
→ Optional support note
→ Product evidence
```

Do not add elements merely to fill the first viewport.

## 2. Desktop type calibration

At a ~1440px desktop viewport:

```text
Hero display: 56–64px
Chinese hero display: typically 52–60px
Line-height: 1.05–1.12
Hero lead: 18–20px
Navigation: 14–15px
CTA label: 14–16px
Eyebrow: 12–13px
```

Use the upper part of the range when:

- the value proposition is concise;
- the Hero is centered;
- brand expression is high;
- the product has strong visual evidence below.

Use the lower part when:

- Chinese copy is long;
- the Hero is split with a complex visual;
- the title has three or more lines.

Do not default to ~40–48px display type on a wide product website unless the product intentionally uses a quiet editorial tone.

## 3. Headline width

Centered:

```text
780–980px
```

Lead:

```text
620–760px
```

Avoid an undersized headline inside a very large canvas.

## 4. Brand expression

Hero default expression:

```text
medium-high
```

Allowed:

- selective brand-gradient text;
- soft color field behind product evidence;
- strong branded CTA or dark-neutral CTA;
- brand motif in small supporting roles.

Not allowed by default:

- generic purple-blue AI orb;
- glow around every element;
- gradient across all text;
- decorative visual stronger than the product evidence.

## 5. Product evidence relationship

If the product itself is the proof, the Hero should visually resolve as:

```text
Claim
→ CTA
→ Strong Product Evidence
```

not:

```text
Huge empty field
→ small claim
→ tiny screenshot
```

Hero product evidence should usually use `Hero` scale from `product-showcase.md`.

## 6. Hero vertical rhythm

Recommended desktop ranges:

```text
Header → first Hero content: 64–112px
Eyebrow → headline: 16–24px
Headline → lead: 20–28px
Lead → CTA: 28–40px
CTA → support note: 12–16px
Hero copy → product evidence: 48–80px
```

The first viewport does not have to contain the entire product showcase. It should contain enough of it to establish that the product is real and important.

## 7. CTA scale

Primary Hero CTA:

```text
height: 40–48px
horizontal padding: 20–28px
```

Secondary CTA should match height but have lower visual weight.

Do not use compact product-workspace buttons as the primary marketing CTA.

## 8. Product mode / capability switcher

When a product has multiple core modes, a compact mode switcher may sit between Hero CTA and Product Showcase.

Use when it helps the visitor understand the product model.

Rules:

- 3–6 modes is a practical range;
- selected mode must be clear;
- it should preview real product capability, not behave like decorative tabs;
- keep it visually quieter than the H1 and product frame.

## 9. Background treatment

Default Hero background may be:

- white / near-white;
- lightly tinted brand field;
- subtle radial/linear brand atmosphere;
- structured section surface.

A flat tinted rectangle is not automatically richer than white. Use background to support the product frame and brand rhythm.

## 10. Hero failure modes

### Timid Hero

Symptoms:

- H1 is too small for viewport;
- product screenshot is < ~70% of expected hero evidence width;
- CTA looks like an internal app button;
- large empty zones dominate.

### Generic AI Hero

Symptoms:

- purple gradient + centered copy + abstract AI graphic;
- little real product proof;
- could belong to any AI SaaS.

### Copy-first Hero with weak proof

Symptoms:

- product requires complex explanation but screenshot remains tiny;
- page asks users to believe claims instead of inspect product behavior.

## 11. AI calibration model

```yaml
hero:
  composition: centered | split
  brand_expression: medium | high
  display_size: 56-64
  chinese_display_size: 52-60
  headline_measure: 780-980
  lead_size: 18-20
  primary_cta_height: 40-48
  evidence_scale: hero
  evidence_readable_without_zoom: true
```

Choose actual values based on copy length and brand, but stay inside the calibration band unless there is an explicit design reason.