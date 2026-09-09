# FanUI Web Evaluation Rubric

## Purpose

This rubric evaluates whether a web interface follows FanUI strongly enough to ship or become a reference.

Total: **100 points**.

## 1. Information Hierarchy — 20

### 17–20

- primary task/value is immediately clear;
- text, spacing, surface, and state hierarchy work together;
- secondary information is visibly subordinate;
- users can scan before reading deeply.

### 12–16

- hierarchy is generally clear but has competing regions or inconsistent emphasis.

### 0–11

- most elements have similar weight;
- visual styling compensates for weak structure;
- user must inspect the page to discover its purpose.

## 2. Layout & Navigation — 15

Evaluate:

- page composition;
- alignment;
- responsive logic;
- current context;
- navigation depth;
- workspace structure where relevant.

Full score requires users to understand location/context without explanation.

## 3. Task / Conversion Effectiveness — 15

For Web App:

- primary task is efficient;
- repeated actions are compact and predictable;
- state and next action are clear.

For Website/Pricing:

- story leads naturally to evidence and conversion;
- CTA hierarchy is unambiguous;
- pricing supports actual decision making.

For Docs/Editorial:

- retrieval/reading goal dominates.

## 4. Density & Calmness — 10

Full score:

- useful information is retained;
- controls use appropriate density;
- page does not feel visually noisy;
- whitespace supports structure rather than pretending to be quality.

## 5. Surface / Component Semantics — 10

Evaluate whether cards, panels, borders, tables, tabs, trees, dialogs, and other components are used because they fit the information model.

Deduct for Card Soup and nested surface mazes.

## 6. Typography & Readability — 10

Evaluate:

- hierarchy;
- line length;
- paragraph rhythm;
- metadata treatment;
- code/technical text where relevant;
- Chinese/English mixed text behavior.

## 7. Color & State Semantics — 8

Full score requires:

- restrained brand use;
- clear selected/current state;
- semantic state colors used consistently;
- decorative colors separated from operational semantics.

## 8. Interaction Feedback & Accessibility — 7

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

## 9. FanUI Character — 5

Does the result feel:

- clean;
- structured;
- refined;
- productive;
- calm under complexity?

This category is intentionally small so subjective style cannot override usability.

## Score interpretation

- **95–100 — Reference:** candidate to become a FanUI example.
- **85–94 — Pass:** FanUI-compliant and suitable to ship.
- **70–84 — Revise:** direction is usable but meaningful issues remain.
- **Below 70 — Reject:** redesign hierarchy/pattern before polishing.

## Hard-fail conditions

Regardless of numeric score, do not mark a result FanUI-compliant when any of these are severe:

- primary task cannot be identified;
- current context is ambiguous in a complex Web App;
- pricing hides or confuses billing units;
- documentation navigation makes core content effectively undiscoverable;
- accessibility prevents keyboard/focus use of key interactions;
- the design is primarily decorative imitation with little product evidence;
- generated layout breaks materially in Chinese or common English copy.