# FanUI Web App — Workspace

## Intent

The workspace is the primary task surface. It should maximize task continuity, scanability, and control without becoming visually loud.

For `professional_workspace` and `ai_workspace` archetypes, the workspace is usually the product center of gravity.

Read first:

`docs/web-app/archetypes.md`

## Core principle

> **The main screen is where work happens, not where resources are merely listed.**

If users primarily create, edit, run, debug, review, compose, or supervise work, do not make generic resource-list pages the dominant product experience.

A list can be an entry point. It should not replace the core workspace.

## Workspace priority

Inside a Web App, visual priority generally follows:

```text
Current object / task
→ Current state
→ Primary action
→ Working content
→ Secondary controls
→ Metadata
```

The current work object should be visually stronger than shell chrome.

## Workspace modes

A workspace may be organized as:

- editor/canvas;
- split view;
- table/view;
- task/run view;
- artifact/result view;
- detail editor;
- structured workflow;
- timeline + result;
- conversation + artifact, when AI interaction requires both.

Choose from task semantics, not from a generic dashboard template.

## Tabs

Use tabs for alternate modes/views of the same contextual object.

Good examples:

- documentation / debug;
- request / response;
- workflow / runs / artifacts;
- editor / preview;
- conversation / changes;
- task / activity / result.

Do not use tabs for unrelated global navigation.

### Tab rules

- selected state must remain clear in dense layouts;
- avoid oversized tabs;
- counts/status may appear when useful;
- preserve state across switches when task continuity matters;
- allow horizontal overflow intentionally when many dynamic tabs exist.

## Toolbar

Toolbars group repeated task actions.

Use:

- compact controls;
- clear primary/secondary action hierarchy;
- separators only for meaningful action groups;
- icon-only buttons only for highly recognizable actions;
- tooltips for ambiguous icons;
- contextual actions near the object they affect.

Avoid turning toolbars into a row of equally emphasized buttons.

## Project/object navigator

When a project contains workflows, APIs, agents, files, artifacts, schemas, or tasks, consider a local navigator/tree instead of promoting each object type into global navigation.

Example:

```text
Global
├── Home
├── Projects
└── Search

Project: Atlas
├── Workflows
├── Agents
├── Runs
└── Artifacts

Workspace
├── Current workflow
├── Run state
└── Result
```

This preserves context and avoids management-console drift.

## Forms

Professional forms should be dense enough for repeated use while preserving strong field relationships.

Prioritize:

- clear labels;
- concise help text;
- visible validation;
- consistent alignment;
- grouping by task/meaning;
- predictable save/submit state.

Do not put every form group inside its own card.

## Tables and dense lists

Use tables when comparison across columns matters.

Use lists when object identity and scanning matter more than cross-column comparison.

Table/list rules:

- primary object label gets highest text priority;
- metadata is weaker;
- status uses semantic but restrained treatment;
- hover may reveal secondary actions;
- selection is explicit;
- batch actions appear only when selection exists;
- row density should support professional scanning.

## Detail panels

A detail view may be:

- full workspace replacement;
- split view;
- drawer;
- inspector;
- expandable row.

Choose based on whether the user must retain surrounding context.

If context comparison matters, prefer split/inspector. If deep editing dominates, prefer full workspace.

## Empty states

Empty states should explain the next useful action.

Preferred structure:

```text
What is empty
Why it matters (optional)
Primary next action
Secondary learning/import path (optional)
```

Avoid decorative illustrations without guidance.

## Loading

Loading states should preserve layout stability.

Use:

- local skeletons for predictable content;
- progress for known-duration or multi-step tasks;
- status text for agent/automation work;
- optimistic updates only where failure handling is clear.

## Error

Errors should answer:

- what failed;
- what was preserved;
- whether retry is safe;
- what the user can do next;
- where to inspect details when technical information matters.

## AI workspace extension

For AI/agent products, distinguish:

- user intent/goal;
- plan/workflow;
- agent progress;
- tool/action state;
- generated artifacts;
- approvals;
- errors/blockers;
- final result.

Do not render every event as an undifferentiated chat bubble.

Do not split `Agents`, `Runs`, and `Artifacts` into separate top-level management pages by default if their main value is inside project/task execution.

Prefer a project/task context that keeps execution and outputs connected.

## AI workspace composition

A strong AI workspace may use:

```text
Project / Task Context
├── Goal / Workflow
├── Current Run
├── Structured Steps
├── Tool / Agent state
├── Approval / Intervention
└── Artifact / Result
```

Possible physical layout:

```text
Global Nav | Project Navigator | Main Task/Workflow | Inspector/Result
```

Not every product needs all four regions.

## Workspace-first test

For Professional/AI Workspace products, ask:

- Can the user perform the core value loop without leaving the workspace repeatedly?
- Does the current project/object remain visible?
- Are run/result/artifact states connected to the work that produced them?
- Is navigation organized by context rather than a flat noun list?
- Does the main surface contain real work, not mostly overview statistics?

If several answers are no, the product may have drifted into a management console.

## AI decision model

```yaml
workspace:
  primary_archetype: professional_workspace | ai_workspace | data_application | management_console
  core_value_loop: ...
  primary_task: ...
  object: ...
  modes: ...
  comparison_needed: true | false
  persistent_context_needed: true | false
  project_navigator_needed: true | false
  inspector_needed: true | false
  data_density: low | medium | high
  long_running_state: true | false
```

The workspace should be chosen from task semantics and archetype, not from a generic dashboard template.