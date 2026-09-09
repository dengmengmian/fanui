# FanUI Website — Homepage

## Intent

The homepage should explain what the product is, who it is for, why it matters, and what proof exists—without collapsing into either a brochure or an abstract brand film.

## Default composition

```text
Global Navigation
→ Hero
→ Product Evidence
→ Trust / Adoption Signal
→ Core Capability Stories
→ Secondary Capabilities
→ Enterprise / Scale Story when relevant
→ Pricing Preview when useful
→ Social Proof
→ FAQ / Objection Handling
→ Final CTA
→ Footer
```

This is a pattern, not a mandatory section count. Remove sections that do not serve the product story.

## Hero

A FanUI hero should answer three questions quickly:

1. What is this?
2. What outcome does it create?
3. What should I do next?

Preferred structure:

```text
Eyebrow / category (optional)
Headline
Concise supporting copy
Primary CTA + optional secondary CTA
Product evidence
```

### Rules

- Keep the headline product-specific rather than generic aspirational copy.
- Avoid stacking multiple marketing claims before showing the product.
- Prefer one dominant CTA.
- Product evidence should appear early for software products.
- Allow stronger visual expression than inside the Web App, but retain clear hierarchy.

## Product evidence

Preferred evidence order:

1. Real interface
2. Interactive demo
3. Focused product crop
4. Simplified product visualization
5. Illustration
6. Decorative visual

The evidence should show the claim, not merely accompany it.

Example reasoning:

```text
Claim: visual API design
→ show the design workspace

Claim: automation workflow
→ show the workflow canvas / run result

Claim: collaboration
→ show a real collaborative state or activity model
```

## Feature storytelling

Use feature sections to tell one meaningful story at a time.

Preferred composition:

```text
Category label
Clear benefit-led heading
Short explanation
Product visual
Optional supporting points / tabs
```

### Alternation

Alternating text/image direction may be used to create rhythm, but do not alternate mechanically. Layout should follow the visual evidence.

### Tabs inside feature stories

Use when several closely related sub-capabilities share one visual region.

Good use:

- design / validate / generate;
- request / response / assertion;
- editor / preview / developer mode.

Avoid using tabs merely to hide excess copy.

## Section rhythm

Website composition should feel more generous than product UI.

Use:

- strong spacing between major story changes;
- quieter spacing within one capability story;
- surface/background changes to indicate narrative chapters;
- occasional high-impact sections rather than making every section visually unique.

## Trust signals

Use customer logos, usage signals, testimonials, case studies, or compatibility ecosystems when they reduce uncertainty.

Do not overload the page with logos before explaining the product.

## Enterprise sections

Enterprise messaging should introduce new reasons to buy, not simply repeat the standard feature list.

Typical dimensions:

- deployment;
- security;
- governance;
- permissions;
- SSO;
- compliance;
- scale;
- support.

## Website color and visual effects

Marketing surfaces may use:

- tinted sections;
- gradient fields;
- controlled glow;
- larger product frames;
- stronger brand accents;
- product-focused motion.

But no section should depend on decoration to create meaning.

## AI generation checklist

Before implementing a homepage, the AI should state internally:

```yaml
experience: website
page: homepage
primary_audience: ...
primary_value: ...
primary_cta: ...
proof_type: real_product_ui | demo | visualization
core_story_count: ...
enterprise_needed: true | false
pricing_preview_needed: true | false
```

Then build hierarchy before choosing effects.