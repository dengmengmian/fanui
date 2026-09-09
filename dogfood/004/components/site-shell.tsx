import Link from "next/link";

const nav = [
  ["项目", "/zh/projects"],
  ["长期选择", "/zh/picks"],
  ["文章", "/zh/writing"],
  ["实验", "/zh/experiments"],
  ["关于", "/zh/about"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/zh" aria-label="Mafan Lab 首页">
          <span className="brand-mark" aria-hidden="true">M</span>
          <span>MAFAN LAB</span>
        </Link>
        <nav className="desktop-nav" aria-label="主导航">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="language-link" href="/">EN</Link>
          <details className="mobile-menu">
            <summary aria-label="打开菜单"><span></span><span></span></summary>
            <div className="mobile-menu-panel">
              {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
              <Link href="/">English</Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="footer-kicker">MAFAN LAB / PUBLIC LOG</div>
          <h2>记录一个独立开发者，<br />在 AI 时代如何创造、工作与生活。</h2>
        </div>
        <div className="newsletter">
          <span className="eyebrow">Newsletter / Email</span>
          <p>下一次更新，发到邮箱。</p>
          <form className="newsletter-form">
            <label className="sr-only" htmlFor="email">邮箱地址</label>
            <input id="email" type="email" placeholder="你的邮箱地址" />
            <button type="button">订阅更新</button>
          </form>
          <p className="consent">低频更新，不做营销轰炸。</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 麻凡</span>
        <div><a href="https://github.com/dengmengmian">GitHub ↗</a><a href="mailto:my@dengmengmian.com">Email ↗</a><a href="/index.xml">RSS ↗</a></div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}

export function PageIntro({ index, eyebrow, title, description }: { index: string; eyebrow: string; title: string; description: string }) {
  return (
    <header className="page-intro shell">
      <div className="index-label">Index {index}</div>
      <div className="intro-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}<span className="accent-dot">.</span></h1>
        <p>{description}</p>
      </div>
    </header>
  );
}
