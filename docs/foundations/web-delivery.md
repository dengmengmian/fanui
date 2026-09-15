# FanUI Web Delivery: Compatibility, SEO, and GEO

Compatibility applies to every Web implementation. SEO and GEO apply to public indexable Website, Docs, Editorial, Pricing, product, and landing pages. Authenticated consoles/private workspaces normally remain `noindex`.

## Compatibility gate

- Use the host Browserslist and analytics/RUM support matrix. If absent, use Web Platform Baseline Widely Available across Chrome, Edge, Firefox, Safari, iOS Safari, and Android Chrome.
- Prefer progressive enhancement. Guard limited Web APIs/CSS with feature detection or `@supports` and provide a usable fallback.
- Build success is not compatibility evidence. Test supported browsers, target widths, keyboard, pointer/touch, reduced motion, zoom, text expansion, hydration, and failure states.
- Core content and primary actions must remain usable when optional enhancement APIs fail.

## SEO gate for public pages

- Render critical content in crawlable HTML; prefer SSR/static output when supported.
- Require descriptive title and meta description, canonical URL, semantic landmarks/headings, crawlable links, meaningful alt text, correct status codes, and consistent robots/sitemap/redirect/locale policy.
- Do not index authenticated, staging, duplicate, filtered, or private URLs.
- JSON-LD must use a supported type and match visible facts. Never invent ratings, authors, dates, products, or FAQ content.
- Validate mobile rendering, Core Web Vitals, rendered HTML, directives, canonical, and structured data when present.

## GEO / answer-engine discoverability

GEO has no separate universal technical standard. Use source-clear, people-first SEO:

- answer-first headings and self-contained passages;
- consistent entities, visible author/publisher and updated dates where factual;
- primary-source citations and stable crawlable URLs;
- important claims available as text and kept current;
- explicit crawler policy. Allow `OAI-SearchBot` only when ChatGPT search discovery is desired and policy permits it; training crawler policy is a separate decision.

Do not require hidden text, keyword stuffing, fake citations, invented schema, or nonstandard AI markup. Google states AI search features use normal SEO requirements and no special schema is required.

## Delivery record

Record browser target source, browsers tested, `public_indexable` vs `private_noindex`, metadata/canonical/robots outcome, rendered-content result, structured-data result when applicable, and known gaps.

## Normative references

- Web Platform Baseline: https://web.dev/baseline
- Baseline with Browserslist: https://web.dev/articles/use-baseline-with-browserslist
- Google Search JavaScript SEO: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- Google AI search features: https://developers.google.com/search/docs/appearance/ai-features
- OpenAI publisher and crawler guidance: https://help.openai.com/en/articles/12627856
