# FanUI Mobile Precision Closure

Mobile is not the last breakpoint pass. It is a first-class composition with its own navigation model, typography density, touch geometry, local scrolling rules, and icon precision.

Use this after `responsive.md` once the main transformation strategy is correct.

## 1. Mobile chrome budget

Persistent chrome must earn its height.

For phone widths around 375–390px:

```text
Website primary header     56–64px
Docs top chrome            96–120px including search
Workspace topbar           52–60px
Mobile context bar         44–64px
```

Avoid stacking multiple persistent navigation rows when one row plus a drawer can preserve the same access path.

Hard rule:

> Mobile navigation should reduce persistent chrome before reducing content readability.

## 2. Website navigation

Default phone transformation:

```text
Desktop
Brand | Primary nav | Secondary action | Primary CTA

Mobile
Brand | Primary CTA | Menu
                 ↓
              Drawer
```

Do not keep a second persistent horizontal navigation row simply because all links technically fit at 390px.

The drawer should:

- expose the complete primary navigation;
- preserve a clear current product identity;
- use touch targets of at least 44px;
- use a direct navigation icon such as `Menu`, not a decorative glyph;
- remain keyboard/focus accessible.

## 3. Documentation navigation

Desktop documentation sidebars normally transform into a **drawer**, not a truncated chip row.

Preferred phone structure:

```text
Brand                 Docs / Sidebar control
Search documentation
────────────────────────────────────────────
Article or Docs Home
```

The drawer must preserve the actual information architecture:

```text
Start
Build
Operate
Reference
```

A five-item horizontal strip that exposes only a subset of the desktop sidebar is not an adequate replacement path.

## 4. Mobile typography by surface family

Do not use one mobile type scale everywhere.

### Website / Marketing

```text
Hero display       34–42px
Section H2         29–34px
Lead               16–17px
Body               15–16.5px
```

### Documentation

```text
Docs Home H1       28–32px
Article H1         29–33px
H2                 23–26px
H3                 18–20px
Body               15.5–16.5px
Line height        1.65–1.75
```

Documentation optimizes task reading and scanning, not theatrical editorial scale.

### Editorial / Blog

```text
Index title        33–38px
Featured H2        29–33px
Article H1         33–38px
Body               17.5–19px
Article H2         27–31px
Line height        1.7–1.8
```

Editorial may breathe more than Docs, but large type must still leave useful reading progress within one viewport.

### Product Workspace

```text
Context title      13–15px
Primary content    13–15px
Metadata           11–12.5px
Touch controls     40–44px minimum
```

## 5. Local scrolling rules

Local horizontal scrolling is valid for:

- category navigation;
- compact tabs;
- comparison tables;
- code blocks;
- narrow timeline strips.

It must be intentional and scoped.

Hard rules:

- whole-page horizontal scrolling fails;
- prose should not require horizontal scrolling;
- code blocks preserve code semantics with internal horizontal scroll instead of destructive wrapping;
- tab/category strips should remain single-line and locally scroll rather than wrap into unstable multi-row chrome.

## 6. Code blocks

Code is not prose.

On mobile prefer:

```css
.code {
  white-space: pre;
  overflow-x: auto;
  word-break: normal;
  overflow-wrap: normal;
}
```

Do not wrap shell commands, code, JSON, or structured configuration merely to eliminate all local horizontal movement.

## 7. Touch precision

Phone controls should normally provide at least 44×44px hit areas.

This includes:

- menu buttons;
- icon-only controls;
- workspace view selectors;
- primary CTA buttons;
- documentation navigation triggers.

The glyph may remain 14–19px inside the larger target.

Do not enlarge the glyph to fill the hit area.

## 8. Mobile icon precision

All desktop icon rules still apply on mobile.

Additionally verify:

- the glyph remains optically centered inside the larger touch target;
- icon-only controls use direct, conventional semantics;
- collapsed navigation uses navigation/sidebar semantics, not approximate decorative icons;
- peer controls use the same glyph size and stroke weight;
- mobile CSS does not introduce a second alignment override that breaks a previously-correct desktop icon;
- icon + wrapped text still aligns to the first-line information anchor.

Recommended compact control geometry:

```text
touch target     44px
icon glyph       16–19px
stroke width     1.7–2.0
```

Repeated feature rows may keep smaller 28–32px icon boxes because the row itself is not an icon-only control.

## 9. Small-mobile pressure test

390px is not enough.

Every substantial mobile design must also survive:

```text
375 × 812
```

Check:

- header CTA + brand + menu fit without text collision;
- no 3–5 word orphan lines caused by oversized headings;
- drawer remains inside viewport;
- Docs/article reading widths remain stable;
- category/tab strips scroll locally;
- workspace topbar keeps primary context and action;
- icon controls preserve 44px hit areas;
- no document-level horizontal overflow.

## 10. Mobile precision anti-patterns

### Double-decker Mobile Header
A desktop primary nav becomes a second permanent row below the mobile header.

### Truncated Sidebar Replacement
A complex Docs/Product sidebar is replaced by a few horizontal chips that expose only part of the real IA.

### Editorial-sized Docs
Documentation typography uses blog-like display scale and wastes vertical progress.

### Wrapped Code Semantics
Structured code/configuration is wrapped as ordinary prose.

### Tiny Icon Target
A 14–16px glyph is clickable without a 40–44px control target.

### Mobile Icon Regression
Desktop icon semantics/alignment are correct, but mobile CSS changes box centering, stroke consistency, or visual baseline.

### Multi-row Tab Collapse
A tab/category strip wraps to two or more rows instead of using a deliberate local-scroll or alternate navigation strategy.

## Completion gate

Before accepting Mobile:

1. Test 390×844 and 375×812.
2. Verify the site header is one persistent row.
3. Verify Docs navigation exposes the full IA through a drawer or equivalent replacement.
4. Verify Docs and Editorial use different mobile typography scales.
5. Verify code blocks scroll internally without document overflow.
6. Verify category/tab strips use deliberate local scrolling when needed.
7. Verify 44px touch targets for primary and icon-only controls.
8. Verify icon semantics, centering, first-line alignment, and stroke consistency after mobile transforms.
9. Verify Product Workspace keeps current context, primary action, and secondary-detail access paths.
10. Verify `document.documentElement.scrollWidth <= document.documentElement.clientWidth` at the reference widths.
