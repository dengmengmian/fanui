# FanUI Desktop App — Classification

## Purpose

Use `desktop_app` when the product is delivered as a desktop application and its quality depends on native window, command, focus, input, lifecycle, or system-integration behavior. Native UI, a cross-platform toolkit, or an embedded web renderer can all qualify; the runtime contract determines the experience family.

## Web App vs Desktop App

| Signal | Web App | Desktop App |
|---|---|---|
| Primary container | Browser viewport and document | Application window and native scenes |
| Navigation contract | URL, browser history, routes | Windows, documents, sidebar/toolbar, menus, commands |
| Size adaptation | Browser responsive transformation, often through mobile | User-resizable compact/normal/large windows; maximized and full-screen states |
| Primary input | Pointer/touch/keyboard by viewport | Keyboard, pointer, trackpad, context menu, drag/drop; touch only where supported |
| System integration | Browser capabilities | App menu, shortcuts, file lifecycle, notifications, appearance, restoration, multiple windows when applicable |
| Acceptance authority | Browser screenshots and responsive interaction | Native rendered windows plus window/input/accessibility behavior |

A local server, HTML/CSS, Electron, Tauri, or WebView does not automatically make a product a Web App. Conversely, a desktop-width browser UI is still a Web App when the browser owns its runtime contract.

## Desktop archetypes

Choose one primary archetype. Use a secondary archetype only when it changes a real shell or task decision.

- `focused_utility` — one short, repeatable task in a compact window; avoid a permanent multi-pane shell without task need.
- `document_workspace` — create, open, edit, compare, or export documents/artifacts; document identity, dirty/saved state, selection, and file lifecycle are first-class.
- `professional_workspace` — long-session work across navigator, canvas/editor, inspector, output, or runtime regions; pane ownership and keyboard efficiency are core.
- `monitoring_control` — inspect live state, diagnose issues, and take bounded actions; freshness, severity, authority, and failure recovery matter more than decorative metrics.
- `menu_bar_companion` — transient menu-bar/system-tray status and short actions, with a separate settings/detail window when needed.

## Required classification output

```yaml
fanui:
  experience: desktop_app
  primary_archetype: focused_utility | document_workspace | professional_workspace | monitoring_control | menu_bar_companion
  secondary_archetype: ... | none
  platform: macos | windows | linux | cross_platform_desktop
  framework: ...
  primary_window_or_scene: ...
  core_value_loop: ...
  primary_task: ...
  primary_action: ...
  current_context: ...
  required_system_integrations: [...]
```

Before visual changes, inspect the current implementation and preserve intentional framework and platform behavior. Do not replace native controls, menus, window chrome, focus handling, or existing accessibility semantics merely to impose a web visual pattern.
