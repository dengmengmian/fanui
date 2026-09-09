# FanUI Web — Calibrated Layout Metrics

## Purpose

FanUI V0.3 introduces calibrated ranges because purely semantic guidance caused AI-generated pages to converge on safe but underscaled defaults.

These numbers are **calibration bands**, not immutable design tokens. Choose within the band according to content, language, and product character. Deviate only with a clear reason.

## 1. Desktop reference frame

Primary calibration viewport:

```text
width: 1440px
browser/content viewport after chrome: approximately 1360–1440px
```

Always validate at narrower desktop and tablet widths as well.

## 2. Website containers

### Standard content container

Use for navigation, section copy, pricing, feature grids, trust content.

```text
width: 1080–1200px
recommended default: ~1160px
```

### Wide product container

Use for Hero/Large product evidence and workspace demonstrations.

```text
width: 1200–1320px
or approximately 82–92vw at 1440px
```

A product-led homepage should not force its strongest product evidence into the same narrow width as paragraphs.

### Reading container

Use for Editorial body content.

```text
width: 680–760px
```

### Documentation reading content

Use for docs article body, excluding navigation/TOC.

```text
width: 760–880px
```

## 3. Website header

Typical desktop marketing navigation:

```text
height: 64–72px
horizontal content width: standard container
```

Do not make the primary website navigation so small or thin that the brand feels provisional.

## 4. Hero composition width

### Hero text block

Centered hero:

```text
headline max-width: 780–980px
lead max-width: 620–760px
```

Split hero:

```text
text column: 38–46%
visual column: 54–62%
```

Do not constrain major Chinese headlines to an English-style ultra-narrow measure.

## 5. Hero product evidence

When product UI is the primary proof:

```text
Hero showcase width: 78–90vw
recommended max-width: 1120–1280px
```

At 1440px, the main UI structure must be inspectable without zooming.

If the screenshot is technically present but feels like a thumbnail, the Hero scale is wrong.

## 6. Section composition

### Standard feature section

```text
content width: 1080–1200px
text column: 32–42%
visual column: 52–64%
```

### Large product story

```text
visual width: 65–85% of content region
```

### Small supporting visual

```text
visual width: 30–45% of content region
```

Do not use the same 50/50 split for every section.

## 7. Product Web App shell

Desktop operational shell should use available horizontal space intentionally.

Typical ranges:

```text
Global sidebar: 48–72px when icon/rail-like
Primary sidebar: 196–252px
Secondary tree/navigator: 220–300px
Inspector: 280–380px
Top/context bar: 44–56px
Tab/tool row: 36–44px
```

These regions are optional. Never add them to fill space.

The **main workspace must remain the dominant flexible region**.

## 8. Product page content width

For management/list pages inside a Web App:

```text
max content width: 1080–1280px when centering improves scanning
```

For Professional/AI Workspace:

```text
main workspace: fluid; do not impose a marketing-style max-width
```

## 9. Responsive breakpoints — semantic intent

FanUI does not require one framework breakpoint set, but the design must explicitly cover:

```text
Wide desktop: >= 1280px
Desktop: 1024–1279px
Tablet / narrow workspace: 768–1023px
Mobile: < 768px
```

At each step, remove secondary persistent regions before sacrificing the primary task.

## 10. Underscaled-content test

A page fails when the canvas is generous but the important objects remain small.

Symptoms:

- 1440px viewport with a ~700px product screenshot as the hero evidence;
- headline, CTA, and product UI all occupy a small central island;
- large empty bands surround low-information content;
- core product UI is unreadable at normal scale.

Correction:

- widen the content/product container;
- increase the relevant typographic role;
- increase evidence scale;
- reduce unearned whitespace;
- crop product evidence more intentionally.

## 11. Calibration rule

Use ranges as a system:

> **Large canvas requires proportionally confident content scale.**

Do not use whitespace as a substitute for scale, hierarchy, or product evidence.