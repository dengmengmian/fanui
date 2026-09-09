# FanUI Web Skill

## Purpose

Use this skill when designing, implementing, revising, or reviewing a web interface that should follow FanUI.

FanUI is a decision + calibration system. Do not start by choosing colors, gradients, cards, or components.

## Required workflow

### Step 1 — Classify the experience

Choose one primary family:

- `website`
- `documentation`
- `editorial`
- `pricing`
- `web_app`

If the task spans multiple families, classify each surface separately.

### Step 2 — If Web App, classify the archetype

This step is mandatory for every substantial `web_app` task.

Read:

`docs/web-app/archetypes.md`

Choose one primary archetype:

- `management_console`
- `professional_workspace`
- `data_application`
- `ai_workspace`

Optional: choose one secondary archetype.

Identify the product's **core value loop** before designing navigation.

Hard rule:

> Do not default task-oriented products to management-console information architecture.

Do not infer one top-level navigation item per domain noun (`Projects`, `Agents`, `Runs`, `Artifacts`, etc.) unless those are genuinely independent administrative collections.

### Step 3 — Identify the primary task

State internally:

```yaml
fanui:
  experience: ...
  primary_archetype: ... # required for web_app
  secondary_archetype: ...
  core_value_loop: ...
  page_archetype: ...
  primary_user: ...
  primary_task: ...
  primary_action: ...
  key_information: ...
```

Do not proceed until the page has a clear task or narrative role.

### Step 4 — Establish hierarchy

Order page information by importance.

Typical Web App order:

```text
current object/task
→ state
→ primary action
→ working content
→ secondary actions
→ metadata
```

Typical Website order:

```text
value proposition
→ evidence
→ capability story
→ trust
→ conversion
```

Identify one **primary visual anchor** for each substantial page.

### Step 5 — Select the FanUI pattern

Read the relevant pattern documents.

Website:

- Homepage: `docs/website/homepage.md`
- Hero: `docs/website/hero.md`
- Navigation: `docs/website/navigation.md`
- Product showcase: `docs/website/product-showcase.md`
- Pricing: `docs/website/pricing.md`
- Documentation: `docs/website/documentation.md`
- Editorial: `docs/website/editorial-blog.md`

Web App:

- Archetypes: `docs/web-app/archetypes.md`
- App shell: `docs/web-app/app-shell.md`
- Workspace: `docs/web-app/workspace.md`

Do not reuse a homepage pattern for docs, blog, or product workspaces.

Do not reuse a Management Console shell for a Professional/AI Workspace without explicit task justification.

### Step 6 — Apply Visual DNA and calibrated foundations

Read:

- `docs/02-visual-dna.md`
- `docs/foundations/visual-system.md`
- `docs/foundations/typography.md`
- `docs/foundations/layout-metrics.md`
- `docs/foundations/spacing-rhythm.md`
- `docs/foundations/color-expression.md`
- `docs/foundations/radius-depth.md`

Target:

- clean;
- structured;
- refined;
- productive;
- calm under complexity;
- visually finished rather than merely structurally correct.

Remember:

> Dense, but calm.

> Structured, not sterile.

> Rich enough to feel designed. Calm enough to stay usable.

> Product stays calm. Marketing may be expressive.

> Large canvas requires proportionally confident content scale.

### Step 7 — Calibrate scale before styling details

For substantial pages, especially Website surfaces, explicitly choose calibrated ranges before implementation.

Reference desktop viewport: ~1440px.

For a product Homepage, internal reasoning should include:

```yaml
visual_calibration:
  viewport_reference: 1440
  standard_container: 1080-1200
  wide_product_container: 1200-1320
  hero_display: 56-64
  chinese_hero_display: 52-60
  hero_lead: 18-20
  hero_cta_height: 40-48
  hero_showcase: 78-90vw
  hero_showcase_max: 1120-1280
  brand_expression: medium | high
  section_rhythm: varied
```

For Product UI, use the Product typography/density ranges instead of Marketing scales.

Calibration ranges are not immutable tokens. Choose within them deliberately. Deviate only for a clear content/brand/product reason.

Hard rule:

> Do not silently fall back to generic framework defaults when a FanUI calibrated range exists.

### Step 8 — Set visual amplitude and brand expression

Classify each major page/region as:

```text
Visual amplitude: low | medium | high
Brand expression: low | medium | high
```

Typical mapping:

```text
Professional/AI Workspace → low amplitude / low brand expression
Docs/Pricing/App Home → medium amplitude / medium brand expression
Homepage Hero/Core Product Story → high amplitude / high or medium-high brand expression
```

Do not render every region at the same visual amplitude.

Check for:

- same-volume page;
- anonymous neutral + accent;
- timid Hero;
- underscaled content on a large canvas.

### Step 9 — Choose components semantically

Use components because the information/interaction calls for them.

Examples:

- comparison across columns → table;
- scan objects → list;
- hierarchical objects → tree;
- alternate views of one object → tabs;
- secondary persistent object detail → inspector;
- destructive confirmation → dialog;
- temporary narrow task → drawer/popover depending scope.

Never create a card just because content needs a container.

Use radius, border, and elevation bands from `docs/foundations/radius-depth.md`; do not apply one large radius everywhere.

### Step 10 — For product websites, classify product evidence scale

Read `docs/website/product-showcase.md`.

For each important product visual decide:

```yaml
showcase:
  importance: supporting | normal | core | hero
  scale: small | medium | large | hero
  target_width: ...
  crop: context | task | detail
  readable_without_zoom: true | false
```

Calibrated wide-desktop guidance:

```text
Small: ~30–45% local width
Medium: ~50–65%
Large: ~65–85%
Hero: ~78–90vw, max ~1120–1280px
```

Core/hero product evidence should not be rendered as a small thumbnail.

A larger screenshot is not enough if the Product UI itself looks like a neutral wireframe. Ensure product evidence contains real hierarchy, selection, semantic states, and meaningful content.

### Step 11 — Apply color with roles and expression

Read `docs/foundations/color-expression.md`.

Keep separate roles for:

- brand;
- interaction;
- selection;
- semantic status;
- data visualization;
- decoration.

Do not randomly mix them.

Do not reduce brand identity to neutral UI + one purple/blue primary button.

### Step 12 — Check FanUI anti-patterns

Read `docs/anti-patterns/core.md`.

At minimum check for:

- Card Soup;
- gray-on-gray sterility;
- fake SaaS dashboard;
- decorative AI visuals by default;
- excessive roundedness;
- icon confetti;
- multiple primary actions;
- empty-space-as-quality;
- nested surface maze;
- invisible current context;
- management console drift;
- noun-trap navigation;
- same-volume page;
- product screenshot as thumbnail;
- border-grid/wireframe finish;
- generic purple SaaS identity;
- underscaled content on a large canvas;
- timid product Hero;
- anonymous neutral + accent.

### Step 13 — Check Chinese and English behavior

For any interface that could be bilingual:

- verify Chinese title wrapping;
- use the Chinese Marketing calibration band where relevant;
- verify English technical terms inside Chinese copy;
- verify button and navigation width;
- verify table column pressure;
- verify pricing units;
- avoid layouts that only work with short English placeholders.

### Step 14 — Evaluate before completion

Use `eval/checklist.md` for every substantial UI task.

Use `eval/rubric.md` when:

- designing a new page;
- redesigning a major page;
- reviewing AI-generated UI;
- deciding whether a result is ready to become a FanUI reference.

A score below 85 should normally trigger revision.

A Web App with the wrong primary archetype cannot pass simply through visual polish.

A product-led website whose core product evidence is repeatedly unreadable/tiny cannot pass simply through good copy and spacing.

A wide-desktop Homepage that materially ignores FanUI scale calibration without an intentional reason cannot pass simply because it is clean and aligned.

## Output expectations for AI-generated UI

Before implementation, the agent should be able to summarize internally.

### Web App

```yaml
fanui:
  experience: web_app
  primary_archetype: ai_workspace
  secondary_archetype: professional_workspace
  core_value_loop: define_run_review_ai_work
  page_archetype: project_workspace
  primary_task: operate_current_workflow
  default_home: last_context
  layout:
    global_sidebar: true
    project_navigator: true
    tree: true
    workspace_tabs: true
    inspector: true
  hierarchy:
    - current_project
    - current_workflow
    - run_state
    - working_content
    - artifact
    - metadata
  density: medium_compact
  visual_amplitude: low
  brand_expression: low
```

### Marketing Homepage

```yaml
fanui:
  experience: website
  page_archetype: product_home
  primary_story: ...
  primary_cta: ...
  primary_visual_anchor: hero_product_showcase
  evidence: real_product_ui
  visual_amplitude: high
  brand_expression: high
  calibration:
    standard_container: 1160
    hero_display: 60
    hero_lead: 19
    hero_cta_height: 44
    hero_showcase_width: 1240
  showcase:
    scale: hero
    crop: context
    readable_without_zoom: true
  section_rhythm: varied
```

The exact values above are examples inside the calibrated bands, not global FanUI tokens.

The YAML is a reasoning aid, not required user-visible output.

## Reference rule

Apifox is the primary design reference and Pixso is the secondary reference, but never copy them literally. Use `references/` to understand what FanUI extracts from each source.

FanUI V0.3 calibration exists to reproduce **quality characteristics** such as confident scale, product evidence weight, color discipline, and rhythm—not another product's exact layout, color, or assets.