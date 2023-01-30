# 机器

在`/plugins/SlimeCustomizer/machines.yml`中，你可以配置机器。

每一项都代表一个机器。

```yaml
EXAMPLE_MACHINE:
  category: slime_customizer
  machine-name: "&bExample Machine"
  machine-lore:
  - "&7This is an example machine!"
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
| `EXAMPLE_MACHINE` | 机器的ID。<br>该ID不能与任何其他物品的ID相同! | **仅支持大写字母、数字、下划线!** |
| category | 物品所在[分类](./Categories)的ID。 |
| machine-name | 机器的名称。<br>支持[颜色代码](./Color-codes)。 |
| machine-lore | 机器的描述。<br>支持[颜色代码](./Color-codes)。 |
| block-type | 机器所使用的[原版方块ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或者[头颅](./Skull-Items)。 | 
| progress-bar-item | 机器的进度条所使用的物品，仅支持填入[原版物品ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |
| stats.energy-consumption | 这台机器每粘液刻消耗的电力，最大为 2147483647。 |
| stats.energy-buffer | 这台机器可储存的电力，最大为 2147483647。 |
| crafting-recipe-type | 见[合成配方](./Crafting-Recipe)页。 |
| crafting-recipe | 见[合成配方](./Crafting-Recipe)页。 |
| recipes.#.speed-in-seconds | 每次输出物品的间隔时间，单位为秒，最大为 2147483647。 |
| recipes.#.input/output.#.type | 输入/输出物品的类型。 | **NONE** 无物品 <br>**VANILLA** 原版物品 <br> **SLIMEFUN** 粘液科技物品 <br>**SAVEDITEM** [保存的物品](./Saved-Items) |
| recipes.#.input/output.#.id | 原版/粘液科技/保存物品的物品ID。<br>物品类型为**NONE**时，不需要填写。 |
| recipes.#.input/output.#.amount | 输入/输出物品数量。<br>物品类型为**NONE**时，不需要填写。 |

?> 提示: 查看粘液科技物品ID，可在游戏内手持该粘液科技物品，输入`/sf id`以查看。你也可以在[粘液科技小助手](https://slimefun-helper.guizhanss.cn/)中查询。

!> 每台机器只能有两种物品的输入/输出

!> 若使机器无输出，在output处引用原版物品AIR，AIR的amount只能为0