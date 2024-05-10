---
sidebar_position: 6
---

# 电容

```yaml title="capacitors.yml"
EXAMPLE_CAPACITOR:
  category: slime_customizer
  capacitor-name: "&b示例电容"
  capacitor-lore:
  - "&7这是个示例电容!"
  block-type: DEFAULT
  capacity: 114514
  item-amount: 1
  crafting-recipe-type: ENHANCED_CRAFTING_TABLE
  crafting-recipe:
    1:
      type: VANILLA
      id: GOLD_BLOCK
      amount: 1
    2:
      type: NONE
      id: N/A
      amount: 1
    3:
      type: VANILLA
      id: GOLD_BLOCK
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
```

| 内容 | 描述 | 有效输入 |
| --- | ----------- | ----------------- |
| `EXAMPLE_CAPACITOR` | 物品的 ID。<br />该 ID 不能与任何其他物品的 ID 相同！ | **仅支持大写字母、数字、下划线!** |
| category | 物品所在分类的 ID。 | 自定义粘液附属的[分类](./categories) ID，或[其他分类的标识符](./categories#use-existing-categories)。 |
| capacitor-name | 物品的名称。<br />支持[颜色代码](../common/color-codes)。 | |
| capacitor-lore | 物品的描述。<br />支持[颜色代码](../common/color-codes)。<br />如果不想添加描述可以将整个字段删除。 | |
| block-type | 电容的方块类型。 | - `DEFAULT` 会使用原版电容的头颅，材质会根据储电量动态更新。<br />- *任意[原版方块 ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)*。 |
| capacity | 这个电容可储存的电力。| 1 - 2147483647（整数） |
| item-amount | 每次合成该物品时所输出的数量。 | 整数，最少为1，最多为一组物品的最大数量。 |
| crafting-recipe-type | 见[合成配方](../common/crafting-recipe)页。 | |
| crafting-recipe | 见[合成配方](../common/crafting-recipe)页。 | |
