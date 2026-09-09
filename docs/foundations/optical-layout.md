# FanUI Optical Layout

## Purpose

Mathematical alignment is not always visual alignment. FanUI uses **optical layout** to keep asymmetric shells, sidebars, inspectors, and long-form content visually balanced.

## Remaining-canvas principle

When a fixed sidebar occupies part of the viewport, center or align primary content inside the **remaining canvas**, not inside the full viewport and not mechanically against the sidebar edge.

Example:

```text
| 250 sidebar |              remaining canvas              |
               |        760–840 article / docs home       |
               |            optical center                |
```

Avoid:

```text
| sidebar | content starts +32px |                         huge empty right field |
```

unless the empty field is reserved for a meaningful TOC/Inspector.

## Documentation

### Docs Home

- left nav: typically 232–280px;
- main content: typically 760–920px depending on entry density;
- center the main block inside the remaining viewport;
- do not force an article TOC onto the Home page if it is not useful.

### Docs Article

Use a three-part optical model when needed:

```text
sidebar | article measure | local TOC
```

The article should remain visually central within the combined content region, even when the TOC is narrower.

## Split Marketing sections

A 50/50 grid is not the default.

Choose weight based on the dominant object:

```text
copy-light / evidence-heavy      38 / 62
balanced story                   45 / 55
visual-first                     58 / 42 (visual on left)
```

If a large visual contains little information, do not preserve its width only for symmetry.

## Pricing

Plan groups should align around a shared comparison axis. The recommended plan may receive slightly more visual weight, but should not distort the grid.

## Workspace

Professional workspaces are not centered web pages. Their alignment follows pane ownership:

```text
project navigator | working canvas | inspector
```

The working canvas receives the flexible width. Inspector and navigator are stable anchors.

## Optical checks

At 1440px, inspect screenshots and ask:

- Is the visual center pulled strongly left or right for no task reason?
- Does one side contain hundreds of pixels of unused canvas while the content hugs another fixed pane?
- Does the split composition look balanced at a glance before reading?
- Does the main object receive enough width relative to supporting copy?

## Hard rule

> Align to the user's working/reading canvas, not merely to CSS coordinates.