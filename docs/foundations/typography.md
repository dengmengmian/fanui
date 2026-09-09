# FanUI Web — Typography System

## Purpose

Typography is FanUI's primary hierarchy tool. It should create clarity before color, borders, shadows, or decorative effects are introduced.

FanUI uses one coherent type family per product, but different operating modes for Marketing, Product UI, Documentation, and Editorial content.

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

## 3. Marketing mode

Marketing typography may use a larger scale contrast.

Target:

- clear display/title distinction;
- concise paragraphs;
- deliberate line breaks;
- section titles strong enough to structure long pages;
- UI screenshots visually compete with copy instead of being subordinate thumbnails.

Avoid:

- huge headings whose only purpose is to feel premium;
- four or five heading scales with tiny differences;
- paragraph widths so wide that product copy becomes hard to scan.

## 4. Product UI mode

Product typography prioritizes scanability.

Rules:

- current object/task receives the strongest local text weight;
- navigation and controls remain compact;
- metadata is visibly weaker;
- table headers are quiet and consistent;
- repeated rows should not rely on large text;
- status text can use semantic color, but state should not overpower identity.

The UI should remain comfortable for long sessions.

## 5. Documentation mode

Documentation typography serves retrieval first, reading second.

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

## 6. Editorial mode

Editorial typography prioritizes sustained reading.

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
- avoid forced ultra-narrow heading measures;
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

## 11. Typography completion test

A page should still show clear hierarchy if:

- all icons are removed;
- all brand color is temporarily neutralized;
- shadows are removed.

If the page becomes flat after those removals, typography and spacing are not doing enough work.