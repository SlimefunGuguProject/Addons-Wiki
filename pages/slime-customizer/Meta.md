# 保存物品原理

每当你保存一个物品时，你的保存物品配置里会有Meta条例

Meta是储存你物品数据的重要nbt，但有些你不能随意更改它的nbt

例如

```yaml
item:
  ==: org.bukkit.inventory.ItemStack
  v: 2975
  meta:
    ==: ItemMeta
    meta-type: UNSPECIFIC
```

这些条例是不能随意修改的

注:因粘液自身特性，无法保存带有EntityType标签的刷怪蛋(仅限刷怪蛋)