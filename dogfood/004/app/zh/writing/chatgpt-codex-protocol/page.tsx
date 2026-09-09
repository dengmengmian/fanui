import Link from "next/link";
import { SiteShell } from "../../../../components/site-shell";

const toc = [
  "这事为什么值得先说",
  "我真正想要的，其实一直没变",
  "协议变化为什么会伪装成模型问题",
  "路由不是为了炫技",
  "完整日志比猜更重要",
  "边界还是要守",
];

export default function ProtocolArticlePage() {
  return (
    <SiteShell>
      <article className="article-page">
        <header className="article-header shell">
          <div className="breadcrumb"><Link href="/zh">首页</Link><span>/</span><Link href="/zh/writing">文章</Link><span>/</span><span>AI 工程</span></div>
          <span className="story-label">AI ENGINEERING / PROTOCOLS</span>
          <h1>ChatGPT 和 Codex 合并了，<br className="desktop-break" />协议又动了一刀<span className="accent-dot">.</span></h1>
          <p className="article-deck">协议变化最危险的地方，是它可能把“工具没被正确传递”伪装成“模型突然变笨”。对 Coding Agent 来说，先验证链路，再评价模型。</p>
          <div className="article-meta"><span>2026/08/21</span><span>约 7 分钟阅读</span><span>MuxLayer / 协议转换</span></div>
        </header>

        <div className="shell article-layout">
          <div className="article-body">
            <p className="article-opening">ChatGPT 和 Codex 合成一个桌面端之后，界面和入口的变化都很明显。但我更关心的是另一层：协议又动了一刀。</p>
            <p>工具定义如果不再只出现在顶层 <code>tools</code>，而是进入另一段输入结构，中间层又没有把它还原给第三方模型，最终表现往往不是明确报错，而是模型在正文里“假装调用工具”。</p>

            <div className="protocol-visual" aria-label="客户端到模型的工具定义传递链路">
              <div className="protocol-caption"><span>REQUEST PATH / TOOL CONTRACT</span><span>LOCAL GATEWAY</span></div>
              <div className="protocol-flow">
                <div><small>CLIENT</small><strong>Codex</strong><span>additional_tools</span></div>
                <b>→</b>
                <div className="protocol-focus"><small>MUX</small><strong>Normalize</strong><span>restore tools</span></div>
                <b>→</b>
                <div><small>MODEL</small><strong>DeepSeek</strong><span>real tool schema</span></div>
              </div>
              <p>判断顺序：先证明工具契约穿过链路，再判断模型能力。</p>
            </div>

            <h2 id="why">这事为什么值得先说</h2>
            <p>客户端和上游之间多一层适配后，任何协议变化都会扩大排查空间。工具丢了、字段映射错了、响应转换不完整，都可能被误判成模型质量问题。</p>
            <p>所以第一原则不是立刻换模型，而是把请求路径变成可观察对象：原始输入是什么、转换后是什么、上游收到了什么、返回又经历了什么。</p>

            <h2 id="goal">我真正想要的，其实一直没变</h2>
            <p>我并不想再造一个 IDE。真正需要的是一个本地模型控制层：所有 Provider 的接口只配置一处，本地 Coding Agent 从这个入口调用，协议、路由和失败恢复都在这一层处理。</p>
            <blockquote>工具应该站在前面挡复杂性，而不是把新的复杂性重新推给使用者。</blockquote>

            <h2 id="protocol">协议变化为什么会伪装成模型问题</h2>
            <p>Agent 的输出质量依赖的不只是 prompt 和模型。工具 schema、运行时状态、上下文转换、错误恢复都会改变最终行为。缺一段结构化信息，模型就可能只能靠文本猜测下一步。</p>
            <p>这也是为什么 Agent 工程需要把“模型请求”当成可审计协议，而不是一个黑盒 HTTP 调用。</p>

            <h2 id="routing">路由不是为了炫技</h2>
            <p>多模型路由的价值不是让界面看起来更复杂，而是减少工作中断。主模型限流、某个 Provider 不支持图片、某条 Key 429，都应该尽量在控制层内消化。</p>

            <h2 id="logs">完整日志比猜更重要</h2>
            <p>没有 raw / normalized / upstream / response 四段证据时，调试很容易退化成“改配置—重试—再猜”。完整请求级日志的价值，是把猜测变成对比。</p>

            <h2 id="boundary">边界还是要守</h2>
            <p>本地网关负责接口收口、协议、路由、日志与 failover；Coding Agent 继续负责理解任务、执行工具和验证结果。边界清楚，两边才能各自演进。</p>

            <div className="article-end-note">
              <span>继续读</span>
              <h3>从协议适配继续往下，真正困难的是 Agent Runtime 如何持续推进长任务。</h3>
              <Link href="/zh/writing">返回 Writing →</Link>
            </div>
          </div>

          <aside className="article-toc">
            <div className="toc-desktop"><span>目录 / CONTENTS</span>{toc.map((item, i) => <a href={`#${["why","goal","protocol","routing","logs","boundary"][i]}`} key={item}><b>{String(i + 1).padStart(2, "0")}</b>{item}</a>)}</div>
            <details className="toc-mobile"><summary>目录 · {toc.length} 节</summary><div>{toc.map((item, i) => <a href={`#${["why","goal","protocol","routing","logs","boundary"][i]}`} key={item}>{item}</a>)}</div></details>
          </aside>
        </div>
      </article>
    </SiteShell>
  );
}
