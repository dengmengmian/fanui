import Link from "next/link";
import { SiteShell } from "../../../../components/site-shell";

export default function AgentEvalArticlePage() {
  return (
    <SiteShell>
      <article className="article-page">
        <header className="article-header shell">
          <div className="breadcrumb"><Link href="/zh">首页</Link><span>/</span><Link href="/zh/writing">文章</Link><span>/</span><span>Agent 工程</span></div>
          <span className="story-label">AGENT ENGINEERING / EVAL</span>
          <h1>传统测试都通过了，<br className="desktop-break" />怎么证明 Agent 真的变好了<span className="accent-dot">.</span></h1>
          <p className="article-deck">传统测试回答“代码有没有坏”，Eval 回答“Agent 在真实任务里有没有更好”。AI Agent 开发需要两套证据体系，而不是用其中一套替代另一套。</p>
          <div className="article-meta"><span>2026/08/21</span><span>约 8 分钟阅读</span><span>Agent / Eval / Engineering</span></div>
        </header>

        <div className="shell article-layout">
          <div className="article-body">
            <p className="article-opening">做 Agent 之后，一个越来越明显的问题是：单元测试、集成测试全部通过，并不能证明这次改动让 Agent 在真实任务上变强了。</p>
            <p>传统测试仍然必须保留。协议转换、状态机、工具执行、数据库写入这些确定性行为，最适合用测试建立安全底线。问题在于，Agent 最终质量还取决于模型决策、上下文、工具选择和长任务推进，这些结果不是一个固定断言就能覆盖。</p>

            <div className="protocol-visual" aria-label="传统测试与 Eval 的双层发布门">
              <div className="protocol-caption"><span>RELEASE GATE / TWO EVIDENCE LAYERS</span><span>CODE + BEHAVIOR</span></div>
              <div className="protocol-flow">
                <div><small>LAYER 01</small><strong>Tests</strong><span>implementation safety</span></div>
                <b>→</b>
                <div className="protocol-focus"><small>LAYER 02</small><strong>Eval</strong><span>behavior quality</span></div>
                <b>→</b>
                <div><small>DECISION</small><strong>Ship?</strong><span>evidence-backed</span></div>
              </div>
              <p>测试守住确定性行为；Eval 比较任务成功率、成本、耗时、回归和安全结果。</p>
            </div>

            <h2 id="different">两套体系回答的是不同问题</h2>
            <p>测试适合回答“给定输入是否得到预期输出”“错误是否被正确处理”。Eval 更像一个稳定的实验框架：固定任务集、统一环境、统一评分，再把改动前后的结果放在一起比较。</p>
            <blockquote>没有 Eval，Agent 优化很容易退化成“这次感觉聪明一点”。</blockquote>

            <h2 id="metrics">Eval 不只是一个成功率</h2>
            <p>任务成功率当然重要，但它不是唯一指标。一个 Agent 可能完成率变高，同时 turn 数暴涨、成本翻倍、耗时恶化，甚至出现错误完成却自称 Verified 的问题。</p>
            <p>因此至少要同时观察：成功、真实性、安全、成本、延迟，以及对已有能力的回归。</p>

            <h2 id="workflow">把 Eval 放进开发闭环</h2>
            <p>比较稳妥的流程是：代码先过传统测试，再运行固定 Eval Suite。只有实现安全和行为质量两层都成立，改动才真正值得保留。</p>

            <h2 id="dogfood">最后还需要 Dogfood</h2>
            <p>Eval 会把任务标准化，但真实使用仍然能暴露任务集没有覆盖的问题。Dogfood 的价值，就是把产品重新放回真实上下文：真实仓库、真实数据、真实交互、真实等待。</p>
            <p>这也是我现在越来越倾向的开发顺序：Test 保底，Eval 比较，Dogfood 找盲区。</p>

            <div className="article-end-note">
              <span>下一篇</span>
              <h3>Agent 行为能被评估之后，下一步就是让 Runtime 在长任务里持续产生可信证据。</h3>
              <Link href="/zh/writing/chatgpt-codex-protocol">继续阅读协议与 Runtime 问题 →</Link>
            </div>
          </div>

          <aside className="article-toc">
            <div className="toc-desktop"><span>目录 / CONTENTS</span><a href="#different"><b>01</b>两套体系回答不同问题</a><a href="#metrics"><b>02</b>Eval 不只是成功率</a><a href="#workflow"><b>03</b>进入开发闭环</a><a href="#dogfood"><b>04</b>最后还需要 Dogfood</a></div>
            <details className="toc-mobile"><summary>目录 · 4 节</summary><div><a href="#different">两套体系回答不同问题</a><a href="#metrics">Eval 不只是成功率</a><a href="#workflow">进入开发闭环</a><a href="#dogfood">最后还需要 Dogfood</a></div></details>
          </aside>
        </div>
      </article>
    </SiteShell>
  );
}
