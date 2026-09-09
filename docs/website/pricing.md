# FanUI Website — Pricing

## Intent

A pricing page is a decision interface, not a card gallery.

Its job is to help a buyer:

1. understand available plans;
2. identify the most appropriate plan;
3. understand billing and unit economics;
4. compare meaningful differences;
5. resolve objections;
6. convert with confidence.

## Default architecture

```text
Pricing proposition
→ Billing control (if applicable)
→ Plan summary
→ Enterprise / custom path
→ Detailed comparison
→ FAQ / objections
→ Final CTA / sales path
```

## Plan summary

Each plan should communicate:

- plan name;
- target user/team;
- price or sales path;
- billing unit;
- important limits;
- the most decision-relevant differentiators;
- CTA.

Do not include every feature in the plan card.

### Recommended principle

> **Summary first, exhaustive comparison second.**

## Billing controls

Monthly/annual or other billing controls should:

- remain visually close to price;
- make discounts explicit;
- update the price model predictably;
- preserve unit labels;
- never obscure whether a price is per user, seat, project, month, year, usage unit, or organization.

## Plan emphasis

One plan may be visually recommended if there is a real default buyer fit.

Recommended emphasis should not:

- make other plans look disabled;
- rely only on a bright border;
- hide meaningful trade-offs;
- manufacture urgency without reason.

## Calibrated wide-desktop metrics

Reference viewport: approximately **1440px**.

Use `docs/foundations/experience-metrics.md` as the cross-surface authority.

### Intro / billing

```text
Website header: 64–72px
Pricing intro top: 72–104px
Pricing H1: 40–50px
Chinese Pricing H1: 38–48px
Lead: 16–18px
Intro → billing control: 28–40px
Billing control height: 36–42px
```

### Plans

```text
Plan group container: 1120–1240px
Billing control → plans: 40–64px
Inter-plan gap: 12–20px
Plan surface padding: 24–32px
Plan name: 18–21px
Price value: 36–48px
Billing unit: 13–15px
Plan CTA: 40–44px
Feature text: 14–15px
Feature row gap: 10–16px
```

When there are four or more self-serve plans, keep the cards compact enough that comparison remains possible. Do not use oversized card padding and 48px+ controls merely to create a premium feel.

### Enterprise / custom path

```text
Self-serve plans → enterprise path: 32–56px
Enterprise panel padding: 24–36px
```

Enterprise may use a full-width band, side-by-side consultation surface, or another distinct composition when buying motion differs materially.

### Comparison matrix

```text
Plans → comparison: 72–104px
Comparison container: 1160–1320px
Sticky/header row: 44–52px
Normal row: 42–52px
Category row: 34–44px
Cell horizontal padding: 12–20px
```

### FAQ / final conversion

```text
Comparison → FAQ: 72–112px
FAQ group width: 720–880px
FAQ item: 48–60px minimum when accordion-like
FAQ → final CTA: 80–112px
```

### Calibration rule

Pricing should be more compact than a Homepage story and more spacious than an operational Web App table.

Its visual anchor is the decision area, not empty Hero space. Do not isolate every stage with 120px+ whitespace. Do not make plan cards so large that the detailed comparison becomes psychologically or physically disconnected.

## Enterprise / private deployment

When enterprise buying differs materially from self-serve buying, give it a distinct path.

Enterprise may need:

- contact sales;
- deployment model;
- security/governance;
- SSO;
- permissions;
- private deployment;
- custom limits;
- SLA/support.

Do not force enterprise into the same self-serve pricing card if the purchase process is structurally different.

## Detailed comparison

A comparison matrix should progressively disclose detail.

Preferred hierarchy:

```text
Category
→ high-value decision rows
→ expandable full details
```

Good comparison categories include:

- platform support;
- core product capability;
- limits/quotas;
- collaboration;
- automation;
- governance;
- security;
- enterprise controls;
- support.

### Table rules

- Keep plan headers visible when the matrix is long.
- Make category boundaries strong enough to scan.
- Use concise labels.
- Avoid repeating identical values noisily.
- Highlight true differences, not decorative checkmarks.
- For Chinese, ensure long enterprise feature labels wrap predictably.

## FAQ

Use FAQ to address purchase friction, not generic SEO filler.

Typical questions:

- billing and renewal;
- refunds;
- upgrading/downgrading;
- seat calculation;
- usage limits;
- enterprise deployment;
- data ownership;
- feature availability;
- support.

## Anti-patterns

Avoid:

- three beautiful cards with unclear differences;
- hiding the billing unit;
- oversized recommended-plan decoration;
- overwhelming users with the full comparison table before summary;
- mixing free trial, free plan, subscription, and enterprise contact paths without hierarchy;
- vague 'contact us' enterprise cards with no explanation of value;
- Homepage-sized whitespace around a comparison-heavy decision surface;
- plan cards so tall that cross-plan scanning becomes difficult.

## AI decision model

```yaml
experience: pricing
plans: ...
billing_modes: ...
price_unit: ...
recommended_plan: ... | none
enterprise_path: self_serve | contact_sales | private_deployment
comparison_depth: light | medium | extensive
faq_required: true | false
metrics:
  plan_container: 1120-1240
  plan_padding: 24-32
  price: 36-48
  plan_cta: 40-44
  comparison_row: 42-52
```

The AI should derive visual emphasis from buyer decision structure, not from plan count.