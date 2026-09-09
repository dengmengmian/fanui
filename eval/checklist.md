# FanUI Web Checklist

Use this before considering substantial UI work complete.

## Classification

- [ ] Experience family is identified: Website / Documentation / Editorial / Pricing / Web App.
- [ ] Page archetype is identified.
- [ ] Primary user and primary task/value are clear.
- [ ] One primary visual anchor is identified.

## Web App archetype — mandatory when applicable

- [ ] Primary Web App archetype is explicitly classified: Management Console / Professional Workspace / Data Application / AI Workspace.
- [ ] Secondary archetype is identified when the product is hybrid.
- [ ] Core value loop is written down before navigation is designed.
- [ ] Default home is justified: dashboard / workspace / collection / last context.
- [ ] Task-oriented products have not drifted into a generic management console.
- [ ] Domain nouns have not automatically become equal top-level navigation items.
- [ ] Project-local objects stay project-local when that matches the real workflow.

## Cross-surface calibration — mandatory

- [ ] `docs/foundations/experience-metrics.md` was used for the current page family.
- [ ] Desktop calibration was checked at approximately 1440px for substantial desktop-first surfaces.
- [ ] Container width is appropriate to the page family rather than copied from another page.
- [ ] Title scale is appropriate to the page family rather than copied from Homepage/Product UI.
- [ ] Major vertical rhythm is appropriate to the page family.
- [ ] Local spacing is appropriate to the task density.
- [ ] Primary control height fits the experience family.
- [ ] Reading measure is intentional for Docs/Editorial.
- [ ] Visual amplitude is explicitly chosen: Low / Medium / High.
- [ ] Brand Expression Level is explicitly chosen: Low / Medium / High.
- [ ] The product family does not use one universal `max-width`, heading scale, `py-*`, card gap, or control height everywhere.

### Homepage calibration

- [ ] Standard content and Wide Product containers use intentional widths rather than arbitrary framework defaults.
- [ ] Hero typography is selected from the calibrated Marketing range or a deviation is explicitly justified.
- [ ] Chinese Hero copy uses an appropriate width/scale rather than forced narrow wrapping.
- [ ] Hero CTA scale is marketing-appropriate rather than copied from Product UI.
- [ ] Core/Hero product evidence uses Large/Hero scale and is readable without zoom.
- [ ] Major section spacing follows a deliberate rhythm rather than one repeated section template.

### Documentation calibration

- [ ] Docs shell uses compact navigation plus a comfortable reading/content column.
- [ ] Article body is not constrained to a marketing container.
- [ ] Article headings and spacing are materially smaller/tighter than Homepage Marketing.
- [ ] Docs body does not inherit compact Product UI typography.
- [ ] Search, navigation row height, and article rhythm fit repeated retrieval/reading.

### Editorial calibration

- [ ] Blog index and article page use different discovery vs reading compositions.
- [ ] Article body measure is reading-oriented.
- [ ] Body size/line-height support sustained reading.
- [ ] Metadata is visually subordinate to title/summary.
- [ ] Editorial spacing is more breathable than Product UI but less theatrical than Homepage Hero.

### Pricing calibration

- [ ] Plan group width supports cross-plan comparison.
- [ ] Plan surfaces are compact enough that meaningful comparison remains visible.
- [ ] Price, unit, target audience, and CTA hierarchy are clear.
- [ ] Comparison rows use decision-oriented density rather than marketing spacing.
- [ ] FAQ/final CTA use distinct but not excessive stage separation.

### Web App calibration

- [ ] Shell regions use Product UI density, not Website-scale controls.
- [ ] Main workspace uses available canvas rather than a narrow centered marketing container.
- [ ] Tree/nav rows, tabs, toolbars, and table rows fit sustained professional use.
- [ ] Inspector/sidebar widths support context without starving the workspace.
- [ ] Current work receives more area than decorative or summary regions.

## Hierarchy

- [ ] The most important thing is visually obvious.
- [ ] Secondary information is subordinate.
- [ ] There is one dominant action per local decision scope.
- [ ] Typography and spacing do most hierarchy work before decoration.
- [ ] Major regions do not all speak at the same visual volume.

## Visual finish

- [ ] Page/section visual amplitude is intentional: low / medium / high.
- [ ] At least two hierarchy levels are clearly visible without relying on brand color.
- [ ] Section/card/screenshot treatment is not mechanically repeated everywhere.
- [ ] Border use is selective rather than enclosing every group.
- [ ] The page feels richer than a wireframe but calmer than a concept shot.
- [ ] Brand character comes from more than one accent color.
- [ ] Important content scale is proportionate to the desktop canvas.

## Layout

- [ ] Layout reflects information architecture rather than a generic template.
- [ ] Major regions have clear relationships.
- [ ] Current context is visible where relevant.
- [ ] Responsive behavior preserves the primary task.
- [ ] Large canvas does not contain a timid underscaled content island.

## Density

- [ ] Controls are not oversized without reason.
- [ ] Web App repeated rows/actions are efficient to scan.
- [ ] Marketing/content pages have enough compositional breathing room.
- [ ] Whitespace communicates grouping rather than status/prestige.
- [ ] Compact controls and generous page composition are not confused with each other.

## Surfaces

- [ ] Every card/panel has a semantic reason.
- [ ] No unnecessary nested rounded containers exist.
- [ ] Borders/dividers are structural, not decorative.
- [ ] Selected/current surfaces are visibly distinct.
- [ ] Open/unboxed regions are used when a full container is unnecessary.

## Color

- [ ] Brand, selection, semantic status, data, and decoration roles are distinct.
- [ ] Saturated color is not used everywhere.
- [ ] Status is not communicated by color alone where critical.
- [ ] The product would still retain hierarchy if brand color were temporarily neutralized.
- [ ] Homepage expression is intentionally stronger than dense Product Workspace expression.
- [ ] Brand identity is not only neutral UI + one purple/blue CTA.

## Typography

- [ ] Text hierarchy is clear.
- [ ] Marketing / Product / Docs / Editorial typography mode is appropriate.
- [ ] Reading width is appropriate for Docs/Editorial.
- [ ] Metadata does not compete with primary content.
- [ ] Chinese text wraps naturally.
- [ ] Mixed Chinese/English technical strings remain readable.
- [ ] Removing icons would not collapse text hierarchy.
- [ ] Wide-desktop marketing headings do not default to safe underscaled values without reason.

## Product evidence — Website

- [ ] Real product evidence is used when available.
- [ ] Decorative imagery does not replace proof.
- [ ] Feature copy is concise enough for the visual to carry meaning.
- [ ] Each major product showcase is classified Small / Medium / Large / Hero.
- [ ] Showcase width falls inside the calibrated range or deviation is justified.
- [ ] Core/Hero evidence is not presented as a tiny screenshot.
- [ ] Product UI is readable at normal desktop browser scale.
- [ ] Screenshot crops focus on the actual task, not irrelevant chrome.
- [ ] Product sections vary composition instead of repeating left-text/right-thumbnail endlessly.
- [ ] Product UI itself contains enough hierarchy/state richness to work as marketing evidence.

## Documentation

- [ ] Search is discoverable when documentation is large.
- [ ] Current navigation location is clear.
- [ ] Homepage/task entry points do not dump the full tree.
- [ ] Code, tables, callouts, and images are readable and consistent.
- [ ] Categories do not all default to identical cards without hierarchy justification.

## Editorial

- [ ] Article index optimizes discovery.
- [ ] Article page optimizes reading.
- [ ] Product CTA pressure is restrained.
- [ ] Category navigation reflects reader intent.

## Pricing

- [ ] Plan target audience is clear.
- [ ] Billing period and unit are explicit.
- [ ] Important plan differences are visible before the full matrix.
- [ ] Enterprise/custom buying path is distinct when needed.
- [ ] Detailed comparison is progressively disclosed.
- [ ] FAQ addresses real purchase friction.
- [ ] Recommendation emphasis does not rely only on a louder border/color treatment.

## Web App

- [ ] Organization/project/module/object hierarchy is not flattened into one ambiguous navigation list.
- [ ] Tabs represent modes/views of the same context.
- [ ] Toolbars do not contain many equal-weight actions.
- [ ] Lists vs tables are selected based on scan vs comparison needs.
- [ ] Empty/loading/error states tell the user what is happening and what to do next.
- [ ] For Professional/AI Workspace products, the main surface contains real work rather than mostly overview statistics.
- [ ] Current project/task/object remains visible during the core value loop.
- [ ] Runs/results/artifacts stay connected to the work that produced them when appropriate.
- [ ] Product UI density stays compact enough for sustained work.

## Anti-pattern pass

- [ ] No Card Soup.
- [ ] No gray-on-gray sterility.
- [ ] No fake SaaS dashboard.
- [ ] No default decorative AI gradient/orb language.
- [ ] No excessive roundedness.
- [ ] No icon confetti.
- [ ] No nested surface maze.
- [ ] No invisible current context.
- [ ] No management console drift.
- [ ] No noun-trap navigation.
- [ ] No same-volume page.
- [ ] No product screenshot as thumbnail for core evidence.
- [ ] No border-grid / polished-wireframe finish.
- [ ] No generic-purple-SaaS identity as the only brand language.
- [ ] No underscaled content on a large canvas.
- [ ] No timid product Hero.
- [ ] No anonymous neutral + accent brand system.
- [ ] No uniform-spacing product family.
- [ ] No Marketing-sized Documentation.
- [ ] No Dashboard-sized Editorial.
- [ ] No Landing-page Pricing.
- [ ] No Website-sized Product UI.

## Final

- [ ] FanUI rubric score is at least 85 for major new surfaces.
- [ ] No hard-fail condition exists.
- [ ] The result feels clean, structured, refined, productive, and calm under complexity.
- [ ] The page looks like part of the same product family as other FanUI surfaces without forcing every page type into the same layout.
- [ ] The result is visually finished, not merely structurally correct.
- [ ] The calibrated ranges were used as intentional design constraints rather than blindly copied values.
- [ ] Cross-surface consistency was checked across every implemented FanUI page family, not only the current page in isolation.