# FanUI Web App — Archetype Classification

## Purpose

`web_app` is not a single layout type.

Before choosing a shell, dashboard, sidebar, table, tree, or inspector, classify what kind of work the product enables.

This is mandatory for FanUI.

## Core rule

> **Do not default task-oriented products to management-console information architecture.**

Names such as `Projects`, `Agents`, `Runs`, `Artifacts`, `Users`, or `Models` do not automatically imply that each should become a top-level resource-management page.

First ask what users spend most of their time **doing**.

---

# Archetype A — Management Console

## User intent

Monitor, configure, administer, audit, provision, or govern resources.

Typical products/surfaces:

- cloud consoles;
- billing/admin;
- organization settings;
- access management;
- infrastructure resource management;
- service configuration.

## Typical structure

```text
Global Navigation
→ Resource Collection
→ Resource List/Table
→ Resource Detail
→ Configuration / Activity
```

## Good patterns

- resource tables;
- filters;
- status summaries;
- bulk actions;
- detail pages;
- audit/activity views;
- settings/forms.

## Warning

Do not use this archetype merely because the domain has nouns that can be listed.

---

# Archetype B — Professional Workspace

## User intent

Create, edit, inspect, debug, compose, test, review, or operate on a work object for an extended session.

Typical products:

- API tools;
- code/dev tools;
- design tools;
- workflow builders;
- Git/review tools;
- automation editors;
- data transformation tools.

## Typical structure

```text
Global / Workspace Context
→ Project / Object Tree
→ Tabs or Modes
→ Main Workspace
→ Toolbar
→ Optional Inspector / Result Panel
```

## Good patterns

- hierarchical tree;
- persistent workspace;
- tabs;
- editor/canvas;
- split panes;
- inspector;
- run/debug console;
- inline configuration;
- artifact/result preview.

## Core principle

> The main screen is where work happens, not where resources are merely listed.

A list may be an entry point, but it should not dominate the product if users primarily create or operate inside a workspace.

---

# Archetype C — Data Application

## User intent

Browse, compare, filter, segment, transform, or act on a collection of records.

Typical products:

- CRM;
- databases;
- analytics operations;
- asset/content systems;
- operational datasets;
- spreadsheet-like products.

## Typical structure

```text
Dataset / Object Context
→ View Selector
→ Filter / Search / Sort
→ Table / Board / Calendar / Grid
→ Record Detail
```

## Good patterns

- tables;
- saved views;
- filters;
- grouping;
- sort;
- record inspector;
- bulk actions;
- alternate views.

## Core principle

The collection/view is the workspace. Do not hide it behind a dashboard unless the dashboard supports a real decision.

---

# Archetype D — AI Workspace

## User intent

Delegate, supervise, inspect, approve, iterate, and act on AI-generated work.

Typical products:

- coding agents;
- research agents;
- AI workflow systems;
- AI content/productivity tools;
- agent orchestration;
- review/approval tools.

## Typical structure

AI Workspace often combines Professional Workspace patterns with long-running execution state:

```text
Project / Task Context
→ User Intent / Goal
→ Plan / Workflow / Agent
→ Execution State
→ Tool/Step Detail
→ Artifact / Result
→ Approval / Intervention
→ History / Trace
```

## Good patterns

- task/goal header;
- run state;
- structured steps;
- timeline;
- artifact tabs;
- result preview;
- inspector;
- approvals;
- tool execution detail;
- persistent project context.

## Core principle

> AI work should be organized around task progress and resulting artifacts, not around a collection of generic chat bubbles or isolated admin resources.

---

# Hybrid products

Many products are hybrids.

Examples:

```text
Professional Workspace + Management Console
AI Workspace + Professional Workspace
Data Application + Management Console
AI Workspace + Data Application
```

When hybrid, identify:

1. **Primary archetype** — where users spend the most important working time.
2. **Secondary archetype** — supporting/admin surfaces.

The primary archetype determines the default home and shell priority.

Example:

```yaml
web_app:
  primary_archetype: professional_workspace
  secondary_archetype: management_console
```

This should normally produce a workspace-first product with separate admin/configuration surfaces, not a console-first product.

---

# Decision tree

Ask in this order.

## 1. Is the core value creating/editing/operating a work object?

Yes → **Professional Workspace** likely primary.

Examples: API, workflow, code, design, automation, schema.

## 2. Is the core value supervising AI work and consuming artifacts/results?

Yes → **AI Workspace** likely primary.

## 3. Is the core value manipulating a collection of records/views?

Yes → **Data Application** likely primary.

## 4. Is the core value provisioning/configuring/monitoring resources?

Yes → **Management Console** likely primary.

If multiple answers are yes, choose the activity that represents the user's core value loop.

---

# Noun trap

AI frequently sees domain nouns and generates one sidebar destination per noun:

```text
Overview
Projects
Agents
Runs
Artifacts
Models
Users
Settings
```

This is the **noun trap**.

It is acceptable only when those nouns truly represent independent administrative collections.

For task-oriented products, reorganize nouns around context and workflow instead.

Example:

Instead of:

```text
Projects
Agents
Runs
Artifacts
```

prefer:

```text
Project: Atlas
├── Workflows
├── Agents
├── Runs
└── Artifacts

Main Workspace
├── Editor
├── Run
└── Result
```

when project work is the actual core loop.

---

# Dashboard rule

A dashboard is optional, not mandatory.

Use a dashboard/home only when it answers meaningful cross-context questions such as:

- What needs attention now?
- What changed?
- Where should I continue?
- What is running/failing?
- Which projects require action?

Do not use a dashboard as the default home just because the app has multiple modules.

A professional product may open directly into the last/current workspace.

---

# Navigation ownership

Different navigation regions should own different hierarchy levels.

Example for a Professional/AI Workspace:

```text
Global sidebar     → Home / Projects / Search
Project navigator  → Workflows / Agents / Artifacts
Tree               → concrete objects
Tabs               → modes of current object
Inspector          → properties/context
```

Do not flatten all five levels into one sidebar.

---

# AI classification contract

Before designing any substantial Web App, the AI must internally produce:

```yaml
fanui:
  experience: web_app
  primary_archetype: management_console | professional_workspace | data_application | ai_workspace
  secondary_archetype: ... | none
  core_value_loop: ...
  default_home: dashboard | workspace | collection | last_context
  persistent_context:
    organization: true | false
    project: true | false
    current_object: true | false
  workspace_required: true | false
  tree_required: true | false
  inspector_required: true | false
```

If `primary_archetype` is not explicitly classified, implementation should not begin.

---

# Hard fail

For FanUI evaluation, treat this as a major failure:

> A product whose core value is creation/editing/execution is designed primarily as a generic management console without strong task/workspace justification.