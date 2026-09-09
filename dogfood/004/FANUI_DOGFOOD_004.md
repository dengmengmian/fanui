# FanUI Dogfood #004 — Mafan Lab Editorial Findings

## Purpose

Dogfood #004 tests FanUI on a real personal editorial site: **Mafan Lab** (`dengmengmian.com/zh`). Unlike Flowbit Dogfood #003, this target does not need product-workspace density. Its challenge is to keep a strong independent-builder identity while improving content discovery and sustained reading.

## Live-site baseline

Observed live surfaces on 2026-09-09:

```text
/zh                 public-lab homepage
/zh/projects        project index
/zh/writing         article index
/posts/...          long-form article
```

Strong baseline traits already present:

- concise "MAFAN LAB" identity;
- "Index 01 / 03" information language;
- clear Projects / Writing separation;
- real, credible project evidence;
- real editorial themes rather than generic content marketing;
- restrained copy and a personal point of view.

Dogfood rule:

> Preserve the editorial identity. Do not "upgrade" the site into a SaaS card grid.

## Problems this refactor targets

### 1. Home hierarchy can become flatter than the content deserves

The homepage contains identity, current projects, writing, social/contact, and newsletter content. FanUI should make **real work + recent thinking** the primary evidence, while contact/newsletter remains supporting conversion.

### 2. Writing index needs a stronger discovery hierarchy

A uniform numbered feed is elegant but forces every article to carry nearly the same visual weight. Dogfood #004 adds:

```text
Editorial intro
→ category discovery
→ one featured/current-priority story
→ recent archive rows
```

The featured story is not a marketing card. It is a stronger editorial composition with a topic-derived visual.

### 3. Repeated tags/metadata must not compete with titles

Metadata is pushed to 12–13px, quieter color, and secondary positions. Title remains the scan anchor. Summaries stay readable without turning each row into a large card.

### 4. Editorial visuals must carry ideas

The implementation deliberately avoids decorative gradient covers.

Real topic-derived visuals include:

```text
Agent Eval       Change → Test → Eval + metrics
Eval article     Tests → Eval → Ship decision
Protocol article Client → Normalize → Model
```

### 5. Article pages need sustained-reading calibration

Dogfood #004 uses:

```text
Header max-width      ~1024px
Article title         52px desktop
Article deck          20px
Body measure          720px
Body                  17px / 1.84
H2 rhythm             ~58px top
Desktop TOC           persistent secondary detail
Mobile TOC            replacement disclosure
```

A large generic article Hero is intentionally absent.

### 6. Mobile must transform, not shrink

Implemented transformations:

```text
Desktop nav         → 44px Menu + drawer
Home hero columns   → stacked identity / statement
Project evidence    → sequential rows
Featured editorial  → stacked copy / evidence
Article index rows  → title-first, metadata below
Desktop TOC         → compact disclosure
Protocol diagrams   → vertical flow
Category navigation → local horizontal scroller
```

Reference bands:

```text
1024px
820px
640px
390px
375px
```

## FanUI rules exercised

Dogfood #004 directly exercises:

- Editorial / Blog pattern classification;
- Cross-Surface Experience Metrics;
- Editorial Visual System;
- Optical Layout;
- Surface Hierarchy;
- Responsive Transformation;
- Mobile Precision / 375 pressure;
- Chinese typography and wrapping;
- "Do not create a card because content needs a box";
- "Editorial area must be earned by editorial information".

## New skill gaps exposed

### A. Personal-site / Creator-site hybrid is under-specified

FanUI currently separates Homepage Marketing and Editorial well, but a personal site often mixes:

```text
identity
current work
editorial
portfolio evidence
low-pressure conversion
```

This is neither a normal Product Homepage nor a pure Blog Index.

Proposed addition:

> Add a `creator_site` or `personal_lab` composition note under Website/Editorial explaining how to rank identity, work evidence, writing, and contact without applying SaaS conversion hierarchy.

### B. Editorial featured-story selection needs a decision rule

The Blog pattern says a featured story may exist, but does not explain what deserves promotion.

Proposed rule:

```text
feature when one article is:
- strategically current;
- unusually representative of the author's thesis;
- connected to current work;
- or materially more useful for first-time visitors.
```

Do not feature merely because it is newest.

### C. Personal project indexes need an evidence-density rule

A project portfolio can become either too sparse or too product-marketing-heavy.

Proposed rule:

> For personal/creator project rows, show status + role/category + one concrete scope statement + one compact evidence/focus line. Avoid full pricing/feature-card treatment unless the page is actually a product landing page.

### D. Reader conversion hierarchy should be explicit

For editorial/personal sites, conversion should normally rank:

```text
read another article / inspect work
→ follow / RSS / newsletter
→ contact / collaboration
```

rather than default Homepage CTA pressure.

## Mechanical gate

`npm run verify` checks:

- 1160px editorial shell;
- 720px reading measure;
- 1024 / 820 / 640 / 390 / 375 response bands;
- Mobile menu replacement;
- Mobile TOC replacement;
- local-scroll category navigation;
- idea-bearing visuals on Home, Writing, and Article;
- absence of a generic image-slot Hero;
- 44px interaction geometry.

## Current status

```text
LIVE_SITE_REFERENCE_CAPTURED=PASS
EXPERIENCE_CLASSIFICATION=PASS
EDITORIAL_HIERARCHY_REFACTOR=PASS
IDEA_BEARING_VISUALS=PASS
READING_MEASURE=PASS
RESPONSIVE_TRANSFORMATION=PASS
MOBILE_REPLACEMENT_PATHS=PASS
STATIC_GATE_IMPLEMENTED=PASS
REMOTE_BUILD=PENDING
RENDERED_1440_ACCEPTANCE=PENDING
RENDERED_1024_ACCEPTANCE=PENDING
RENDERED_768_ACCEPTANCE=PENDING
RENDERED_390_ACCEPTANCE=PENDING
RENDERED_375_ACCEPTANCE=PENDING
PRODUCTION_SOURCE_MAPPING=UNRESOLVED
```

## Acceptance rule

Static checks can prove the intended structure is wired in. They cannot prove optical balance, Chinese wrapping, or first-viewport reading quality.

Only rendered screenshots according to `SCREENSHOT_PLAN.md` can close Dogfood #004.
