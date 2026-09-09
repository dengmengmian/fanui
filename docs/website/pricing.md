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
- vague 'contact us' enterprise cards with no explanation of value.

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
```

The AI should derive visual emphasis from buyer decision structure, not from plan count.