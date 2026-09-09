# FanUI Website — Editorial / Blog

## Intent

Editorial surfaces should make content easy to discover and pleasant to read while staying visibly connected to the product brand.

Blog is not a marketing-card grid and not a documentation tree.

## Content system

A FanUI editorial system may include:

- opinions / perspectives;
- best practices;
- news;
- product updates;
- customer stories;
- technical tutorials;
- announcements.

Categories should represent meaningful reader intent.

## Blog index

Preferred structure:

```text
Editorial header / category navigation
→ Featured article or current priority
→ Recent articles
→ Popular / highlighted content where useful
→ Category sections
→ Newsletter / product CTA (restrained)
```

The index may expose categories prominently, but category navigation should remain more content-oriented and lower-pressure than the primary Product Website navigation.

## Article card

A useful article card typically carries:

- category;
- title;
- concise summary when space permits;
- cover/visual when meaningful;
- author/source;
- date;
- optional reading metadata.

Not every card needs every field.

Hierarchy should favor title over metadata.

## Article page

Preferred structure:

```text
Category / breadcrumb
Title
Summary / deck
Author + date
Hero / cover when relevant
Article body
Related content
Low-pressure product/newsletter CTA
```

## Calibrated wide-desktop metrics

Reference viewport: approximately **1440px**.

Use `docs/foundations/experience-metrics.md` as the cross-surface authority.

### Blog index

```text
Standard container: 1080–1200px
Category/navigation band: 44–56px
Featured composition gap: 48–72px
Major index section separation: 56–88px
Article grid/list gap: 24–36px
Index/page title: 40–52px
Featured article title: 32–44px
Normal article title: 18–24px
Summary: 15–17px
Metadata/category: 12–14px
```

### Article page

```text
Article header container: 880–1040px
Article title: 44–58px
Chinese article title: 40–54px
Deck/summary: 18–21px
Body: 16–18px
Body line-height: ~1.75–1.9
Body measure: 680–760px
Hero/cover max width: 960–1160px when useful
```

Editorial rhythm:

```text
Category → title: 12–20px
Title → deck: 20–28px
Deck → metadata: 20–28px
Metadata → cover/body: 32–56px
Paragraph gap: 16–24px
H2 top: 48–64px
H3 top: 32–44px
Related content top: 64–96px
End CTA/newsletter separation: 72–112px
```

### Calibration rule

Editorial should be more breathable than Product UI and more reading-driven than Homepage Marketing.

Do not make every article a same-sized Card. Do not use compact 14px app typography as the long-form body. Do not create Homepage-scale display type for ordinary article cards.

## Editorial typography

Editorial pages require a dedicated typographic mode.

Prioritize:

- readable measure;
- comfortable paragraph line height;
- distinct heading rhythm;
- clear quotes and callouts;
- code readability for technical posts;
- restrained inline links;
- image captions where useful.

Do not inherit Web App text density.

## Category navigation

Category navigation should help discovery without becoming a second global site navbar.

Use:

- concise category labels;
- strong current-category state;
- reasonable count of top-level categories;
- archive/search for long tails.

## Popular content

A popular or highlighted section is useful when it reduces discovery cost. It should not duplicate the recent feed without a reason.

## Product integration

Product CTAs should be context-aware and lower pressure than homepage/pricing CTAs.

Preferred placements:

- article end;
- relevant inline callout;
- lightweight header/footer action;
- newsletter block.

Avoid inserting conversion blocks between every few paragraphs.

## Customer stories

Customer stories may use a more branded composition than normal articles but should still read as editorial evidence, not as a landing page disguised as a blog post.

## AI decision model

```yaml
experience: editorial
page: index | category | article | customer_story
content_priority: discover | read | update | convert
featured_story: true | false
category_nav: true | false
technical_content: true | false
metrics:
  index_container: 1080-1200
  article_body_measure: 680-760
  article_title: 44-58
  body: 16-18
  paragraph_gap: 16-24
```

The AI should optimize article pages for reading and index pages for discovery.