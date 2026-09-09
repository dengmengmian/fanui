# FanUI Product Fidelity & Effective Density

## Purpose

FanUI interfaces must not merely resemble finished software. Product evidence and working surfaces must contain enough realistic structure, state, data, and interaction density to feel operational.

This document defines two related ideas:

- **Product Evidence Fidelity** — whether a product visual reads as a real product state rather than a diagram or wireframe.
- **Effective Content Density** — whether the visual information inside a container is proportionate to the amount of canvas it occupies.

## Product Evidence Fidelity

A core or Hero product visual should demonstrate most of these dimensions when relevant:

1. **Context fidelity** — current project/object/task is visible.
2. **Navigation fidelity** — tree, tabs, toolbar, breadcrumb, switcher, or another believable navigation structure exists.
3. **State fidelity** — selected, running, completed, waiting, failed, disabled, or other task states are explicit.
4. **Data fidelity** — labels, timestamps, counts, metadata, code, records, or meaningful values are present.
5. **Action fidelity** — realistic primary/secondary actions appear where a user would expect them.
6. **Semantic fidelity** — agents, tools, approvals, artifacts, methods, or status classes are visually distinguishable by role.
7. **Depth fidelity** — primary workspace, navigation, inspector, console, or detail surfaces form a believable hierarchy.

A product screenshot is not high fidelity merely because it contains many boxes.

## Evidence levels

### Supporting evidence

May simplify detail. It should still communicate one real task or state.

### Core evidence

Must be readable without zoom and should include enough product structure that a user can infer how the product works.

### Hero evidence

Must look like a credible production screen. Avoid generic labels such as `Item 1`, empty tables, placeholder charts, or decorative browser frames with little working content.

## Effective Content Density

Large surfaces require proportionate information content.

A common failure is:

```text
large panel
└── three tiny nodes connected by long lines
```

The panel is technically occupied, but the **effective visual area** is low.

For major Marketing evidence or Product workspaces, ask:

- Does the content use the available width and height intentionally?
- Is the main object large enough to read?
- Are relationships visible without excessive empty corridors?
- Would reducing the container by 30–40% improve the composition with no information loss? If yes, either reduce the container or increase the fidelity of the content.

As a heuristic, a major evidence surface should normally have meaningful visual content across at least **55–70% of its usable area**. This is not a pixel-occupancy formula; it is an optical check against sparse diagrams inside oversized frames.

## Minimum readability floor

At approximately 1440px desktop, avoid falling below these ranges without a strong reason:

```text
Marketing supporting copy       14–16px
Docs navigation                 13–14px
Docs descriptions               13–14px
Docs article body               16–17px
Product tree/list row text      12.5–14px
Product metadata                11.5–13px
Product primary row labels      13–15px
Inspector field text            12.5–14px
Table body                      12.5–14px
Editorial metadata              12–13px
Editorial article body          16.5–18px
```

Do not use 11px text as the normal information layer just because a product is dense.

## Density by surface

### Marketing

Use fewer, larger pieces of information. Evidence should still contain realistic product density.

### Documentation

Navigation is compact; reading content is calm. Avoid tiny left-navigation typography paired with huge unused canvas.

### Editorial

Reading density is lower. Visuals must earn their area through real editorial content.

### Pricing

Comparison density is relatively high; plan cards should not become oversized billboards.

### Professional / AI Workspace

Density is medium-compact and continuous. The workspace should feel occupied by work, not by blank canvas around a small demo.

## Hard rules

> A large product visual with low-fidelity content is still weak product evidence.

> Do not use whitespace to hide missing product structure.

> Do not shrink operational typography below the readability floor to create fake density.

> Prefer realistic hierarchy, state, and data over additional decoration.