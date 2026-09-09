# FanUI Web App — Workspace

## Intent

The workspace is the primary task surface. It should maximize task continuity, scanability, and control without becoming visually loud.

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

## Tabs

Use tabs for alternate modes/views of the same contextual object.

Good examples:

- documentation / debug;
- request / response;
- overview / activity / settings;
- editor / preview;
- conversation / changes.

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

- user intent/input;
- agent progress;
- tool/action state;
- generated artifacts;
- approvals;
- errors/blockers;
- final result.

Do not render every event as an undifferentiated chat bubble.

## AI decision model

```yaml
workspace:
  primary_task: ...
  object: ...
  modes: ...
  comparison_needed: true | false
  persistent_context_needed: true | false
  data_density: low | medium | high
  long_running_state: true | false
```

The workspace should be chosen from task semantics, not from a generic dashboard template.