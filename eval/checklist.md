# FanUI Evaluation Checklist

Use this checklist before calling a substantial FanUI page complete.

## A. Classification

- [ ] Experience family is explicit.
- [ ] Web App primary archetype is explicit when applicable.
- [ ] Core value loop is explicit.
- [ ] Primary task/action is explicit.
- [ ] One primary visual/task anchor is identifiable.

## B. Cross-surface calibration

- [ ] Correct `experience-metrics.md` family is used.
- [ ] Homepage, Docs, Editorial, Pricing, and Product UI do not share one generic max-width/H1/spacing/control recipe.
- [ ] Major vertical rhythm matches the page family.
- [ ] Control density matches the page family.
- [ ] Brand expression level is intentional.

## C. Responsive transformation

Read `docs/foundations/responsive.md` and `docs/foundations/mobile-precision.md`.

- [ ] Page has been checked at 1440, 1024, 768, 390, and 375-class widths when materially relevant.
- [ ] Important regions have deliberate `preserve / stack / reorder / collapse / scroll / crop / replace / sheet / drawer` strategies.
- [ ] Desktop product evidence is not merely scaled until unreadable.
- [ ] Two-column Marketing sections stack before text becomes cramped.
- [ ] Hidden sidebar/Inspector/TOC/project navigation has a replacement access path.
- [ ] Primary mobile touch targets are normally 40–44px or larger.
- [ ] There is no document-level horizontal overflow.
- [ ] Mobile vertical rhythm is intentionally compressed from Desktop.
- [ ] Mobile typography remains stable rather than producing word-by-word headings.
- [ ] Product evidence remains readable without pinch zoom.

### C1. Mobile precision closure

- [ ] Website phone header uses one persistent primary row unless a second row has a strong task reason.
- [ ] Website primary navigation remains reachable through a complete drawer/menu after collapse.
- [ ] Docs desktop sidebar becomes a complete drawer/selector path rather than a truncated chip subset.
- [ ] Docs and Editorial use different mobile typography scales.
- [ ] Docs task-reading type does not drift into oversized Editorial scale.
- [ ] Category/tab strips remain one line and use intentional local scroll/collapse instead of unstable wrapping.
- [ ] Code/configuration preserves formatting and scrolls internally rather than wrapping as prose.
- [ ] Mobile icon-only controls provide practical 40–44px hit areas while keeping compact glyphs.
- [ ] Repeated icon/text patterns remain semantically correct and optically aligned at phone widths.
- [ ] Mobile CSS does not override icon-box centering, stroke consistency, first-line alignment, or color semantics.
- [ ] Brand + CTA + menu/project controls survive 375×812 without collision.
- [ ] Drawer/sheet surfaces remain fully inside the 375px viewport.
- [ ] `scrollWidth <= clientWidth` for the document at 390px and 375px, excluding intentional local scrollers.

## D. Optical layout

- [ ] Main content is balanced in the effective/remaining canvas.
- [ ] Sidebars/inspectors do not accidentally pull content to one edge.
- [ ] Split sections allocate width according to content importance.
- [ ] Large empty side fields have a real purpose.
- [ ] Remaining canvas is recomputed after responsive panes collapse.

## E. Typography and readability

- [ ] Marketing display type is confident but not theatrical.
- [ ] Documentation uses reading/retrieval scale, not Marketing or Editorial scale.
- [ ] Editorial body uses sustained-reading scale.
- [ ] Product rows/tree/table/inspector respect Minimum Readability Floor.
- [ ] Secondary text is muted but still readable.
- [ ] Chinese wrapping and mixed-language labels remain stable.

## F. Product Evidence Fidelity

For every Core/Hero product visual:

- [ ] Current context is visible.
- [ ] Navigation/workspace structure is believable.
- [ ] Selected/current state is visible.
- [ ] Running/completed/waiting/failure states are realistic where relevant.
- [ ] Labels/data/metadata are meaningful rather than placeholders.
- [ ] Primary/secondary actions are believable.
- [ ] Semantic object/status roles are distinguishable.
- [ ] Product evidence is readable without zoom.
- [ ] Large frames contain enough meaningful content to earn their area.
- [ ] Fidelity is re-evaluated after Mobile transformation.

## G. Effective content density

- [ ] A large visual could not be reduced 30–40% with no information loss.
- [ ] Major evidence surfaces use meaningful content across most of their usable area.
- [ ] Sparse diagrams are not placed inside oversized frames.
- [ ] Whitespace supports hierarchy rather than hiding missing content.

## H. Color

- [ ] Brand and semantic color are separated.
- [ ] Running is not styled like Completed.
- [ ] Approval/Waiting is distinct from brand Primary Action.
- [ ] Selection is distinct from object type and process state.
- [ ] Product evidence gains richness from meaningful state/object color, not decorative gradients.
- [ ] Danger remains reserved for actual failure/destructive state.

## I. Surface hierarchy

- [ ] Radius decreases toward dense operational surfaces.
- [ ] Marketing major frames are not visually identical to Product panels.
- [ ] Tree/table/repeated rows are not all individual 12–16px cards.
- [ ] Borders/dividers/surfaces are used according to hierarchy.
- [ ] Shadows are restrained in Product UI.

## J. Iconography and icon-text alignment

When repeated icons or icon-only controls are present, check `docs/foundations/iconography.md`.

- [ ] Each icon has a defensible semantic meaning; it is not merely visually adjacent to the concept.
- [ ] Peer icons use consistent glyph size and stroke weight.
- [ ] Glyphs are optically centered inside their icon containers.
- [ ] Icon containers align with the first-line text anchor, not the center of a multi-line text block.
- [ ] Broad descendant selectors do not override icon-box display, margin, line-height, or color.
- [ ] Icon-only controls have accessible labels/tooltips and adequate hit areas.
- [ ] Mobile breakpoint rules preserve desktop icon semantics and optical geometry.
- [ ] Navigation/drawer icons use direct navigation/sidebar meaning rather than decorative substitutes.
- [ ] No Icon Confetti, Approximate Icon Semantics, Glyph Drift, Icon-box Override, Tiny Icon Target, or Mobile Icon Regression.

## K. Homepage

- [ ] Hero display and CTA scale match calibrated range.
- [ ] Hero product evidence is Large/Hero scale and readable.
- [ ] Hero evidence is high fidelity, not a wireframe.
- [ ] Later sections vary composition and amplitude.
- [ ] Product visuals are not repeated small screenshots.
- [ ] Marketing brand expression is richer than Product UI without overwhelming it.
- [ ] Mobile Hero product evidence is cropped/transformed rather than compressed Desktop UI.
- [ ] Mobile split feature sections stack in a deliberate order.
- [ ] Mobile Website header does not consume unnecessary first-viewport height with a second permanent nav row.

## L. Documentation

- [ ] Left navigation is readable at 13–14px-class scale.
- [ ] Docs Home content is optically balanced inside remaining canvas.
- [ ] Article reading measure is appropriate.
- [ ] Local TOC does not distort the article position.
- [ ] Getting Started is visually stronger than low-priority deep links.
- [ ] Deep information architecture does not become a flat card grid.
- [ ] When sidebar/TOC collapses on Mobile, a complete Docs navigation drawer/selector remains.
- [ ] Mobile Docs does not use Editorial-sized title/body spacing.
- [ ] Code blocks use local horizontal scroll and preserve structured formatting.

## M. Editorial / Blog

- [ ] Index supports discovery rather than Marketing conversion.
- [ ] Featured and Latest visuals contain an editorial idea.
- [ ] No generic gradient-placeholder cover dominates the page.
- [ ] Article Hero visual is strong/supporting/none by deliberate choice.
- [ ] Large Hero area is earned by meaningful content.
- [ ] Reader encounters useful text at a reasonable point in first viewport.
- [ ] CTA pressure stays out of the article body.
- [ ] Mobile category navigation remains a one-line local scroller or deliberate replacement.
- [ ] Editorial mobile typography remains distinct from Docs task-reading typography.

## N. Pricing

- [ ] Plan summary helps a buyer choose before detailed comparison.
- [ ] Recommended plan is clear without distorting the grid.
- [ ] Price/unit baseline hierarchy is clean.
- [ ] Enterprise/private path feels intentionally separate.
- [ ] Comparison rows are dense enough for decision-making.
- [ ] Pricing does not become a generic Marketing card gallery.
- [ ] Mobile uses one plan per row or another clear decision pattern.
- [ ] Comparison uses local scroll/alternate comparison, not whole-page overflow.

## O. Professional / AI Workspace

- [ ] Desktop Workspace owns the remaining viewport height.
- [ ] Desktop browser page does not leave a large blank region below the core workspace.
- [ ] Navigator, workspace, inspector, and runtime panes have clear ownership.
- [ ] Main working canvas receives flexible width.
- [ ] Runtime/result information has enough persistent area when core to the task.
- [ ] Workflow nodes contain realistic type/state/metadata.
- [ ] Internal pane scrolling is used where appropriate.
- [ ] Current project/workflow/run state is obvious.
- [ ] Mobile navigator has a compact context/drawer/selector replacement.
- [ ] Mobile horizontal workflow graph reflows vertically or uses an intentional alternate view.
- [ ] Mobile Inspector/approval remains accessible as sheet, drawer, tab, or sequential review section.
- [ ] Mobile runtime is capped/collapsible/dedicated rather than accidentally taking over the page.
- [ ] Desktop toolbar does not wrap chaotically on Mobile.
- [ ] Workspace icon-only controls maintain 40–44px targets and consistent 16–19px glyphs on Mobile.

## P. Anti-pattern gate

- [ ] No Card Soup.
- [ ] No Fake SaaS Dashboard.
- [ ] No Management Console Drift.
- [ ] No Noun-trap Navigation.
- [ ] No Same-volume Page.
- [ ] No Product Screenshot as Thumbnail.
- [ ] No Generic Purple SaaS Identity.
- [ ] No Uniform-spacing Product Family.
- [ ] No Fake Product Evidence.
- [ ] No Sparse Evidence in Oversized Frame.
- [ ] No Sidebar-edge Docs Alignment.
- [ ] No Editorial Placeholder Art.
- [ ] No Un-earned Article Hero.
- [ ] No Workspace Below-the-fold Void.
- [ ] No Semantic-color Collapse.
- [ ] No Rounded Rectangle Everywhere.
- [ ] No Tiny Product Typography.
- [ ] No Approximate Icon Semantics.
- [ ] No Glyph Drift.
- [ ] No Icon-box Override.
- [ ] No Text-block Centering for icon + title + description rows.
- [ ] No Shrunk Desktop Evidence.
- [ ] No Hidden Without Replacement.
- [ ] No Cramped Split.
- [ ] No Desktop Toolbar Wrap.
- [ ] No Runtime Takeover.
- [ ] No Whole-page Horizontal Scroll.
- [ ] No Tiny Touch UI.
- [ ] No Mobile Empty Canvas.
- [ ] No Double-decker Mobile Header.
- [ ] No Truncated Sidebar Replacement.
- [ ] No Editorial-sized Documentation.
- [ ] No Wrapped Code Semantics.
- [ ] No Multi-row Category / Tab Collapse.
- [ ] No Tiny Icon Target.
- [ ] No Mobile Icon Regression.
- [ ] No Header Collision at 375px.

## Completion gate

A page should not be considered complete when a hard failure remains even if the numeric score is above 85.
