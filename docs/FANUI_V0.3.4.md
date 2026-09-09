# FanUI Web V0.3.4 — Mobile Precision Closure

## Why this release exists

V0.3.3 fixed the structural responsive problem: Mobile stopped being a shrunken Desktop. Real 390px screenshots then exposed a second-order gap. The main task hierarchy survived, but persistent chrome, Docs navigation, mobile typography density, code behavior, narrow-width tab handling, touch geometry, and icon precision were still inconsistent.

V0.3.4 closes that layer.

## Core additions

### 1. Single-row Website mobile chrome

Default phone Website structure:

```text
Brand | Primary CTA | Menu
                    ↓
                 Drawer
```

The old double-decker `Brand/CTA + permanent primary-nav row` pattern is now an anti-pattern unless a strong task reason exists.

### 2. Full Docs navigation replacement

Desktop Docs Sidebar now maps to a complete Mobile Drawer. A partial horizontal chip subset is not considered a valid replacement path.

The drawer preserves the real IA:

```text
Start
Build
Operate
Reference
```

### 3. Surface-specific mobile typography

Mobile type is no longer one generic scale.

```text
Website     confident / compact
Docs        task-reading / denser
Editorial   sustained-reading / more spacious
Product     compact operational
```

### 4. Local scrolling rules

Local horizontal scrolling is explicitly valid for:

- category/tab strips;
- comparison tables;
- code/configuration blocks;
- compact timelines/history.

Whole-page horizontal scrolling remains a hard failure.

### 5. Code semantics

Code/configuration should preserve structural line formatting and use internal horizontal scrolling. Ordinary prose wrapping is no longer an acceptable way to eliminate all horizontal movement.

### 6. 375px pressure test

390px remains the main Mobile reference, but **375 × 812 is now a required acceptance width** for primary routes.

### 7. Touch geometry

Phone icon-only and primary controls should normally use 40–44px minimum touch geometry. The glyph remains compact inside the larger target.

### 8. Mobile icon invariance

Desktop icon correctness must survive responsive CSS.

Mobile review checks:

- semantic fit;
- glyph centering;
- first-line text alignment;
- peer glyph size/stroke consistency;
- accessible icon-only labels;
- practical hit area;
- breakpoint CSS not overriding icon-box geometry.

## New references

- `docs/foundations/mobile-precision.md`
- `docs/anti-patterns/v034.md`
- updated `docs/foundations/responsive.md`
- updated `docs/foundations/iconography.md`
- updated `eval/checklist.md`
- updated `eval/rubric.md`

## Dogfood implementation

`dogfood/003` now includes:

- Website Mobile Menu/Drawer;
- Docs full Mobile Drawer;
- V0.3.4 final cascade layer `app/v035.css`;
- separate Docs and Blog phone typography;
- local scrolling for code/categories/comparison;
- explicit 375px pressure rules;
- workspace icon touch-target/semantic cleanup;
- updated screenshot acceptance matrix;
- CI mechanical Responsive Precision gate before `next build`.

## Acceptance boundary

Mechanical gates prove that the rules are wired into code. Final visual authority remains rendered browser screenshots at:

```text
390 × 844
375 × 812
```

A passing build is necessary, not sufficient.
