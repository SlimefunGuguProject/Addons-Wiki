# 太阳能发电机

在`/plugins/SlimeCustomizer/solar-generators.yml`中，你可以配置太阳能发电机。

每一项都代表一个太阳能发电机。

```yaml
EXAMPLE_SOLAR_GENERATOR:
  category: slime_customizer
  generator-name: "&bExample Solar Generator"
  generator-lore:
  - "&7This is an example solar generator!"
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
| `EXAMPLE_SOLAR_GENERATOR` | 太阳能发电机的ID。<br>该ID不能与任何其他物品的ID相同! | **仅支持大写字母、数字、下划线!** |
| category | 物品所在[分类](./Categories)的ID。 |
| generator-name | 发电机的名称。<br>支持[颜色代码](./Color-codes)。 |
| generator-lore | 发电机的描述。<br>支持[颜色代码](./Color-codes)。 |
| block-type | 发电机所使用的[原版方块ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或者[头颅](./Skull-Items)。 |
| stats.energy-production.day | 白天该发电机每粘液刻所生产的电力，最大为 2147483647. |
| stats.energy-production.night | 夜晚该发电机每粘液刻所生产的电力，最大为 2147483647. |
| crafting-recipe-type | 见[合成配方](./Crafting-Recipe)页。 |
| crafting-recipe | 见[合成配方](./Crafting-Recipe)页。 |

!> 如果您不想添加物品描述(item-lore)，您可以直接删掉-和""里的内容
