# FanUI Website — Navigation Calibration

## Intent

Website navigation establishes product maturity, information architecture, and conversion hierarchy. It should be compact, legible, and proportionate to the richness of the product.

## 1. Navigation archetypes

### Simple product navigation

Use when the product has a small public information architecture.

Typical:

```text
Logo
Product / Features
Docs
Pricing
Sign in
Primary CTA
```

### Complex product navigation

Use when the product has multiple product families, ecosystems, solution areas, or deployment models.

Typical:

```text
Logo
Product ▾
Platform / Hub
Solutions ▾
Pricing
Docs / Help ▾
Community
Enterprise / Deployment
Sign in
Primary CTA
```

Do not remove useful navigation just to look minimal.

## 2. Desktop calibration

At a ~1440px viewport:

```text
Header height: 64–72px
Container width: 1080–1200px
Logo visual height: 24–32px
Navigation text: 14–15px
CTA height: 36–42px
Horizontal nav gap: 24–36px
Utility/action gap: 12–20px
```

The header should feel substantial enough to belong to a mature product but remain visually quieter than the Hero.

## 3. Brand weight

Logo/brand should have enough visual weight to anchor the left side.

Avoid:

- tiny logo paired with wide empty header;
- low-contrast brand text;
- icon mark smaller than nearby navigation icons.

The navigation should still work if the Hero uses strong brand expression.

## 4. Information architecture

Navigation should expose meaningful public user choices, not mirror internal application objects.

Good categories:

- Product / Features
- Solutions
- Developers / API
- Docs / Help
- Pricing
- Community
- Enterprise / Deployment

Avoid copying internal product sidebar nouns directly into the website header unless they are real visitor destinations.

## 5. Primary CTA

One dominant website-level CTA is usually enough.

Examples:

- Free signup
- Start free
- Download
- Open web app
- Contact sales (enterprise-focused site)

Rules:

- CTA must be visually stronger than `Sign in`;
- CTA should not overpower the Hero headline;
- use explicit product language rather than vague `Get Started` when a better action exists.

## 6. Dropdowns

Use dropdowns when a label contains meaningful grouped destinations.

Dropdown content may include:

- product families;
- capability groups;
- solutions;
- developer resources;
- support/help destinations.

Do not add chevrons to labels that do not open anything.

## 7. Sticky behavior

Sticky navigation is useful on long product websites when:

- users may need Pricing/Docs/Signup after reading deep sections;
- the site has multiple sections;
- the header remains compact.

Avoid large sticky headers that consume persistent vertical space.

## 8. Relationship to Hero

The header and Hero should feel like one composition but not one card.

Possible relationships:

- white header + white Hero + brand field below;
- white header + subtly tinted Hero;
- transparent/light header over a very light brand field.

Avoid a hard visual clash where the header feels like a separate generic template.

## 9. Responsive priority

When width decreases, preserve in this order:

1. Brand
2. Primary CTA
3. Highest-value navigation
4. Sign in / utility
5. Secondary destinations inside menu

Do not compress all desktop destinations into unreadably tight spacing.

## 10. Navigation maturity test

Ask:

- Does the header communicate the real breadth of the product?
- Is the brand visually anchored?
- Are visitor destinations prioritized rather than minimized for aesthetics?
- Is the CTA clear?
- Does the header scale match the Hero and product evidence?
- Would Chinese labels fit without destroying spacing?

Minimal navigation is only good when the information architecture is actually minimal.