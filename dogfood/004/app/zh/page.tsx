import Link from "next/link";
import { SiteShell } from "../../components/site-shell";
import { articles, projects } from "../../lib/content";

export default function ZhHomePage() {
  return (
    <SiteShell>
      <section className="home-hero shell">
        <div className="hero-rail">
          <span>PUBLIC / AI / INDEPENDENT</span>
          <span className="live-state"><i />持续构建中</span>
        </div>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">公开实验室 / Independent Builder</p>
            <h1>麻凡<span className="accent-dot">.</span></h1>
          </div>
          <div className="hero-statement">
            <p className="hero-lead">AI 时代独立开发者。</p>
            <p>我正在探索 AI 时代，一个人如何创造软件、构建工具，并设计自己的工作与生活系统。</p>
            <div className="hero-actions">
              <Link className="primary-link" href="/zh/projects">查看项目 <span>→</span></Link>
              <Link href="/zh/writing">阅读文章</Link>
              <Link href="/zh/picks">长期选择</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="project-band section shell">
        <div className="section-heading compact-heading">
          <span className="index-label">01 / 正在构建</span>
          <h2>把想法做成可以运行的东西。</h2>
        </div>
        <div className="project-strip">
          {projects.map((project) => (
            <Link key={project.name} href="/zh/projects" className="project-strip-item">
              <span className="strip-index">{project.index}</span>
              <div>
                <span className="project-state">{project.state}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <span className="strip-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section shell writing-preview">
        <div className="section-heading">
          <span className="index-label">02 / 最近写作</span>
          <div>
            <h2>记录判断、过程与<br />仍然没有答案的问题。</h2>
            <Link className="text-link" href="/zh/writing">全部文章 →</Link>
          </div>
        </div>

        <div className="featured-story">
          <Link className="featured-copy" href={articles[0].href}>
            <span className="story-label">Featured / Agent Engineering</span>
            <h3>{articles[0].title}</h3>
            <p>{articles[0].summary}</p>
            <div className="story-meta"><span>{articles[0].date}</span><span>{articles[0].readTime}</span></div>
          </Link>
          <div className="eval-visual" aria-label="传统测试与 Eval 的证据闭环示意图">
            <div className="visual-topline"><span>EVAL LOOP</span><span>REAL TASK / EVIDENCE</span></div>
            <div className="eval-flow">
              <div><small>01</small><strong>Change</strong><span>代码 / Prompt / Runtime</span></div>
              <b>→</b>
              <div><small>02</small><strong>Test</strong><span>实现没有坏</span></div>
              <b>→</b>
              <div className="active-node"><small>03</small><strong>Eval</strong><span>Agent 是否变强</span></div>
            </div>
            <div className="metric-row"><span>Success ↑</span><span>Cost ↓</span><span>Latency ↓</span><span>Regression 0</span></div>
          </div>
        </div>

        <div className="recent-list">
          {articles.slice(1, 4).map((article) => (
            <Link href={article.href} key={article.index} className="recent-row">
              <span className="row-index">{article.index}</span>
              <div className="row-main"><h3>{article.title}</h3><p>{article.summary}</p></div>
              <div className="row-meta"><span>{article.date}</span><span>{article.tags[0]}</span></div>
              <span className="row-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section shell current-note">
        <span className="index-label">03 / CURRENT</span>
        <div className="current-grid">
          <h2>最近在做什么。</h2>
          <dl>
            <div><dt>在做</dt><dd>继续打磨 CodeLeveler 与 MuxLayer，同时接少量合适的项目。</dd></div>
            <div><dt>在写</dt><dd>Agent 工程、独立开发，以及一个人长期做产品的方法。</dd></div>
            <div><dt>在用</dt><dd>Claude Code · Codex · Next.js · Go · Rust · 自研工具。</dd></div>
          </dl>
        </div>
      </section>
    </SiteShell>
  );
}
