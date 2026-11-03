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
- [角色图标](#preset-icons)
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

| 角色 | 主要领域 |
| --- | --- |
| 猫娘金融助理 | 金融、投资研究与账户持仓 |
| 诸葛亮 · 隆中调研 | 行业、客户、竞品与趋势调研 |
| 尉缭 · 经世筹策 | 战略规划与执行 |
| 张良 · 海贸筹略 | 跨境电商分析 |
| 西施 · 溪畔清影 | 情绪支持与亲密关系沟通 |
| 王昭君 · 塞上明月 | 人生规划与目标管理 |
| 貂蝉 · 月下惊鸿 | 沟通表达与社交情境 |
| 杨玉环 · 华清春暖 | 饮食灵感与日常生活 |
| 潘安 · 掷果盈车 | 古典文化 |
| 兰陵王 · 面具之下 | 职场与决策 |
| 卫玠 · 清羸如玉 | 学习与知识整理 |
| 宋玉 · 才冠楚襄 | 写作与修辞 |

每个角色都保留独立的人设风格。调研类角色会使用当前 Agent 可用的浏览器或研究工具。猫娘金融助理使用 Web profile 已有的 Chrome MCP 检索市场信息，并使用只读 `new-gold` 工具查询账户持仓；这些连接需在 profile 中另行配置。

<a id="preset-icons"></a>
## 角色图标

随包提供 512 × 512 WebP 格式图标，均由同一张角色图阵裁切，以保持插画风格统一。

<table>
<tr>
<td align="center"><img src="assets/preset-icons/maoniang-search.webp" width="112" alt="猫娘金融助理"/><br/>猫娘金融助理</td>
<td align="center"><img src="assets/preset-icons/zhuge-liang-market-research.webp" width="112" alt="诸葛亮"/><br/>诸葛亮</td>
<td align="center"><img src="assets/preset-icons/wei-liao-strategy-planning.webp" width="112" alt="尉缭"/><br/>尉缭</td>
<td align="center"><img src="assets/preset-icons/zhang-liang-cross-border-ecommerce.webp" width="112" alt="张良"/><br/>张良</td>
</tr>
<tr>
<td align="center"><img src="assets/preset-icons/moon-lovers-xishi.webp" width="112" alt="西施"/><br/>西施</td>
<td align="center"><img src="assets/preset-icons/moon-lovers-wang-zhaojun.webp" width="112" alt="王昭君"/><br/>王昭君</td>
<td align="center"><img src="assets/preset-icons/moon-lovers-diaochan.webp" width="112" alt="貂蝉"/><br/>貂蝉</td>
<td align="center"><img src="assets/preset-icons/moon-lovers-yang-yuhuan.webp" width="112" alt="杨玉环"/><br/>杨玉环</td>
</tr>
<tr>
<td align="center"><img src="assets/preset-icons/moon-lovers-pan-an.webp" width="112" alt="潘安"/><br/>潘安</td>
<td align="center"><img src="assets/preset-icons/moon-lovers-lanling-wang.webp" width="112" alt="兰陵王"/><br/>兰陵王</td>
<td align="center"><img src="assets/preset-icons/moon-lovers-wei-jie.webp" width="112" alt="卫玠"/><br/>卫玠</td>
<td align="center"><img src="assets/preset-icons/moon-lovers-song-yu.webp" width="112" alt="宋玉"/><br/>宋玉</td>
</tr>
</table>

<a id="implementation-notes"></a>
## 实现说明

- `cordis.patch.yml` 使用 `@deepseek-ai/dsh-agent-preset` 注册角色，并配置 persona 与 time-context 指引。
- 目标 Web profile 必须已提供 preset registry 和补丁引用的 DSH 包。
- 此 bundle 不会安装或配置浏览器、研究或账户连接；只有在 Web profile 中配置好的工具才能使用。
