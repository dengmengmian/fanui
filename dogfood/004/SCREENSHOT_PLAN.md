# FanUI Dogfood #004 — Screenshot Plan

## Render authority

Capture with browser zoom at 100%, light mode, no DevTools docked.

Required viewport matrix:

```text
1440 × 1000
1024 × 900
768 × 1024
390 × 844
375 × 812
```

## 1. Home `/zh`

### 1440 × 1000
Capture:

- header + complete Hero;
- first project evidence rows;
- featured writing composition with Eval visual.

Check:

- identity does not dominate the whole viewport;
- statement column is optically balanced against the name;
- projects feel like evidence, not feature cards;
- Eval visual is readable without zoom;
- newsletter is not competing with primary content.

### 390 × 844 / 375 × 812
Capture header closed and menu opened.

Check:

- menu is a replacement path, not hidden navigation;
- 44px target contains compact glyph geometry;
- Hero text wraps without orphaned punctuation;
- project rows remain scannable;
- no document-level horizontal overflow.

## 2. Writing `/zh/writing`

### 1440 × 1000
Capture intro + category band + featured story + first archive row.

Check:

- featured story clearly outranks archive without looking like marketing;
- evidence visual contains meaningful topic information;
- category navigation remains subordinate to global navigation;
- article title outranks tags/date.

### 390 × 844 / 375 × 812
Check:

- category strip scrolls locally on one line;
- featured copy stacks before visual;
- archive metadata moves below title/summary;
- summary clamp does not hide the actual article identity.

## 3. Projects `/zh/projects`

### 1440 × 1000
Capture intro + all project rows.

Check:

- project name, status, category, scope, and evidence have distinct hierarchy;
- rows do not inflate into oversized product cards;
- CodeLeveler remains visually primary through content/state, not arbitrary decoration.

### 390 × 844
Check sequential project row transformation and link target geometry.

## 4. Eval article `/zh/writing/agent-eval`

### 1440 × 1000
Capture article header + start of body + two-layer evidence visual.

Check:

- article title falls within Chinese editorial calibration;
- deck is visibly secondary;
- reader encounters argument/body quickly;
- 720px body measure feels readable;
- TOC is supporting detail, not a competing sidebar.

### 390 × 844 / 375 × 812
Capture collapsed and expanded TOC.

Check:

- Desktop TOC has a complete replacement;
- diagram becomes a readable vertical sequence;
- body typography remains sustained-reading scale;
- code/English tokens do not force whole-page overflow.

## 5. Protocol article `/zh/writing/chatgpt-codex-protocol`

Capture the Client → Normalize → Model visual at 1440 and 390.

Check whether idea-bearing visuals can share a family resemblance while retaining article-specific semantics.

## Failure conditions

Any of the following keeps Dogfood #004 open:

- generic gradient/empty editorial art;
- uniform card-grid treatment of Writing;
- featured story indistinguishable from archive rows;
- body measure above ~760px at wide desktop;
- title/metadata hierarchy collapse;
- Desktop TOC removed on Mobile without replacement;
- category strip wraps into multiple toolbar rows;
- whole-page horizontal scrolling;
- 375px clipping or nested-control escape;
- first 1000px of an article contains mostly chrome/empty media instead of argument.
