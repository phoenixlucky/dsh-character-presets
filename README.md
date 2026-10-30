---
description: "An optional Catgirl Financial Assistant preset for DeepSeek Harness Web profiles."
kind: "package-bundle"
---

# @deepseek-ai/dsh-character-presets

English | [中文](README.zh.md)

## Summary

This optional bundle adds the Catgirl Financial Assistant agent preset to a DeepSeek Harness Web profile. Install the local bundle, then select `maoniang-search` in **Settings → Agent presets**. The preset uses the Web profile's existing Chrome MCP and `new-gold` connections; configure those services separately. Removing the bundle removes the preset declaration.

## Table of Contents

- [Use this package](#use-this-package)
- [Understand the implementation](#understand-the-implementation)
- [Model Experience](#model-experience)

-----

<a id="use-this-package"></a>
## Use this package

Install the bundle into the existing Web profile:

```sh
pnpm dsh plugin --profile web add E:\home\dsh_character_presets
```

Open **Settings → Agent presets** and select **Catgirl Financial Assistant** (`maoniang-search`). The preset uses Chrome MCP for public market research and read-only `new-gold` tools for account holdings. Those connections must be available in the Web profile; the preset does not install or configure them.

Remove it with `pnpm dsh plugin --profile web remove @deepseek-ai/dsh-character-presets`.

## Understand the implementation

`cordis.patch.yml` inserts one `@deepseek-ai/dsh-agent-preset` row with the original persona and time-context plugins. It targets a Web profile that already provides the preset registry and the referenced DSH packages.

## Model Experience

The preset adds its research instructions to each selected Agent's persona. It does not add tools; Chrome MCP and `new-gold` provide the tools when configured.
