# FanUI browser acceptance

Run the built-in passing fixture:

```sh
npx playwright test
```

Run against a rendered product URL:

```sh
FANUI_TARGET_URL=http://127.0.0.1:3000/path npx playwright test tests/acceptance/fanui.acceptance.spec.ts
```

The suite covers `1440x1000`, `1024x900`, `768x1024`, `390x844`, and `375x812` in Chromium, Firefox, and WebKit, in Light and Dark modes. It writes full-page screenshots under `test-results/fanui-screenshots/` and consolidated machine-readable evidence to `test-results/fanui-review-evidence.json`. Override the evidence destination with `FANUI_EVIDENCE_PATH` and the mobile target floor with `FANUI_TOUCH_TARGET_MIN`.

## Optional declaration contract

The generic checks discover normal HTML automatically. Add these attributes only when a page needs to declare FanUI-specific intent:

- `data-fanui-icon-only`: identify an icon-only interactive control. It must have an accessible name.
- `data-fanui-touch-target`: opt any custom interactive element into the mobile target-size check.
- `data-fanui-workspace="remaining-viewport"`: assert that a visible workspace materially owns the remaining viewport and reaches its bottom edge.
- `data-fanui-collapsible="navigation"`: identify a region that may collapse. Use any stable value in place of `navigation`.
- `data-fanui-replacement-for="navigation"`: identify the visible, named control that restores access to the matching collapsed region.
- `data-fanui-local-scroll`: opt a custom code element into local horizontal-scroll inspection. Standard `pre` elements are inspected automatically.

These declarations describe acceptance intent; they do not change layout or behavior.
