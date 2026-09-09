# FanUI Workspace Viewport Ownership

## Purpose

Professional and AI Workspaces are working environments, not centered pages placed on a browser canvas.

## Core rule

> **Workspace owns the viewport.**

After the app top bar and any fixed context bar, the primary workspace should normally occupy the remaining viewport height.

Typical structure:

```text
App Topbar
└── Workspace height: calc(100vh - topbar)
    ├── Navigator       internal scroll
    ├── Main workspace internal panes / scroll
    └── Inspector       internal scroll
```

Avoid:

```text
500px-high workspace card
+ 400px empty page below it
```

## Pane ownership

### Navigator

Stable width, full remaining height, independent scroll when needed.

### Main canvas/editor

Flexible width and height. It should visually own the largest share of the viewport.

### Inspector

Stable supporting width. It should not force the main canvas into a narrow centered column.

### Runtime / Console / Results

When runtime state is core to the task, give it a real pane or resizable region rather than a short log strip floating inside a large empty canvas.

## Dense first viewport

At 1440 × 1000, a core project workspace should usually reveal most of:

- current project/workflow;
- navigation/tree;
- working graph/editor/canvas;
- selected object state;
- primary action;
- runtime/result state;
- inspector or contextual detail.

This does not mean filling every pixel. It means the working environment is continuous to the bottom of the viewport.

## Canvas density

Large graph canvases need realistic graph content. Increase node/detail fidelity before increasing the canvas itself.

Useful node content may include:

- object type;
- status;
- owner/agent/tool;
- secondary description;
- branch/connection state;
- selected state;
- compact action affordance.

## Scrolling

Prefer internal pane scrolling for sustained work. The browser page itself should not scroll through large blank product canvas unless the product interaction explicitly calls for document-like scrolling.

## Hard rules

> Do not put a workspace inside a page-shaped card.

> Do not leave the bottom half of a professional workspace unused when core runtime/detail content exists.

> Fill the viewport with task structure, not decorative density.