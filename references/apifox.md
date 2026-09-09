# Reference: Apifox

## Role in FanUI

Apifox is the primary reference for FanUI Web.

It is used because one product family demonstrates multiple web experience types with a coherent visual language:

- product website;
- pricing;
- documentation;
- editorial/blog;
- complex professional Web App.

FanUI extracts principles and calibrated relationships from these surfaces. It does not copy Apifox assets, text, page structure, exact CSS values, or proprietary UI.

## Sources reviewed

Core current surfaces:

- https://apifox.com/
- https://apifox.com/pricing/
- https://docs.apifox.com/
- https://apifox.com/blog/
- current public product screenshots and documentation describing the product layout

Additional current evidence used for cross-surface validation:

- current Apifox API-document product pages;
- current public help-document pages;
- current pricing comparison and FAQ structure;
- current Blog category/index structure.

Reviewed/revalidated for FanUI Web in September 2026.

## Important measurement policy

FanUI does **not** claim that the calibrated values in `docs/foundations/` are pixel measurements copied from Apifox CSS.

The values are **reference-derived operating bands** chosen from:

- visible relative proportion;
- information density;
- page purpose;
- wide-desktop composition;
- cross-surface consistency;
- repeated FanUI dogfood failures.

The goal is to reproduce quality characteristics, not source measurements.

## Website observations

The homepage is strongly product-led:

- the Hero establishes category/value quickly;
- real product UI appears early and carries substantial visual weight;
- capability stories are organized around concrete product workflows;
- the page supports a large amount of information without making every section visually equal;
- AI, automation, enterprise, pricing, social proof, FAQ, and final CTA are integrated into one product story;
- the marketing layer has visibly stronger brand expression than the operational product UI.

### Proportion observations

The homepage demonstrates several relationships FanUI wants to preserve:

- a confident Hero headline relative to a 1440px-class canvas;
- CTA controls with enough physical weight to match the headline;
- product evidence large enough to inspect rather than serving as a thumbnail;
- major narrative gaps larger than local feature-group gaps;
- a compact header relative to the rest of the Hero;
- brand color concentrated in high-value regions rather than spread uniformly across every element.

### FanUI extraction

- real product evidence should outrank abstract decoration;
- long marketing pages need chapter-like rhythm;
- richer color and backgrounds are acceptable on marketing surfaces;
- feature stories should connect claim and visible product behavior;
- large canvas requires proportionally confident content scale;
- Hero, product evidence, proof, feature story, and CTA should not all share one visual amplitude.

## Documentation observations

The documentation information architecture is very deep and covers onboarding, API design, debugging, Mock, testing, CLI, documentation publishing, AI, MCP, best practices, authentication, reference material, subscription/deployment, and more.

The docs homepage/task-entry layer is conceptually simpler than the underlying tree. Article pages then prioritize retrieval, reading, code, screenshots, and task completion rather than marketing spectacle.

### Proportion observations

Documentation demonstrates a different operating density from the main website:

- persistent navigation remains compact;
- reading columns are materially narrower than marketing containers;
- article headings are clearly smaller than Homepage display type;
- section spacing is comfortable but much tighter than marketing chapter gaps;
- code, tables, callouts, and screenshots use local rhythm rather than giant section padding;
- search and current-location navigation carry more interaction weight than brand decoration.

### FanUI extraction

- full system depth can coexist with a simple docs landing page;
- persistent navigation and task-oriented entry points serve different needs;
- current location and nested hierarchy matter more than decorative polish;
- docs need a dedicated typography/density mode;
- Docs cannot reuse Homepage spacing and heading scales;
- dense navigation + comfortable reading is a deliberate dual-density pattern.

## Blog observations

The Blog uses meaningful editorial categories including perspectives, best practices, news, product updates, and customer cases. The current index mixes category navigation, featured/recent content, popular content, article summaries, metadata, and repeated category sections.

### Proportion observations

Editorial pages demonstrate another distinct rhythm:

- category navigation is compact and content-led;
- featured content receives more scale than ordinary article rows/cards;
- title hierarchy does more work than borders;
- metadata remains clearly subordinate;
- article reading requires a narrower measure and more paragraph rhythm than Docs-home or Web App content;
- Product CTA pressure is lower than on Product Website/Pricing surfaces.

### FanUI extraction

- editorial category navigation should reflect reader intent;
- article discovery and article reading need different compositions;
- metadata should support, not compete with, titles;
- conversion elements should be restrained on reading surfaces;
- Blog must not inherit compact Product UI typography;
- Blog must not become a same-sized marketing-card grid.

## Pricing observations

The current pricing system handles multiple self-serve plans, billing modes, discounts, explicit seat/year units, a private-deployment buying path, a large feature comparison system, expandable categories, and purchase FAQ.

### Proportion observations

Pricing demonstrates that decision density differs from normal Landing pages:

- plan cards/panels must remain compact enough to compare;
- price is a high-salience typographic anchor inside each plan, but plan purpose and unit remain visible;
- comparison tables/rows use denser vertical rhythm than marketing sections;
- enterprise/private deployment can receive a separate composition because the buying path is different;
- FAQ uses reading/decision spacing, not a giant marketing block;
- progressive disclosure keeps exhaustive detail from dominating the initial decision surface.

### FanUI extraction

- pricing is a decision interface;
- summarize plans first, then progressively reveal exhaustive comparison;
- pricing units and billing periods must be unambiguous;
- enterprise/private deployment deserves a distinct buying path when structurally different;
- plan cards should not be inflated until cross-plan comparison becomes inefficient;
- Pricing needs its own calibrated spacing and typography bands.

## Product UI observations

Apifox is valuable as a professional-tool reference because it combines:

- persistent navigation;
- project/context hierarchy;
- directory/object tree;
- tabs;
- toolbars;
- forms;
- dense tables;
- semantic protocol/status colors;
- workspace modes;
- dialogs and configuration.

### Proportion observations

The Product UI demonstrates the opposite end of the density spectrum from Homepage Marketing:

- persistent shell regions are relatively compact;
- navigation/tree rows support high-frequency scanning;
- working canvas receives most of the useful width;
- page content is not normally constrained to a centered marketing container;
- local controls are materially smaller than Hero/Pricing CTAs;
- semantic color is common, decorative color is not;
- selected/current state is explicit without using large branded surfaces.

### FanUI extraction

- dense interfaces can remain calm through hierarchy and restrained surfaces;
- selection/state deserves clear visual treatment;
- compact controls are appropriate for repeated professional work;
- complex products should expose structure without flattening all hierarchy into one navigation region;
- Professional/AI workspaces should spend horizontal space on actual work, not empty margins;
- Website-scale typography and spacing must not leak into Product UI.

## Cross-surface reference matrix

```text
Homepage
  amplitude: high in Hero/core stories
  density: medium
  brand expression: medium-high/high
  spacing: chapter-like

Documentation
  amplitude: low/medium
  density: compact nav + comfortable reading
  brand expression: low/medium
  spacing: task/reading rhythm

Blog
  amplitude: medium
  density: discovery + reading
  brand expression: medium/low on article body
  spacing: editorial rhythm

Pricing
  amplitude: medium
  density: decision/comparison oriented
  brand expression: medium
  spacing: compact plan/comparison + larger stage transitions

Product Web App
  amplitude: low
  density: medium-compact/high
  brand expression: low
  spacing: operational/task rhythm
```

FanUI should preserve this **relative system**, not force a universal `max-width`, `py-*`, heading scale, or control height across all surfaces.

## What FanUI should not copy

Do not treat any of the following as universal merely because Apifox uses them:

- exact brand color;
- exact radius values;
- exact spacing values;
- exact homepage section order;
- exact typography/font family;
- specific icons/illustrations;
- product-specific API terminology;
- exact plan count or pricing presentation;
- exact documentation framework layout.

The reference is evidence for design reasoning and calibration, not a template.