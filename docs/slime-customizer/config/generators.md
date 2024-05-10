---
sidebar_position: 8
---

# 发电机

```yaml title="generators.yml"
EXAMPLE_GENERATOR:
  category: slime_customizer
  generator-name: "&b示例发电机"
  generator-lore:
  - "&7这是示例发电机!"
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
| `EXAMPLE_GENERATOR` | 物品的 ID。<br />该 ID 不能与任何其他物品的 ID 相同！ | **仅支持大写字母、数字、下划线!** |
| category | 物品所在分类的 ID。 | 自定义粘液附属的[分类](./categories) ID，或[其他分类的标识符](./categories#use-existing-categories)。 |
| generator-name | 物品的名称。<br />支持[颜色代码](../common/color-codes)。 | |
| generator-lore | 物品的描述。<br />支持[颜色代码](../common/color-codes)。<br />如果不想添加描述可以将整个字段删除。 | |
| block-type | 发电机的方块类型。 | [原版方块 ID（Material）](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或[头颅](../common/skull-items) |
| progress-bar-item | 发电机的进度条所使用的物品。 | [原版物品 ID（Material）](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |
| stats.energy-production | 发电机每粘液刻产生的电力。 | 1 - 2147483647（整数） |
| stats.energy-buffer | 发电机可储存的电力。 | 1 - 2147483647（整数） |
| crafting-recipe-type | 见[合成配方](../common/crafting-recipe)页。 | |
| crafting-recipe | 见[合成配方](../common/crafting-recipe)页。 | |
| recipes | 见下方[发电机配方](#generator-recipes)部分。 | |

## 发电机配方 {#generator-recipes}

一个发电机可以有很多配方，但每个配方只有1个输入栏和1个输出栏。
发电机配方可以没有输出。

发电机配方序号从1开始，每个配方都有以下字段：

| 内容 | 描述 | 有效输入 |
| --- | --- | --- |
| time-in-seconds | 该配方发电的持续时间，单位为秒。 | 1 - 2147483647（整数） |
| input/output.type | 输入/输出物品的类型。 | **NONE** 无物品 <br />**VANILLA** 原版物品 <br /> **SLIMEFUN** 粘液科技物品 <br />**SAVEDITEM** [保存的物品](../common/saved-items) |
| input/output.id | 输入/输出物品的标识符。 | [原版物品 ID（Material）](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或[头颅](../common/skull-items)或[保存物品](../common/saved-items)的 ID。<br />物品类型为 **NONE** 时，不需要填写。 |
| input/output.amount | 输入/输出物品数量。 | 整数，最少为1，最多为一组物品的最大数量。<br />物品类型为 **NONE** 时，不需要填写。 |
