# Public marketplace and customer portal

Use this pattern for public order plazas, service directories, template galleries, expert marketplaces, and customer-facing portals where visitors must discover an item, understand it, and take a conversion action. It is a Website discovery surface connected to a transactional Web App; it is not a management console.

Apifox API Hub and published-document surfaces are the primary structural reference: they demonstrate a calm public header, a discovery rail beside a scannable result matrix, and reading content paired with persistent local navigation. Extract the hierarchy and interaction logic, never proprietary colors, assets, exact layouts, or copy.

## Core loop

```text
discover → compare → inspect → decide → authenticate if needed → continue the same action
```

The index and detail page are different decision stages. Do not force them into one generic card or table template.

## Discovery index

Use a centered introduction only to establish scope and search intent. The working region below it should normally use:

```text
discovery rail (search, category, sort)
→ result heading/count
→ repeated result cards
→ pagination or deliberate incremental loading
```

- A quiet atmospheric field may separate the introduction from the working region when the page needs a clearer public-entry moment. Prefer a restrained brand tint, subtle grid, or another system-native motif; do not add a stock or decorative background image unless it carries real marketplace context or evidence.
- A stable left rail is appropriate when visitors repeatedly change category, keyword, or sort while scanning results.
- Use whole-card navigation when the card has one destination. Keep nested controls out of that card unless they have independent, keyboard-safe behavior.
- Give each result a consistent comparison grammar: type/state, title, short real summary, source/time, and two or three decision facts.
- Use a semantic table only when row/column comparison, bulk selection, or operational manipulation is the real task. A public discovery page should not inherit an administrative ledger merely because the data can fit into columns.
- Do not fabricate summaries, prices, ratings, activity, or urgency. Omit unavailable supporting content and preserve the card's geometry.
- On narrow screens, stack the rail above results or move it to a clearly labelled filter sheet. Category navigation may use local horizontal scrolling; the page itself must not scroll horizontally.

## Decision detail

The detail page should separate reading from conversion:

```text
main reading column: identity, context, real description, structured sections, progress
sticky decision column: state, price/budget, primary action, deadline, method, participation facts
```

- Keep the primary action visible while the visitor reads when the action remains valid.
- Do not scatter the same facts across a hero, a five-cell KPI strip, and another action card. Consolidate decision facts in the decision column.
- Treat long descriptions as readable content, not as another dense dashboard panel.
- Empty optional facts should say “未设置” or be omitted according to business meaning; zero price must not be presented as a real free price when the value actually means “面议”.
- When the page has little content, keep hierarchy calm. Do not invent modules to fill the viewport.
- On mobile, keep title and essential context first, reflow decision facts into one block, and preserve the primary action with a bottom action bar only when it does not duplicate an equally visible button.

## Public header and authentication boundary

- Before authentication, keep public navigation calm: brand at the start, primary destinations as one group, then a weak sign-in action and one strong registration/conversion action.
- A Platform signal strip may sit directly below the shared navigation when real marketplace rules, service availability, or verified platform capabilities deserve persistent visibility. Keep it one quiet row, reuse it through the shared shell, and never fabricate transactions, prices, users, or urgency. A looping strip must join equal content copies without a visible jump, hide duplicate copy from assistive technology, pause when users need to inspect it, and become static under reduced motion.
- Do not show account-only utilities such as notifications, theme/account tool clusters, or empty avatars to signed-out visitors unless they have a real public use.
- The weak sign-in action serves returning users; the strong registration action serves acquisition. They must remain separate controls and separate intent.
- Authentication may be a focused modal when it is a short interruption. Registration, recovery, or legal flows that exceed the viewport should become a route or mobile sheet. Follow `docs/web-app/authentication.md`.
- Preserve the selected listing and intended action across authentication. Success returns to that safe destination instead of a generic home page.

## State and interaction contract

- Loading preserves the final layout footprint. Empty and error states stay inside the results region and keep filters usable.
- Search, category, sorting, and pagination must share one query state. Changing one filter resets invalid pagination state.
- A visible active filter needs an equally visible clear path.
- Hover may add lift or border emphasis, but focus-visible must remain explicit and not depend on color alone.
- A card's click area, keyboard behavior, accessible name, and destination must agree.

## Acceptance

Verify:

- scan and comparison at 1440px without an administrative-table feel;
- filter reachability and stable cards at 768px, 390px, and 375px;
- no hidden category or action without a replacement path;
- whole-card keyboard navigation and visible focus;
- real loading, empty, error, missing-value, long-title, and long-summary states;
- detail action remains reachable during reading and after authentication;
- signed-out header exposes both weak sign-in and strong registration;
- Light/Dark contrast and no document-level horizontal overflow.
