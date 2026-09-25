---
name: fanui
description: Design, implement, revise, or review polished Web and native desktop application UI with experience-specific calibration, platform-aware interaction, responsive or window-adaptive behavior, and rendered acceptance gates.
---

# FanUI Skill

## Purpose

Use FanUI when designing, implementing, revising, or reviewing Web UI or native desktop application UI. FanUI is an AI-native **decision, calibration, fidelity, adaptive behavior, precision, and evaluation system**. It is not a generic component skin.

## Required workflow

### Workflow routing and progressive disclosure

Choose one primary workflow from the user's requested outcome before loading detailed guidance. Load the shared context workflow first, then only the selected workflow and the references it routes to. Do not load every page-family, platform, and evaluation document pre-emptively. <!-- rule:fanui-route-progressive-disclosure -->

- **`shape`** — clarify the task, audience, evidence, states, constraints, and information architecture; produce a confirmed brief and stop before implementation.
- **`build`** — create a new surface or implement an approved brief. Classify the experience and archetype, choose the applicable pattern capsule, implement, render, and verify.
- **`review`** — assess an existing rendered experience and report evidence-backed findings. Do not modify it unless the user separately asks for fixes. <!-- rule:fanui-review-is-read-only -->
- **`audit`** — inspect measurable implementation quality such as accessibility, compatibility, responsive behavior, theming, performance, and delivery integrity. Do not convert an audit request into implementation. <!-- rule:fanui-audit-is-read-only -->
- **`adapt`** — preserve the primary task while transforming an existing surface across Web viewports or native Desktop window states.
- **`polish`** — refine an already-correct concept and task flow; do not conceal a redesign inside a polish request. <!-- rule:fanui-polish-preserves-concept -->

Read `docs/workflows/context.md` for all six workflows. Then read only the selected workflow material: `docs/workflows/redesign.md` for a redesign or replacement visual world, `docs/workflows/review-protocol.md` for review/audit/final acceptance, and `docs/workflows/pattern-capsules.md` when selecting the smallest applicable page or product pattern. <!-- rule:fanui-route-workflow-references -->

Before proceeding, resolve and retain this compact context record:

```yaml
workflow_context:
  workflow: shape | build | review | audit | adapt | polish
  experience: website | documentation | editorial | pricing | web_app | desktop_app
  primary_task: ...
  brief_read: true | false
  change_mode: greenfield | preserve | overhaul
  expression_profile: quiet | balanced | expressive
  evidence_available: [...]
  unresolved_decisions: [...]
```

`brief_read` means the agent inspected the user's brief and the host project's durable product/design context when present; it does not require FanUI-specific files. Do not invent missing product truth. <!-- rule:fanui-context-brief-read -->

`change_mode` controls authority: `greenfield` creates a surface with no incumbent surface contract, `preserve` keeps the incumbent product and design contracts while allowing compatible extensions, and `overhaul` may replace structure or visual direction while preserving protected product truth, content, function, platform conventions, and explicit constraints. Only explicit authority or a confirmed replacement brief selects `overhaul`; ambiguous work on an existing product defaults to `preserve`. <!-- rule:fanui-context-change-mode -->

`expression_profile` calibrates visual amplitude, not product quality: `quiet` for sustained operational/reading focus, `balanced` for mixed information and narrative, and `expressive` for surfaces whose job is persuasion or experience. The user brief and incumbent system override category defaults. <!-- rule:fanui-context-expression-profile -->

For `review` and `audit`, keep findings and implementation separate. For `build`, `adapt`, and `polish`, finish with a fresh evidence-based acceptance pass rather than relying on the author's intent. <!-- rule:fanui-separate-author-review -->

Workflow scope controls the steps below: `shape` performs classification, context, hierarchy, and pattern selection, then stops with the brief; `review` and `audit` inspect only the applicable rules and must not enter implementation steps; `build`, `adapt`, and `polish` use the applicable implementation and acceptance steps. “Substantial work” requirements apply only inside the selected workflow's scope, not as permission to load every reference. <!-- rule:fanui-workflow-step-boundaries -->

### Layout implementation rule

Choose the simplest layout model that represents the actual content relationship.

- Use Flexbox for one-dimensional flow: navigation, toolbars, action rows, linear split panes, and layouts whose primary relationship follows one axis.
- Use CSS Grid for genuine two-dimensional composition: aligned rows and columns, repeated matrices, or deliberate row/column spanning.
- Use semantic table markup or the host Table component for tabular data; do not replace table semantics with Flex or Grid.
- Use Absolute / Fixed only for overlays, badges, and intentional layering, never for primary page geometry.
- Responsive transformations may change Flex wrapping/direction or Grid tracks. Preserve DOM reading order and react to content pressure rather than device labels alone.
- Do not use Grid for a simple row, or add nested Flex containers merely to imitate a straightforward two-dimensional Grid.
- Preserve a correct host-project layout model; do not refactor it only to express a preference.

For React + Tailwind CSS implementation, also read:

- `docs/implementation/react-tailwind.md`
- `docs/implementation/theming.md`
- `docs/implementation/accessibility.md`
- `docs/implementation/testing.md`

Use the host design system first. When no validated product theme exists, use the installable defaults in `tokens/index.css` and the Tailwind v4 mapping in `tokens/tailwind.css`; treat them as an overrideable fallback, not a universal product brand.

When the user asks to use Apifox as a reference or to form reusable components, read `references/apifox-page-study.md` and `docs/components/candidates.md`. Reuse `packages/react/` candidates only when their contract fits; do not force page-specific structure into a generic component.

### 1. Classify the experience

Choose one or more:

- `website`
- `documentation`
- `editorial`
- `pricing`
- `web_app`
- `desktop_app`

Do not infer `web_app` from the presence of panels, sidebars, or web technology. Classify the delivery surface and runtime contract first.
<!-- rule:fanui-route-experience-family -->

### 2. Classify application archetype

For every substantial Web App, read `docs/web-app/archetypes.md` and choose:

- `management_console`
- `professional_workspace`
- `data_application`
- `ai_workspace`

Optional secondary archetype is allowed.

Hard rule:

> Do not default task-oriented products to management-console IA.

Identify the core value loop before navigation.

For every Desktop App, read `docs/desktop-app/classification.md` and choose:

- `focused_utility`
- `document_workspace`
- `professional_workspace`
- `monitoring_control`
- `menu_bar_companion`

Also identify the native platform target and application framework. A Desktop App may reuse a task archetype from Web App guidance, but it must retain a desktop runtime contract: window lifecycle, native commands, keyboard and pointer input, system appearance, accessibility, and platform conventions.
<!-- rule:fanui-route-desktop-runtime -->

### 3. Identify task and context

Before styling, state internally:

```yaml
fanui:
  experience: ...
  primary_archetype: ...
  secondary_archetype: ...
  platform: web | macos | windows | linux | cross_platform_desktop
  framework: ...
  core_value_loop: ...
  page_archetype: ...
  primary_user: ...
  primary_task: ...
  primary_action: ...
  current_context: ...
  key_information: ...
  brief_read: true | false
  change_mode: greenfield | preserve | overhaul
  expression_profile: quiet | balanced | expressive
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

Desktop App default hierarchy:

```text
current window/document context
→ current state
→ primary task
→ working content
→ contextual commands
→ secondary status
```

Every substantial surface needs one primary visual/task anchor.

### 5. Load the relevant pattern

Start with the routing capsule in `docs/workflows/pattern-capsules.md`, then load the smallest applicable detailed pattern below. A capsule selects references; it does not replace their requirements. <!-- rule:fanui-pattern-capsule-first -->

Website:

- `docs/website/homepage.md`
- `docs/website/hero.md`
- `docs/website/navigation.md`
- `docs/website/public-marketplace.md` for customer portals, service directories, public plazas, and transactional listing/detail flows
- `docs/website/product-showcase.md`
- `docs/website/pricing.md`
- `docs/website/documentation.md`
- `docs/website/editorial-blog.md`
- `docs/website/editorial-visuals.md`
- `docs/website/mobile.md`

For expressive Homepage, Editorial, or brand-led Pricing work, also read `docs/website/expression-profiles.md`. Do not load it for quiet Product UI merely because the product has a brand.

Web App:

- `docs/web-app/archetypes.md`
- `docs/web-app/app-shell.md`
- `docs/web-app/workspace.md`
- `docs/web-app/viewport-ownership.md`
- `docs/web-app/mobile-workspace.md`
- `docs/web-app/authentication.md` for sign-in, registration, recovery, one-time-code, or session-gated entry

Desktop App:

- `docs/desktop-app/classification.md`
- `docs/desktop-app/native-shell.md`
- `docs/desktop-app/acceptance.md`

Do not reuse Homepage composition for Docs/Blog/Product UI. Do not reuse Management Console shells for AI/Professional Workspaces without explicit justification.
Do not treat a Desktop App as a Web App inside a decorative native frame. Preserve the target platform's window, command, focus, input, and lifecycle behavior.

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

For every Web implementation also read `docs/foundations/web-delivery.md`. For Web responsive work also read `docs/foundations/responsive.md`. For Desktop App work, load the Desktop App references instead of Web mobile guidance unless the product also targets mobile.

Core formulations:

> Dense, but calm.

> Structured, not sterile.

> Product stays calm. Marketing may be expressive.

> Large canvas requires proportionally confident content scale.

> Shared rhythm, different operating density.

> Large evidence must earn its area through fidelity.

> Workspace owns the viewport.

> Icon meaning comes before icon decoration.

> Responsive preserves task hierarchy, not desktop geometry.

> Desktop adapts to window state without losing native behavior.

### 7. Calibrate the experience

For Web, use the reference wide desktop viewport of ~1440px. For Desktop App, calibrate against usable content size inside the actual native window, excluding system window chrome owned by the platform.

Use `docs/foundations/experience-metrics.md`; do not reuse one max-width, H1, `py-*`, button height, or radius across all surface families.

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

### 8. Define adaptive transformations

For Web experiences, read `docs/foundations/responsive.md`. Responsive work is required even when the request only names a wide browser layout unless the target explicitly excludes narrow screens.

Validate at least these reference classes:

```text
1440 × 1000   wide desktop
1024 × 900    compact desktop / tablet landscape
768 × 1024    tablet portrait
390 × 844     mobile
375 × 812     small mobile
```
<!-- rule:fanui-web-multiviewport-obligation -->

For every important region choose explicit transformations:

```text
preserve | scale | stack | reorder | collapse | scroll | crop | replace | sheet | drawer
```

Internal responsive reasoning should include:

```yaml
responsive:
  viewport_family: mobile
  primary_task: ...
  preserve: [...]
  stack: [...]
  collapse: [...]
  replace: [...]
  local_scroll: [...]
  hidden_with_replacement:
    sidebar: drawer | selector | none
    inspector: sheet | section | none
  product_evidence:
    strategy: crop | stack | replace
    readable_without_zoom: true
  touch_targets: checked
```

Hard rules:

- do not merely shrink Desktop product evidence below readable scale;
- do not keep cramped split layouts on Mobile;
- hiding an essential sidebar/inspector/TOC requires a replacement access path;
- document-level horizontal scrolling is a failure;
- mobile primary controls should normally provide 40–44px touch targets;
- Desktop workspace geometry may transform sequentially on Mobile when that preserves the task better.

For Website/Docs/Editorial/Pricing also read `docs/website/mobile.md`.
For Professional/AI Workspace also read `docs/web-app/mobile-workspace.md`.

For `desktop_app`, read `docs/desktop-app/native-shell.md` and `docs/desktop-app/acceptance.md`. Validate compact, normal, and large windows plus maximized/full-screen behavior where supported. Do not require phone breakpoints unless the product also targets mobile. Preserve commands, focus order, selection, pane access, and task continuity as the window changes size.
<!-- rule:fanui-desktop-window-obligation -->

### 9. Apply optical layout

Read `docs/foundations/optical-layout.md`.

For sidebars/inspectors, reason about the **remaining canvas**.

Documentation content should not simply hug the sidebar while leaving hundreds of unused pixels on the opposite side.

Split Marketing sections should allocate width according to content/evidence weight, not default to 50/50.

After a responsive transformation, recompute the remaining canvas; do not preserve Desktop empty fields.

### 10. Set visual amplitude and brand expression

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

### 11. Choose components semantically

Use tables for comparison, trees for hierarchy, tabs for alternate views of one object, inspectors for persistent secondary detail, lists for scan tasks, overlays for temporary secondary work.

Do not create a card because content needs a box.

Apply `docs/foundations/surface-hierarchy.md`: radius/elevation should become tighter and quieter toward operational UI.

### 12. Apply iconography precision

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

### 13. Enforce Product Evidence Fidelity

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

Avoid a large frame containing a few tiny nodes. Use `docs/foundations/fidelity-density.md`.

On Mobile, Product Evidence Fidelity is re-evaluated after transformation; Desktop fidelity does not automatically carry over.

### 14. Enforce effective density and readability

Ask whether a large surface would lose nothing if reduced 30–40%. If yes, either reduce the surface or increase its meaningful content.

Do not use tiny typography to fake professional density. Respect the Minimum Readability Floor in `docs/foundations/fidelity-density.md`.

### 15. Apply semantic product color

Read `docs/foundations/semantic-product-color.md`.

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

### 16. Enforce workspace ownership by delivery family

For a Professional / AI `web_app`, read `docs/web-app/viewport-ownership.md` and `docs/web-app/mobile-workspace.md`.

Its wide-browser core workspace should normally use remaining viewport height and internal pane scrolling. A 450–550px workspace region followed by a large blank page area is a failure unless the workflow is intentionally document-shaped.

On Mobile, Web App viewport ownership may become a deliberate sequential task flow. Persistent browser panes may transform into compact context, tabs, drawers, sheets, or sequential review sections.

For a Professional Workspace Desktop App, use `docs/desktop-app/native-shell.md` and `docs/desktop-app/acceptance.md` instead. Validate native compact/normal/large window ownership plus maximized, full-screen, restoration, focus, and replacement-command behavior where supported; do not apply Web mobile-workspace rules unless the product also has a mobile target.

### 17. Use an Editorial Visual System

For Blog/Editorial read `docs/website/editorial-visuals.md`.

Do not use pastel gradient rectangles with empty white panels as default article art.

Prefer idea-bearing visuals derived from workflow, traces, approvals, artifacts, code, data, topology, or product concepts.

A large article Hero image is optional; it must earn its area.

### 18. Check anti-patterns

For every experience, read:

- `docs/anti-patterns/core.md`

For `desktop_app`, also read `docs/anti-patterns/desktop-app.md`. Read `docs/anti-patterns/v032.md` when relevant to product evidence, workspace fidelity, semantic color, or surface hierarchy.

For Web work, read `docs/anti-patterns/v032.md`. For Web responsive/mobile work, also read:

- `docs/anti-patterns/v033.md`
- `docs/anti-patterns/v034.md`

Responsive hard anti-patterns include:

- Shrunk Desktop Evidence;
- Hidden Without Replacement;
- Cramped Split;
- Desktop Toolbar Wrap;
- Runtime Takeover;
- Whole-page Horizontal Scroll;
- Tiny Touch UI;
- Mobile Empty Canvas.

Iconography precision also rejects:

- Icon Confetti;
- Approximate Icon Semantics;
- Glyph Drift;
- Icon-box Override;
- Text-block Centering for icon + title + description rows.

### 19. Check Chinese / English behavior

For Web experiences and any product with a mobile target, validate Chinese title wrapping, mixed technical labels, navigation width, pricing units, tables, product rows, icon/text rows, minimum readability, and responsive transformation at Mobile widths.

For Desktop App, use `docs/desktop-app/acceptance.md` and validate localized menu items, toolbar labels, dialog copy, shortcut discoverability, truncation at the supported minimum window, and IME/text-entry behavior where text input is material.

### 20. Evaluate before completion

Use:

- `eval/checklist.md` for every substantial task;
- `eval/rubric.md` for new/redesigned major surfaces.

Score below 85 normally triggers revision.

Hard failures cannot be rescued by average score:
<!-- rule:fanui-hard-failures-override-score -->

- the layout model conflicts with the content dimension, breaks reading order, or creates avoidable wrapper/track complexity;
- a Web implementation uses unsupported platform features without a fallback for its declared browser target;
- a public indexable page hides critical content from rendered HTML or ships conflicting title, canonical, robots, status, or structured-data signals;
- GEO relies on hidden text, fabricated citations/schema, or crawler access that conflicts with the product owner's privacy/legal policy;
- React/Tailwind implementation bypasses semantic tokens with repeated palette literals, constructs class names dynamically, or introduces a second UI library without a product need;
- Light/Dark support loses required contrast, focus visibility, semantic state distinctions, or causes server/client theme mismatch;
- a primary Web task cannot be completed by keyboard or lacks essential accessible name/role/state behavior;
- wrong Web App archetype;
- tiny/unreadable core product evidence;
- Hero scale outside calibration without reason;
- cross-surface density collapse;
- fake/sparse core product evidence;
- Desktop Professional/AI Workspace not owning its viewport;
- primary editorial visual that is obviously a placeholder;
- documentation with severe optical imbalance;
- operational typography below readability floor across repeated rows;
- repeated icon/text patterns with visibly broken centering or semantically misleading glyphs;
- Desktop evidence merely shrunk into unreadable Mobile evidence;
- essential mobile navigation/inspector context removed without a replacement path;
- whole-page horizontal overflow at a reference Mobile viewport;
- Desktop App is a web-dashboard shell that ignores native window, command, focus, or input behavior;
- Desktop App loses the primary task, selected object, or required command access at a supported compact window size;
- maximized/full-screen or restored-window behavior produces unusable blank regions, clipped panes, or unreachable controls.

Use the disposition contract from `docs/workflows/review-protocol.md`: invalid or missing required render evidence is `recapture`; a wrong archetype, replacement-level concept failure, or system-wide contradiction is `rebuild`; bounded material failures are `fix`; only complete evidence with no hard failure is `ship`. Never report `ship` while a hard failure remains, regardless of numeric score. <!-- rule:fanui-hard-failure-disposition -->

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
  mobile:
    navigator: compact_context_or_drawer
    graph: vertical_reflow
    inspector: review_section_or_sheet
    runtime: compact_pane
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
  mobile:
    hero_display: 40
    split_sections: stack
    product_evidence: crop_or_replace
  optical_balance: checked
  section_rhythm: varied
  iconography:
    semantic_fit: checked
    peer_geometry: checked
    optical_alignment: checked
```

### Desktop App reasoning example

```yaml
fanui:
  experience: desktop_app
  primary_archetype: monitoring_control
  platform: macos
  framework: native
  core_value_loop: inspect_status_identify_issue_take_action
  primary_task: supervise_current_system_state
  window:
    minimum_supported: checked
    compact: 1280x720
    normal: 1440x900
    large: 1728x1117
    maximized: checked
    full_screen: checked_if_supported
    restoration: checked
  shell:
    native_chrome: preserved
    toolbar_commands: task_scoped
    selection_context: visible
  input:
    keyboard_navigation: checked
    pointer_states: checked
    shortcuts_and_menus: checked
  accessibility:
    focus_order: checked
    semantic_labels: checked
    reduced_motion: checked
  rendered_acceptance: complete
```

These YAML blocks are reasoning aids, not required user-visible output.

## Reference rule

Apifox remains the primary reference and Pixso secondary. Never clone their exact assets/layouts. FanUI extracts quality characteristics: mature scale, credible product evidence, readable density, optical balance, semantic color discipline, responsive transformation, component precision, and cross-surface coherence.
