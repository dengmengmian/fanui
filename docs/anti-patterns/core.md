# FanUI Core Anti-patterns

## 1. Card Soup

**Symptom:** every heading, control group, table, filter, statistic, and pagination block is placed in a rounded card.

**Why it fails:** all regions receive similar visual weight, destroying hierarchy.

**FanUI correction:** use cards only for meaningful object or group boundaries. Prefer spacing, typography, subtle surfaces, and dividers for ordinary structure.

## 2. Gray-on-Gray Sterility

**Symptom:** canvas, surfaces, controls, borders, icons, and text are all near-identical gray values.

**Why it fails:** the UI may look restrained but loses focus, state, and product character.

**Correction:** maintain a neutral base while providing deliberate contrast, selection tint, semantic color, and clear text hierarchy.

## 3. Fake SaaS Dashboard

**Symptom:** four KPI cards, a generic chart, recent activity cards, and gradient widgets appear even when they do not support a real decision.

**Why it fails:** it imitates a genre rather than solving a task.

**Correction:** dashboards must answer specific operational questions. Remove metrics without an action or interpretation path.

## 4. Decorative AI Visuals by Default

**Symptom:** glowing orbs, purple-blue gradients, grids, stars, abstract 3D objects, or fake chat bubbles become the primary product evidence.

**Why it fails:** the interface communicates a trend, not the product.

**Correction:** show real product behavior first. Use decorative visuals as supporting atmosphere only.

## 5. Excessive Roundedness

**Symptom:** large-radius pills and containers are used at every hierarchy level.

**Why it fails:** dense professional interfaces become soft, bulky, and visually repetitive.

**Correction:** use moderate radius and vary it semantically by control, surface, overlay, and marketing context.

## 6. Icon Confetti

**Symptom:** every title, label, row, button, and section has an icon.

**Why it fails:** icons stop carrying meaning and increase visual noise.

**Correction:** keep icons where they improve scanning, recognition, object typing, or action clarity.

## 7. Multiple Primary Actions

**Symptom:** several equally emphasized buttons compete in one local task region.

**Why it fails:** users cannot identify the intended next action.

**Correction:** establish one dominant action per decision scope; downgrade supporting actions.

## 8. Empty-space-as-quality

**Symptom:** large gaps, oversized controls, and huge headings are used to simulate premium design.

**Why it fails:** workspaces become inefficient and content relationships weaken.

**Correction:** use generous composition where storytelling or reading benefits, not inside repeated operational controls.

## 9. Nested Surface Maze

**Symptom:** Card → Card → inset panel → bordered group → tinted group without a clear semantic model.

**Why it fails:** hierarchy becomes harder to infer, not easier.

**Correction:** each additional surface level must represent a real relationship or interaction boundary.

## 10. Invisible Current Context

**Symptom:** a complex app has navigation, tabs, project switching, and object trees, but current location is expressed weakly or inconsistently.

**Why it fails:** users lose orientation.

**Correction:** make current organization/project/module/object/tab/state visually explicit.

## 11. Marketing Copy Wall

**Symptom:** long paragraphs explain features while product visuals are small or generic.

**Why it fails:** the user must believe claims rather than inspect proof.

**Correction:** concise claim + concrete evidence + optional detail.

## 12. Pricing Card Beauty Contest

**Symptom:** pricing is optimized around attractive plan cards while meaningful differences remain hidden.

**Why it fails:** the user still cannot choose.

**Correction:** provide a concise plan summary first, then progressive detailed comparison and FAQ.

## 13. Documentation Navigation Dump

**Symptom:** all available documentation topics appear with equal prominence.

**Why it fails:** system completeness is exposed as user complexity.

**Correction:** maintain deep navigation while presenting task-oriented entry points and progressive disclosure.

## 14. Blog-as-Marketing-Grid

**Symptom:** article pages and indices inherit marketing card density, typography, and CTA pressure.

**Why it fails:** reading becomes secondary to decoration.

**Correction:** editorial pages use dedicated reading typography, content hierarchy, and restrained conversion elements.

## 15. AI Free-form Styling

**Symptom:** an agent starts implementation by picking colors, gradients, cards, and components before understanding the page task.

**Why it fails:** visual decisions become arbitrary.

**Correction:** experience family → Web App archetype when applicable → task → hierarchy → pattern → calibration → component → visual system → evaluation.

## 16. Management Console Drift

**Symptom:** a product whose core value is creating, editing, executing, debugging, reviewing, or supervising work is organized primarily as Overview + resource-list pages.

Typical drift:

```text
Overview
Projects
Agents
Runs
Artifacts
Settings
```

when the real product loop happens inside a project/workflow/task.

**Why it fails:** the product becomes an administration interface instead of a working environment. Context is repeatedly lost and users spend navigation effort moving between nouns rather than completing work.

**Correction:** classify the Web App archetype. For Professional/AI Workspace products, make project/task/workspace context primary and move administrative collections to supporting surfaces.

## 17. Noun-trap Navigation

**Symptom:** every domain noun automatically becomes a first-level navigation destination.

**Why it fails:** domain vocabulary is mistaken for information architecture.

**Correction:** organize navigation around hierarchy, context, and the core value loop. Keep project-local objects inside project navigation when that reflects how work is actually performed.

## 18. Same-volume Page

**Symptom:** every section uses similar heading size, card treatment, border strength, spacing, and screenshot scale.

**Why it fails:** the page is orderly but visually flat. Nothing feels intentionally dominant or subordinate.

**Correction:** define visual amplitude. Create quiet, medium, and strong regions. Use one primary visual anchor and vary composition instead of adding random decoration.

## 19. Product Screenshot as Thumbnail

**Symptom:** a product-led website uses small browser-frame screenshots that are technically present but unreadable at normal scale.

**Why it fails:** the product cannot function as evidence. The reader sees a placeholder for proof rather than proof itself.

**Correction:** classify showcase importance and scale. Core/hero claims normally require Large/Hero product evidence, tighter cropping, and readable UI details.

## 20. Border-grid / Wireframe Finish

**Symptom:** nearly every region is a white rectangle with a subtle gray border, producing a clean but wireframe-like finish.

**Why it fails:** border becomes the only hierarchy mechanism and the interface lacks visual depth or product character.

**Correction:** mix open regions, surface shifts, spacing, typography, selective borders, and explicit selection states. Not every semantic group requires a surrounding rectangle.

## 21. Generic Purple SaaS Identity

**Symptom:** the design's only brand distinction is a purple/blue primary button and a few tinted badges.

**Why it fails:** changing one color would make the entire product indistinguishable from a generic template.

**Correction:** create product character through composition, typography, surface language, product-specific visuals, interaction patterns, and restrained brand motifs—not color alone.

## 22. Underscaled Content on a Large Canvas

**Symptom:** a wide desktop page contains a small centered content island: timid headline, compact CTA, narrow screenshot, and large unused empty fields.

**Why it fails:** whitespace and viewport scale overpower the actual content. The page feels unfinished even when alignment is clean.

**Correction:** use FanUI layout calibration. Increase the primary content/product width, raise the appropriate typographic role, reduce unearned whitespace, and make the main evidence proportionate to the viewport.

## 23. Timid Product Hero

**Symptom:** the Homepage Hero uses safe 40–48px display type, product-workspace-sized buttons, and a screenshot that does not visually compete with the copy.

**Why it fails:** the product feels provisional rather than mature. Marketing and Product typography collapse into one scale system.

**Correction:** use `docs/website/hero.md` and the calibrated Marketing typography bands. Hero scale should be confident but not oversized for spectacle.

## 24. Anonymous Neutral + Accent

**Symptom:** the website is almost entirely white/gray and the only brand expression is one accent button.

**Why it fails:** restraint becomes anonymity. The interface can be rebranded by changing one hex value.

**Correction:** choose a Brand Expression Level and apply consistent brand behavior through display treatment, selection tint, product frame, section fields, and recurring motifs while preserving semantic color separation.

## 25. Uniform-spacing Product Family

**Symptom:** Homepage, Docs, Blog, Pricing, and Web App all use the same container width, `py-*`, H1 size, card gap, and control height.

**Why it fails:** consistency is confused with sameness. Each surface loses the density and reading/comparison/task rhythm required by its job.

**Correction:** use `docs/foundations/experience-metrics.md`. Preserve shared spacing rhythm and component language while changing operating density by experience family.

## 26. Marketing-sized Documentation

**Symptom:** Documentation uses Homepage-scale headings, 96–144px article gaps, oversized cards, and wide marketing containers.

**Why it fails:** retrieval and reading become slow; deep technical content feels like a campaign page.

**Correction:** use compact docs navigation, 720–840px reading measure, documentation typography, and 12–56px article rhythm bands.

## 27. Dashboard-sized Editorial

**Symptom:** Blog/Editorial uses compact app typography, dense boxed cards, tight metadata rows, and little paragraph rhythm.

**Why it fails:** sustained reading and content discovery lose priority.

**Correction:** use editorial title/body scales, narrower body measure, more paragraph rhythm, and lower CTA pressure.

## 28. Landing-page Pricing

**Symptom:** Pricing uses giant Hero spacing, oversized plan cards, large decorative surfaces, and too little comparison density.

**Why it fails:** the buyer sees a marketing composition instead of a decision interface.

**Correction:** keep plan cards comparison-friendly, price/unit hierarchy explicit, comparison rows dense, and stage transitions deliberate but not theatrical.

## 29. Website-sized Product UI

**Symptom:** operational rows, tabs, buttons, sidebars, and workspaces use Website-size controls and page gutters.

**Why it fails:** repeated work becomes slow and the useful canvas shrinks.

**Correction:** use medium-compact Product UI metrics, let the workspace occupy available width, and reserve large visual scale for true task hierarchy—not generic modernity.