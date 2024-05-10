---
sidebar_position: 1
---

# 使用粘液物品 ID

粘液科技通过在物品的 NBT 中添加 `slimefun:slimefun_item` 标签来识别物品是否为粘液科技物品。

现版本中，粘液科技仅识别物品的 ID，不同类型的物品只要 ID 相同，就会被认为是同一种物品。

利用该特性，你可以给任意物品添加该 NBT 标签，使其具有粘液科技物品的特性。

```yaml title="保存物品中关于粘液物品 ID 的部分"
    PublicBukkitValues:
      slimefun:slimefun_item: DIET_COOKIE
```

该 NBT 标签表示物品为减肥曲奇。

:::note 示例

你可以保存一个面包，然后在其 NBT 中添加 `slimefun:slimefun_item: DIET_COOKIE` 标签，使其具有减肥曲奇的特性。

当你食用面包后，你就可以获得减肥曲奇的漂浮效果。

:::

:::warning

在你手动给保存物品添加 NBT 标签后，这种保存物品注册为粘液科技物品后，**不能**通过作弊指南书或 `/sf give` 指令获取，否则会失去相应的效果。

相应的粘液物品必须为在服务器上启用的物品（安装了相应的插件），否则不会有任何效果。

:::
