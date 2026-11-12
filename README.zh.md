---
description: "为 DeepSeek Harness Web profile 提供角色 preset 与 WebP 图标，以及金融、市场调研、战略规划、跨境电商分析和六位编程大师（桌面壳、MCP、Vue、安全、交付、观测）。"
kind: "package-bundle"
---

# WJ 角色预设

`@tinyforge/dsh-character-presets`

[English](README.md) | 中文

此可选 bundle 为 DeepSeek Harness Web profile 提供 19 个角色 preset。每个角色都有鲜明的人设风格和主要负责领域，也能正常协助处理领域外的问题。白月光系列角色由 [phoenixlucky/moon-lovers-skill](https://github.com/phoenixlucky/moon-lovers-skill) 中的角色档案改编而来。其中六位「编程大师」按桌面应用架构分工，男女各三。

## 目录

- [安装与使用](#use-this-package)
- [角色指南](#preset-guide)
- [编程大师分工](#programming-masters)
- [实现说明](#implementation-notes)

<a id="use-this-package"></a>
## 安装与使用

将 bundle 安装到现有 Web profile：

```sh
pnpm dsh plugin --profile web add E:\home\dsh_character_presets
```

然后打开“设置 → Agent 预设”并选择角色。装完请重启 Harness：预设行、`/plugins/.../assets/` 头像路由与 bundle patch 都在启动时解析。使用以下命令移除 bundle：

```sh
pnpm dsh plugin --profile web remove @tinyforge/dsh-character-presets
```

不要把 `packages/preset-badges` 与本 bundle 一起安装：那个探针包已退役，不再绘制任何内容。

<a id="preset-guide"></a>
## 角色指南

| 人物 | 头像 | 特点 |
| --- | --- | --- |
| 猫娘·金融助理 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/maoniang-search.webp" width="64" alt="猫娘·金融助理"/> | 🐱 金融 · 📈 A股 — 亲切猫娘风格做严谨金融研究：核查 A 股、黄金、外汇与持仓数据，标清来源、时间和风险。 |
| 西施 · 溪畔清影 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/moon-lovers-xishi.webp" width="64" alt="西施"/> | 🌙 情绪 · 💬 关系 — 清冷含蓄，先细听情绪与关系里的边界，再陪你把难开口的话说得温柔而清楚。 |
| 王昭君 · 塞上明月 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/moon-lovers-wang-zhaojun.webp" width="64" alt="王昭君"/> | 🎯 目标 · 📅 规划 — 沉稳坚韧，陪你把人生目标拆成阶段计划，结合时间与现实条件稳步推进。 |
| 貂蝉 · 月下惊鸿 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/moon-lovers-diaochan.webp" width="64" alt="貂蝉"/> | 💬 沟通 · ✨ 氛围 — 灵动机敏，帮你斟酌聊天语气、润色消息，在尴尬或暧昧时留出恰好的接话空间。 |
| 杨玉环 · 华清春暖 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/moon-lovers-yang-yuhuan.webp" width="64" alt="杨玉环"/> | 🍲 饮食 · 🏡 日常 — 温暖明媚，根据口味、食材和场景搭配菜单与日常安排，也记得你提过的小细节。 |
| 潘安 · 掷果盈车 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/moon-lovers-pan-an.webp" width="64" alt="潘安"/> | 📜 文史 · 🏮 典故 — 温润真挚，陪你读懂古人、典故与诗文，分清史实和传说，也把关心落在细节里。 |
| 兰陵王 · 面具之下 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/moon-lovers-lanling-wang.webp" width="64" alt="兰陵王"/> | 💼 职场 · ⚖️ 决策 — 外冷内柔，帮你厘清职场难题的目标、风险与选择，再给出简洁可行的行动步骤。 |
| 卫玠 · 清羸如玉 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/moon-lovers-wei-jie.webp" width="64" alt="卫玠"/> | 📚 学习 · 🔍 概念 — 清淡温柔，循序渐进地讲清难懂概念，把资料整理成提纲、练习和复习步骤。 |
| 宋玉 · 才冠楚襄 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/moon-lovers-song-yu.webp" width="64" alt="宋玉"/> | ✍️ 写作 · 🎭 修辞 — 风雅机敏，按读者与场景构思、改写和润色文字，让表达有韵味也不失清楚。 |
| 诸葛亮 · 隆中调研 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/zhuge-liang-market-research.webp" width="64" alt="诸葛亮"/> | 🔭 调研 · 🏭 行业 — 如隆中推演般层层求证，从行业、客户、竞品到趋势拆解市场，并标明判断依据。 |
| 尉缭 · 经世筹策 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/wei-liao-strategy-planning.webp" width="64" alt="尉缭"/> | 🎯 战略 · ✅ 落地 — 把目标拆成路径、资源、节点、指标与预案，比较代价和风险，形成可执行战略。 |
| 张良 · 海贸筹略 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/zhang-liang-cross-border-ecommerce.webp" width="64" alt="张良"/> | 🚢 跨境 · 📦 履约 — 从目标市场、平台和选品入手，测算单位经济与履约成本，识别跨境机会和合规风险。 |
| 星小彪 · 跨境电商分析 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/xing-xiaobiao-cross-border-ecommerce.webp" width="64" alt="星小彪"/> | 🛒 电商 · 🏬 HD/LS — 只盯一件事，以 Home Depot、Lowe's 为主：用 `query-canvas` 调取自家店铺、商品与投放数据，上网核实平台与市场事实，再把差距拆成能落地的改法。 |
| 鲁班 · 机关营造 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/luban-desktop-core.webp" width="64" alt="鲁班"/> | 🦀 Rust · 💻 Tauri · 🔗 IPC — 以榫卯之准做桌面应用：先量后削，用契约与实测收口。 |
| 冯嫽 · 西域通译 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/fengliao-mcp.webp" width="64" alt="冯嫽"/> | 🧩 MCP · 📡 JSON-RPC · 🔒 Scope — 持节通译：先协商能力，再校验入参、审计调用。 |
| 顾恺之 · 传神写照 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/gu-kaizhi-vue-ui.webp" width="64" alt="顾恺之"/> | 🎨 Vue · 🧠 Pinia · ♿ A11y — 画清界面的每一态：状态、焦点、留白与可访问性。 |
| 墨子 · 守御非攻 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/mozi-security.webp" width="64" alt="墨子"/> | 🛡️ ACL · 🔑 Keychain · 🧾 Audit — 先设防再开门：默认拒绝、最小授权、失败关闭。 |
| 黄道婆 · 织造流传 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/huang-daopo-delivery.webp" width="64" alt="黄道婆"/> | 📦 Delivery · 🧾 Sign · 🚀 Rollback — 把交付织成可重复的工序：门禁、构建、签名与分发。 |
| 王贞仪 · 观象授时 | <img src="https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/wang-zhenyi-observability.webp" width="64" alt="王贞仪"/> | 📈 Metrics · 🧭 Trace · ⚡ Perf — 先测再断：给性能定基线，给告警定口径。 |

每个角色都保留独立的人设风格。上表中的 emoji 是 Client 模块绘制的胶囊标签，不属于 description 文本；描述本身是纯文本，因此同一行不会出现两遍标签。调研类角色会使用当前 Agent 可用的浏览器或研究工具。猫娘·金融助理使用 Web profile 已有的 `mcp-chrome-super` MCP 检索市场信息，并使用只读 `new-gold` 工具查询账户持仓；这些连接需在 profile 中另行配置。星小彪通过 `query-canvas` MCP 读取自有经营数据，通过 `mcp-chrome-super` MCP 核实外部信息；未连接时会说明缺哪些数据，不编造数字。

编程大师预设不安装语言或构建工具链，按项目现有的 `Cargo.toml`、`package.json` 与 lockfile 工作；提示词中的版本号只作参考基线。

角色头像均为 512 × 512 WebP，风格统一，19 个预设现在都有图标。preset 配置里没有图标字段，因此头像由 Client 模块从本包自己的 `/plugins/@tinyforge/dsh-character-presets/assets/preset-icons/<icon>.webp` 路由绘制；文件缺失、返回 404 或宿主没有该路由时退回同风格的首字圆章，不会出现破图。想只看标签不看头像，可在页面加载前于控制台设置 `window.__tfPresetAvatars = false`。

<a id="programming-masters"></a>
## 编程大师分工

六位角色按「桌面应用壳 + 原生核心 + sidecar + 界面」的分层，以及安全、交付、观测三条横切线划分。男女各三：鲁班、顾恺之、墨子为男性，冯嫽、黄道婆、王贞仪为女性。

| 架构方向 | 角色 | 负责内容 |
| --- | --- | --- |
| Desktop App Shell + Rust Native Core | 鲁班 | Tauri 应用壳与 command 注册、权限清单、Domain / Service、System APIs、SQL 与迁移、Tokio 任务与取消、IPC 桥与契约测试 |
| MCP Adapter（独立 sidecar） | 冯嫽 | MCP server / client、JSON-RPC 2.0 与能力协商、stdio 与 Streamable HTTP、工具 schema 与注册表、资源与提示、授权与审计、IPC client |
| Vue 界面层 | 顾恺之 | 页面与路由、Pinia 状态、IPC wrapper、组件库与设计令牌、键盘与焦点、减少动效与 i18n、加载 / 空 / 错误 / 离线态 |
| 安全边界 | 墨子 | 能力 ACL、OS keychain、边界输入校验、签名与校验和、token / scope / rate limit、供应链与审计 |
| 交付链路 | 黄道婆 | 本地联调、质量门禁、release 构建与体积、各平台打包签名与公证、更新渠道与回滚、配置分层与特性开关 |
| 可观测性与性能 | 王贞仪 | 结构化日志与 trace、指标与告警、崩溃上报、诊断包、启动 / 内存 / 序列化 / 调度测量与基线 |

跨层问题先定位归属层，再只改该层接口；写入、发布、吊销证书等不可逆动作一律先给步骤，等用户确认。各角色的提示词内都写明了这条协作纪律。

<a id="implementation-notes"></a>
## 实现说明

- `cordis.patch.yml` 使用 `@deepseek-ai/dsh-agent-preset` 注册角色，并配置 persona 与 time-context 指引。
- `locale/*.json` 提供插件列表中显示的名称与简介。Harness 通过 `./locale/*.json` 导出读取它们，因此需保留该导出与 `files` 中的 `locale/*.json`；缺失时会退回显示包名。
- 预设卡片只渲染 name 与 description 两个字段；preset 的配置项只有 `id`、`name`、`description`、`order`、`plugins`。所以 description 里不写任何标记或 emoji 标签，领域标签统一由 `client.js` 的 `PRESETS[].tags` 提供。
- `client.js` 这一 Client 模块为每处预设界面插入一行：头像加若干胶囊标签。预设卡片上插在名称与描述之间；输入框预设下拉的每一项里插在名称与描述之间。`dsh.client` 声明 `platform: web`，`cordis.patch.yml` 末尾的一行 `preset-badges-client` 让 Web app 加载 `./client.js`。
- 匹配有两条路径：渲染了描述的界面（Agent 预设卡片、预设下拉项）用描述里的一段稳定文字（`PRESETS[].needle`）匹配，行插在该文本之前；只渲染名称的界面用完整可见名称（`PRESETS[].name`）匹配，行插在名称之后。描述优先，所以同时显示名称与描述的卡片仍把行放在两者之间。不依赖任何 CSS 类名。
- 把标签画在控件内部的紧凑触发器一律跳过。输入框旁的预设座位是 `button[aria-haspopup="menu"] > span`，而 React 每次切换只改这个按钮里的文字、不复用新节点，于是行会溢出 28px 的按钮，并且每次选择都留下上一行，堆在输入框上。因此只有内容容器才插行：下拉项符合（它包着名称 + 描述列），设置卡片也符合（描述是普通块）。
- 只跳过两类区域：聊天记录（`[data-slot^="conversation.chat."]`，用户可能在那里引用描述）与不参与渲染的节点（`script`、`style`、`template`、`noscript`、`title`）。菜单、列表框与 `aria-hidden` 子树照常装饰——有些 profile 关掉了设置页，预设只在输入框下拉里出现。
- 模块只插入自己的节点，不改写、不重新挂载、不改宿主样式，也不会撑宽设置面板；重渲染时复用原行（描述元素被替换则改挂到新元素），不会叠加重复行；`ctx.effect` 卸载时取消待执行的帧、移除全部行与头像与样式，并释放全局标记。若已有其他 bundle 占用了徽章，第二份只打一条警告，保持静默。
- 打开预设列表后可在控制台执行 `window.__tfPresetBadges` 查看 `{ package, rows, avatars, missing, disposed }`。`missing` 列出没找到卡片的预设——宿主标记变动就是这个样子，此时该行退回「名称 + 纯文本描述」，不显示任何标签。
- 改名或改写描述时要同步 `PRESETS`：needle 必须仍是 `description` 的原样片段，否则那张卡片会失去徽章。`test/badge-harness.html` 在普通浏览器页面里复现卡片、触发器、下拉、重渲染与卸载路径，逐条打印 PASS/FAIL；`test/seat-repro.html` 按宿主标记重建真实的输入框座位并连续切换预设，也就是 v1.6.2 修掉的回归。
- 本 bundle 面向 DSH 0.2.2-rc.1，接受 `@deepseek-ai/dsh-agent-preset`、`@deepseek-ai/dsh-persona` 与 `@deepseek-ai/dsh-time-context` 从 `0.2.2-rc.1` 起、`0.3.0` 之前的匹配版本，因此 0.2 内的补丁与 rc 升级无需重新发布本包。DSH runtime 进入新的次版本时，需要连同 `engines.dsh` 一起放宽这些区间。
- 这三个 Harness 包只能声明为**可选 peer，不能声明为 dependencies**：runtime 自己已经提供它们；一旦作为依赖安装，使用 `nodeLinker: hoisted` 的 profile 会把插件自带的旧副本提升到 `node_modules/@deepseek-ai`，预设行便解析到那份副本。旧版 `@deepseek-ai/dsh-agent-preset` 声明了精确的 `@deepseek-ai/dsh-agent-preset-registry` peer，于是 DSH 的版本闸门会把每一行标记为 `incompatible-version` 并禁用，预设列表因此为空——这正是 1.6.3 在 0.2.2-rc.2 上"整个不能用"的原因。请把它们放在 `peerDependencies` 并配 `peerDependenciesMeta.optional`，让任何 profile 都不会安装自己的副本。
- 此 bundle 不会安装或配置浏览器、研究或账户连接；只有在 Web profile 中配置好的工具才能使用。编程大师预设同样不安装 Rust、Node 或打包工具。
- 头像文件位于 `assets/preset-icons/<icon>.webp`，由 Harness 的资源路由提供；这要求 `package.json` 里有 `"./assets/*": "./assets/*"` 导出、`files` 里含对应文件。`files` 故意逐个列出 19 个图标：若只写目录，仓库里的 `contact-sheet.webp`（总览图，仅供仓库）也会被打包发布。因此新增图标时还要在 `files` 里补一行。文件缺失、返回 404 或宿主没有该路由时，退回首字圆章而不是破图。该路由在 Harness 启动时解析，因此新装或改动过的副本需要重启 Harness 才会出现头像。
- `locale/` 覆盖 Harness 列插件时支持的 8 种语言：`en`、`zh`、`de`、`es`、`fr`、`ja`、`pt`、`ru`。缺哪种语言，插件列表就退回显示包名；因此要保留 `locale/*.json` 导出、`files` 中的 `locale/*.json`，并让每个文件都用同一套 `meta.title` / `meta.description` 键。
- 上表头像用的是 `raw.githubusercontent.com` 绝对地址：npm 不会解析 README 里的包内相对路径。地址指向 `main` 分支，因此图标要先提交并推送，npm 页面才会显示；若仓库或默认分支变更，需同步修改每个 `<img src>`。

## 许可证

本项目采用 [MIT 许可证](LICENSE)。
