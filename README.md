---
description: "Character presets with WebP icons for DeepSeek Harness Web profiles, plus financial, market research, strategy planning, cross-border ecommerce roles, and six programming masters (desktop shell, MCP, Vue, security, delivery, observability)."
kind: "package-bundle"
---

# WJ Character Presets

`@tinyforge/dsh-character-presets`

English | [中文](README.zh.md)

This optional bundle adds 19 character presets to a DeepSeek Harness Web profile. Each preset combines a distinct character voice with a primary area of expertise, while remaining useful for other questions. The Moon Lovers characters are adapted from [phoenixlucky/moon-lovers-skill](https://github.com/phoenixlucky/moon-lovers-skill). Six new "programming master" presets split the desktop-app stack between three men and three women.

## Contents

- [Use this package](#use-this-package)
- [Preset guide](#preset-guide)
- [Programming masters](#programming-masters)
- [Implementation notes](#implementation-notes)

## Use this package

Install the bundle into an existing Web profile:

```sh
pnpm dsh plugin --profile web add E:\home\dsh_character_presets
```

Then open **Settings → Agent presets** and select a preset. Remove the bundle with:

```sh
pnpm dsh plugin --profile web remove @tinyforge/dsh-character-presets
```

## Preset guide

| Character | Avatar | Distinctive traits |
| --- | --- | --- |
| Catgirl · Financial Assistant | <img src="assets/preset-icons/maoniang-search.webp" width="64" alt="Catgirl · Financial Assistant"/> | 🐱 Finance · 📈 A-shares — A warm catgirl voice for rigorous finance research: checks A-shares, gold, FX, and holdings, with sources, timestamps, and risks. |
| Xishi · Streamside Reflection | <img src="assets/preset-icons/moon-lovers-xishi.webp" width="64" alt="Xishi"/> | 🌙 Feelings · 💬 Relationships — Quiet and perceptive: listens for feelings and relationship boundaries, then helps put difficult thoughts into gentle, clear words. |
| Wang Zhaojun · Frontier Moon | <img src="assets/preset-icons/moon-lovers-wang-zhaojun.webp" width="64" alt="Wang Zhaojun"/> | 🎯 Goals · 📅 Planning — Steady and resilient: turns life goals into staged plans grounded in your time and circumstances. |
| Diaochan · Moonlit Grace | <img src="assets/preset-icons/moon-lovers-diaochan.webp" width="64" alt="Diaochan"/> | 💬 Messaging · ✨ Tone — Quick-witted and playful: tunes your messages and conversation, leaving just the right opening in awkward or flirtatious moments. |
| Yang Yuhuan · Spring Warmth | <img src="assets/preset-icons/moon-lovers-yang-yuhuan.webp" width="64" alt="Yang Yuhuan"/> | 🍲 Food · 🏡 Daily life — Warm and attentive: plans menus and daily routines around your tastes, ingredients, and situation, remembering the little details. |
| Pan An · Refined Elegance | <img src="assets/preset-icons/moon-lovers-pan-an.webp" width="64" alt="Pan An"/> | 📜 Classics · 🏮 Allusions — Gentle and sincere: explores classical figures, allusions, and poetry while distinguishing history from legend. |
| Lanling Wang · Beneath the Mask | <img src="assets/preset-icons/moon-lovers-lanling-wang.webp" width="64" alt="Lanling Wang"/> | 💼 Workplace · ⚖️ Decisions — Reserved but protective: clarifies workplace goals, risks, and choices, then gives concise, practical next steps. |
| Wei Jie · Jade-like Clarity | <img src="assets/preset-icons/moon-lovers-wei-jie.webp" width="64" alt="Wei Jie"/> | 📚 Study · 🔍 Concepts — Calm and gentle: explains difficult ideas step by step and turns material into outlines, exercises, and review plans. |
| Song Yu · Gifted Rhetoric | <img src="assets/preset-icons/moon-lovers-song-yu.webp" width="64" alt="Song Yu"/> | ✍️ Writing · 🎭 Rhetoric — Witty and literary: drafts and revises for the audience and occasion, keeping the writing expressive and clear. |
| Zhuge Liang · Longzhong Research | <img src="assets/preset-icons/zhuge-liang-market-research.webp" width="64" alt="Zhuge Liang"/> | 🔭 Research · 🏭 Industry — Investigates layer by layer—from industry and customers to competitors and trends—and makes the evidence behind market judgments visible. |
| Wei Liao · Strategic Planning | <img src="assets/preset-icons/wei-liao-strategy-planning.webp" width="64" alt="Wei Liao"/> | 🎯 Strategy · ✅ Execution — Turns goals into paths, resources, milestones, measures, and contingencies, weighing tradeoffs and risks along the way. |
| Zhang Liang · Cross-Border Trade | <img src="assets/preset-icons/zhang-liang-cross-border-ecommerce.webp" width="64" alt="Zhang Liang"/> | 🚢 Cross-border · 📦 Fulfillment — Starts with target markets, platforms, and products, then evaluates unit economics, fulfillment costs, and compliance risks. |
| Xing Xiaobiao · Cross-Border E-Commerce Analysis | — | 🛒 E-commerce · 🏬 HD/LS — Stays on one job, with Home Depot and Lowe's first: pulls your own store, product, and ad data through `query-canvas`, checks platform and market facts on the web, then turns the gap into concrete fixes. |
| Lu Ban · Workshop Craft | — | 🦀 Rust · 💻 Tauri · 🔗 IPC — builds the desktop shell and native core to measured fits: contract first, verify by running. |
| Feng Liao · Envoy Interpreter | — | 🧩 MCP · 📡 JSON-RPC · 🔒 Scope — negotiates capabilities before calling, validates inputs, audits every tool call. |
| Gu Kaizhi · Spirit in Likeness | — | 🎨 Vue · 🧠 Pinia · ♿ A11y — draws every interface state: loading, empty, error, offline, focus, motion, i18n. |
| Mozi · Defense Without Aggression | — | 🛡️ ACL · 🔑 Keychain · 🧾 Audit — sets defenses before opening doors: deny by default, least privilege, fail closed. |
| Huang Daopo · Weaving the Line | — | 📦 Delivery · 🧾 Sign · 🚀 Rollback — turns release into repeatable steps: gates, builds, signing, channels, rollback. |
| Wang Zhenyi · Reading the Sky | — | 📈 Metrics · 🧭 Trace · ⚡ Perf — measures before judging: baselines, traces, crash reports, and performance budgets. |

Each preset keeps its own character voice. Every description starts with emoji chips so the preset list is scannable by domain. Research presets use browser or research tools available to the selected Agent. The Catgirl · Financial Assistant uses the Web profile's existing `mcp-chrome-super` MCP for market research and read-only `new-gold` tools for account holdings; configure these connections separately. Xing Xiaobiao reads your own business data through a `query-canvas` MCP and fetches external facts through the `mcp-chrome-super` MCP; without those connections it says which data is missing instead of inventing numbers.

The programming-master presets install no language or build toolchain and work against the project's existing `Cargo.toml`, `package.json`, and lockfiles; the versions quoted in their prompts are reference baselines only.

The avatars are 512 × 512 WebP icons cropped from a shared character sheet for a consistent illustration style. The programming-master presets ship without avatars and fall back to the default icon.

## Programming masters

The six presets split the "desktop shell + native core + sidecar + UI" stack, plus the security, delivery, and observability cross-cuts. Three are men (Lu Ban, Gu Kaizhi, Mozi) and three are women (Feng Liao, Huang Daopo, Wang Zhenyi).

| Layer | Character | Owns |
| --- | --- | --- |
| Desktop App Shell + Rust Native Core | Lu Ban | Tauri shell and command registration, capability list, Domain / Service, System APIs, SQL and migrations, Tokio tasks and cancellation, IPC bridge and contract tests |
| MCP Adapter (independent sidecar) | Feng Liao | MCP server / client, JSON-RPC 2.0 and capability negotiation, stdio and Streamable HTTP, tool schema and registry, resources and prompts, auth and audit, IPC client |
| Vue UI | Gu Kaizhi | Pages and routes, Pinia state, IPC wrapper, component library and design tokens, keyboard and focus, reduced motion and i18n, loading / empty / error / offline states |
| Security | Mozi | Capability ACL, OS keychain, boundary input validation, signatures and checksums, token / scope / rate limit, supply chain and audit |
| Delivery | Huang Daopo | Local dev loop, quality gates, release build and size, per-platform packaging, signing and notarization, update channels and rollback, config layering and feature flags |
| Observability & Performance | Wang Zhenyi | Structured logs and traces, metrics and alerts, crash reports, diagnostics bundles, startup / memory / serialization / scheduling measurements and baselines |

For cross-layer problems, locate the owning layer first and change only that layer's interface. Irreversible actions — writes, releases, certificate revocation — are always proposed as steps and left for you to confirm; every persona states this rule.

## Implementation notes

- `cordis.patch.yml` registers the presets with `@deepseek-ai/dsh-agent-preset` and supplies persona and time-context instructions.
- `locale/en.json` and `locale/zh.json` provide the display name and summary shown in the plugin list. Harness reads them through the `./locale/*.json` export, so keep that export and the `locale` entry in `files`; without them the plugin falls back to its package name.
- The preset card renders **name** and **description** only; the preset schema exposes `id`, `name`, `description`, `order`, and `plugins`. Colored tags written into the description can therefore only be emoji chips (`🦀 Rust · 💻 Tauri · 🔗 IPC`).
- Real pill badges are drawn by the Client module in `client.js`: the `dsh.client` entry declares `platform: web`, and the trailing `preset-badges-client` row in `cordis.patch.yml` makes the Web app load `./client.js`. The script matches the 19 presets by exact visible name, appends read-only chips after each name, and re-attaches them after re-renders with a `MutationObserver`. `ctx.effect` disposal removes every node, the observer, and the stylesheet. It only inserts its own nodes — it never rewrites or removes host DOM — and stays silent when nothing matches. Inspect `window.__tfPresetBadges` in the console for the decorated row count.
- The emoji prefixes stay in the descriptions as a fallback for when the decoration does not attach; drop them once the badges are confirmed if you do not want both.
- This bundle targets DSH 0.2.2-rc.1 and pins matching `@deepseek-ai/dsh-agent-preset`, `@deepseek-ai/dsh-persona`, and `@deepseek-ai/dsh-time-context` releases; update them together when the DSH runtime changes.
- This bundle does not install or configure browser, research, account, or build-tool connections. Tools are available only when the profile has them configured.
- Preset icons resolve by preset id to `assets/preset-icons/<preset-id>.webp`; drop in a 512 × 512 WebP when you want an avatar, with no YAML change.

## License

This project is licensed under the [MIT License](LICENSE).
