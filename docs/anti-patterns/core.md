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

**Correction:** experience family → task → hierarchy → pattern → component → styling → evaluation.