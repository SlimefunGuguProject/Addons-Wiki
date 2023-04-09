# 材料生成器

!> 该功能为汉化版独有

在`/plugins/SlimeCustomizer/material-generators.yml`中，你可以配置材料生成器。

每一项都代表一个材料生成器。

```yaml
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
| `EXAMPLE_MATERIAL_GENERATOR` | 材料生成器的ID。<br>该ID不能与任何其他物品的ID相同! | **仅支持大写字母、数字、下划线!** |
| category | 物品所在[分类](./Categories)的ID。 |
| item-name | 材料生成器的名称。<br>支持[颜色代码](./Color-codes)。 |
| item-lore | 材料生成器的描述。<br>支持[颜色代码](./Color-codes)。<br>如果不想添加描述可以将整个字段删除。 |
| block-type | 材料生成器所使用的[原版方块ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或者[头颅](./Skull-Items)。 |
| item-amount | 每次合成获得的物品数量。 |
| stats.energy-consumption | 这台机器每粘液刻消耗的电力，最大为 2147483647。 |
| stats.energy-buffer | 这台机器可储存的电力，最大为 2147483647。 |
| crafting-recipe-type | 见[合成配方](./Crafting-Recipe)页。 |
| crafting-recipe | 见[合成配方](./Crafting-Recipe)页。 |
| output.tick-rate | 每多少粘液刻产出一次。 | 正整数 |
| output.type | 产出物品的类型。 | **VANILLA** 原版物品 <br> **SLIMEFUN** 粘液科技物品 <br>**SAVEDITEM** [保存的物品](./Saved-Items) |
| output.id | 产出物品的[原版](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)/粘液科技/保存物品的ID。 |
| output.amount | 每次产出物品的数量。 | 整数，最少为1，最多为一组物品的最大数量。 |

