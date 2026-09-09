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

### Step 2 — Identify the primary task

State internally:

```yaml
fanui:
  experience: ...
  page_archetype: ...
  primary_user: ...
  primary_task: ...
  primary_action: ...
  key_information: ...
```

Do not proceed until the page has a clear task or narrative role.

### Step 3 — Establish hierarchy

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

### Step 4 — Select the FanUI pattern

Read the relevant pattern document:

- Homepage: `docs/website/homepage.md`
- Pricing: `docs/website/pricing.md`
- Documentation: `docs/website/documentation.md`
- Editorial: `docs/website/editorial-blog.md`
- App shell: `docs/web-app/app-shell.md`
- Workspace: `docs/web-app/workspace.md`

Do not reuse a homepage pattern for docs, blog, or product workspaces.

### Step 5 — Apply Visual DNA

Read `docs/02-visual-dna.md`.

Target:

- clean;
- structured;
- refined;
- productive;
- calm under complexity.

Remember:

> Dense, but calm.

> Product stays calm. Marketing may be expressive.

### Step 6 — Choose components semantically

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

### Step 7 — Apply color with roles

Keep separate roles for:

- brand;
- interaction;
- selection;
- semantic status;
- data visualization;
- decoration.

Do not randomly mix them.

### Step 8 — Check FanUI anti-patterns

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
- invisible current context.

### Step 9 — Check Chinese and English behavior

For any interface that could be bilingual:

- verify Chinese title wrapping;
- verify English technical terms inside Chinese copy;
- verify button and navigation width;
- verify table column pressure;
- verify pricing units;
- avoid layouts that only work with short English placeholders.

### Step 10 — Evaluate before completion

Use `eval/checklist.md` for every substantial UI task.

Use `eval/rubric.md` when:

- designing a new page;
- redesigning a major page;
- reviewing AI-generated UI;
- deciding whether a result is ready to become a FanUI reference.

A score below 85 should normally trigger revision.

## Output expectations for AI-generated UI

Before implementation, the agent should be able to summarize internally:

```yaml
fanui:
  experience: web_app
  page_archetype: detail
  primary_task: inspect_and_modify_object
  layout:
    sidebar: true
    tree: true
    workspace_tabs: true
    inspector: false
  hierarchy:
    - object_identity
    - state
    - primary_action
    - content
    - metadata
  density: medium_compact
```

For a marketing page:

```yaml
fanui:
  experience: website
  page_archetype: product_home
  primary_story: ...
  primary_cta: ...
  evidence: real_product_ui
  expression: medium
  section_rhythm: generous
```

The YAML is a reasoning aid, not required user-visible output.

## Reference rule

Apifox is the primary design reference and Pixso is the secondary reference, but never copy them literally. Use `references/` to understand what FanUI extracts from each source.