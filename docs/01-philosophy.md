# FanUI Design Philosophy

## 1. Hierarchy over minimalism

Minimalism is not the objective. Clear hierarchy is.

A page may contain substantial information if the user can immediately distinguish:

- primary task;
- current context;
- important state;
- secondary information;
- metadata;
- optional actions.

Do not remove useful information merely to make the interface look empty.

## 2. Dense, but calm

FanUI permits high information density, especially in professional tools.

Density becomes a problem when every element competes visually. Calmness is achieved through hierarchy, alignment, grouping, restrained color, and predictable interaction—not by making everything large and sparse.

## 3. Structured, not sterile

Structure should be visible through:

- spacing;
- typography;
- surfaces;
- borders where necessary;
- alignment;
- grouping;
- navigation context.

The interface should not become a flat gray field in the pursuit of restraint.

## 4. Product stays calm; marketing may be expressive

Web App surfaces should privilege focus and long-session comfort.

Marketing surfaces may use:

- stronger background transitions;
- larger type;
- controlled gradients;
- product-focused visual compositions;
- richer section rhythm;
- stronger brand accents.

Expression is allowed when it supports product storytelling. It should not turn into decoration for its own sake.

## 5. Real product over decorative mockup

When a product has a usable interface, the interface is usually the strongest proof of the product.

Preferred evidence order:

1. real product UI;
2. interactive product demo;
3. simplified product visualization;
4. explanatory illustration;
5. purely decorative graphic.

Do not default to abstract AI gradients, glowing spheres, fake dashboards, or unrelated 3D objects.

## 6. Surfaces express structure

Cards, panels, tinted backgrounds, and bordered regions are legitimate FanUI tools.

Use them when they communicate:

- semantic grouping;
- independent objects;
- interaction scope;
- comparison;
- state;
- focus;
- hierarchy.

Do not use a card simply because content exists.

## 7. Compact controls, generous composition

Professional interfaces benefit from compact controls and rows. Marketing and content pages benefit from more generous composition.

This creates a deliberate contrast:

```text
Controls: efficient
Content groups: readable
Sections: breathable
```

Do not scale every button, row, or input up merely to look modern.

## 8. Accent with purpose

Color should have a job.

FanUI distinguishes:

- brand color;
- interaction color;
- semantic state color;
- data visualization color;
- decorative color.

Do not casually reuse decorative color as status color or status color as brand emphasis.

## 9. Complexity should remain navigable

Complex products are allowed to be complex. Their navigation must not be ambiguous.

At any point, users should be able to answer:

- Where am I?
- What object am I operating on?
- What level of the hierarchy am I in?
- What can I do here?
- What changed?
- How do I go back or switch context?

## 10. Chinese is a first-class layout language

FanUI must work natively with Chinese, English, and mixed technical language.

Rules should account for:

- shorter but visually denser Chinese text;
- English technical terms embedded in Chinese;
- longer enterprise feature descriptions;
- different title wrapping behavior;
- punctuation and numeral density;
- plan/pricing strings with Chinese units.

A layout that works only with English placeholder copy is not FanUI-complete.

## 11. Design for repeated use, not screenshots

For Web Apps, optimize for the hundredth use rather than the first screenshot.

Prefer:

- predictable placement;
- scanability;
- strong selected/current states;
- compact repeated controls;
- shortcuts and contextual actions;
- persistent task context.

Avoid visual spectacle that becomes tiring during sustained use.

## 12. AI should choose patterns before styling

An AI using FanUI should not begin with colors or components.

The correct order is:

```text
Experience family
→ Primary task
→ Information architecture
→ Page archetype
→ Layout/pattern
→ Components
→ Visual styling
→ Evaluation
```

This is a core FanUI rule.