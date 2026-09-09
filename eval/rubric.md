# FanUI Web Evaluation Rubric

## Purpose

This rubric evaluates whether a web interface follows FanUI strongly enough to ship or become a reference.

Total: **100 points**.

V0.3.1 explicitly evaluates four dogfood/reference failures:

1. choosing the wrong Web App archetype;
2. producing structurally correct but visually unfinished UI;
3. using safe-but-timid visual scale, spacing, and brand expression on wide desktop pages;
4. applying one generic spacing/typography/container system across Homepage, Docs, Blog, Pricing, and Product UI.

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

Evaluate whether the page structure matches the product's actual value loop and page family.

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

A Docs/Blog/Pricing surface that is materially implemented as a generic Homepage section set should also receive a major deduction.

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

## 4. Visual Finish, Calibration & Composition — 15

Evaluate whether the result feels intentionally designed rather than merely correctly laid out.

Full score requires:

- one clear visual anchor;
- meaningful variation in visual amplitude;
- major sections do not all use the same card/heading rhythm;
- product evidence receives appropriate visual scale;
- wide-desktop content scale is proportionate to the canvas;
- Marketing / Product / Docs / Editorial typography uses the correct calibrated mode;
- container width and reading measure fit the experience family;
- major and local spacing fit the experience family;
- border, surface, spacing, and typography are balanced;
- the interface does not look like a polished wireframe;
- brand character exists beyond one accent color;
- Brand Expression Level fits the experience.

### Cross-surface calibration checks

For products implementing multiple FanUI families, explicitly compare:

```text
Homepage
Documentation
Editorial / Blog
Pricing
Web App
```

A strong product family should share design language while changing operating density.

Check that:

- Homepage uses confident Marketing scale and chapter rhythm;
- Docs uses compact navigation + comfortable reading rhythm;
- Editorial uses discovery/reading rhythm and narrower article measure;
- Pricing uses dense decision/comparison rhythm;
- Product UI uses medium-compact operational density and full useful canvas.

Using the same `max-width`, H1 size, section padding, card gap, and button height everywhere is a calibration failure, not consistency.

### Homepage-specific check at ~1440px

- Hero display is confidently scaled relative to the viewport;
- Hero CTA is not merely an internal Product UI button reused in marketing;
- core product evidence is Large/Hero scale and inspectable without zoom;
- standard and Wide Product containers are intentional rather than arbitrary framework defaults.

### Calibration scoring guidance

- **13–15:** uses calibrated ranges intentionally for the current family and remains coherent with other product surfaces; deviations are justified.
- **9–12:** generally correct but one or two important scales/rhythms remain timid, generic, or borrowed from another page family.
- **0–8:** materially ignores FanUI calibration, uses a one-size-fits-all spacing/type system, or looks underscaled/anonymous/template-like.

Deduct for:

- same-volume pages;
- repeated small screenshots;
- border-grid finish;
- generic purple SaaS identity;
- anonymous neutral + accent branding;
- timid Hero scale;
- underscaled content on large canvas;
- monotonous composition;
- uniform-spacing product family;
- Marketing-sized Documentation;
- Dashboard-sized Editorial;
- Landing-page Pricing;
- Website-sized Product UI.

## 5. Layout & Navigation — 10

Evaluate:

- page composition;
- alignment;
- responsive logic;
- current context;
- navigation depth;
- workspace structure where relevant;
- website header scale and information density where relevant;
- reading/content measure where relevant.

Full score requires users to understand location/context without explanation.

## 6. Density & Calmness — 8

Full score:

- useful information is retained;
- controls use appropriate density;
- page does not feel visually noisy;
- whitespace supports structure rather than pretending to be quality;
- operational UI remains compact while page composition can breathe;
- large whitespace is earned by large type, product evidence, reading, or narrative separation;
- the experience family has the correct operating density.

## 7. Surface / Component Semantics — 7

Evaluate whether cards, panels, borders, tables, tabs, trees, dialogs, and other components are used because they fit the information model.

Deduct for:

- Card Soup;
- nested surface mazes;
- boxing every group;
- inappropriate component semantics;
- one large radius applied indiscriminately across controls, surfaces, and marketing frames.

## 8. Typography & Readability — 5

Evaluate:

- hierarchy;
- calibrated scale for the current experience mode;
- line length/reading measure;
- paragraph rhythm;
- metadata treatment;
- code/technical text where relevant;
- Chinese/English mixed text behavior.

Typography should preserve hierarchy even if icons, brand color, and shadows are removed.

## 9. Color, Brand & State Semantics — 5

Full score requires:

- Brand Expression Level fits the page archetype;
- selected/current state is clear;
- semantic state colors are used consistently;
- decorative colors are separated from operational semantics;
- brand identity is not dependent on accent color alone;
- Homepage may be expressive while Workspace remains operationally calm;
- Docs/Editorial/Pricing inherit the same brand family without copying Homepage intensity.

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
- **Below 70 — Reject:** redesign hierarchy/archetype/pattern/calibration before polishing.

## Hard-fail conditions

Regardless of numeric score, do not mark a result FanUI-compliant when any of these are severe:

- primary task cannot be identified;
- a task-oriented Professional/AI Workspace is primarily implemented as a generic management console without justification;
- current context is ambiguous in a complex Web App;
- pricing hides or confuses billing units;
- documentation navigation makes core content effectively undiscoverable;
- accessibility prevents keyboard/focus use of key interactions;
- the design is primarily decorative imitation with little product evidence;
- a product-led Homepage repeatedly uses unreadable thumbnail-scale product UI as core evidence;
- a wide-desktop Product Homepage is materially underscaled across Hero type, CTA, and primary evidence without an intentional reason;
- a multi-surface product materially applies the same Homepage-like or generic framework spacing/type/container system to Docs, Blog, Pricing, and Product UI;
- generated layout breaks materially in Chinese or common English copy.