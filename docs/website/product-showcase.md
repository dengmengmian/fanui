# FanUI Website — Product Showcase

## Intent

Product-led websites should use the product itself as visual evidence. A product screenshot is not decorative support; at the right scale it becomes the main proof of the claim.

This pattern defines how much visual weight product UI should receive.

## 1. Showcase scales

### Small

Use for:

- one specific capability;
- a local interaction detail;
- a supporting visual beside concise copy.

Rules:

- crop tightly to the feature;
- remove irrelevant chrome;
- do not use Small when the visual is the primary page evidence.

### Medium

Use for:

- normal feature sections;
- side-by-side claim + evidence;
- a focused workflow or object view.

Rules:

- product UI should remain readable at normal desktop size;
- the key interaction must be identifiable without zooming;
- crop to the relevant task rather than showing the whole app by default.

### Large

Use for:

- core capabilities;
- complex workflows;
- multi-step or multi-panel product stories;
- sections where the product itself should dominate the viewport.

Rules:

- allow the product visual to occupy a substantial share of the content width;
- show enough context to feel like a real product, not an isolated component;
- use section background/surface to frame the visual if helpful.

### Hero

Use when the product is the primary evidence for the homepage value proposition.

Rules:

- the product view should be one of the largest visual objects in the first viewport or immediately after the hero copy;
- avoid reducing the product to a narrow thumbnail beneath oversized text;
- maintain readable UI details at common desktop widths;
- frame or crop intentionally;
- controlled depth, tint, gradient, or background field may be used to separate the product from the page canvas.

## 2. Evidence strength

Use this priority:

```text
real product behavior
→ real product UI composition
→ simplified faithful product visualization
→ abstract illustration
→ decorative visual
```

Do not use a decorative visual when the product can prove the claim directly.

## 3. Crop strategy

### Context crop

Shows enough shell/navigation to establish that this is a real product.

Good for:

- hero;
- large product story;
- professional workspace explanation.

### Task crop

Shows the exact feature and surrounding controls needed to understand it.

Good for:

- feature section;
- comparison;
- workflow step.

### Detail crop

Zooms into one meaningful interaction or data state.

Good for:

- secondary evidence;
- callout;
- progressive narrative.

Do not repeatedly show full-app screenshots when the reader needs a specific detail.

## 4. Product composition patterns

Avoid repeating only:

```text
text left + screenshot right
text right + screenshot left
```

FanUI may use:

- full-width hero product frame;
- asymmetric text + large product frame;
- one large UI plus two detail crops;
- workflow sequence;
- stacked before/after states;
- product frame with contextual callouts;
- split workspace showing input and result;
- one dominant visual plus lightweight feature list.

Composition should follow the product story.

## 5. Readability rule

A product screenshot fails when the reader cannot inspect the UI at normal browser scale.

Symptoms:

- labels are too small to read;
- screenshot is mostly empty chrome;
- screenshot occupies less visual weight than secondary copy;
- the same tiny browser-frame mockup is repeated across sections.

Correction:

- crop tighter;
- enlarge the visual;
- reduce decorative browser chrome;
- reduce copy;
- use a large or hero showcase scale.

## 6. Browser/window chrome

Use browser chrome only when it adds context.

Rules:

- keep chrome visually quiet;
- do not let fake URL bars consume useful product area;
- vary framing when appropriate; not every image needs the same browser mockup;
- product UI should remain visually dominant inside the frame.

## 7. Marketing decoration

Controlled decoration may support the showcase:

- subtle gradient field;
- soft tinted background;
- restrained glow;
- grid/shape pattern tied to brand;
- depth through layering;
- product-specific motif.

Decoration must not become stronger than the UI evidence.

## 8. Section rhythm

Do not make every product section the same visual size.

Recommended narrative rhythm:

```text
Hero showcase — very strong
Supporting proof — quiet
Core feature — strong
Secondary feature — medium
Workflow / integration — strong or wide
Trust / copy — quiet
CTA — medium
```

## 9. AI decision model

Before implementing product evidence, classify:

```yaml
showcase:
  importance: supporting | normal | core | hero
  scale: small | medium | large | hero
  crop: context | task | detail
  primary_claim: ...
  ui_evidence: ...
  readable_without_zoom: true
  decoration_level: none | low | medium
```

If `importance` is `core` or `hero`, a Small showcase is usually wrong.

## 10. Anti-pattern

> **Product Screenshot as Thumbnail**

If the website claims to be product-led but the actual product UI repeatedly appears as tiny screenshots under large copy, the page is not providing strong product evidence.