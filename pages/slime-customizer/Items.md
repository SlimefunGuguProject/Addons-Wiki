# 物品

在`/plugins/SlimeCustomizer/items.yml`中，你可以配置物品。

每一项都代表一个物品。

```yaml
EXAMPLE_ITEM:
  category: slime_customizer
  item-type: CUSTOM
  item-name: "&bExample Item"
  item-lore:
  - "&7This is an example item!"
  - "&cSlimeCustomizer now supports multiline lore!"
  item-id: STICK
  item-amount: 1
  placeable: false
  crafting-recipe-type: ENHANCED_CRAFTING_TABLE
  crafting-recipe:
    1:
      type: VANILLA
      id: STICK
      amount: 1
    2:
      type: NONE
      id: N/A
      amount: 1
    3:
      type: NONE
      id: N/A
      amount: 1
    4:
      type: VANILLA
      id: STICK
      amount: 1
    5:
      type: NONE
      id: N/A
      amount: 1
    6:
      type: NONE
      id: N/A
      amount: 1
    7:
      type: NONE
      id: N/A
      amount: 1
    8:
      type: NONE
      id: N/A
      amount: 1
    9:
      type: NONE
      id: N/A
      amount: 1
```

| 内容 | 描述 | 有效输入 |
| --- | ----------- | ----------------- |
| `EXAMPLE_ITEM` | 物品的ID。<br>该ID不能与任何其他物品的ID相同! | **仅支持大写字母、数字、下划线!** |
| category | 物品所在[分类](./Categories)的ID。 |
| item-type | 物品的注册方式。 | **CUSTOM** 填入此项时，你可以自定义物品名称、描述、种类。 <br>**SAVEDITEM** 从[保存的物品](./Saved-Items)中加载物品。 |
| item-name | 物品的名称。<br>支持[颜色代码](./Color-codes)。 |
| item-lore | 物品的描述。<br>支持[颜色代码](./Color-codes)。 |
| item-id | 物品所使用的[原版物品ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或[头颅](./Skull-Items)或保存的物品的ID。 |
| item-amount | 每次合成该物品时所输出的数量。 | 1 - 64 （只能是整数） |
| placeable | 物品是否可放置。**不要让工具等本来就无法放置的物品可放置！** |
| crafting-recipe-type | 见[合成配方](./Crafting-Recipe)页。 |
| crafting-recipe | 见[合成配方](./Crafting-Recipe)页。 |

!> **这些物品也可用于您的自定义机器/发电机!**  

所有已注册的自定义物品都可以通过`crafting-recipe.#.type`为`SLIMEFUN`下填入你自定义物品的id来引用该自定义物品（可作为配方材料，输入输出等）。  
如果你想使用items.yml中的一个物品作为另一个物品的制作材料，那么这个制作材料必须优先注册。(在物品文件中，处在越靠前的物品最先注册。如果一个物品处在另一个物品的上方，但上方的物品需要用到下方的物品作为配方，那么上方的物品需要在游戏里手持该物品，输入`/sfc saveitem`来保存该物品)

!> Slimefun的物品在其NBT中标记物品ID，以便Slimefun可以识别它们。为了确保您的保存的物品在需要被其他插件识别时不会有冲突，这个标签被移除了。但是自定义物品仍有此标签。因此，在保存的物品上使用`/sf give`可能会干扰其他插件，因为它将被其它插件标记。若要获取该物品的未标记版本，请改用`/sc give`。
