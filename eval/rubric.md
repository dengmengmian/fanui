# FanUI Web Evaluation Rubric

## Purpose

This rubric evaluates whether a web interface follows FanUI strongly enough to ship or become a reference.

Total: **100 points**.

V0.2 explicitly evaluates two failures discovered in dogfood:

1. choosing the wrong Web App archetype;
2. producing structurally correct but visually unfinished UI.

## 1. Information Hierarchy — 15

### 13–15

- primary task/value is immediately clear;
- text, spacing, surface, object scale, and state hierarchy work together;
- secondary information is visibly subordinate;
- users can scan before reading deeply.

### 9–12

- hierarchy is generally clear but has competing regions or inconsistent emphasis.

### 0–8

- most elements have similar weight;
- styling compensates for weak structure;
- user must inspect the page to discover its purpose.

## 2. Experience / Archetype Fit — 15

Evaluate whether the page structure matches the product's actual value loop.

For Web App, explicitly classify:

- Management Console;
- Professional Workspace;
- Data Application;
- AI Workspace.

Full score requires:

- primary archetype is correct;
- shell and navigation reflect that archetype;
- domain nouns are not mechanically turned into equal navigation destinations;
- task-oriented products remain workspace-first where appropriate.

For Website/Docs/Editorial/Pricing, evaluate whether the correct experience family and page pattern were selected.

### Major deduction

A task-oriented product designed mainly as a generic management console should score **0–5** here unless a strong business reason justifies it.

## 3. Task / Conversion Effectiveness — 15

For Web App:

- core value loop is efficient;
- repeated actions are compact and predictable;
- state and next action are clear;
- work context is preserved.

For Website/Pricing:

- story leads naturally to evidence and conversion;
- CTA hierarchy is unambiguous;
- pricing supports actual decision making.

For Docs/Editorial:

- retrieval/reading goal dominates.

## 4. Visual Finish & Composition — 15

Evaluate whether the result feels intentionally designed rather than merely correctly laid out.

Full score requires:

- one clear visual anchor;
- meaningful variation in visual amplitude;
- major sections do not all use the same card/heading rhythm;
- product evidence receives appropriate visual scale;
- border, surface, spacing, and typography are balanced;
- the interface does not look like a polished wireframe;
- brand character exists beyond one accent color.

Deduct for:

- same-volume pages;
- repeated small screenshots;
- border-grid finish;
- generic purple SaaS identity;
- monotonous composition.

## 5. Layout & Navigation — 10

Evaluate:

- page composition;
- alignment;
- responsive logic;
- current context;
- navigation depth;
- workspace structure where relevant.

Full score requires users to understand location/context without explanation.

## 6. Density & Calmness — 8

Full score:

- useful information is retained;
- controls use appropriate density;
- page does not feel visually noisy;
- whitespace supports structure rather than pretending to be quality;
- operational UI remains compact while page composition can breathe.

## 7. Surface / Component Semantics — 7

Evaluate whether cards, panels, borders, tables, tabs, trees, dialogs, and other components are used because they fit the information model.

Deduct for:

- Card Soup;
- nested surface mazes;
- boxing every group;
- inappropriate component semantics.

## 8. Typography & Readability — 5

Evaluate:

- hierarchy;
- line length;
- paragraph rhythm;
- metadata treatment;
- code/technical text where relevant;
- Chinese/English mixed text behavior.

Typography should preserve hierarchy even if icons, brand color, and shadows are removed.

## 9. Color & State Semantics — 5

Full score requires:

- restrained brand use;
- clear selected/current state;
- semantic state colors used consistently;
- decorative colors separated from operational semantics;
- brand identity is not dependent on accent color alone.

## 10. Interaction Feedback & Accessibility — 5

Evaluate:

- hover;
- active;
- focus-visible;
- selected;
- disabled;
- loading;
- error;
- keyboard behavior where appropriate;
- contrast and target clarity.

## Score interpretation

- **95–100 — Reference:** candidate to become a FanUI example.
- **85–94 — Pass:** FanUI-compliant and suitable to ship.
- **70–84 — Revise:** direction is usable but meaningful issues remain.
- **Below 70 — Reject:** redesign hierarchy/archetype/pattern before polishing.

## Hard-fail conditions

Regardless of numeric score, do not mark a result FanUI-compliant when any of these are severe:

- primary task cannot be identified;
- a task-oriented Professional/AI Workspace is primarily implemented as a generic management console without justification;
- current context is ambiguous in a complex Web App;
- pricing hides or confuses billing units;
- documentation navigation makes core content effectively undiscoverable;
- accessibility prevents keyboard/focus use of key interactions;
- the design is primarily decorative imitation with little product evidence;
- a product-led homepage repeatedly uses unreadable thumbnail-scale product UI as core evidence;
- generated layout breaks materially in Chinese or common English copy.