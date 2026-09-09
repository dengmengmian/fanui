# FanUI Web Skill

## Purpose

Use this skill when designing, implementing, revising, or reviewing a web interface that should follow FanUI.

FanUI is a decision system. Do not start by choosing colors, gradients, cards, or components.

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

### Step 6 — Apply Visual DNA and visual system

Read:

- `docs/02-visual-dna.md`
- `docs/foundations/visual-system.md`
- `docs/foundations/typography.md`

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

### Step 7 — Set visual amplitude

Classify the page/region as:

- `low`
- `medium`
- `high`

Operational workspaces should usually stay low/medium.

Marketing heroes and major product showcases may be high.

Do not render every region at the same visual amplitude.

Check for a **same-volume page** where every section/card/screenshot has similar weight.

### Step 8 — Choose components semantically

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

### Step 9 — For product websites, classify product evidence scale

Read `docs/website/product-showcase.md`.

For each important product visual decide:

```yaml
showcase:
  importance: supporting | normal | core | hero
  scale: small | medium | large | hero
  crop: context | task | detail
  readable_without_zoom: true | false
```

Core/hero product evidence should not be rendered as a small thumbnail.

### Step 10 — Apply color with roles

Keep separate roles for:

- brand;
- interaction;
- selection;
- semantic status;
- data visualization;
- decoration.

Do not randomly mix them.

### Step 11 — Check FanUI anti-patterns

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
- border-grid/wireframe finish.

### Step 12 — Check Chinese and English behavior

For any interface that could be bilingual:

- verify Chinese title wrapping;
- verify English technical terms inside Chinese copy;
- verify button and navigation width;
- verify table column pressure;
- verify pricing units;
- avoid layouts that only work with short English placeholders.

### Step 13 — Evaluate before completion

Use `eval/checklist.md` for every substantial UI task.

Use `eval/rubric.md` when:

- designing a new page;
- redesigning a major page;
- reviewing AI-generated UI;
- deciding whether a result is ready to become a FanUI reference.

A score below 85 should normally trigger revision.

A Web App with the wrong primary archetype cannot pass simply through visual polish.

A product-led website whose core product evidence is repeatedly unreadable/tiny cannot pass simply through good copy and spacing.

## Output expectations for AI-generated UI

Before implementation, the agent should be able to summarize internally:

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
```

For a marketing page:

```yaml
fanui:
  experience: website
  page_archetype: product_home
  primary_story: ...
  primary_cta: ...
  primary_visual_anchor: hero_product_showcase
  evidence: real_product_ui
  showcase_scale: hero
  expression: medium_high
  section_rhythm: varied
```

The YAML is a reasoning aid, not required user-visible output.

## Reference rule

Apifox is the primary design reference and Pixso is the secondary reference, but never copy them literally. Use `references/` to understand what FanUI extracts from each source.