# Apifox page-family study

Observed on 2026-09-15. Apifox is FanUI's primary quality reference, not a source-code or asset source.

## Coverage boundary

The public sitemap contained roughly 1,300 URLs, dominated by API Skills, Blog, and Help content. Those URLs reuse a much smaller set of templates. The study therefore samples every observable public page family rather than pretending each content URL is a unique design.

Observed page families:

| Family | Representative page | Repeated patterns |
| --- | --- | --- |
| Product marketing | `https://apifox.com/` | global header, Hero, CTA pair, feature tabs, disclosure groups, product evidence |
| Pricing | `https://apifox.com/pricing/` | plan cards, billing segment, highlighted recommendation, feature list |
| API marketplace | `https://apifox.com/apihub/` | search, category rail, resource-card matrix, metadata |
| Documentation home | `https://docs.apifox.com/` | docs shell, command search, sidebar tree, grouped entry cards |
| Documentation article | `https://docs.apifox.com/doc-5701987` | docs shell, article header, prose, media, copy action |
| Blog index | `https://apifox.com/blog/` | editorial header, featured story, article list, taxonomy label |
| Blog article | `https://apifox.com/blog/apifox-cli/` | article header, author/meta, reading column, related content |
| API Skills index | `https://apifox.com/apiskills/` | centered search Hero, large category selector, content cards |
| Authentication | `https://app.apifox.com/user/login` | restrained auth shell, mode switch, agreement links, appearance/language controls |
| Product workspace evidence | homepage/help screenshots and public product documentation | navigator, tabs, toolbar, split workspace, inspectors, request/response panels |

Authenticated teams, private projects, account/billing administration, and every runtime state were not observed directly. Do not claim those areas match this study without authorized access or supplied screenshots.

## Extracted design behavior

- Navigation and page chrome stay visually quiet; one primary action receives emphasis.
- Large surfaces use restrained borders and shallow depth rather than uniform floating cards.
- Marketing is more expressive than documentation and product workspaces.
- Search, category selection, and tabs expose the current mode before the content matrix.
- Pricing communicates recommendation through one dominant plan, not equal emphasis everywhere.
- Documentation prioritizes retrieval: persistent hierarchy, strong search, readable article measure, and local actions.
- Cards preserve a consistent information order: identity, title, supporting metadata, description, classification/action.
- Product workspaces are dense but calm, with current context, selected state, and primary action kept visible.

## Adaptation rule

Reimplement behavior and information hierarchy with FanUI semantic tokens. Do not copy Apifox source code, logos, illustrations, proprietary icons, exact gradients, exact palette, or product copy. Record uncertain behavior as unobserved instead of inventing it.

