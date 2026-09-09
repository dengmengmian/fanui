# FanUI Web V0.3 — Self Validation

## Scope

This report validates the V0.3 specification and Skill wiring after Dogfood #2 exposed scale, proportion, color-expression, and visual-finish gaps.

This is a **repository/specification validation**, not a substitute for Dogfood #3 visual output validation.

## Result

```text
SPEC_STRUCTURE=PASS
SKILL_ROUTING=PASS
CALIBRATION_CONSISTENCY=PASS
WEB_APP_ARCHETYPE_PRESERVATION=PASS
EVAL_GATE_COVERAGE=PASS
VISUAL_DOGFOOD_003=PENDING
```

## 1. Required V0.3 files — PASS

Foundations:

- `docs/foundations/visual-system.md`
- `docs/foundations/typography.md`
- `docs/foundations/layout-metrics.md`
- `docs/foundations/spacing-rhythm.md`
- `docs/foundations/color-expression.md`
- `docs/foundations/radius-depth.md`

Website calibration:

- `docs/website/hero.md`
- `docs/website/navigation.md`
- `docs/website/product-showcase.md`

Existing Web App architecture rules remain present:

- `docs/web-app/archetypes.md`
- `docs/web-app/app-shell.md`
- `docs/web-app/workspace.md`

## 2. Calibration consistency — PASS

Key wide-desktop ranges are aligned across Skill and dedicated documents.

### Container

```text
Standard: 1080–1200px
Wide Product: 1200–1320px
```

### Hero typography

```text
Hero Display: 56–64px
Chinese Hero Display: 52–60px
Hero Lead: 18–20px
CTA Height: 40–48px
```

### Product evidence

```text
Small: ~30–45% local width
Medium: ~50–65%
Large: ~65–85%
Hero: ~78–90vw
Hero max: ~1120–1280px
```

### Website navigation

```text
Header: 64–72px
Navigation: 14–15px
CTA: 36–42px
```

### Product UI density

V0.3 keeps Product UI compact and does not apply Marketing scale to operational controls.

## 3. Skill routing — PASS

`skill/SKILL.md` now requires this path before implementation:

```text
experience classification
→ Web App archetype when applicable
→ primary task/core value loop
→ hierarchy
→ page pattern
→ calibrated foundations
→ visual amplitude / brand expression
→ component semantics
→ product evidence scale
→ anti-pattern pass
→ bilingual checks
→ evaluation
```

The Skill explicitly reads all new calibration documents.

## 4. Dogfood #1 regression protection — PASS

The Skill and Eval still block:

- Management Console Drift
- Noun-trap Navigation
- generic Overview / Projects / Agents / Runs IA for task-oriented products

V0.3 visual work did not remove the V0.2 archetype gate.

## 5. Dogfood #2 regression protection — PASS

V0.3 explicitly covers the observed failures:

### Timid Hero

Covered by:

- Hero calibrated typography
- Hero CTA calibration
- wide Product Showcase calibration
- underscaled-content anti-pattern

### Product screenshot too small

Covered by:

- calibrated `Small / Medium / Large / Hero` widths
- `readable_without_zoom` requirement
- rubric hard-fail for severe thumbnail-scale core evidence

### Weak brand expression

Covered by:

- `Low / Medium / High` Brand Expression levels
- color-role separation
- `Anonymous Neutral + Accent` anti-pattern

### Wireframe / border-heavy finish

Covered by:

- radius/depth bands
- border policy
- Surface ladder
- `Border-grid / Wireframe Finish` anti-pattern

### Same visual volume

Covered by:

- visual amplitude
- varied section rhythm
- same-volume anti-pattern

## 6. Eval gate coverage — PASS

`eval/checklist.md` now explicitly verifies:

- 1440px calibration;
- container selection;
- Marketing type scale;
- Chinese Hero scale;
- CTA size;
- Product Showcase width/readability;
- Brand Expression level;
- spacing rhythm;
- radius/depth semantics;
- wide-canvas underscaling.

`eval/rubric.md` now includes calibration inside Visual Finish and introduces a hard-fail for severe wide-desktop underscaling of product-led Homepages.

## 7. Remaining intentionally unfrozen

V0.3 does **not** freeze:

- exact hex colors;
- one universal typeface;
- final token names;
- one exact spacing scale;
- one exact shadow recipe;
- React component APIs.

This is intentional. Calibration ranges should survive more than one dogfood before becoming fixed tokens/defaults.

## 8. Pending visual validation

The following cannot be proven from repository documents alone:

```text
VISUAL_DOGFOOD_003=PENDING
```

Dogfood #3 must regenerate/refactor the same Flowbit surfaces using only the updated installed FanUI Skill.

Required comparison viewport:

```text
1440px desktop first
```

Compare Dogfood #2 vs #3 for:

1. Hero H1 scale and line breaking;
2. CTA visual weight;
3. Product Showcase width/readability;
4. header/navigation maturity;
5. Brand Expression richness;
6. section rhythm;
7. Product UI internal visual richness;
8. Web App archetype remains AI/Professional Workspace;
9. Chinese layout viability.

## 9. Acceptance rule for Dogfood #3

V0.3 should not be considered visually validated merely because the agent reports a score >= 85.

Visual acceptance requires actual rendered output inspection.

Dogfood #3 passes only if:

- the large-canvas/timid-scale gap is materially reduced;
- Product UI is visibly readable as evidence;
- brand expression improves without generic AI decoration;
- workspace architecture does not regress;
- the result still feels FanUI rather than an Apifox clone.

## Conclusion

FanUI V0.3 specification closure is complete and internally consistent.

Next gate:

```text
Dogfood #3 rendered comparison
```

Only after that result should calibration ranges be tightened, relaxed, or promoted into formal design tokens.