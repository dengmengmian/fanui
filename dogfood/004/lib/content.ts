export type Article = {
  index: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
  href: string;
};

export const articles: Article[] = [
  {
    index: "01",
    title: "传统测试都通过了，怎么证明 Agent 真的变好了",
    summary: "传统测试证明实现没有坏；Eval 才回答 Agent 在真实任务里有没有变强。用固定任务、统一评分与重复运行，把成功率、成本、耗时和回归放到同一张证据表里。",
    date: "2026/08/21",
    readTime: "8 min",
    tags: ["Agent 开发", "Eval", "AI 工程"],
    href: "/zh/writing/agent-eval",
  },
  {
    index: "02",
    title: "我做了一个 Coding Agent，才发现调用模型只是开始",
    summary: "长任务真正困难的是状态、工具记录、可观察性和失败恢复。聊天只是入口，Runtime 才是持续推进工作的主体。",
    date: "2026/08/21",
    readTime: "5 min",
    tags: ["Coding Agent", "Runtime", "产品"],
    href: "/zh/writing/coding-agent-runtime",
  },
  {
    index: "03",
    title: "ChatGPT 和 Codex 合并了，协议又动了一刀",
    summary: "客户端协议变化会让第三方模型丢失工具定义。问题表面像模型退化，实际可能是中间协议被吃掉。",
    date: "2026/08/21",
    readTime: "7 min",
    tags: ["MuxLayer", "协议转换", "AI 编程"],
    href: "/zh/writing/chatgpt-codex-protocol",
  },
  {
    index: "04",
    title: "分享个我自用的小工具（自己做的）",
    summary: "ReviewGate 是一个合并前质量闸口：优先拦截高风险问题，降低 AI 辅助开发里的低价值审查噪音。",
    date: "2026/08/21",
    readTime: "3 min",
    tags: ["ReviewGate", "代码审查"],
    href: "/zh/writing/reviewgate",
  },
  {
    index: "05",
    title: "中年以后，健身不只是为了身体，也是为了保住独处和思考的时间",
    summary: "锻炼也是一种主动退出：暂时离开工作、家庭和碎片信息，恢复注意力与秩序。",
    date: "2026/08/21",
    readTime: "4 min",
    tags: ["一人做事", "节奏"],
    href: "/zh/writing/training-and-thinking",
  },
  {
    index: "06",
    title: "一人做事最容易高估执行力，低估方向和节奏",
    summary: "执行很显眼，但方向和阶段判断决定了努力是否真正推进主线。",
    date: "2026/07/29",
    readTime: "5 min",
    tags: ["独立开发", "方向", "节奏"],
    href: "/zh/writing/direction-and-rhythm",
  },
];

export const projects = [
  {
    index: "01",
    name: "CodeLeveler",
    state: "主项目 · 已上线",
    category: "AI Coding Agent",
    description: "本地优先的 Coding Agent runtime：在真实代码库中理解、修改、运行并验证代码。",
    evidence: "Runtime / Eval / Grounded verification",
  },
  {
    index: "02",
    name: "MuxLayer",
    state: "进行中 · 已上线",
    category: "AI Infrastructure",
    description: "面向 Coding Agent 的本地模型控制层：统一出口、协议转换、故障转移与请求追踪。",
    evidence: "Routing / Protocols / Failover",
  },
  {
    index: "03",
    name: "ReviewGate",
    state: "进行中 · 已上线",
    category: "AI Code Review",
    description: "面向 AI 辅助代码的合并前质量闸口：优先拦截高风险问题，减少低价值审查噪音。",
    evidence: "Risk gate / CI / Review evidence",
  },
];
