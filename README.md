---
description: "Character presets with WebP icons for DeepSeek Harness Web profiles, plus financial, market research, strategy planning, cross-border ecommerce roles, six programming masters (desktop shell, MCP, Vue, security, delivery, observability), a web-crawling specialist, and a DSH plugin author."
kind: "package-bundle"
---

# WJ Character Presets

`@tinyforge/dsh-character-presets`

English | [中文](README.zh.md)

This optional bundle adds 21 character presets to a DeepSeek Harness Web profile. Each preset combines a distinct character voice with a primary area of expertise, while remaining useful for other questions. The Moon Lovers characters are adapted from [phoenixlucky/moon-lovers-skill](https://github.com/phoenixlucky/moon-lovers-skill). Six "programming master" presets split the desktop-app stack between three men and three women. Two further presets cover the meta-work around that stack: a web-crawling specialist and a DSH plugin author.

## Contents

- [Use this package](#use-this-package)
- [Preset guide](#preset-guide)
- [Programming masters](#programming-masters)
- [Crawling and plugin authoring](#crawling-and-plugin-authoring)
- [Implementation notes](#implementation-notes)

## Use this package

Install the bundle into an existing Web profile:

```sh
pnpm dsh plugin --profile web add E:\home\dsh_character_presets
```

Then open **Settings → Agent presets** and select a preset. Restart the Harness afterwards: preset rows, the `/plugins/.../assets/` avatar route, and the bundle patch are all resolved at start-up. Remove the bundle with:

```sh
pnpm dsh plugin --profile web remove @tinyforge/dsh-character-presets
```

Do not install `packages/preset-badges` alongside this bundle: that probe is retired and now draws nothing.

## Preset guide

| Character | Avatar | Domain tags | What it does |
| --- | --- | --- | --- |
| Catgirl · Financial Assistant | ![Catgirl · Financial Assistant](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/maoniang-search.webp) | `Finance` `A-shares` | A warm catgirl voice for rigorous finance research: checks A-shares, gold, FX, and holdings, with sources, timestamps, and risks. |
| Xishi · Streamside Reflection | ![Xishi](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/moon-lovers-xishi.webp) | `Feelings` `Relationships` | Quiet and perceptive: listens for feelings and relationship boundaries, then helps put difficult thoughts into gentle, clear words. |
| Wang Zhaojun · Frontier Moon | ![Wang Zhaojun](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/moon-lovers-wang-zhaojun.webp) | `Goals` `Planning` | Steady and resilient: turns life goals into staged plans grounded in your time and circumstances. |
| Diaochan · Moonlit Grace | ![Diaochan](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/moon-lovers-diaochan.webp) | `Messaging` `Tone` | Quick-witted and playful: tunes your messages and conversation, leaving just the right opening in awkward or flirtatious moments. |
| Yang Yuhuan · Spring Warmth | ![Yang Yuhuan](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/moon-lovers-yang-yuhuan.webp) | `Food` `Daily life` | Warm and attentive: plans menus and daily routines around your tastes, ingredients, and situation, remembering the little details. |
| Pan An · Refined Elegance | ![Pan An](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/moon-lovers-pan-an.webp) | `Classics` `Allusions` | Gentle and sincere: explores classical figures, allusions, and poetry while distinguishing history from legend. |
| Lanling Wang · Beneath the Mask | ![Lanling Wang](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/moon-lovers-lanling-wang.webp) | `Workplace` `Decisions` | Reserved but protective: clarifies workplace goals, risks, and choices, then gives concise, practical next steps. |
| Wei Jie · Jade-like Clarity | ![Wei Jie](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/moon-lovers-wei-jie.webp) | `Study` `Concepts` | Calm and gentle: explains difficult ideas step by step and turns material into outlines, exercises, and review plans. |
| Song Yu · Gifted Rhetoric | ![Song Yu](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/moon-lovers-song-yu.webp) | `Writing` `Rhetoric` | Witty and literary: drafts and revises for the audience and occasion, keeping the writing expressive and clear. |
| Zhuge Liang · Longzhong Research | ![Zhuge Liang](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/zhuge-liang-market-research.webp) | `Research` `Industry` | Investigates layer by layer—from industry and customers to competitors and trends—and makes the evidence behind market judgments visible. |
| Wei Liao · Strategic Planning | ![Wei Liao](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/wei-liao-strategy-planning.webp) | `Strategy` `Execution` | Turns goals into paths, resources, milestones, measures, and contingencies, weighing tradeoffs and risks along the way. |
| Zhang Liang · Cross-Border Trade | ![Zhang Liang](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/zhang-liang-cross-border-ecommerce.webp) | `Cross-border` `Fulfillment` | Starts with target markets, platforms, and products, then evaluates unit economics, fulfillment costs, and compliance risks. |
| Hai Lian · Cross-Border E-Commerce Analysis | ![Hai Lian](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/hai-lian-cross-border-ecommerce.webp) | `E-commerce` `HD/LS` | Stays on one job, with Home Depot and Lowe's first: pulls your own store, product, and ad data through `query-canvas`, checks platform and market facts on the web, then turns the gap into concrete fixes. |
| Lu Ban · Workshop Craft | ![Lu Ban](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/luban-desktop-core.webp) | `Rust` `Tauri` `IPC` | Builds the desktop shell and native core to measured fits: contract first, verify by running. |
| Feng Liao · Envoy Interpreter | ![Feng Liao](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/fengliao-mcp.webp) | `MCP` `JSON-RPC` `Scope` | Negotiates capabilities before calling, validates inputs, audits every tool call. |
| Gu Kaizhi · Spirit in Likeness | ![Gu Kaizhi](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/gu-kaizhi-vue-ui.webp) | `Vue` `Pinia` `A11y` | Draws every interface state: loading, empty, error, offline, focus, motion, i18n. |
| Mozi · Defense Without Aggression | ![Mozi](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/mozi-security.webp) | `ACL` `Keychain` `Audit` | Sets defenses before opening doors: deny by default, least privilege, fail closed. |
| Huang Daopo · Weaving the Line | ![Huang Daopo](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/huang-daopo-delivery.webp) | `Delivery` `Sign` `Rollback` | Turns release into repeatable steps: gates, builds, signing, channels, rollback. |
| Wang Zhenyi · Reading the Sky | ![Wang Zhenyi](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/wang-zhenyi-observability.webp) | `Metrics` `Trace` `Perf` | Measures before judging: baselines, traces, crash reports, and performance budgets. |
| Xu Xiake · Mountain Trails | ![Xu Xiake](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/xu-xiake-web-crawler.webp) | `Crawl` `Parse` `Compliance` | Walks the site before writing code: reads robots and terms, then builds a rerunnable, resumable pipeline that keeps a source URL and timestamp on every row. |
| Bi Sheng · Movable Type | ![Bi Sheng](https://raw.githubusercontent.com/phoenixlucky/dsh-character-presets/main/assets/preset-icons/thumbs/bi-sheng-dsh-plugin.webp) | `Plugin` `Patch` `Verify` | Reads the host contract first, then makes every row mountable, verifiable, and reversible. |

Each preset keeps its own character voice. The **Domain tags** column mirrors `PRESETS[].tags` in `client.js` — the same chips the Client module draws on the preset card — while the **What it does** column is the preset's `description` verbatim, plain prose with no tags and no markup, so a row never repeats its own chips. Research presets use browser or research tools available to the selected Agent. The Catgirl · Financial Assistant uses the Web profile's existing `mcp-chrome-super` MCP for market research and read-only `new-gold` tools for account holdings; configure these connections separately. Hai Lian reads your own business data through a `query-canvas` MCP and fetches external facts through the `mcp-chrome-super` MCP; without those connections it says which data is missing instead of inventing numbers.

The programming-master presets install no language or build toolchain and work against the project's existing `Cargo.toml`, `package.json`, and lockfiles; the versions quoted in their prompts are reference baselines only.

Every preset also ends with a `【记忆与规范】` block, so each role reads the workspace's spec file and memory file before working and writes durable results back: read `AGENTS.md` and `MEMORY.md` first (falling back to whatever equivalent the project keeps under `docs/` or `.dsh/`), treat them as standing context without overriding the current request, append domain facts to the memory file, add new reusable conventions to the spec file with scope and date, and close each task with one line saying what was read and updated. When neither file exists, the role creates a minimal skeleton — title, one-line purpose, record format, last-updated date — instead of stopping to ask, and then does the same to the next task. Both files are treated as local: the role adds them to the workspace `.gitignore` when it creates them and never commits them, so a missing-file read is no longer an error loop. Those two file names are a default convention, not a hard requirement — reword the block if your workspace uses different paths.

Local skill discovery is not part of this bundle. To let roles list and load local skills, mount `@deepseek-ai/dsh-skill-filesystem` (with a `bundledSkillDir` for your own root) and `@deepseek-ai/dsh-tool-skill` once at the host plane — in `$DSH_HOME/profiles/<name>/cordis.patch.yml`, or through a small bundle such as `@tinyforge/dsh-skills-wj` — and every preset inherits that catalog. Nothing fails when they are absent: presets keep working, roles just have no `skill` tool.

The avatars are 512 × 512 WebP icons in one illustration style, and every preset now has one. The table above links 96 × 96 copies from `assets/preset-icons/thumbs/` through absolute `raw.githubusercontent.com` URLs in plain Markdown image syntax: npm does not resolve package-relative paths in a README, and some Markdown viewers escape an inline `<img width>` tag into visible text while `![]()` renders everywhere. The DSH preset schema has no icon field, so the Client module draws each avatar itself from this package's own `/plugins/@tinyforge/dsh-character-presets/assets/preset-icons/<icon>.webp` route. A missing file, a 404, or a host without that route degrades to a monogram in the same style instead of a broken image. Set `window.__tfPresetAvatars = false` in the console before the page loads to keep the chips and skip the avatars.

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

## Crawling and plugin authoring

Two presets cover the work around that stack rather than inside it.

| Role | Character | Owns |
| --- | --- | --- |
| Web crawling and structured extraction | Xu Xiake | Target and frequency, page-form probing, fetch-layer choice (official API / HTTP client / headless browser), parsing and field locators, incremental scheduling and dedupe, JSONL–CSV–SQLite–Parquet storage, robots and terms review, rate limiting, sampling audits |
| DSH plugin authoring | Bi Sheng | Bundle and cordis plugins, `dsh.bundle.patch` rows and their required config, preset and persona shape, `dsh.client` modules with `ctx.effect` cleanup, `icon` / `locale` / `files` metadata, peer-dependency boundaries, mount verification through `agentPresets.list()`, packaging and release |

Both follow the same rules as the masters: read the host and the target site before writing, report a missing mount or blocked page as a stated result instead of a success, and leave irreversible actions — publishing, installing, switching a profile — as commands for you to run. The crawler preset mounts only the filesystem and search tools, so it says plainly when the profile gives it no shell or browser connection to actually run a scrape.

## Implementation notes

- `cordis.patch.yml` registers the presets with `@deepseek-ai/dsh-agent-preset` and supplies persona and time-context instructions.
- A preset row must declare the configuration its plugin requires. `@deepseek-ai/dsh-tool-fs-search` makes `sampleOverCapGlobResults` required with no default, so every preset passes `sampleOverCapGlobResults: false` explicitly. Omitting it fails the whole preset mount (`invalid config: $.sampleOverCapGlobResults missing required value`) and the preset becomes unusable — not merely short of `glob` and `grep`.
- The `locale/*.json` files provide the display name and summary shown in the plugin list. Harness reads them through the `./locale/*.json` export, so keep that export and the `locale/*.json` entry in `files`; without them the plugin falls back to its package name.
- The plugin-list icon is declared by the `icon` field in `package.json`: a relative path to an SVG, PNG, JPEG, or WebP file no larger than 256 KiB that must stay inside the package directory after realpath. Harness inlines it as a data URL into the plugin metadata at startup, so `icon.webp` must be listed in `files` and a changed icon needs a Harness restart.
- The preset card renders **name** and **description** only; the preset schema exposes `id`, `name`, `description`, `order`, and `plugins`. Descriptions therefore carry no markup and no emoji tags: the domain tags live in the Client module as `PRESETS[].tags`, not in `description`. The preset-guide table keeps a **Domain tags** column that mirrors those arrays one for one, so a tag change is two edits — `PRESETS[].tags` and that row — and never a third copy inside a description.
- The Client module in `client.js` draws one row per preset surface: the avatar, then one pill per domain tag. On the Agent presets card it sits between the name and the description; in the composer's preset dropdown it sits between the item name and its description. `dsh.client` declares `platform: web`, and the trailing `preset-badges-client` row in `cordis.patch.yml` makes the Web app load `./client.js`.
- Matching has two paths. A surface that renders the description (Agent presets card, the composer's preset dropdown item) matches a distinctive slice of it (`PRESETS[].needle`) and gets the row right before that text. A surface that renders the name only matches the exact visible name (`PRESETS[].name`) and gets the row right after it. The description pass runs first, so a card that shows both keeps its row between the name and the text. Nothing depends on a CSS class.
- A compact trigger that draws its label inside the control is skipped. The composer's preset seat is `button[aria-haspopup="menu"] > span`, and React keeps that button while swapping its label text, so a row there would spill out of the 28px control and strand one row per selection on top of the composer. Rows therefore go into content containers only: a dropdown item qualifies because it wraps a name plus description column, and a settings card qualifies because its description is a normal block.
- Three kinds of region are skipped: the chat transcript (`[data-slot^="conversation.chat."]`, where a message may quote a description), non-rendered nodes (`script`, `style`, `template`, `noscript`, `title`), and documents (`table`, `pre`, `code`, `.markdown-body`, `[data-markdown]`, `[data-slot^="file."]`, `[data-slot^="document."]`, `[data-slot^="markdown"]`). The document rule exists because a README quotes every description in a table: without it the module would stack an avatar-and-chips row inside every README row. Cards and menu items are lists and menu popups, never tables or preformatted text, so they keep their rows. Menus, listboxes, and `aria-hidden` subtrees are decorated like any other surface, because some profiles disable the settings page and show presets only in the dropdown.
- The module inserts only its own nodes and never rewrites, re-parents, or restyles host nodes; it does not widen the settings panel. It keeps one row per preset through re-renders (a replaced description is re-adopted instead of duplicated), and `ctx.effect` disposal cancels the pending frame, removes every row, avatar, and the stylesheet, and releases the global marker. If another bundle already owns the badges, the second copy logs a warning and stays inert.
- Inspect `window.__tfPresetBadges` in the console after opening the preset list: `{ package, rows, avatars, missing, disposed }`. `missing` lists the presets whose card was not found, which is what a host markup change looks like — the row then falls back to name plus plain description, with no tags at all.
- Keep `PRESETS` in sync when a preset is renamed or its description is reworded: the needle must stay a verbatim slice of `description`, or that card loses its row. `test/badge-harness.html` replays the card, seat trigger, dropdown, re-render, and dispose paths in a plain browser page and prints PASS/FAIL per check; `test/seat-repro.html` rebuilds the real composer seat from the host markup and picks presets repeatedly, which is the regression that v1.6.2 fixes.
- This bundle targets DSH 0.2.2-rc.1 and accepts matching `@deepseek-ai/dsh-agent-preset`, `@deepseek-ai/dsh-persona`, and `@deepseek-ai/dsh-time-context` releases from `0.2.2-rc.1` up to but excluding `0.3.0`, so patch and rc updates within 0.2 do not need a new release here. Widen these ranges together — including `engines.dsh` — when the DSH runtime moves to a new minor.
- Those three Harness packages are **optional peers, never dependencies**. The runtime already provides them, and a profile that hoists a second copy (`nodeLinker: hoisted`) resolves the preset rows to that copy instead: an older `@deepseek-ai/dsh-agent-preset` declares an exact `@deepseek-ai/dsh-agent-preset-registry` peer, so DSH's version gate disables every row with `incompatible-version` and the preset list stays empty. Declaring them as dependencies is what made 1.6.3 unusable on 0.2.2-rc.2 in a hoisted profile; keep them in `peerDependencies` with `peerDependenciesMeta.optional` so no profile installs its own copy.
- The `【记忆与规范】` block is duplicated verbatim in all 21 persona prefixes on purpose: the preset schema exposes only `id`, `name`, `description`, `order`, and `plugins`, so no shared partial can be referenced. Only the `记什么` line differs per role. When you change the shared wording, copy it to the other 20 prefixes — a half-applied edit leaves roles that read memory files differently, which is worse than no rule at all.
- This bundle does not install or configure browser, research, account, or build-tool connections. Tools are available only when the profile has them configured.
- Avatars live at `assets/preset-icons/<icon>.webp` and are served by the Harness asset route, which requires the `"./assets/*": "./assets/*"` export in `package.json` and a matching entry in `files`. `files` lists the 21 icons one by one on purpose: a directory entry would also publish `contact-sheet.webp`, which is a repository-only contact sheet and no longer ships. A new icon therefore needs one line there as well. A missing file, a 404, or a host without that route degrades to a monogram instead of a broken image. The route is resolved when the Harness starts, so a freshly installed or edited copy needs a Harness restart before the avatars appear.
- `locale/` carries all eight languages the Harness lists plugins in: `en`, `zh`, `de`, `es`, `fr`, `ja`, `pt`, `ru`. A missing language falls back to the package name in the plugin list, so keep the `locale/*.json` export, the `locale/*.json` entry in `files`, and the same `meta.title` / `meta.description` keys in every file.
- The avatar column uses absolute `raw.githubusercontent.com` URLs to 96 × 96 copies under `assets/preset-icons/thumbs/`, in plain `![]()` Markdown rather than `<img width>`: npm does not resolve package-relative paths, and sanitizing viewers escape inline HTML into visible text. The thumbs directory is repository-only — `files` still ships the full 512 × 512 originals (neither the thumbs nor `contact-sheet.webp`) — and a new preset needs its thumb committed beside its full-size icon. Because the URLs point at `main`, a freshly added thumb only shows once it is pushed.

## License

This project is licensed under the [MIT License](LICENSE).
