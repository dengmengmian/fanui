import Link from "next/link";
import { PageIntro, SiteShell } from "../../../components/site-shell";
import { articles } from "../../../lib/content";

const categories = ["全部", "Agent 工程", "独立开发", "产品", "生活系统"];

export default function WritingPage() {
  return (
    <SiteShell>
      <PageIntro index="03" eyebrow="我思考什么" title="Writing" description="关于 AI 工程、独立开发、产品与生活系统的文章。" />

      <div className="shell category-scroller" aria-label="文章分类">
        {categories.map((category, index) => <button className={index === 0 ? "active" : ""} key={category}>{category}</button>)}
      </div>

      <section className="shell featured-index-story">
        <Link href={articles[0].href} className="featured-index-copy">
          <span className="story-label">FEATURED / {articles[0].date}</span>
          <h2>{articles[0].title}</h2>
          <p>{articles[0].summary}</p>
          <div className="tag-line">{articles[0].tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </Link>
        <div className="evidence-visual">
          <div className="evidence-caption"><span>AGENT QUALITY</span><span>NOT A FEELING</span></div>
          <div className="evidence-stack">
            <div><span>Traditional test</span><strong>PASS</strong><small>implementation safety</small></div>
            <div className="evidence-focus"><span>Eval suite</span><strong>78%</strong><small>real task success</small></div>
            <div><span>Regression</span><strong>0</strong><small>false verified</small></div>
          </div>
        </div>
      </section>

      <section className="shell article-index-list" aria-label="文章列表">
        <div className="list-title"><span>RECENT / ARCHIVE</span><span>{String(articles.length).padStart(2, "0")} ARTICLES</span></div>
        {articles.slice(1).map((article) => (
          <Link className="article-index-row" href={article.href} key={article.index}>
            <span className="row-index">{article.index}</span>
            <div className="article-index-copy">
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
              <div className="tag-line">{article.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
            <div className="row-meta"><span>{article.date}</span><span>{article.readTime}</span></div>
            <span className="row-arrow">↗</span>
          </Link>
        ))}
      </section>
    </SiteShell>
  );
}
