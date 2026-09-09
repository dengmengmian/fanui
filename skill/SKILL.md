# FanUI Web Skill

## Purpose

Use FanUI when designing, implementing, revising, or reviewing Web UI. FanUI is an AI-native **decision, calibration, fidelity, precision, and evaluation system**. It is not a generic component skin.

## Required workflow

### 1. Classify the experience

Choose one or more:

- `website`
- `documentation`
- `editorial`
- `pricing`
- `web_app`

### 2. Classify Web App archetype

For every substantial Web App, read `docs/web-app/archetypes.md` and choose:

- `management_console`
- `professional_workspace`
- `data_application`
- `ai_workspace`

Optional secondary archetype is allowed.

Hard rule:

> Do not default task-oriented products to management-console IA.

Identify the core value loop before navigation.

### 3. Identify task and context

Before styling, state internally:

```yaml
fanui:
  experience: ...
  primary_archetype: ...
  secondary_archetype: ...
  core_value_loop: ...
  page_archetype: ...
  primary_user: ...
  primary_task: ...
  primary_action: ...
  current_context: ...
  key_information: ...
```

### 4. Establish hierarchy and primary visual anchor

Website default narrative:

```text
value proposition
→ product evidence
→ capability story
→ trust
→ conversion
```

Web App default hierarchy:

```text
current context
→ current state
→ primary action
→ working content
→ supporting detail
→ metadata
```

Every substantial surface needs one primary visual/task anchor.

### 5. Load the relevant pattern

Website:

- `docs/website/homepage.md`
- `docs/website/hero.md`
- `docs/website/navigation.md`
- `docs/website/product-showcase.md`
- `docs/website/pricing.md`
- `docs/website/documentation.md`
- `docs/website/editorial-blog.md`
- `docs/website/editorial-visuals.md`

Web App:

- `docs/web-app/archetypes.md`
- `docs/web-app/app-shell.md`
- `docs/web-app/workspace.md`
- `docs/web-app/viewport-ownership.md`

Do not reuse Homepage composition for Docs/Blog/Product UI. Do not reuse Management Console shells for AI/Professional Workspaces without explicit justification.

### 6. Load calibrated foundations

Mandatory for substantial work:

- `docs/02-visual-dna.md`
- `docs/foundations/visual-system.md`
- `docs/foundations/typography.md`
- `docs/foundations/layout-metrics.md`
- `docs/foundations/spacing-rhythm.md`
- `docs/foundations/color-expression.md`
- `docs/foundations/radius-depth.md`
- `docs/foundations/experience-metrics.md`
- `docs/foundations/fidelity-density.md`
- `docs/foundations/optical-layout.md`
- `docs/foundations/semantic-product-color.md`
- `docs/foundations/surface-hierarchy.md`
- `docs/foundations/iconography.md`

Core formulations:

> Dense, but calm.

> Structured, not sterile.

> Product stays calm. Marketing may be expressive.

> Large canvas requires proportionally confident content scale.

> Shared rhythm, different operating density.

> Large evidence must earn its area through fidelity.

> Workspace owns the viewport.

> Icon meaning comes before icon decoration.

### 7. Calibrate the experience

Reference desktop viewport: ~1440px.

Use `experience-metrics.md`; do not reuse one max-width, H1, `py-*`, button height, or radius across all surface families.

Internal calibration should include:

```yaml
experience_metrics:
  viewport: 1440
  family: ...
  primary_container: ...
  reading_measure: ...
  title_scale: ...
  primary_control_height: ...
  major_vertical_rhythm: ...
  local_vertical_rhythm: ...
  density: ...
  visual_amplitude: ...
  brand_expression: ...
```

For Homepage, typical wide-desktop bands remain:

```text
standard container       1080–1200px
wide product container   1200–1320px
Hero display             56–64px
Chinese Hero             52–60px
Hero lead                18–20px
Hero CTA                 40–48px
Hero evidence            78–90vw, max 1120–1280px
```

Use dedicated ranges for Docs, Editorial, Pricing, and Product UI.

### 8. Apply optical layout

Read `optical-layout.md`.

For sidebars/inspectors, reason about the **remaining canvas**.

Documentation content should not simply hug the sidebar while leaving hundreds of unused pixels on the opposite side.

Split Marketing sections should allocate width according to content/evidence weight, not default to 50/50.

### 9. Set visual amplitude and brand expression

Classify regions:

```text
Visual amplitude: low | medium | high
Brand expression: low | medium | high
```

Typical mapping:

```text
AI / Professional Workspace    low / low
Docs article                   low / low
Docs Home / Blog Index         medium / low-medium
Pricing                        medium / medium
Homepage Hero                  high / high
```

Avoid same-volume pages.

### 10. Choose components semantically

Use tables for comparison, trees for hierarchy, tabs for alternate views of one object, inspectors for persistent secondary detail, lists for scan tasks, overlays for temporary secondary work.

Do not create a card because content needs a box.

Apply `surface-hierarchy.md`: radius/elevation should become tighter and quieter toward operational UI.

### 11. Apply iconography precision

Read `docs/foundations/iconography.md` whenever icons are part of repeated rows, navigation, feature explanations, controls, or product state.

Hard rules:

- choose semantic meaning before visual similarity;
- do not use a Git-branch icon as a generic workflow icon when a workflow-specific glyph exists;
- do not use a robot icon to communicate permissions, boundaries, policy, or authority;
- peer icons must share glyph size, stroke weight, and container geometry;
- icon glyphs must be optically centered inside their boxes;
- an icon beside title + supporting copy aligns to the **first-line information anchor**, not the geometric center of the full text block;
- broad descendant CSS selectors must not override icon-box display, margin, line-height, or color;
- icon-only controls require accessible label/tooltip and adequate hit area.

Practical compact feature-row starting band:

```text
icon box       28–32px
icon glyph     14–16px
column gap     10–12px
stroke         1.7–2.0
optical Y fix  0–2px only when needed
```

If a glyph still looks wrong after ~2px optical correction, choose a better glyph rather than forcing the alignment.

### 12. Enforce Product Evidence Fidelity

For every core/Hero product visual, classify:

```yaml
showcase:
  importance: supporting | normal | core | hero
  scale: small | medium | large | hero
  crop: context | task | detail
  readable_without_zoom: true | false
  fidelity:
    context: true | false
    navigation: true | false
    state: true | false
    data: true | false
    actions: true | false
    semantic_roles: true | false
    depth: true | false
```

Hero/Core evidence can fail even when its pixel width is correct.

Check:

- believable current context;
- real state distinctions;
- realistic labels/data/metadata;
- useful action hierarchy;
- semantic role color;
- believable navigation/inspector/runtime structure.

Avoid a large frame containing a few tiny nodes. Use `fidelity-density.md`.

### 13. Enforce effective density and readability

Ask whether a large surface would lose nothing if reduced 30–40%. If yes, either reduce the surface or increase its meaningful content.

Do not use tiny typography to fake professional density. Respect the Minimum Readability Floor in `fidelity-density.md`.

### 14. Apply semantic product color

Read `semantic-product-color.md`.

Keep these roles distinct:

- brand;
- interaction;
- selection;
- running/info;
- success;
- warning/approval;
- danger;
- agent;
- tool;
- artifact;
- domain-specific type;
- data visualization;
- decoration.

Brand color says who the product is. Semantic color says what is happening.

### 15. Enforce viewport ownership for Professional / AI Workspaces

Read `viewport-ownership.md`.

Core workspace should normally use remaining viewport height and internal pane scrolling.

A page with a 450–550px workspace region and a large blank area below is a failure unless the workflow is intentionally document-shaped.

### 16. Use an Editorial Visual System

For Blog/Editorial read `editorial-visuals.md`.

Do not use pastel gradient rectangles with empty white panels as default article art.

Prefer idea-bearing visuals derived from workflow, traces, approvals, artifacts, code, data, topology, or product concepts.

A large article Hero image is optional; it must earn its area.

### 17. Check anti-patterns

Read both:

- `docs/anti-patterns/core.md`
- `docs/anti-patterns/v032.md`

V0.3.2 additions include:

- Fake Product Evidence;
- Sparse Evidence in an Oversized Frame;
- Sidebar-edge Docs Alignment;
- Editorial Placeholder Art;
- Un-earned Article Hero;
- Workspace Below-the-fold Void;
- Semantic-color Collapse;
- Rounded Rectangle Everywhere;
- Tiny Product Typography.

Iconography precision also rejects:

- Icon Confetti;
- Approximate Icon Semantics;
- Glyph Drift;
- Icon-box Override;
- Text-block Centering for icon + title + description rows.

### 18. Check Chinese / English behavior

Validate Chinese title wrapping, mixed technical labels, navigation width, pricing units, tables, product rows, icon/text rows, and minimum readability.

### 19. Evaluate before completion

Use:

- `eval/checklist.md` for every substantial task;
- `eval/rubric.md` for new/redesigned major surfaces.

Score below 85 normally triggers revision.

Hard failures cannot be rescued by average score:

- wrong Web App archetype;
- tiny/unreadable core product evidence;
- Hero scale outside calibration without reason;
- cross-surface density collapse;
- fake/sparse core product evidence;
- Professional/AI Workspace not owning its viewport;
- primary editorial visual that is obviously a placeholder;
- documentation with severe optical imbalance;
- operational typography below readability floor across repeated rows;
- repeated icon/text patterns with visibly broken centering or semantically misleading glyphs.

## Output expectations

### AI / Professional Workspace reasoning example

```yaml
fanui:
  experience: web_app
  primary_archetype: ai_workspace
  secondary_archetype: professional_workspace
  core_value_loop: define_configure_run_observe_review_act
  primary_task: operate_current_workflow
  density: medium_compact
  visual_amplitude: low
  brand_expression: low
  viewport_ownership: full_remaining_height
  panes:
    navigator: 220
    workspace: flexible
    inspector: 300
    runtime: persistent_bottom_pane
  fidelity:
    realistic_state: true
    semantic_roles: true
    current_context: true
```

### Product Homepage reasoning example

```yaml
fanui:
  experience: website
  primary_visual_anchor: hero_product_showcase
  brand_expression: high
  hero_display: 60
  hero_showcase_width: 1240
  product_evidence:
    scale: hero
    readable_without_zoom: true
    fidelity: high
  optical_balance: checked
  section_rhythm: varied
  iconography:
    semantic_fit: checked
    peer_geometry: checked
    optical_alignment: checked
```

These YAML blocks are reasoning aids, not required user-visible output.

## Reference rule

Apifox remains the primary reference and Pixso secondary. Never clone their exact assets/layouts. FanUI extracts quality characteristics: mature scale, credible product evidence, readable density, optical balance, semantic color discipline, component precision, and cross-surface coherence.
