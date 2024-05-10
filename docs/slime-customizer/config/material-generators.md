---
sidebar_position: 10
---

# 材料生成器

```yaml title="material-generators.yml"
EXAMPLE_MATERIAL_GENERATOR:
  category: slime_customizer
  item-name: "&b示例材料生成器"
  item-lore:
  - "&7这是个示例材料生成器!"
  block-type: STONE
  item-amount: 1
  stats:
    energy-consumption: 16
    energy-buffer: 64
  crafting-recipe-type: ENHANCED_CRAFTING_TABLE
  crafting-recipe:
    1:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    2:
      type: NONE
      id: N/A
      amount: 1
    3:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    4:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    5:
      type: NONE
      id: N/A
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
      type: NONE
      id: N/A
      amount: 1
    9:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
  output:
    tick-rate: 1
    type: VANILLA
    id: IRON_BLOCK
    amount: 1
```

| 内容 | 描述 | 有效输入 |
| --- | ----------- | ----------------- |
| `EXAMPLE_MATERIAL_GENERATOR` | 物品的 ID。<br />该 ID 不能与任何其他物品的 ID 相同！ | **仅支持大写字母、数字、下划线!** |
| category | 物品所在分类的 ID。 | 自定义粘液附属的[分类](./categories) ID，或[其他分类的标识符](./categories#use-existing-categories)。 |
| item-name | 物品的名称。<br />支持[颜色代码](../common/color-codes)。 | |
| item-lore | 物品的描述。<br />支持[颜色代码](../common/color-codes)。<br />如果不想添加描述可以将整个字段删除。 | |
| block-type | 生成器的方块类型。 | [原版方块 ID（Material）](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或[头颅](../common/skull-items) |
| item-amount | 每次合成获得的物品数量。<br />**注意：** 这不是产物的数量。 | 整数，最少为1，最多为一组物品的最大数量。 |
| stats.energy-consumption | 这台机器每粘液刻消耗的电力。 | 1 - 2147483647（整数） |
| stats.energy-buffer | 这台机器可储存的电力。 | 1 - 2147483647（整数），且必须大于等于电力消耗。 |
| crafting-recipe-type | 见[合成配方](../common/crafting-recipe)页。 | |
| crafting-recipe | 见[合成配方](../common/crafting-recipe)页。 | |
| output.tick-rate | 每多少粘液刻产出一次。 | 正整数 |
| output.type | 产出物品的类型。 | **VANILLA** 原版物品 <br /> **SLIMEFUN** 粘液科技物品 <br />**SAVEDITEM** [保存的物品](../common/saved-items) |
| output.id | 产出物品的的标识符。 | [原版物品 ID（Material）](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或[头颅](../common/skull-items)或[保存物品](../common/saved-items)的 ID。 |
| output.amount | 每次产出物品的数量。 | 整数，最少为1，最多为一组物品的最大数量。 |

!> 注意：材料发生器的输出可以给不可堆叠的物品设置堆叠数量，最高为64，也就是说材料发生器可以一次性产出堆叠在一起的一组水桶
