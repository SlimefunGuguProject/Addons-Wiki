---
sidebar_position: 9
---

# 太阳能发电机

```yaml title="solar-generators.yml"
EXAMPLE_SOLAR_GENERATOR:
  category: slime_customizer
  generator-name: "&b示例太阳能发电机"
  generator-lore:
  - "&7这是一个示例太阳能发电机!"
  block-type: DAYLIGHT_DETECTOR
  stats:
    energy-production:
      day: 256
      night: 128
  crafting-recipe-type: ENHANCED_CRAFTING_TABLE
  crafting-recipe:
    1:
      type: VANILLA
      id: BEDROCK
      amount: 1
    2:
      type: NONE
      id: N/A
      amount: 1
    3:
      type: VANILLA
      id: BEDROCK
      amount: 1
    4:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    5:
      type: SLIMEFUN
      id: COAL_GENERATOR
      amount: 1
    6:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    7:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    8:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    9:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
```

| 内容 | 描述 | 有效输入 |
| --- | ----------- | ----------------- |
| `EXAMPLE_SOLAR_GENERATOR` | 物品的 ID。<br />该 ID 不能与任何其他物品的 ID 相同！ | **仅支持大写字母、数字、下划线!** |
| category | 物品所在分类的 ID。 | 自定义粘液附属的[分类](./categories) ID，或[其他分类的标识符](./categories#use-existing-categories)。 |
| generator-name | 物品的名称。<br />支持[颜色代码](../common/color-codes)。 | |
| generator-lore | 物品的描述。<br />支持[颜色代码](../common/color-codes)。<br />如果不想添加描述可以将整个字段删除。 | |
| block-type | 发电机的方块类型。 | [原版方块 ID（Material）](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或[头颅](../common/skull-items) |
| stats.energy-production.day | 白天每粘液刻所生产的电力。 | 1 - 2147483647（整数） |
| stats.energy-production.night | 夜晚每粘液刻所生产的电力。 | 1 - 2147483647（整数） |
| crafting-recipe-type | 见[合成配方](../common/crafting-recipe)页。 | |
| crafting-recipe | 见[合成配方](../common/crafting-recipe)页。 | |

:::info

自定义附属的太阳能发电机继承了本体的太阳能发电机类，因此功能类似。

太阳能发电机仅能在主世界中使用，会受到世界时间与发电机光照的影响。

:::
