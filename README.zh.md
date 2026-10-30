---
description: "为 DeepSeek Harness Web profile 提供可选的猫娘金融助理 preset。"
kind: "package-bundle"
---

# @deepseek-ai/dsh-character-presets

English | [中文](README.zh.md)

## Summary

此可选 bundle 会为 DeepSeek Harness Web profile 添加“猫娘金融助理” Agent preset。安装本地 bundle 后，在“设置 → Agent 预设”中选择 `maoniang-search`。该 preset 使用 Web profile 已有的 Chrome MCP 与 `new-gold` 连接；这些服务需单独配置。移除 bundle 会同时移除 preset 声明。

## Table of Contents

- [使用此包](#use-this-package)
- [理解实现](#understand-the-implementation)
- [模型体验](#model-experience)

-----

<a id="use-this-package"></a>
## 使用此包

将 bundle 安装到现有 Web profile：

```sh
pnpm dsh plugin --profile web add E:\home\dsh_character_presets
```

打开“设置 → Agent 预设”，选择“猫娘金融助理”（`maoniang-search`）。该 preset 使用 Chrome MCP 检索公开市场信息，并使用 `new-gold` 只读工具查询账户持仓。这些连接必须已在 Web profile 中可用；preset 不会安装或配置它们。

使用 `pnpm dsh plugin --profile web remove @deepseek-ai/dsh-character-presets` 移除它。

## 理解实现

`cordis.patch.yml` 插入一条 `@deepseek-ai/dsh-agent-preset` 配置，其中包含原有 persona 与 time-context 插件。目标 Web profile 必须已提供 preset registry 和补丁引用的 DSH 包。

## 模型体验

选中此 preset 后，研究指引会加入 Agent 的 persona。它不会添加工具；Chrome MCP 与 `new-gold` 会在完成配置后提供工具。
