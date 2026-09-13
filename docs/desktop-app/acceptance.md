# FanUI Desktop App — Acceptance

## Rendered size matrix

Use the application's actual minimum size as an additional hard boundary. Unless product constraints require a different matrix, capture and review these logical content-window classes:

```text
1280 × 720    compact restored window
1440 × 900    normal restored window
1728 × 1117   large restored window
maximized     platform work area
full-screen   when supported by the product
```

If the supported minimum is larger than 1280 × 720, state and test that configured minimum. If the application intentionally supports a smaller utility window, add that real minimum. Rendered screenshots are the visual authority; a successful build proves code validity, not desktop acceptance.

## Per-size checks

At compact, normal, and large sizes verify:

- current context, selection, state, and primary action remain visible or immediately reachable;
- navigation, working canvas, inspector, status/runtime, and toolbar have deliberate width ownership;
- labels localize without destructive clipping or command ambiguity;
- pane collapse preserves a discoverable replacement command;
- no unintended whole-window horizontal scrolling appears;
- large windows give flexible work regions useful space instead of creating an empty centered island;
- dialogs, menus, popovers, and sheets remain inside the usable screen and point to the right context.

## Window, input, and accessibility checks

- Resize continuously, then maximize, restore, and enter/exit full-screen where supported.
- Relaunch and verify the restoration behavior promised by the product.
- Open a second window/document when supported and verify title, selection, commands, and state scope.
- Complete the core value loop with keyboard only, then with pointer/trackpad.
- Check hover, pressed, context-menu, drag/drop, splitter, destructive, progress, failure, cancellation, and retry states that apply.
- Inspect semantic roles, labels, values, focus order, status announcements, light/dark appearance, reduced motion, increased/high contrast, supported text sizing, and primary localization.

## Desktop hard failures

Any of these prevents acceptance:

1. A web-dashboard shell is placed inside a native window while native chrome, commands, focus, and lifecycle behavior are ignored.
2. The primary task, current selection, failure state, or required command becomes unreachable at a supported window size.
3. A collapsed sidebar or inspector has no discoverable replacement command.
4. Maximize, full-screen, restore, or a second supported window creates clipped panes, wrong command scope, lost context, or a major unusable blank field.
5. The primary task cannot be completed by keyboard, or custom controls lack usable semantics.
6. Essential actions rely on hover alone, command state is inaccurate, or focus disappears after a dialog/sheet.
7. A build is treated as visual acceptance without rendered review of compact, normal, and large windows.
