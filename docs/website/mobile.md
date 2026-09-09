# FanUI Mobile Website Patterns

This document applies the Responsive Decision Layer to Product Website, Pricing, Documentation, and Editorial surfaces.

## Product Website

### Header

Desktop primary navigation may transform to:

- compact brand + primary CTA;
- secondary mobile navigation row;
- menu/drawer in production implementations.

Do not squeeze four or five desktop nav links between logo and CTA.

### Hero

Mobile Hero should normally:

- use 16–20px horizontal gutters;
- scale display type into the 38–44px range;
- keep lead at 16–18px;
- stack CTAs when two horizontal controls become cramped;
- compress top/bottom whitespace;
- transform Hero product evidence rather than shrink the whole desktop app.

### Product evidence

Preferred order of strategies:

1. preserve the task context;
2. remove low-priority chrome;
3. crop to the active task;
4. stack important panes;
5. replace with mobile-specific evidence if required.

A three-pane Desktop shell should not become a 130px-wide main column next to invisible unused space.

### Split feature sections

Below compact/mobile widths:

```text
Text
↓
Evidence
```

For reverse Desktop sections, mobile ordering should normally become:

```text
Story / value
↓
Evidence
```

unless the evidence is intentionally the stronger opening anchor.

## Pricing

Mobile Pricing should prioritize decision speed:

- one plan per row;
- recommended plan may move earlier when useful;
- price/unit stays on one clear baseline;
- Enterprise becomes a stacked alternate path;
- comparison table uses local horizontal scroll or a mobile comparison pattern;
- whole-page horizontal scroll is forbidden.

## Documentation

When the left documentation sidebar disappears, provide replacement navigation:

- compact Docs navigation row;
- drawer/menu trigger;
- breadcrumb/category selector.

Docs mobile defaults:

```text
content gutter           18–20px
body                     16–17px
article title            32–38px
section H2               24–28px
code block               local horizontal scroll
TOC                      collapse / drawer / inline summary
```

Search should remain easy to reach.

## Editorial / Blog

Blog Index:

- category navigation may horizontally scroll;
- Featured composition stacks visual then story, or story then visual when text is the stronger entry;
- article grids collapse to one column;
- Editorial visuals must remain idea-bearing at mobile size.

Blog Article:

- title 36–42px typical;
- deck 17–19px;
- supporting Hero visual may reduce height substantially;
- body stays 16.5–18px with comfortable measure;
- avoid forcing a huge Hero image before useful text.

## Mobile footer

Footer stacks naturally. Keep tap targets and link grouping clear; do not preserve desktop distribution through tiny type.
