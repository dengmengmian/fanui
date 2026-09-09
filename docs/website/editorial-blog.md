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
```

The AI should optimize article pages for reading and index pages for discovery.