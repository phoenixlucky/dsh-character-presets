/**
 * Colored preset badges.
 *
 * DSH renders preset rows from name + description text only, so this Client
 * module inserts a chip row between each preset's name and description. It never
 * rewrites, removes, or re-parents host nodes: it only inserts its own chips and
 * keeps them alive across re-renders with a MutationObserver. All nodes, the
 * observer, and the stylesheet are disposed through ctx.effect on unload.
 *
 * Matching is by exact visible preset name plus a distinctive slice of its
 * description, not by CSS class: a host markup change may stop the decoration
 * from matching, in which case nothing renders and nothing breaks. Inspect
 * `window.__tfPresetBadges` after opening the preset list.
 */
window.__ModuleLoader__.load({
  id: '@tinyforge/dsh-character-presets',
  factory() {
    const TAGS = {
      '猫娘·金融助理': ['金融', 'A股'],
      '西施 · 溪畔清影': ['情绪', '关系'],
      '王昭君 · 塞上明月': ['目标', '规划'],
      '貂蝉 · 月下惊鸿': ['沟通', '氛围'],
      '杨玉环 · 华清春暖': ['饮食', '日常'],
      '潘安 · 掷果盈车': ['文史', '典故'],
      '兰陵王 · 面具之下': ['职场', '决策'],
      '卫玠 · 清羸如玉': ['学习', '概念'],
      '宋玉 · 才冠楚襄': ['写作', '修辞'],
      '诸葛亮 · 隆中调研': ['调研', '行业'],
      '尉缭 · 经世筹策': ['战略', '落地'],
      '张良 · 海贸筹略': ['跨境', '履约'],
      '星小彪 · 跨境电商分析': ['电商', 'HD/LS'],
      '鲁班 · 机关营造': ['Rust', 'Tauri', 'IPC'],
      '冯嫽 · 西域通译': ['MCP', 'JSON-RPC', 'Scope'],
      '顾恺之 · 传神写照': ['Vue', 'Pinia', 'A11y'],
      '墨子 · 守御非攻': ['ACL', 'Keychain', 'Audit'],
      '黄道婆 · 织造流传': ['Delivery', 'Sign', 'Rollback'],
      '王贞仪 · 观象授时': ['Metrics', 'Trace', 'Perf'],
    };

    /** A stable slice of each description, present with or without the emoji prefix. */
    const DESC = {
      '猫娘·金融助理': '亲切猫娘风格做严谨金融研究',
      '西施 · 溪畔清影': '清冷含蓄，先细听情绪与关系里的边界',
      '王昭君 · 塞上明月': '沉稳坚韧，陪你把人生目标拆成阶段计划',
      '貂蝉 · 月下惊鸿': '灵动机敏，帮你斟酌聊天语气',
      '杨玉环 · 华清春暖': '温暖明媚，根据口味、食材和场景搭配菜单',
      '潘安 · 掷果盈车': '温润真挚，陪你读懂古人、典故与诗文',
      '兰陵王 · 面具之下': '外冷内柔，帮你厘清职场难题的目标、风险与选择',
      '卫玠 · 清羸如玉': '清淡温柔，循序渐进地讲清难懂概念',
      '宋玉 · 才冠楚襄': '风雅机敏，按读者与场景构思、改写和润色文字',
      '诸葛亮 · 隆中调研': '如隆中推演般层层求证',
      '尉缭 · 经世筹策': '把目标拆成路径、资源、节点、指标与预案',
      '张良 · 海贸筹略': '从目标市场、平台和选品入手',
      '星小彪 · 跨境电商分析': '只盯跨境电商经营',
      '鲁班 · 机关营造': '以榫卯之准做桌面应用',
      '冯嫽 · 西域通译': '持节通译',
      '顾恺之 · 传神写照': '画清界面的每一态',
      '墨子 · 守御非攻': '先设防再开门',
      '黄道婆 · 织造流传': '把交付织成可重复的工序',
      '王贞仪 · 观象授时': '先测再断：给性能定基线',
    };

    const NEEDLES = Object.keys(TAGS).map((name) => [name, DESC[name]]).filter(([, needle]) => typeof needle === 'string' && needle.length > 0);
    const STYLE_ID = 'tf-preset-badges-style';
    const ROW_ATTR = 'data-tf-preset-badges';

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
  color: var(--dsw-alias-label-primary, inherit);
  color: light-dark(hsl(var(--tf-pb-h, 210) 62% 34%), hsl(var(--tf-pb-h, 210) 72% 78%));
}
`;

    const hueOf = (label) => {
      let hash = 0;
      for (const char of label) hash = (hash * 31 + char.codePointAt(0)) % 360;
      return hash;
    };

    const makeChip = (label) => {
      const chip = document.createElement('i');
      chip.textContent = label;
      chip.style.setProperty('--tf-pb-h', String(hueOf(label)));
      return chip;
    };

    const rowFor = (name) => {
      const row = document.createElement('span');
      row.className = 'tf-preset-badges';
      row.setAttribute(ROW_ATTR, name);
      for (const label of TAGS[name]) row.append(makeChip(label));
      return row;
    };

    const alreadyDecorated = (element, name) => {
      const previous = element.previousElementSibling;
      if (previous !== null && previous.getAttribute(ROW_ATTR) === name) return true;
      const next = element.nextElementSibling;
      return next !== null && next.getAttribute(ROW_ATTR) === name;
    };

    let scheduled = false;
    let pendingRoot = null;
    let observer = null;

    /** Insert the chip row immediately before the description leaf. */
    const decorateByDescription = (root) => {
      const scope = root && typeof root.querySelectorAll === 'function' ? root : document;
      for (const element of scope.querySelectorAll('*')) {
        if (element.childElementCount !== 0) continue;
        if (element.closest('.tf-preset-badges') !== null) continue;
        const text = element.textContent;
        if (typeof text !== 'string' || text.length < 8) continue;
        for (const [name, needle] of NEEDLES) {
          if (!text.includes(needle)) continue;
          if (!alreadyDecorated(element, name)) element.before(rowFor(name));
          break;
        }
      }
    };

    const decoratedNames = () => {
      const names = new Set();
      for (const row of document.querySelectorAll(`[${ROW_ATTR}]`)) names.add(row.getAttribute(ROW_ATTR));
      return names;
    };

    /** Fallback: append after the name when the description was not found. */
    const decorateByName = (name) => {
      for (const element of document.querySelectorAll('*')) {
        if (element.childElementCount !== 0) continue;
        if (element.closest('.tf-preset-badges') !== null) continue;
        if ((element.textContent || '').trim() !== name) continue;
        if (alreadyDecorated(element, name)) return;
        element.after(rowFor(name));
        return;
      }
    };

    const scan = (root) => {
      decorateByDescription(root);
      const done = decoratedNames();
      for (const [name] of NEEDLES) {
        if (!done.has(name)) decorateByName(name);
      }
      window.__tfPresetBadges = { rows: document.querySelectorAll(`[${ROW_ATTR}]`).length };
    };

    const PANEL_ATTR = 'data-tf-preset-panel';
    const originalStyles = new Map();

    const restorePanel = () => {
      for (const [element, saved] of originalStyles) {
        if (saved.minWidth === '') element.style.removeProperty('min-width');
        else element.style.setProperty('min-width', saved.minWidth);
        if (saved.maxWidth === '') element.style.removeProperty('max-width');
        else element.style.setProperty('max-width', saved.maxWidth);
        element.removeAttribute(PANEL_ATTR);
      }
      originalStyles.clear();
      delete window.__tfPresetPanel;
    };

    /**
     * Widen the fixed-width box that clamps the preset list, without touching
     * host files: only an inline min-width on the clamping element, restored on
     * dispose. A candidate must be narrower than 600px while its parent is at
     * least 40px wider, which is what a width-constrained panel looks like.
     */
    const widenPanel = () => {
      const rows = document.querySelectorAll(`[${ROW_ATTR}]`);
      if (rows.length < 2) return;
      let lca = rows[0].parentElement;
      if (lca === null) return;
      for (const row of rows) {
        while (lca !== null && !lca.contains(row)) lca = lca.parentElement;
        if (lca === null) return;
      }
      const viewport = document.documentElement.clientWidth || window.innerWidth;
      const cap = Number(window.__tfPresetWidth) > 0 ? Number(window.__tfPresetWidth) : 680;
      const target = Math.min(cap, Math.max(360, viewport - 32));
      const chain = [];
      const attempt = [];
      let node = lca;
      for (let depth = 0; node !== null && depth < 8; depth += 1) {
        const rect = node.getBoundingClientRect();
        chain.push({ tag: node.tagName, cls: String(node.className || '').slice(0, 80), w: Math.round(rect.width) });
        if (node === document.body || node === document.documentElement) break;
        if (rect.width >= target - 16 || rect.width >= viewport * 0.8) break;
        attempt.push(node);
        node = node.parentElement;
      }
      const baseScroll = document.documentElement.scrollWidth;
      for (const element of attempt) {
        if (!originalStyles.has(element)) {
          originalStyles.set(element, {
            minWidth: element.style.getPropertyValue('min-width'),
            maxWidth: element.style.getPropertyValue('max-width'),
          });
        }
        element.style.setProperty('min-width', `${Math.round(target)}px`, 'important');
        element.style.setProperty('max-width', 'none', 'important');
        element.setAttribute(PANEL_ATTR, '');
      }
      const overflowed = document.documentElement.scrollWidth > Math.max(baseScroll, window.innerWidth) + 1;
      if (overflowed) {
        for (const element of attempt) {
          const saved = originalStyles.get(element);
          if (saved.minWidth === '') element.style.removeProperty('min-width');
          else element.style.setProperty('min-width', saved.minWidth);
          if (saved.maxWidth === '') element.style.removeProperty('max-width');
          else element.style.setProperty('max-width', saved.maxWidth);
          element.removeAttribute(PANEL_ATTR);
          originalStyles.delete(element);
        }
      }
      window.__tfPresetChain = chain;
      window.__tfPresetPanel = {
        viewport: Math.round(viewport),
        target: Math.round(target),
        applied: overflowed ? 0 : attempt.length,
        overflowed,
        chain,
      };
    };

    const onResize = () => schedule(null);

    const schedule = (root) => {
      if (root !== null && pendingRoot === null) pendingRoot = root;
      else if (root !== null && root !== pendingRoot) pendingRoot = null;
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        const next = pendingRoot;
        pendingRoot = null;
        scan(next);
        widenPanel();
      });
    };

    const mentionsPreset = (node) => {
      const text = node.textContent;
      if (typeof text !== 'string' || text === '') return false;
      return NEEDLES.some(([name, needle]) => text.includes(name) || (needle !== undefined && text.includes(needle)));
    };

    const onMutations = (records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node.nodeType === 1 && mentionsPreset(node)) {
            schedule(node);
            return;
          }
          if (node.nodeType === 3 && mentionsPreset(node)) {
            schedule(null);
            return;
          }
        }
      }
    };

    const install = () => {
      if (!document.body) return;
      if (!document.querySelector(`style[data-tf-preset-badges="${STYLE_ID}"]`)) {
        const style = document.createElement('style');
        style.dataset.tfPresetBadges = STYLE_ID;
        style.textContent = CSS;
        document.head.append(style);
      }
      scan(document.body);
      widenPanel();
      window.addEventListener('resize', onResize);
      observer = new MutationObserver(onMutations);
      observer.observe(document.body, { childList: true, subtree: true });
    };

    const dispose = () => {
      window.removeEventListener('resize', onResize);
      restorePanel();
      observer?.disconnect();
      observer = null;
      for (const row of document.querySelectorAll(`[${ROW_ATTR}]`)) row.remove();
      document.querySelector(`style[data-tf-preset-badges="${STYLE_ID}"]`)?.remove();
      delete window.__tfPresetBadges;
    };

    return {
      inject: [],
      apply(ctx) {
        ctx.effect(() => {
          install();
          return dispose;
        });
      },
    };
  },
});
