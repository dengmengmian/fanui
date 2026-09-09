# FanUI Web App — Application Shell

## Intent

The application shell maintains orientation across complex products. It is the persistent answer to:

- Where am I?
- What context am I in?
- What can I switch?
- What is global vs local?

## Shell is a hierarchy model

Do not choose Sidebar / Topbar / Rail based on fashion. Choose them based on information architecture.

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

These may map to different physical arrangements.

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
- project/workspace selectors should be visually distinct from module navigation.

## Tree / object navigation

A tree is appropriate when the user operates on hierarchical objects such as APIs, files, folders, tests, schemas, projects, or assets.

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

## Responsive behavior

For narrow screens:

- collapse persistent secondary regions before hiding primary context;
- preserve the current task and object identity;
- use drawers for navigation/inspector where appropriate;
- do not force desktop density into mobile widths.

## AI decision model

```yaml
experience: web_app
hierarchy_levels: ...
primary_switch_frequency: high | medium | low
needs_sidebar: true | false
needs_tree: true | false
needs_inspector: true | false
context_selector: org | workspace | project | none
workspace_mode_tabs: ...
```

The AI should map hierarchy to regions before styling the shell.