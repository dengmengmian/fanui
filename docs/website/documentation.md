# FanUI Website — Documentation

## Intent

Documentation is a knowledge-navigation system. It must support both first-time learning and repeated retrieval across a potentially very large information architecture.

The central principle:

> **Documentation complexity should not become visual complexity.**

## Information architecture

A documentation system may contain hundreds of pages and multiple nested domains. FanUI should preserve the full structure while presenting task-oriented entry points.

Separate:

- global documentation navigation;
- product/domain navigation;
- local page hierarchy;
- search;
- related/next content.

## Docs homepage

A documentation homepage should not expose every leaf node.

Preferred composition:

```text
Docs header / search
→ Start / onboarding group
→ Primary task groups
→ Exploration / capability groups
→ Common workflows
→ Recent or important updates (optional)
```

Use task-oriented group names rather than internal system architecture when possible.

## Docs article shell

Default shell:

```text
Global Header
├── Left Navigation
├── Main Reading Column
│   ├── Breadcrumb / context
│   ├── Page title
│   ├── Intro
│   ├── Content
│   ├── Related / Previous / Next
│   └── Feedback
└── Local TOC (when useful)
```

Not every document needs all regions.

## Left navigation

The left navigation should:

- express major product/task domains;
- support nested expansion;
- maintain current-location visibility;
- preserve state when moving between nearby pages;
- allow scan-friendly density;
- avoid visually equal emphasis at every depth.

For deep structures, combine persistent hierarchy with progressive disclosure.

## Search

Search is a primary documentation interaction, not a utility afterthought.

Search should be:

- easy to discover;
- keyboard accessible;
- able to distinguish pages, headings, and relevant categories where possible;
- visually integrated with docs navigation.

## Reading column

The reading column should optimize comprehension rather than workspace density.

Use:

- comfortable line length;
- clear heading hierarchy;
- strong code readability;
- consistent callouts;
- restrained tables;
- predictable image treatment;
- meaningful whitespace between conceptual sections.

## Calibrated wide-desktop metrics

Reference viewport: approximately **1440px**.

Use `docs/foundations/experience-metrics.md` as the cross-surface authority.

Typical Documentation bands:

```text
Docs header: 56–64px
Left navigation: 232–280px
Right local TOC: 176–224px when present
Docs-home content: 880–1040px
Article reading measure: 720–840px
Search height: 40–44px
Docs-home search width: ~560–760px
Nav row: 30–36px
```

Typography:

```text
Docs-home title: 30–38px
Article H1: 32–40px
Chinese Article H1: 30–38px
H2: 24–28px
H3: 18–22px
Body: 15–17px
Technical/code UI: 13–14px
```

Article rhythm:

```text
Title → intro: 12–20px
Intro → first content: 28–40px
H2 top: 40–56px
H2 bottom: 16–24px
H3 top: 28–40px
Paragraph gap: 12–20px
Code/callout vertical gap: 20–28px
Previous/Next top: 48–72px
```

### Calibration rule

Docs should feel denser than marketing and more breathable than Product UI.

Do not reuse Homepage-scale 96–144px vertical gaps inside article flow. Do not shrink docs body into compact 13–14px operational UI typography merely because navigation is dense.

## Content primitives

FanUI documentation should define coherent patterns for:

- headings;
- paragraphs;
- ordered/unordered lists;
- steps;
- code blocks;
- inline code;
- API examples;
- tables;
- callouts;
- warnings;
- tips;
- tabs;
- screenshots;
- diagrams;
- copy controls;
- parameter/field reference;
- previous/next navigation.

## Long navigation vs simple homepage

The full documentation tree may be large while the docs homepage remains simple.

This is intentional:

```text
System completeness
≠
Homepage complexity
```

The homepage should provide conceptual doors into the system.

## Chinese technical documentation

Support mixed strings such as:

- English API names in Chinese prose;
- commands and code inside Chinese steps;
- long authentication/protocol names;
- uppercase acronyms;
- path names and identifiers;
- tables with Chinese explanations and English values.

Avoid excessively narrow reading columns or navigation widths that cause constant wrapping.

## AI decision model

```yaml
experience: documentation
page: docs_home | article | reference | tutorial
navigation_depth: shallow | medium | deep
search_priority: high
local_toc: required | optional | none
content_mode: learning | reference | task
code_density: low | medium | high
metrics:
  header_height: 56-64
  left_nav: 232-280
  article_measure: 720-840
  body: 15-17
  h2_top_gap: 40-56
```

The AI should design the shell based on retrieval needs, not reuse a generic marketing page.