# FanUI Web App — Application Shell

## Intent

The application shell maintains orientation across complex products. It is the persistent answer to:

- Where am I?
- What context am I in?
- What can I switch?
- What is global vs local?
- Where does the actual work happen?

## Mandatory first step: classify the Web App

Before choosing Sidebar / Topbar / Rail / Tree / Inspector, read:

`docs/web-app/archetypes.md`

Classify the product as one primary archetype:

- `management_console`
- `professional_workspace`
- `data_application`
- `ai_workspace`

A secondary archetype may be added when necessary.

Do not design the shell before this classification exists.

## Core warning

> **Do not default task-oriented products to management-console information architecture.**

A domain containing nouns such as `Projects`, `Agents`, `Runs`, `Artifacts`, `Models`, or `Users` does not mean every noun should become an equal top-level sidebar destination.

If users primarily create, edit, execute, debug, review, or supervise work inside a project/object context, prefer a workspace-first shell.

## Shell is a hierarchy model

Do not choose Sidebar / Topbar / Rail based on fashion. Choose them based on information architecture and archetype.

A complex professional Web App commonly has levels such as:

```text
Organization / Team
→ Project / Workspace
→ Module
→ Object collection / tree
→ Current object
→ Current mode/tab
```

The UI should not flatten all levels into one sidebar.

## Shell patterns by archetype

### Management Console

Typical:

```text
Global Navigation
→ Resource Collection
→ Table/List
→ Resource Detail
```

Sidebar destinations may legitimately represent independent administrative resource types.

### Professional Workspace

Typical:

```text
Global Navigation
→ Project Context
→ Object Tree / Secondary Navigation
→ Main Workspace
→ Tabs / Toolbar
→ Optional Inspector / Result Panel
```

The workspace is the product center of gravity.

### Data Application

Typical:

```text
Dataset/Object Context
→ View Selector
→ Filter/Search
→ Table/Board/Grid
→ Record Detail / Inspector
```

The collection/view is the workspace.

### AI Workspace

Typical:

```text
Project/Task Context
→ Goal / Workflow / Agent
→ Execution State
→ Steps / Tools
→ Artifact / Result
→ Approval / Intervention
```

AI products should organize around task progress and resulting artifacts, not merely separate admin pages for Agents/Runs/Artifacts.

## Calibrated wide-desktop shell metrics

Reference viewport: approximately **1440px**.

Use `docs/foundations/experience-metrics.md` as the cross-surface authority.

Typical Professional / AI Workspace bands:

```text
Top/global bar: 48–56px
Primary/global sidebar: 200–240px
Project/secondary navigator: 232–300px
Inspector: 280–360px
Workspace header: 48–56px
Dense workspace padding: 16–24px
Normal workspace padding: 24–32px
Tree/nav row: 30–36px
Tabs: 36–42px
Toolbar: 36–42px
Compact control: 30–34px
Default control: 34–40px
Compact table row: 36–40px
Normal table row: 40–46px
```

### Shell calibration rule

The useful workspace should dominate the page. Avoid a narrow centered content column floating inside a large application canvas.

Do not apply Website container widths (`1080–1200px`) to the main operational workspace unless the task genuinely benefits from a constrained reading/form width.

## Common FanUI shell regions

```text
Global / Account Layer
Context Selector
Primary Navigation
Secondary Navigation or Tree
Workspace
Optional Inspector / Detail Panel
Transient Overlays
```

These may map to different physical arrangements depending on archetype.

## Sidebar

Use a persistent sidebar when:

- users frequently switch modules;
- information architecture is deeper than a simple top nav;
- working sessions are long;
- navigation should remain visible during tasks.

Sidebar rules:

- current location must be obvious;
- group labels should be weaker than destinations;
- icons should support scanning, not decorate;
- avoid excessive top-level destinations;
- project/workspace selectors should be visually distinct from module navigation;
- do not use the sidebar as a dumping ground for every domain noun.

## Tree / object navigation

A tree is appropriate when the user operates on hierarchical objects such as APIs, files, folders, tests, schemas, projects, workflows, assets, or artifacts.

Tree rules:

- keep row height compact;
- use indentation consistently;
- selected row must be unambiguous;
- secondary actions should be contextual;
- type/status icons may be semantic;
- preserve expansion state when useful;
- search/filter should be near the tree when scale demands it.

## Top bar

Use the top bar for genuinely global or context-level controls:

- global search/command;
- current project context;
- environment;
- branch/version;
- account/team;
- high-level create action;
- global notifications/help.

Do not duplicate the sidebar in the top bar.

## Workspace header

The workspace header should explain the current object/task, not repeat the site brand.

Typical contents:

- object title;
- compact status;
- context breadcrumbs where needed;
- primary local actions;
- mode tabs.

## Inspector / right panel

Use a right-side inspector when secondary detail should remain visible without replacing the primary workspace.

Good use:

- properties;
- metadata;
- configuration;
- selected object detail;
- activity/history;
- generated result detail.

Do not add an inspector merely to fill empty horizontal space.

## Dashboard/home

A dashboard is optional.

Use it only when it answers meaningful cross-context questions such as:

- What needs attention now?
- What changed?
- Where should I continue?
- What is running or failing?

Professional Workspace and AI Workspace products may open directly into the last/current workspace.

## Responsive behavior

For narrow screens:

- collapse persistent secondary regions before hiding primary context;
- preserve the current task and object identity;
- use drawers for navigation/inspector where appropriate;
- do not force desktop density into mobile widths.

## AI decision model

```yaml
fanui:
  experience: web_app
  primary_archetype: management_console | professional_workspace | data_application | ai_workspace
  secondary_archetype: ... | none
  core_value_loop: ...
  default_home: dashboard | workspace | collection | last_context
  hierarchy_levels: ...
  needs_sidebar: true | false
  needs_tree: true | false
  needs_inspector: true | false
  context_selector: org | workspace | project | none
  workspace_mode_tabs: ...
  metrics:
    top_bar: 48-56
    primary_sidebar: 200-240
    secondary_navigator: 232-300
    inspector: 280-360
    workspace_padding: 16-24
```

The AI should map archetype + hierarchy to regions before styling the shell.