---
sidebar_position: 7
---

# 机器

```yaml title="machines.yml"
EXAMPLE_MACHINE:
  category: slime_customizer
  machine-name: "&b示例机器"
  machine-lore:
  - "&7这是个示例机器！"
  block-type: FURNACE
  progress-bar-item: FLINT_AND_STEEL
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
      type: SLIMEFUN
      id: SMALL_CAPACITOR
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
      speed-in-seconds: 5
      input:
        1:
          type: VANILLA
          id: IRON_INGOT
          amount: 9
        2:
          type: NONE
          id: N/A
          amount: 1
      output:
        1:
          type: VANILLA
          id: IRON_BLOCK
          amount: 1
        2:
          type: NONE
          id: N/A
          amount: 1
    2:
      speed-in-seconds: 5
      input:
        1:
          type: SLIMEFUN
          id: GOLD_24K
          amount: 9
        2:
          type: NONE
          id: N/A
          amount: 1
      output:
        1:
          type: SLIMEFUN
          id: GOLD_24K_BLOCK
          amount: 1
        2:
          type: NONE
          id: N/A
          amount: 1
```

| 内容 | 描述 | 有效输入 |
| --- | ----------- | ----------------- |
| `EXAMPLE_MACHINE` | 物品的 ID。<br />该 ID 不能与任何其他物品的 ID 相同！ | **仅支持大写字母、数字、下划线!** |
| category | 物品所在分类的 ID。 | 自定义粘液附属的[分类](./categories) ID，或[其他分类的标识符](./categories#use-existing-categories)。 |
| machine-name | 物品的名称。<br />支持[颜色代码](../common/color-codes)。 | |
| machine-lore | 物品的描述。<br />支持[颜色代码](../common/color-codes)。<br />如果不想添加描述可以将整个字段删除。 | |
| block-type | 机器的方块类型。 | [原版方块 ID（Material）](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或[头颅](../common/skull-items) |
| progress-bar-item | 机器的进度条所使用的物品。 | [原版物品 ID（Material）](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |
| stats.energy-consumption | 这台机器每粘液刻消耗的电力。 | 1 - 2147483647（整数） |
| stats.energy-buffer | 这台机器可储存的电力。 | 1 - 2147483647（整数），且必须大于等于电力消耗。 |
| crafting-recipe-type | 见[合成配方](../common/crafting-recipe)页。 | |
| crafting-recipe | 见[合成配方](../common/crafting-recipe)页。 | |
| recipes | 见下方[机器配方](#machine-recipes)部分。 | |

## 机器配方 {#machine-recipes}

一个机器可以有很多个配方，但每个配方只有2个输入栏和2个输出栏。  
机器检测配方时，会优先查看第一个物品。

机器配方序号从1开始，每个配方都有以下字段：

| 内容 | 描述 | 有效输入 |
| --- | --- | --- |
| speed-in-seconds | 完成该配方所需的时间，单位为秒。 | 1 - 2147483647（整数） |
| input/output.#.type | 输入/输出物品的类型。 | **NONE** 无物品 <br />**VANILLA** 原版物品 <br /> **SLIMEFUN** 粘液科技物品 <br />**SAVEDITEM** [保存的物品](../common/saved-items) |
| input/output.#.id | 输入/输出物品的标识符。 | [原版物品 ID（Material）](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或[头颅](../common/skull-items)或[保存物品](../common/saved-items)的 ID。<br />物品类型为 **NONE** 时，不需要填写。 |
| input/output.#.amount | 输入/输出物品数量。 | 整数，最少为1，最多为一组物品的最大数量。<br />物品类型为 **NONE** 时，不需要填写。 |

:::tip

如果想让机器无输出，在输出处填写原版物品 `AIR`，数量设置为0。

:::

:::danger 注意

要避免两项配方的输入格出现重复材料。

如下所示：

```yaml
  recipes:
    1:
      speed-in-seconds: 5
      input:
        1:
          type: VANILLA
          id: IRON_INGOT
          amount: 9
        2:
          type: VANILLA
          id: APPLE
          amount: 2
      output:
        1:
          type: VANILLA
          id: IRON_BLOCK
          amount: 1
        2:
          type: NONE
          id: N/A
          amount: 1
    2:
      speed-in-seconds: 5
      input:
        1:
          type: VANILLA
          id: IRON_INGOT
          amount: 4
        2:
          type: NONE
          id: N/A
          amount: 1
      output:
        1:
          type: SLIMEFUN
          id: GOLD_24K
          amount: 1
        2:
          type: NONE
          id: N/A
          amount: 1
```

这两个配方都有共同的输入物品“铁锭”。根据优先查看第一个物品的规则，这将导致机器只输出第二项配方“24K金锭”。

:::
