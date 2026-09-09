# FanUI Mobile Workspace

Professional / AI Workspace mobile design is a task transformation, not a scaled Desktop shell.

## Desktop ownership

Desktop commonly uses:

```text
Navigator | Main Workspace | Inspector
                 ↓
             Runtime
```

Mobile should preserve the current task while making secondary regions temporary or sequential.

## Recommended mobile structure

```text
App Top Bar
Project / Workflow Context
Primary View Tabs

Main Working View

Runtime Summary / Pane

Inspector / Approval Detail
```

Production implementations may move Navigator and Inspector into drawers/sheets. Static references may render the same information sequentially, but the access path must remain obvious.

## Transformation map

```yaml
navigator:
  desktop: persistent_left_pane
  mobile: drawer_or_compact_context

workspace_tabs:
  desktop: inline_tabs
  mobile: compact_or_horizontal_scroll

canvas:
  desktop: horizontal_graph
  mobile: vertical_reflow

inspector:
  desktop: persistent_right_pane
  mobile: sheet_or_review_section

runtime:
  desktop: persistent_bottom_pane
  mobile: compact_pane_or_dedicated_tab

artifacts:
  desktop: runtime_side_pane
  mobile: stacked_below_trace_or_artifact_tab
```

## Workflow graph

A horizontal graph should reflow vertically on mobile. Nodes remain readable at full available width. Connections change direction rather than causing horizontal document overflow.

Do not reduce four 180px nodes into four 80px nodes.

## Context preservation

Mobile must keep these visible or one tap away:

- project;
- workflow;
- active run/status;
- environment when materially relevant;
- selected object;
- primary action.

## Inspector and approval

If Inspector disappears from the right edge, replace it with:

- Review tab;
- bottom sheet;
- drawer;
- sequential approval section.

Approval authority must not become inaccessible merely because width is small.

## Runtime

Mobile runtime should avoid monopolizing the page. Prefer:

- capped-height trace with internal scrolling;
- expand/collapse affordance;
- dedicated Run view;
- compact latest-state summary.

Artifacts may stack below the trace.

## Touch and density

```text
primary control height      44px
compact app control         40px
mobile app gutter           10–16px
node padding                14–16px
primary product text        13–15px
metadata                    11.5–13px
```

## Hard failures

- Navigator is hidden with no project/workflow replacement context.
- Inspector is hidden with no way to review selected/approval detail.
- Graph remains horizontal and forces document-level scrolling.
- Runtime consumes most of the mobile page by accident.
- Desktop toolbar controls wrap chaotically into multiple lines.
- Primary action becomes too small or visually detached from current context.
