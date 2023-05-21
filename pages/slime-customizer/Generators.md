# 发电机

在`/plugins/SlimeCustomizer/generators.yml`中，你可以配置发电机。

每一项都代表一个发电机。

```yaml
EXAMPLE_GENERATOR:
  category: slime_customizer
  generator-name: "&bExample Generator"
  generator-lore:
  - "&7This is an example generator!"
  block-type: SKULLe707c7f6c3a056a377d4120028405fdd09acfcd5ae804bfde0f653be866afe39
  progress-bar-item: FLINT_AND_STEEL
  stats:
    energy-production: 16
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
  recipes:
    1:
      time-in-seconds: 5
      input:
        type: VANILLA
        id: SPRUCE_SIGN
        amount: 1
      output:
        type: NONE
        id: N/A
        amount: N/A
    2:
      time-in-seconds: 10
      input:
        type: VANILLA
        id: BEDROCK
        amount: 1
      output:
        type: VANILLA
        id: BIRCH_PLANKS
        amount: 1
```
| 内容 | 描述 | 有效输入 |
| --- | ----------- | ----------------- |
| `EXAMPLE_GENERATOR` | 发电机的ID。<br>该ID不能与任何其他物品的ID相同! | **仅支持大写字母、数字、下划线!** |
| category | 物品所在[分类](./Categories)的ID。 |
| generator-name | 发电机的名称。<br>支持[颜色代码](./Color-codes)。 |
| generator-lore | 发电机的描述。<br>支持[颜色代码](./Color-codes)。<br>如果不想添加描述可以将整个字段删除。 |
| block-type | 发电机所使用的[原版方块ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或者[头颅](./Skull-Items)。 |
| progress-bar-item | 发电机的进度条所使用的物品，仅支持填入[原版物品ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |
| stats.energy-production | 这台发电机每粘液刻产生的电力，最大为 2147483647。 |
| stats.energy-buffer | 这台发电机可储存的电力，最大为 2147483647。 |
| crafting-recipe-type | 见[合成配方](./Crafting-Recipe)页。 |
| crafting-recipe | 见[合成配方](./Crafting-Recipe)页。 |
| recipes.#.time-in-seconds | 物品发电的持续时间，单位为秒，最大为 2147483647。 |
| recipes.#.input/output.type | 输入/输出物品的类型。 | **NONE** 无物品 <br>**VANILLA** 原版物品 <br> **SLIMEFUN** 粘液科技物品 <br>**SAVEDITEM** [保存的物品](./Saved-Items) |
| recipes.#.input/output.#.id | 原版/粘液科技/保存物品的物品ID。<br>物品类型为**NONE**时，不需要填写。 |
| recipes.#.input/output.#.amount | 输入/输出物品数量。<br>物品类型为**NONE**时，不需要填写。 |

