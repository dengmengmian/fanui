# FanUI Web — Color & Brand Expression

## Purpose

FanUI V0.3 separates **operational color semantics** from **brand expression intensity**. Earlier guidance kept interfaces calm but allowed AI to collapse into neutral gray + one purple button.

FanUI should be restrained without becoming anonymous.

## 1. Color role model

Keep these roles distinct:

- Canvas
- Structural surface
- Object surface
- Primary text
- Secondary text
- Tertiary / metadata text
- Border / divider
- Brand
- Interaction
- Selection
- Semantic status
- Data visualization
- Decorative / marketing expression

Do not reuse one saturated brand color for every role.

## 2. Neutral foundation

Default product UI should remain mostly neutral.

The neutral system must still create visible hierarchy:

```text
Canvas != structural surface != object surface
Primary text clearly stronger than secondary
Secondary clearly stronger than metadata
Borders weaker than text hierarchy
```

Avoid gray-on-gray values so close that the interface feels washed out.

## 3. Brand Expression Levels

Brand expression is the visual influence of brand color and motifs, not merely literal colored area.

### Low

Use for:

- Professional Workspace
- AI Workspace
- settings
- tables
- inspectors
- dense operational states

Typical behavior:

- brand appears in primary action, selection, focus, small identity details;
- most surfaces stay neutral;
- semantic states retain their own colors.

Target visual influence: roughly **5–12%**.

### Medium

Use for:

- Docs home
- Pricing
- onboarding
- Web App home
- content landing pages

Typical behavior:

- selective tinted surfaces;
- brand accents in headings, tabs, diagrams, or section anchors;
- one or two stronger branded regions.

Target visual influence: roughly **10–22%**.

### High

Use selectively for:

- Homepage Hero
- launch / campaign section
- major product story

May use:

- gradient display text;
- soft brand field / glow;
- stronger branded product frame;
- more visible accent graphics;
- section-scale tinted background.

Target visual influence: roughly **20–35%**.

High expression does **not** mean the whole page becomes saturated.

## 4. Gradient rule

Gradients are allowed when they communicate brand or narrative emphasis.

Good:

- one Hero display phrase;
- a large product showcase field;
- a controlled section transition;
- brand-specific graphic treatment.

Avoid:

- gradient every heading;
- gradient every button;
- gradient cards by default;
- purple-blue AI gradient as a generic shortcut.

## 5. CTA color hierarchy

A website may use a dark neutral primary CTA, a brand primary CTA, or another clearly defined branded treatment.

Requirements:

- one dominant CTA per decision scope;
- strong contrast with the local surface;
- secondary CTA visibly subordinate;
- CTA must remain recognizable without glow/shadow.

Do not assume the brand color must always be the strongest button color.

## 6. Selection vs status

Selection answers:

> Where am I / what is active?

Status answers:

> What state is this object in?

They must not be conflated.

Example:

- selected workflow → low-saturation brand tint;
- failed run → danger semantic color;
- running run → informational/active semantic color;
- GET/POST-like protocol types → domain semantic colors.

## 7. Marketing field colors

Marketing may use very light branded fields behind product evidence.

Rules:

- tint should create atmosphere and separation, not reduce screenshot contrast;
- product UI remains the foreground evidence;
- text contrast must stay strong;
- large color fields should be sparse enough to preserve rhythm.

## 8. Product-specific richness

A product becomes visually memorable through **consistent recurring color behavior**, not one random accent.

A product may define:

- one primary brand hue;
- one complementary brand hue;
- one branded gradient relationship;
- one recurring selection tint;
- one or two branded illustration/data motifs.

Do not create new accent colors per page.

## 9. Chinese / English behavior

Brand gradients or colored display text must remain readable with denser Chinese glyph shapes.

Do not use low-contrast gradients that only work on thin Latin text.

## 10. Completion test

Ask:

- Is the product recognizable beyond a single purple/blue button?
- Are selection and semantic status clearly different?
- Does the Homepage feel more expressive than the Workspace?
- Can the color system remain coherent when translated into Chinese?
- If all decorative gradients disappear, does the brand still have identity?

If not, brand expression is either too weak or too dependent on decoration.