---
description: "Character presets with WebP icons for DeepSeek Harness Web profiles, plus financial, market research, strategy planning, and cross-border ecommerce roles."
kind: "package-bundle"
---

# WJ Character Presets

`@deepseek-ai/dsh-character-presets`

English | [中文](README.zh.md)

This optional bundle adds 12 character presets to a DeepSeek Harness Web profile. Each preset combines a distinct character voice with a primary area of expertise, while remaining useful for other questions. The Moon Lovers characters are adapted from [phoenixlucky/moon-lovers-skill](https://github.com/phoenixlucky/moon-lovers-skill).

## Contents

- [Use this package](#use-this-package)
- [Preset guide](#preset-guide)
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

| Character | Avatar | Distinctive traits |
| --- | --- | --- |
| Catgirl · Financial Assistant | <img src="assets/preset-icons/maoniang-search.webp" width="64" alt="Catgirl · Financial Assistant"/> | A warm catgirl voice for rigorous finance research: checks A-shares, gold, FX, and holdings, with sources, timestamps, and risks. |
| Xishi · Streamside Reflection | <img src="assets/preset-icons/moon-lovers-xishi.webp" width="64" alt="Xishi"/> | Quiet and perceptive: listens for feelings and relationship boundaries, then helps put difficult thoughts into gentle, clear words. |
| Wang Zhaojun · Frontier Moon | <img src="assets/preset-icons/moon-lovers-wang-zhaojun.webp" width="64" alt="Wang Zhaojun"/> | Steady and resilient: turns life goals into staged plans grounded in your time and circumstances. |
| Diaochan · Moonlit Grace | <img src="assets/preset-icons/moon-lovers-diaochan.webp" width="64" alt="Diaochan"/> | Quick-witted and playful: tunes your messages and conversation, leaving just the right opening in awkward or flirtatious moments. |
| Yang Yuhuan · Spring Warmth | <img src="assets/preset-icons/moon-lovers-yang-yuhuan.webp" width="64" alt="Yang Yuhuan"/> | Warm and attentive: plans menus and daily routines around your tastes, ingredients, and situation, remembering the little details. |
| Pan An · Refined Elegance | <img src="assets/preset-icons/moon-lovers-pan-an.webp" width="64" alt="Pan An"/> | Gentle and sincere: explores classical figures, allusions, and poetry while distinguishing history from legend. |
| Lanling Wang · Beneath the Mask | <img src="assets/preset-icons/moon-lovers-lanling-wang.webp" width="64" alt="Lanling Wang"/> | Reserved but protective: clarifies workplace goals, risks, and choices, then gives concise, practical next steps. |
| Wei Jie · Jade-like Clarity | <img src="assets/preset-icons/moon-lovers-wei-jie.webp" width="64" alt="Wei Jie"/> | Calm and gentle: explains difficult ideas step by step and turns material into outlines, exercises, and review plans. |
| Song Yu · Gifted Rhetoric | <img src="assets/preset-icons/moon-lovers-song-yu.webp" width="64" alt="Song Yu"/> | Witty and literary: drafts and revises for the audience and occasion, keeping the writing expressive and clear. |
| Zhuge Liang · Longzhong Research | <img src="assets/preset-icons/zhuge-liang-market-research.webp" width="64" alt="Zhuge Liang"/> | Investigates layer by layer—from industry and customers to competitors and trends—and makes the evidence behind market judgments visible. |
| Wei Liao · Strategic Planning | <img src="assets/preset-icons/wei-liao-strategy-planning.webp" width="64" alt="Wei Liao"/> | Turns goals into paths, resources, milestones, measures, and contingencies, weighing tradeoffs and risks along the way. |
| Zhang Liang · Cross-Border Trade | <img src="assets/preset-icons/zhang-liang-cross-border-ecommerce.webp" width="64" alt="Zhang Liang"/> | Starts with target markets, platforms, and products, then evaluates unit economics, fulfillment costs, and compliance risks. |

Each preset keeps its own character voice. Research presets use browser or research tools available to the selected Agent. The Catgirl · Financial Assistant uses the Web profile's existing Chrome MCP for market research and read-only `new-gold` tools for account holdings; configure these connections separately.

The avatars are 512 × 512 WebP icons cropped from a shared character sheet for a consistent illustration style.

## Implementation notes

- `cordis.patch.yml` registers the presets with `@deepseek-ai/dsh-agent-preset` and supplies persona and time-context instructions.
- `locale/en.json` and `locale/zh.json` provide the display name and summary shown in the plugin list. Harness reads them through the `./locale/*.json` export, so keep that export and the `locale` entry in `files`; without them the plugin falls back to its package name.
- The target Web profile must already provide the preset registry and the referenced DSH packages.
- This bundle does not install or configure browser, research, or account connections. Tools are available only when the Web profile has them configured.
