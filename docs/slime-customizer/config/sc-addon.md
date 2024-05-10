---
sidebar_position: 1
---

# 插件加载信息

```yaml title="sc-addon.yml"
depend:
  - Slimefun
```

该配置文件包含了自定义粘液附属的加载信息。这通常用于分享配置文件包时，确保所有使用到插件都已启用。

如果列表中的任意一个插件没有启用，则本插件将不会启用。

:::tip

你可以把 Slimefun 删除（毕竟没 Slimefun 本附属根本不会运行）。

:::

:::note 示例

如果你的配置文件中引用了无尽贪婪附属插件里的物品，则需要添加无尽贪婪的名称，即plugin.yml中定义的名字`InfinityExpansion`。

```yaml
depend:
  - Slimefun
  - InfinityExpansion
```

:::

## 如何查看插件名称

通过 `/plugins` 或者 `/sf versions` 指令获取插件名称。
