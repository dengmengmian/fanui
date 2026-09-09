import { PageIntro, SiteShell } from "../../../components/site-shell";
import { projects } from "../../../lib/content";

export default function ProjectsPage() {
  return (
    <SiteShell>
      <PageIntro index="01" eyebrow="我创造什么" title="Projects" description="正在构建的软件、基础设施与个人 AI 工具。" />

      <section className="shell project-list-page">
        <div className="list-title"><span>ACTIVE WORK</span><span>03 PROJECTS</span></div>
        {projects.map((project) => (
          <article className="project-row" key={project.name}>
            <span className="row-index">{project.index}</span>
            <div className="project-primary">
              <div className="project-labels"><span>{project.state}</span><span>{project.category}</span></div>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
            <div className="project-evidence">
              <span>Focus</span>
              <strong>{project.evidence}</strong>
            </div>
            <a href={`https://github.com/dengmengmian/${project.name === "CodeLeveler" ? "CodeLeveler" : project.name === "MuxLayer" ? "muxlayer" : "ReviewGate"}`} aria-label={`打开 ${project.name} GitHub`}>↗</a>
          </article>
        ))}
      </section>

      <section className="shell project-principles section">
        <span className="index-label">HOW I BUILD</span>
        <div className="principle-grid">
          <div><strong>01</strong><h3>真实使用先于功能数量</h3><p>先解决每天真的会撞到的问题，再扩展产品边界。</p></div>
          <div><strong>02</strong><h3>证据先于“感觉变好了”</h3><p>重要改变尽量通过测试、Eval、日志与 dogfood 建立可追踪证据。</p></div>
          <div><strong>03</strong><h3>工具替人挡复杂性</h3><p>把协议、路由、状态和失败恢复收进基础设施，让使用者把注意力留给任务。</p></div>
        </div>
      </section>
    </SiteShell>
  );
}
