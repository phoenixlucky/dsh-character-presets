---
description: "为 DeepSeek Harness Web profile 提供角色 preset 与 WebP 图标，以及金融、市场调研、战略规划和跨境电商分析。"
kind: "package-bundle"
---

# @deepseek-ai/dsh-character-presets

[English](README.md) | 中文

此可选 bundle 为 DeepSeek Harness Web profile 提供 12 个角色 preset。每个角色都有鲜明的人设风格和主要负责领域，也能正常协助处理领域外的问题。白月光系列角色由 [phoenixlucky/moon-lovers-skill](https://github.com/phoenixlucky/moon-lovers-skill) 中的角色档案改编而来。

## 目录

- [安装与使用](#use-this-package)
- [角色指南](#preset-guide)
- [实现说明](#implementation-notes)

<a id="use-this-package"></a>
## 安装与使用

将 bundle 安装到现有 Web profile：

```sh
pnpm dsh plugin --profile web add E:\home\dsh_character_presets
```

然后打开“设置 → Agent 预设”并选择角色。使用以下命令移除 bundle：

```sh
pnpm dsh plugin --profile web remove @deepseek-ai/dsh-character-presets
```

<a id="preset-guide"></a>
## 角色指南

| 人物 | 头像 | 特点 |
| --- | --- | --- |
| 猫娘金融助理 | <img src="assets/preset-icons/maoniang-search.webp" width="64" alt="猫娘金融助理"/> | 亲切猫娘风格做严谨金融研究：核查 A 股、黄金、外汇与持仓数据，标清来源、时间和风险。 |
| 西施 · 溪畔清影 | <img src="assets/preset-icons/moon-lovers-xishi.webp" width="64" alt="西施"/> | 清冷含蓄，先细听情绪与关系里的边界，再陪你把难开口的话说得温柔而清楚。 |
| 王昭君 · 塞上明月 | <img src="assets/preset-icons/moon-lovers-wang-zhaojun.webp" width="64" alt="王昭君"/> | 沉稳坚韧，陪你把人生目标拆成阶段计划，结合时间与现实条件稳步推进。 |
| 貂蝉 · 月下惊鸿 | <img src="assets/preset-icons/moon-lovers-diaochan.webp" width="64" alt="貂蝉"/> | 灵动机敏，帮你斟酌聊天语气、润色消息，在尴尬或暧昧时留出恰好的接话空间。 |
| 杨玉环 · 华清春暖 | <img src="assets/preset-icons/moon-lovers-yang-yuhuan.webp" width="64" alt="杨玉环"/> | 温暖明媚，根据口味、食材和场景搭配菜单与日常安排，也记得你提过的小细节。 |
| 潘安 · 掷果盈车 | <img src="assets/preset-icons/moon-lovers-pan-an.webp" width="64" alt="潘安"/> | 温润真挚，陪你读懂古人、典故与诗文，分清史实和传说，也把关心落在细节里。 |
| 兰陵王 · 面具之下 | <img src="assets/preset-icons/moon-lovers-lanling-wang.webp" width="64" alt="兰陵王"/> | 外冷内柔，帮你厘清职场难题的目标、风险与选择，再给出简洁可行的行动步骤。 |
| 卫玠 · 清羸如玉 | <img src="assets/preset-icons/moon-lovers-wei-jie.webp" width="64" alt="卫玠"/> | 清淡温柔，循序渐进地讲清难懂概念，把资料整理成提纲、练习和复习步骤。 |
| 宋玉 · 才冠楚襄 | <img src="assets/preset-icons/moon-lovers-song-yu.webp" width="64" alt="宋玉"/> | 风雅机敏，按读者与场景构思、改写和润色文字，让表达有韵味也不失清楚。 |
| 诸葛亮 · 隆中调研 | <img src="assets/preset-icons/zhuge-liang-market-research.webp" width="64" alt="诸葛亮"/> | 如隆中推演般层层求证，从行业、客户、竞品到趋势拆解市场，并标明判断依据。 |
| 尉缭 · 经世筹策 | <img src="assets/preset-icons/wei-liao-strategy-planning.webp" width="64" alt="尉缭"/> | 把目标拆成路径、资源、节点、指标与预案，比较代价和风险，形成可执行战略。 |
| 张良 · 海贸筹略 | <img src="assets/preset-icons/zhang-liang-cross-border-ecommerce.webp" width="64" alt="张良"/> | 从目标市场、平台和选品入手，测算单位经济与履约成本，识别跨境机会和合规风险。 |

每个角色都保留独立的人设风格。调研类角色会使用当前 Agent 可用的浏览器或研究工具。猫娘金融助理使用 Web profile 已有的 Chrome MCP 检索市场信息，并使用只读 `new-gold` 工具查询账户持仓；这些连接需在 profile 中另行配置。

角色头像为 512 × 512 WebP 格式，均由同一张角色图阵裁切，以保持插画风格统一。

<a id="implementation-notes"></a>
## 实现说明

- `cordis.patch.yml` 使用 `@deepseek-ai/dsh-agent-preset` 注册角色，并配置 persona 与 time-context 指引。
- 目标 Web profile 必须已提供 preset registry 和补丁引用的 DSH 包。
- 此 bundle 不会安装或配置浏览器、研究或账户连接；只有在 Web profile 中配置好的工具才能使用。
