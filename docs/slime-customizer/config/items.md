---
sidebar_position: 5
---

# 物品

```yaml title="items.yml"
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
| `EXAMPLE_ITEM` | 物品的 ID。<br />该 ID 不能与任何其他物品的 ID 相同！ | **仅支持大写字母、数字、下划线!** |
| category | 物品所在分类的 ID。 | 自定义粘液附属的[分类](./categories) ID，或[其他分类的标识符](./categories#use-existing-categories)。 |
| item-type | 物品注册的方式。 | **CUSTOM** 填入此项时，你可以自定义物品名称、描述、种类。<br />**SAVEDITEM** 从[保存的物品](../common/saved-items)中加载物品。 |
| item-name | 物品的名称。<br />支持[颜色代码](../common/color-codes)。 | |
| item-lore | 物品的描述。<br />支持[颜色代码](../common/color-codes)。<br />如果不想添加描述可以将整个字段删除。 | |
| item-id | 物品的标识符。 | [原版物品 ID（Material）](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或[头颅](../common/skull-items)或[保存物品](../common/saved-items)的 ID。 |
| item-amount | 每次合成该物品时所输出的数量。 | 1 - 64（整数） |
| placeable | 物品是否可放置。<br />**不要把工具等本来就无法放置的物品设置为可放置！** | `true`或`false` |
| crafting-recipe-type | 见[合成配方](../common/crafting-recipe)页。 | |
| crafting-recipe | 见[合成配方](../common/crafting-recipe)页。 | |

本配置文件注册的都是没有任何效果的物品。后续的大部分配置文件都拥有类似的字段。

## 物品用于配方/机器输入输出

所有已注册的自定义物品都可以通过设置 `type` 为 `SLIMEFUN`，`id` 为你自定义物品的 ID，来引用该自定义物品，可作为配方材料，输入输出等。

如果你想使用本配置文件中的一个物品作为另一个物品的制作材料，那么这个材料物品必须优先注册。  
在所有的配置文件中，越靠前的物品越先注册。

:::info

Slimefun 的物品在其 NBT 中标记有物品的 ID，以便 Slimefun 可以识别它们。为了确保你保存的物品在需要被其他插件识别时不会有冲突，这个标签在保存物品时会被移除。  
但是，通过配置文件定义后的物品仍会有此标签。因此，在保存的物品上使用 `/sf give` 可能会干扰到其他插件，因为它将被其它插件标记。若要获取该物品的原始版本（即保存时去掉 ID 的版本），请改用 `/sc give`。

:::
