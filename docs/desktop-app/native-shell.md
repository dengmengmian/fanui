# FanUI Desktop App — Native Shell and Interaction

## Start from the runtime contract

Before styling, identify target operating systems, framework, window/scene model, minimum size, restoration, multi-window behavior, system appearance, localization, and current command/focus/accessibility behavior. Preserve working platform behavior unless the task explicitly changes it.

## Use native chrome deliberately

The platform should own system window controls and standard window behavior. Integrate content with native chrome rather than drawing fake traffic lights, caption buttons, title bars, menus, or resize handles.

- Use the toolbar for frequent commands scoped to the current window or document.
- Use a sidebar for persistent navigation or source selection.
- Use an inspector for properties of the current selection.
- Use a status area for current system state, progress, or low-frequency secondary information.
- Use a dialog, sheet, or popover for bounded decisions and transient secondary work.

Do not duplicate the same command across permanent title-bar, toolbar, sidebar, and content-header regions merely to fill space.

## Preserve window behavior

Design for the configured minimum, compact/normal/large restored windows, maximized state, full-screen where supported, restoration, and multiple windows/documents where supported.

For each region choose an explicit compact-window adaptation:

```text
preserve | compress | collapse | move | disclose | scroll-locally | hide-with-command
```

Collapsing a pane must preserve access through a visible command, menu item, toolbar item, or other discoverable replacement. Never silently remove current selection, primary action, failure state, or required navigation.

At larger windows, flexible work regions should grow before fixed navigation or inspector regions. Do not center a small web-style content column inside a large operational window unless the task is intentionally document-shaped.

## Respect Desktop density

Desktop applications support precise pointer input and sustained keyboard use. Repeated controls may be denser than touch-first Web UI, but text and hit regions must remain readable and operable. Start with target-platform control sizes; do not inflate every row to a mobile 44px target or shrink frequent controls merely to imitate an expert tool.

## Keyboard and command model

- Preserve logical focus order and a clearly visible focus state.
- Expose frequent actions through the platform command/menu system.
- Use conventional shortcuts for standard commands and avoid collisions.
- Keep enabled/disabled command state accurate to current context.
- Make shortcuts discoverable in menus, tooltips, command palettes, or help where appropriate.
- Preserve selection and focus when panes collapse, reopen, or update.

## Pointer and trackpad

- Provide hover, pressed, selected, disabled, busy, and context-menu states where applicable.
- Keep resize handles and splitters discoverable without dominating the layout.
- Use drag/drop only when source, destination, allowed operation, and cancellation are clear.
- Do not hide essential commands behind hover alone.
- Distinguish row selection from inline action and object opening.

## Accessibility and system settings

Verify semantic roles, names, values, state announcements, keyboard-only task completion, focus restoration, contrast, non-color status cues, text scaling where supported, reduced motion, high/increased contrast, light/dark appearance, icon-control labels, and reading order.

Custom-drawn controls must reproduce the native accessibility and input behavior they replace. If they cannot, use the native control.

## Operational state

Desktop task surfaces should visibly distinguish current window/document/project, current selection, keyboard focus, process state, saved/dirty or connected/disconnected state when material, and destructive-action authority. Never use brand accent as the only representation of selection, progress, success, and approval.
