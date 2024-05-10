---
sidebar_position: 3
---

# 生物掉落

```yaml title="mob-drops.yml"
EXAMPLE_DROP:
  category: slime_customizer
  item-type: CUSTOM
  item-name: "&bExample Drop"
  item-lore:
    - "&7This is an example mob-drop!"
    - "&cExample drops are not obtainable"
  item-id: STICK
  item-amount: 1
  mob: GHAST
  chance: 0
  recipe-display-item: GHAST_SPAWN_EGG
```

| 内容 | 描述 | 有效输入 |
| --- | ----------- | ----------------- |
| `EXAMPLE_DROP` | 物品的 ID。<br />该 ID 不能与任何其他物品的 ID 相同！ | **仅支持大写字母、数字、下划线!** |
| category | 物品所在分类的 ID。 | 自定义粘液附属的[分类](./categories) ID，或[其他分类的标识符](./categories#use-existing-categories)。 |
| item-type | 物品注册的方式。 | **CUSTOM** 填入此项时，你可以自定义物品名称、描述、种类。<br />**SAVEDITEM** 从[保存的物品](../common/saved-items)中加载物品。 |
| item-name | 物品的名称。<br />支持[颜色代码](../common/color-codes)。 | |
| item-lore | 物品的描述。<br />支持[颜色代码](../common/color-codes)。<br />如果不想添加描述可以将整个字段删除。 | |
| item-id | 物品的标识符。 | [原版物品 ID（Material）](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或[头颅](../common/skull-items)或保存的物品的ID。 |
| item-amount | 每次掉落物品的数量。 | 1 - 64 （整数） |
| mob | 掉落该物品所需的实体类型。 | [实体类型（EntityType）](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) |
| chance | 物品的掉落概率（百分比）。 | 0 - 100（整数） |
| recipe-display-item | 用于展示如何获得掉落物的物品（即配方中间的物品）。 | [原版物品 ID（Material）](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |

:::tip

该配置文件适用于自定义新的生物掉落物品。如果你想让已有物品成为生物掉落，请使用插件 [SfMobDrops](https://github.com/SlimefunGuguProject/SfMobDrops)。

:::
