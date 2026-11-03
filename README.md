---
description: "Character presets with WebP icons for DeepSeek Harness Web profiles, plus financial, market research, strategy planning, and cross-border ecommerce roles."
kind: "package-bundle"
---

# @deepseek-ai/dsh-character-presets

English | [中文](README.zh.md)

This optional bundle adds 12 character presets to a DeepSeek Harness Web profile. Each preset combines a distinct character voice with a primary area of expertise, while remaining useful for other questions. The Moon Lovers characters are adapted from [phoenixlucky/moon-lovers-skill](https://github.com/phoenixlucky/moon-lovers-skill).

## Contents

- [Use this package](#use-this-package)
- [Preset guide](#preset-guide)
- [Preset icons](#preset-icons)
- [Implementation notes](#implementation-notes)

## Use this package

Install the bundle into an existing Web profile:

```sh
pnpm dsh plugin --profile web add E:\home\dsh_character_presets
```

Then open **Settings → Agent presets** and select a preset. Remove the bundle with:

```sh
pnpm dsh plugin --profile web remove @deepseek-ai/dsh-character-presets
```

## Preset guide

| Preset | Primary area |
| --- | --- |
| Catgirl Financial Assistant | Finance, investments, and account holdings |
| Zhuge Liang · Longzhong Research | Industry, customer, competitor, and trend research |
| Wei Liao · Strategic Planning | Strategy and execution planning |
| Zhang Liang · Cross-Border Trade | Cross-border ecommerce analysis |
| Xishi · Streamside Reflection | Emotional support and relationship communication |
| Wang Zhaojun · Frontier Moon | Life planning and goal management |
| Diaochan · Moonlit Grace | Communication and social situations |
| Yang Yuhuan · Spring Warmth | Food inspiration and everyday life |
| Pan An · Refined Elegance | Classical culture |
| Lanling Wang · Beneath the Mask | Workplace decisions |
| Wei Jie · Jade-like Clarity | Learning and knowledge organization |
| Song Yu · Gifted Rhetoric | Writing and rhetoric |

Each preset keeps its own character voice. Research presets use browser or research tools available to the selected Agent. The Catgirl Financial Assistant uses the Web profile's existing Chrome MCP for market research and read-only `new-gold` tools for account holdings; configure these connections separately.

## Preset icons

The package includes 512 × 512 WebP icons cropped from a shared character sheet for a consistent illustration style.

<table>
<tr>
<td align="center"><img src="assets/preset-icons/maoniang-search.webp" width="112" alt="Catgirl Financial Assistant"/><br/>Catgirl Financial Assistant</td>
<td align="center"><img src="assets/preset-icons/zhuge-liang-market-research.webp" width="112" alt="Zhuge Liang"/><br/>Zhuge Liang</td>
<td align="center"><img src="assets/preset-icons/wei-liao-strategy-planning.webp" width="112" alt="Wei Liao"/><br/>Wei Liao</td>
<td align="center"><img src="assets/preset-icons/zhang-liang-cross-border-ecommerce.webp" width="112" alt="Zhang Liang"/><br/>Zhang Liang</td>
</tr>
<tr>
<td align="center"><img src="assets/preset-icons/moon-lovers-xishi.webp" width="112" alt="Xishi"/><br/>Xishi</td>
<td align="center"><img src="assets/preset-icons/moon-lovers-wang-zhaojun.webp" width="112" alt="Wang Zhaojun"/><br/>Wang Zhaojun</td>
<td align="center"><img src="assets/preset-icons/moon-lovers-diaochan.webp" width="112" alt="Diaochan"/><br/>Diaochan</td>
<td align="center"><img src="assets/preset-icons/moon-lovers-yang-yuhuan.webp" width="112" alt="Yang Yuhuan"/><br/>Yang Yuhuan</td>
</tr>
<tr>
<td align="center"><img src="assets/preset-icons/moon-lovers-pan-an.webp" width="112" alt="Pan An"/><br/>Pan An</td>
<td align="center"><img src="assets/preset-icons/moon-lovers-lanling-wang.webp" width="112" alt="Lanling Wang"/><br/>Lanling Wang</td>
<td align="center"><img src="assets/preset-icons/moon-lovers-wei-jie.webp" width="112" alt="Wei Jie"/><br/>Wei Jie</td>
<td align="center"><img src="assets/preset-icons/moon-lovers-song-yu.webp" width="112" alt="Song Yu"/><br/>Song Yu</td>
</tr>
</table>

## Implementation notes

- `cordis.patch.yml` registers the presets with `@deepseek-ai/dsh-agent-preset` and supplies persona and time-context instructions.
- The target Web profile must already provide the preset registry and the referenced DSH packages.
- This bundle does not install or configure browser, research, or account connections. Tools are available only when the Web profile has them configured.
