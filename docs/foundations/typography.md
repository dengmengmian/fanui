# FanUI Web — Typography System

## Purpose

Typography is FanUI's primary hierarchy tool. It should create clarity before color, borders, shadows, or decorative effects are introduced.

FanUI uses one coherent type family per product, but different operating modes for Marketing, Product UI, Documentation, and Editorial content.

V0.3 adds calibrated size bands. These are not immutable tokens; they are reference ranges designed to prevent safe-but-timid AI defaults.

## 1. Semantic text roles

Use semantic roles rather than arbitrary font sizes.

### Display

Used sparingly for major marketing statements.

Rules:

- short copy only;
- strong line breaking is intentional;
- avoid display scale inside operational UI;
- do not use multiple display-sized headings in one viewport.

### Page title

Defines the current page or major object.

### Section title

Introduces a meaningful section or task region.

### Object title

Primary identity for a project, workflow, article, API, agent, row, card, or artifact.

### Body

Primary explanatory or reading text.

### UI label

Buttons, tabs, field labels, toolbar items, table headers, navigation.

### Metadata

Dates, counts, types, secondary descriptions, environment, model, duration, ownership.

### Code / technical

Identifiers, commands, paths, keys, JSON, API methods, model names, hashes, version labels.

## 2. Hierarchy rule

Do not rely on size alone.

A strong hierarchy combines:

```text
size
+ weight
+ line height
+ spacing
+ color contrast
```

Use only the amount necessary for the semantic difference.

For example, metadata should usually become quieter through color and weight before becoming dramatically smaller.

## 3. Marketing mode — calibrated desktop ranges

Reference viewport: approximately 1440px desktop.

```text
Hero Display: 56–64px
Chinese Hero Display: 52–60px
Hero line-height: 1.05–1.12
Section H2: 40–48px
Section H3: 24–30px
Hero Lead: 18–20px
Body / Feature Copy: 15–17px
Navigation: 14–15px
Button / CTA label: 14–16px
Eyebrow / Label: 12–13px
Metadata / supporting note: 12–13px
```

Use the upper range when copy is short and the page has high visual amplitude. Use the lower range when Chinese copy is long, the composition is split, or the page intentionally uses a quieter editorial tone.

### Marketing rules

Target:

- clear display/title distinction;
- concise paragraphs;
- deliberate line breaks;
- section titles strong enough to structure long pages;
- UI screenshots visually compete with copy instead of being subordinate thumbnails.

Avoid:

- huge headings whose only purpose is to feel premium;
- safe 40–48px desktop Hero headings by default on wide product sites;
- four or five heading scales with tiny differences;
- paragraph widths so wide that product copy becomes hard to scan.

## 4. Product UI mode — calibrated desktop ranges

Product typography prioritizes scanability.

```text
Workspace / Page title: 20–24px
Major local title: 16–20px
Section title: 15–18px
Object / row title: 14–15px
Primary UI body: 14–15px
Navigation / control label: 13–14px
Table header: 11–12px
Metadata: 12–13px
Compact technical text: 11–13px
```

Rules:

- current object/task receives the strongest local text weight;
- navigation and controls remain compact;
- metadata is visibly weaker;
- table headers are quiet and consistent;
- repeated rows should not rely on large text;
- status text can use semantic color, but state should not overpower identity.

The UI should remain comfortable for long sessions.

## 5. Documentation mode — calibrated ranges

Documentation typography serves retrieval first, reading second.

```text
Docs Home H1: 32–40px
Article H1: 32–40px
Article H2: 24–30px
Article H3: 18–22px
Body: 15–17px
Navigation: 13–14px
Breadcrumb / metadata: 12–13px
Inline code: typically same optical size as body or slightly smaller
```

Use distinct systems for:

- navigation;
- page title;
- document hierarchy;
- body reading;
- inline code;
- code blocks;
- callouts;
- tables;
- breadcrumbs / metadata.

Do not render docs body text with product-UI density.

Reading column width should remain comfortable even when the navigation shell is dense.

## 6. Editorial mode — calibrated ranges

Editorial typography prioritizes sustained reading.

```text
Article display/title: 40–56px
Article deck / summary: 18–22px
Body: 16–18px
H2: 28–36px
H3: 20–24px
Metadata: 12–14px
```

Rules:

- article title may be expressive but should not dominate the whole viewport;
- summary/deck is clearly distinct from body;
- body measure is narrower than normal app content;
- paragraphs have sufficient vertical rhythm;
- headings create a readable document outline;
- product CTAs must not constantly interrupt reading.

## 7. Chinese and English behavior

FanUI must work in Chinese, English, and mixed technical content.

### Chinese

- Chinese titles generally require more horizontal space than short English marketing copy;
- use the calibrated Chinese Hero band before forcing narrow wrapping;
- line-height should not feel cramped;
- do not depend on letter-spacing tricks designed for Latin display type.

### Mixed Chinese / English

Check:

- API names;
- model names;
- commands;
- file paths;
- version strings;
- pricing units;
- button labels;
- navigation labels.

Technical Latin strings should remain readable without creating awkward baseline or width behavior.

## 8. Weight discipline

Avoid too many weights.

A typical FanUI hierarchy can be expressed with:

- regular/body;
- medium/UI emphasis;
- semibold/title emphasis;
- bold/display only when the font and brand justify it.

If every label is semibold, hierarchy collapses.

## 9. Text color discipline

Recommended semantic order:

```text
primary
→ secondary
→ tertiary / metadata
→ disabled
```

Do not create a new gray value for every component.

Brand color is not a substitute for typographic hierarchy.

## 10. Truncation and wrapping

Before truncating, identify whether the text is:

- identity;
- navigation;
- metadata;
- user-generated content;
- technical identifier.

Rules:

- preserve primary identity when possible;
- metadata may truncate earlier;
- tables need predictable truncation behavior;
- tooltips should reveal truncated critical content;
- multi-line wrapping is often preferable for article, docs, and marketing titles.

## 11. Responsive scale

Do not scale every text role linearly.

Typical direction:

- Hero Display contracts strongly between wide desktop and mobile;
- Product UI labels change little;
- reading body remains near its comfortable range;
- section titles contract moderately.

On mobile, preserve hierarchy rather than desktop spectacle.

## 12. Typography completion test

A page should still show clear hierarchy if:

- all icons are removed;
- all brand color is temporarily neutralized;
- shadows are removed.

Also check:

- Is the 1440px Website Hero confident enough, or does it feel underscaled?
- Is Marketing visibly different from Product UI?
- Are Chinese headings given enough width and line height?
- Does metadata remain subordinate without becoming unreadably tiny?

If the page becomes flat after removing decoration, or timid at wide desktop scale, typography is not doing enough work.