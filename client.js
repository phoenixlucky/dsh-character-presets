/**
 * Colored preset badges and avatars.
 *
 * DSH renders a preset card from name + description text only, so this Client
 * module inserts one chip row (avatar + domain tags) between each preset's name
 * and description. It never rewrites, removes, or re-parents host nodes: it only
 * inserts its own nodes, keeps them alive across re-renders, and removes them
 * again on dispose.
 *
 * Matching is by a distinctive slice of each preset's description, never by CSS
 * class. Rows inside menus, listboxes, tooltips, and aria-hidden subtrees are
 * skipped, because the same description also appears in the composer's preset
 * dropdown and in dialogs. A host markup change can only stop the decoration
 * from matching; nothing renders and nothing breaks. Inspect
 * `window.__tfPresetBadges` after opening the preset list.
 *
 * Avatars are served from this package's own `/plugins/<package>/assets/` route,
 * which requires the `./assets/*` export in package.json. A preset without an
 * icon file, or an avatar that fails to load, falls back to a monogram so the row
 * never shows a broken image. Set `window.__tfPresetAvatars = false` before the
 * page loads to disable avatars and keep only the chips.
 */
window.__ModuleLoader__.load({
  id: '@tinyforge/dsh-character-presets',
  factory(require) {
    const PACKAGE = '@tinyforge/dsh-character-presets';
    const OWNER = 'preset-badges';

    /** name → chips and the description slice that identifies the card. */
    const PRESETS = [
      { name: '猫娘·金融助理', tags: ['金融', 'A股'], needle: '亲切猫娘风格做严谨金融研究', icon: 'maoniang-search' },
      { name: '西施 · 溪畔清影', tags: ['情绪', '关系'], needle: '清冷含蓄，先细听情绪与关系里的边界', icon: 'moon-lovers-xishi' },
      { name: '王昭君 · 塞上明月', tags: ['目标', '规划'], needle: '沉稳坚韧，陪你把人生目标拆成阶段计划', icon: 'moon-lovers-wang-zhaojun' },
      { name: '貂蝉 · 月下惊鸿', tags: ['沟通', '氛围'], needle: '灵动机敏，帮你斟酌聊天语气', icon: 'moon-lovers-diaochan' },
      { name: '杨玉环 · 华清春暖', tags: ['饮食', '日常'], needle: '温暖明媚，根据口味、食材和场景搭配菜单', icon: 'moon-lovers-yang-yuhuan' },
      { name: '潘安 · 掷果盈车', tags: ['文史', '典故'], needle: '温润真挚，陪你读懂古人、典故与诗文', icon: 'moon-lovers-pan-an' },
      { name: '兰陵王 · 面具之下', tags: ['职场', '决策'], needle: '外冷内柔，帮你厘清职场难题的目标、风险与选择', icon: 'moon-lovers-lanling-wang' },
      { name: '卫玠 · 清羸如玉', tags: ['学习', '概念'], needle: '清淡温柔，循序渐进地讲清难懂概念', icon: 'moon-lovers-wei-jie' },
      { name: '宋玉 · 才冠楚襄', tags: ['写作', '修辞'], needle: '风雅机敏，按读者与场景构思、改写和润色文字', icon: 'moon-lovers-song-yu' },
      { name: '诸葛亮 · 隆中调研', tags: ['调研', '行业'], needle: '如隆中推演般层层求证', icon: 'zhuge-liang-market-research' },
      { name: '尉缭 · 经世筹策', tags: ['战略', '落地'], needle: '把目标拆成路径、资源、节点、指标与预案', icon: 'wei-liao-strategy-planning' },
      { name: '张良 · 海贸筹略', tags: ['跨境', '履约'], needle: '从目标市场、平台和选品入手', icon: 'zhang-liang-cross-border-ecommerce' },
      { name: '星小彪 · 跨境电商分析', tags: ['电商', 'HD/LS'], needle: '只盯跨境电商经营', icon: 'xing-xiaobiao-cross-border-ecommerce' },
      { name: '鲁班 · 机关营造', tags: ['Rust', 'Tauri', 'IPC'], needle: '以榫卯之准做桌面应用', icon: 'luban-desktop-core' },
      { name: '冯嫽 · 西域通译', tags: ['MCP', 'JSON-RPC', 'Scope'], needle: '持节通译', icon: 'fengliao-mcp' },
      { name: '顾恺之 · 传神写照', tags: ['Vue', 'Pinia', 'A11y'], needle: '画清界面的每一态', icon: 'gu-kaizhi-vue-ui' },
      { name: '墨子 · 守御非攻', tags: ['ACL', 'Keychain', 'Audit'], needle: '先设防再开门', icon: 'mozi-security' },
      { name: '黄道婆 · 织造流传', tags: ['Delivery', 'Sign', 'Rollback'], needle: '把交付织成可重复的工序', icon: 'huang-daopo-delivery' },
      { name: '王贞仪 · 观象授时', tags: ['Metrics', 'Trace', 'Perf'], needle: '先测再断：给性能定基线', icon: 'wang-zhenyi-observability' },
    ];

    const STYLE_ID = 'tf-preset-badges-style';
    const ROW_ATTR = 'data-tf-preset-badges';
    const AVATAR_ATTR = 'data-tf-preset-avatar';
    /** The same description also shows up in menus, dropdowns, tooltips, and chat text. */
    const SKIP_SELECTOR = [
      '.tf-preset-badges',
      // Non-rendered nodes: their text is markup or code, never a preset card.
      'script',
      'style',
      'template',
      'noscript',
      'title',
      '[role="menu"]',
      '[role="listbox"]',
      '[role="menuitem"]',
      '[role="option"]',
      '[role="tooltip"]',
      '[aria-hidden="true"]',
      // Conversation slots hold the composer seat and every chat message: a user
      // may quote a preset description there, and it is never a preset card.
      '[data-slot^="conversation."]',
    ].join(',');

    const CSS = `
.tf-preset-badges {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  width: 100%;
  min-width: 0;
  margin: 6px 0 2px;
  box-sizing: border-box;
}
.tf-preset-badges > i {
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 9px;
  box-sizing: border-box;
  border-radius: 999px;
  border: 1px solid hsl(var(--tf-pb-h, 210) 78% 52% / 0.36);
  background: hsl(var(--tf-pb-h, 210) 78% 52% / 0.14);
  font-style: normal;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1;
  white-space: nowrap;
  color: light-dark(hsl(var(--tf-pb-h, 210) 62% 34%), hsl(var(--tf-pb-h, 210) 72% 78%));
}
.tf-preset-avatar {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid hsl(var(--tf-pb-h, 210) 78% 52% / 0.36);
  background: hsl(var(--tf-pb-h, 210) 78% 52% / 0.14);
  font-size: 11px;
  font-weight: 600;
  font-style: normal;
  line-height: 1;
  object-fit: cover;
  color: light-dark(hsl(var(--tf-pb-h, 210) 62% 34%), hsl(var(--tf-pb-h, 210) 72% 78%));
}
`;

    const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    /** One pass over a subtree decides whether any preset text is present. */
    const NEEDLE_RE = new RegExp(PRESETS.map((preset) => escapeRegExp(preset.needle)).join('|'));

    const hueOf = (label) => {
      let hash = 0;
      for (const char of label) hash = (hash * 31 + char.codePointAt(0)) % 360;
      return hash;
    };

    const assetRef = (icon) => {
      const reference = `plugins/${PACKAGE}/assets/preset-icons/${icon}.webp`;
      try {
        if (require !== undefined && require !== null && typeof require.asset === 'function') return require.asset(reference);
      } catch {
        /* fall back to the document-relative reference */
      }
      return reference;
    };

    const makeChip = (label) => {
      const chip = document.createElement('i');
      chip.textContent = label;
      chip.style.setProperty('--tf-pb-h', String(hueOf(label)));
      return chip;
    };

    const makeMonogram = (preset) => {
      const fallback = document.createElement('span');
      fallback.className = 'tf-preset-avatar';
      fallback.setAttribute(AVATAR_ATTR, preset.name);
      fallback.style.setProperty('--tf-pb-h', String(hueOf(preset.name)));
      fallback.textContent = Array.from(preset.name)[0] ?? '?';
      return fallback;
    };

    /**
     * Avatar decisions are cached per preset: `image` after a successful load,
     * `monogram` when the package ships no icon or the request failed. Until a
     * decision is known the row stays without an avatar, so a broken image or a
     * placeholder flash never reaches the card.
     */
    const avatarCache = new Map();
    const avatarPending = new Set();

    const rowsOf = (name) => {
      const rows = [];
      for (const row of document.querySelectorAll(`[${ROW_ATTR}]`)) {
        if (row.getAttribute(ROW_ATTR) === name) rows.push(row);
      }
      return rows;
    };

    const placeAvatar = (row, preset) => {
      const existing = row.querySelector(`[${AVATAR_ATTR}]`);
      if (existing !== null) existing.remove();
      const decision = avatarCache.get(preset.name);
      if (decision === undefined) return;
      if (decision.kind === 'monogram') {
        row.prepend(makeMonogram(preset));
        return;
      }
      const image = document.createElement('img');
      image.className = 'tf-preset-avatar';
      image.setAttribute(AVATAR_ATTR, preset.name);
      image.setAttribute('alt', '');
      image.decoding = 'async';
      image.src = decision.src;
      row.prepend(image);
    };

    const settleAvatar = (preset, decision) => {
      avatarPending.delete(preset.name);
      if (!alive) return;
      avatarCache.set(preset.name, decision);
      for (const row of rowsOf(preset.name)) placeAvatar(row, preset);
    };

    const attachAvatar = (row, preset) => {
      if (window.__tfPresetAvatars === false) return;
      if (!row.isConnected) return;
      if (avatarCache.has(preset.name)) {
        placeAvatar(row, preset);
        return;
      }
      if (preset.icon === null) {
        settleAvatar(preset, { kind: 'monogram' });
        return;
      }
      if (avatarPending.has(preset.name)) return;
      avatarPending.add(preset.name);
      const probe = new Image();
      probe.decoding = 'async';
      probe.addEventListener('load', () => {
        settleAvatar(preset, { kind: 'image', src: probe.src });
      }, { once: true });
      probe.addEventListener('error', () => {
        settleAvatar(preset, { kind: 'monogram' });
      }, { once: true });
      probe.src = assetRef(preset.icon);
    };

    const rowFor = (preset) => {
      const row = document.createElement('span');
      row.className = 'tf-preset-badges';
      row.setAttribute(ROW_ATTR, preset.name);
      row.setAttribute('aria-hidden', 'true');
      for (const label of preset.tags) row.append(makeChip(label));
      return row;
    };

    const entryFor = (text) => {
      if (!NEEDLE_RE.test(text)) return null;
      for (const preset of PRESETS) if (text.includes(preset.needle)) return preset;
      return null;
    };

    /** name → the row this module inserted and the description it sits before. */
    const state = new Map();
    let observer = null;
    let alive = false;
    let owns = false;
    let frame = 0;
    let pendingRoot = null;
    let hasPendingRoot = false;

    const ensureRow = (anchor, preset) => {
      const current = state.get(preset.name);
      const row = current === undefined ? null : current.row;
      if (row !== null && row.isConnected) {
        // A second live anchor (guide dialog, duplicate card) must not steal the row.
        if (current.anchor !== anchor && current.anchor !== null && current.anchor.isConnected) return;
        if (row.nextElementSibling === anchor) {
          current.anchor = anchor;
          return;
        }
        row.remove();
      }
      const next = rowFor(preset);
      anchor.before(next);
      state.set(preset.name, { row: next, anchor });
      attachAvatar(next, preset);
    };

    const decorate = (leaf) => {
      if (leaf.childElementCount !== 0) return;
      if (leaf.closest(SKIP_SELECTOR) !== null) return;
      const text = leaf.textContent;
      if (typeof text !== 'string' || text.length < 8) return;
      const preset = entryFor(text);
      if (preset === null) return;
      ensureRow(leaf, preset);
    };

    /** Leaves of a subtree, collected without allocating an intermediate array of every element. */
    const collectLeaves = (root, out) => {
      if (root.nodeType !== 1) return;
      if (root.childElementCount === 0) {
        out.push(root);
        return;
      }
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node) => (node.childElementCount === 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP),
      });
      let node = walker.nextNode();
      while (node !== null) {
        out.push(node);
        node = walker.nextNode();
      }
    };

    const updateDebug = () => {
      let rows = 0;
      for (const value of state.values()) if (value.row.isConnected) rows += 1;
      const missing = [];
      for (const preset of PRESETS) {
        const value = state.get(preset.name);
        if (value === undefined || !value.row.isConnected) missing.push(preset.name);
      }
      window.__tfPresetBadges = {
        package: PACKAGE,
        rows,
        avatars: document.querySelectorAll(`[${AVATAR_ATTR}]`).length,
        missing,
        disposed: false,
      };
    };

    const scan = (root) => {
      if (!alive) return;
      const scope = root !== null && root.isConnected && root.nodeType === 1 ? root : document.body;
      if (scope === null || scope === undefined) return;
      if (scope !== document.body) {
        const text = scope.textContent;
        if (typeof text !== 'string' || !NEEDLE_RE.test(text)) return;
      }
      const leaves = [];
      collectLeaves(scope, leaves);
      for (const leaf of leaves) decorate(leaf);
      updateDebug();
    };

    const schedule = (root) => {
      if (!alive) return;
      const next = root !== null && root.isConnected ? root : null;
      if (!hasPendingRoot) {
        pendingRoot = next;
        hasPendingRoot = true;
      } else if (next !== pendingRoot) {
        // Two different subtrees in one frame: fall back to the document.
        pendingRoot = null;
      }
      if (frame !== 0) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const target = hasPendingRoot ? pendingRoot : null;
        pendingRoot = null;
        hasPendingRoot = false;
        scan(target);
      });
    };

    /** True when a mutated node sits in a place that never holds a preset card. */
    const inSkippedRegion = (node) => {
      const element = node.nodeType === 1 ? node : node.parentElement;
      return element !== null && element !== undefined && element.closest(SKIP_SELECTOR) !== null;
    };

    const onMutations = (records) => {
      for (const record of records) {
        if (record.type === 'characterData') {
          const text = record.target.data;
          if (typeof text !== 'string' || text === '' || !NEEDLE_RE.test(text)) continue;
          if (inSkippedRegion(record.target)) continue;
          schedule(null);
          return;
        }
        for (const node of record.addedNodes) {
          const type = node.nodeType;
          if (type !== 1 && type !== 3) continue;
          const text = node.textContent;
          if (typeof text !== 'string' || text === '' || !NEEDLE_RE.test(text)) continue;
          if (inSkippedRegion(node)) continue;
          schedule(type === 1 ? node : null);
          return;
        }
      }
    };

    const dispose = () => {
      if (!alive) return;
      alive = false;
      if (frame !== 0) cancelAnimationFrame(frame);
      frame = 0;
      pendingRoot = null;
      hasPendingRoot = false;
      if (observer !== null) observer.disconnect();
      observer = null;
      for (const value of state.values()) value.row.remove();
      state.clear();
      avatarCache.clear();
      avatarPending.clear();
      // A second instance that never took ownership leaves the first one intact.
      if (!owns) return;
      owns = false;
      for (const node of document.querySelectorAll(`[${AVATAR_ATTR}]`)) node.remove();
      document.querySelector(`style[data-tf-preset-badges-style="${STYLE_ID}"]`)?.remove();
      delete window.__tfPresetBadgesActive;
      if (window.__tfPresetBadgesOwner === OWNER) delete window.__tfPresetBadgesOwner;
      window.__tfPresetBadges = { package: PACKAGE, rows: 0, avatars: 0, missing: [], disposed: true };
    };

    const start = () => {
      if (!alive || document.body === null) return;
      if (observer !== null) return;
      if (window.__tfPresetBadgesActive === true) {
        // Another bundle (or a second copy of this one) already draws the badges.
        console.warn(`[${PACKAGE}] preset badges are already installed by "${String(window.__tfPresetBadgesOwner)}"; skipping.`);
        return;
      }
      window.__tfPresetBadgesActive = true;
      window.__tfPresetBadgesOwner = OWNER;
      owns = true;
      if (document.querySelector(`style[data-tf-preset-badges-style="${STYLE_ID}"]`) === null) {
        const style = document.createElement('style');
        style.dataset.tfPresetBadgesStyle = STYLE_ID;
        style.textContent = CSS;
        document.head.append(style);
      }
      scan(document.body);
      observer = new MutationObserver(onMutations);
      observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    };

    return {
      inject: [],
      apply(ctx) {
        ctx.effect(() => {
          alive = true;
          // `immediately` can activate before the shell has a <body>; retry briefly.
          let attempts = 0;
          const boot = () => {
            if (!alive) return;
            if (document.body === null) {
              if (attempts < 120) {
                attempts += 1;
                requestAnimationFrame(boot);
              }
              return;
            }
            start();
          };
          boot();
          return dispose;
        });
      },
    };
  },
});
