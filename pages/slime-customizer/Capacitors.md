# 电容

!> 该功能为汉化版独有

在`/plugins/SlimeCustomizer/capacitors.yml`中，你可以配置电容。

每一项都代表一个电容。

```yaml
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
| `EXAMPLE_CAPACITOR` | 电容的ID。<br>该ID不能与任何其他物品的ID相同! | **仅支持大写字母、数字、下划线!** |
| category | 物品所在[分类](./Categories)的ID。 |
| generator-name | 电容的名称。<br>支持[颜色代码](./Color-codes)。 |
| generator-lore | 电容的描述。<br>支持[颜色代码](./Color-codes)。 |
| block-type | 电容所使用的[原版方块ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或默认值。 | `default` 会使用原版电容的头颅，材质会根据储电量动态更新。<br>*任意原版方块ID* |
| capacitor | 这个电容可储存的电力，最大为 2147483647。 |
| item-amount | 每次合成获得的物品数量。 |
| crafting-recipe-type | 见[合成配方](./Crafting-Recipe)页。 |
| crafting-recipe | 见[合成配方](./Crafting-Recipe)页。 |
