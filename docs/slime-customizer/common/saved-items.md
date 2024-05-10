---
sidebar_position: 5
---

# 保存的物品

自定义粘液附属支持任何自定义物品，可以是来自其它任何插件的物品。

## 如何保存物品

1. 手持你想要保存的物品。
2. 输入 `/sc saveitem`。

:::warning

当你的配置文件有问题导致插件无法完全加载时，插件会禁用，而你将无法使用插件的指令。

:::

你的保存物品的保存位置将会出现在聊天栏中。你可以将该文件重命名，但建议只使用英文、数字、下划线的任意组合。此名称将在各大配置文件中使用。

:::note 示例

手持泥土, 使用指令 `/sc saveitem`。然后打开 `/plugins/SlimeCustomizer/saveditems` 目录，并将 `0.yml` 重命名为 `DIRT.yml`。

:::

## 使用保存的物品

你可以使用保存的物品作为自定义粘液附属的物品，或用于物品配方、机器输入/输出等。

通常来说，你需要将物品类型设置为 `SAVEDITEM`，并在 `item-id` 或 `id` 处填写保存的物品的文件名（不包含 `.yml` 后缀）。

:::note 示例

使用保存的物品注册自定义[物品](../config/items)：

```yaml
EXAMPLE_ITEM:
  category: slime_customizer
  item-type: SAVEDITEM  # 注意此处需要填写 SAVEDITEM
  item-id: DIRT # 此处为保存物品的文件名，必须完全一致
  item-name: "&b保存物品示例(配置自动忽略名称)" # 当物品类型为保存物品时，该字段将被忽略
  item-lore: # 当物品类型为保存物品时，该字段将被忽略
  - "&7配置自动忽略lore"
  item-amount: 1
  placeable: false
  crafting-recipe-type: ENHANCED_CRAFTING_TABLE
  crafting-recipe: # 此处省略配方
```

`item-id` 的 `DIRT`，是上文中提到的 `DIRT.yml` 去掉后缀所得。

:::

:::warning

使用保存的物品时，物品的 `name` 与 `lore` 字段将会被忽略。

如果你需要更改保存物品的名称或说明，建议使用其他插件编辑好物品后，再重新进行保存。  
当然，你也可以修改序列化后的保存物品。但如果你不知道怎么修改，**不要去动保存物品里的内容**。

:::

### 使用保存的物品作为配方

将保存物品作为配方物品使用时，需要将 `type` 设置为 `SAVEDITEM`，并在 `id` 处填写保存的物品的文件名（无后缀）。

```yaml
    1:
      type: SAVEDITEM
      id: DIRT
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
      type: SAVEDITEM
      id: DIRT
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

## 注意事项

在使用保存物品时需要额外注意几点：

### 1. 关于机器输入/输出中使用保存的物品

若要在配方或机器的输入输出中使用保存的物品时，建议先将保存的物品注册为粘液[物品](../config/items)，否则会导致**配方之间，输入输出之间**的窜门（特别是**相同物品仅 NBT 不同**的时候）。

这里举一个在海曼科技里的**错误**示例:

<details>
<summary>点击查看示例代码</summary>

```yaml
HAIMAN_LIGHT_UPDATER:
  category: slime_customizer_new
  machine-name: '&e&l电光升级机'
  machine-lore:
  - '&7用于升级光源方块'
  block-type: SKULL59d0f51f39e08e51cc83cbec01e3ce1362c70c02edc351902af8e7a5f6e201bc
  progress-bar-item: GOLDEN_SHOVEL
  stats:
    energy-consumption: 5500
    energy-buffer: 50000
  crafting-recipe-type: ENHANCED_CRAFTING_TABLE
  crafting-recipe:
    '1':
      type: SAVEDITEM
      id: LIGHT_0
      amount: 1
    '2':
      type: SLIMEFUN
      id: HEATING_COIL
      amount: 1
    '3':
      type: SAVEDITEM
      id: LIGHT_0
      amount: 1
    '4':
      type: SLIMEFUN
      id: POWER_CRYSTAL
      amount: 1
    '5':
      type: SLIMEFUN
      id: COOLING_UNIT
      amount: 1
    '6':
      type: SLIMEFUN
      id: POWER_CRYSTAL
      amount: 1
    '7':
      type: VANILLA
      id: SEA_LANTERN
      amount: 1
    '8':
      type: SLIMEFUN
      id: ANCIENT_ITEM
      amount: 1
    '9':
      type: VANILLA
      id: SEA_LANTERN
      amount: 1
  recipes:
    '1':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_0
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_1
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '2':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_1
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_2
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '3':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_2
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_3
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '4':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_3
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_4
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '5':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_4
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_5
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '6':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_5
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_6
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '7':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_6
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_7
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '8':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_7
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_8
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '9':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_8
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_9
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '10':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_9
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_10
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '11':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_10
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_11
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '12':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_11
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_12
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '13':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_12
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_13
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '14':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_13
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_14
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '15':
      speed-in-seconds: 4
      input:
        '1':
          type: SAVEDITEM
          id: LIGHT_14
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: VANILLA
          id: LIGHT
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
    '16':
      speed-in-seconds: 4
      input:
        '1':
          type: VANILLA
          id: LIGHT
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
      output:
        '1':
          type: SAVEDITEM
          id: LIGHT_0
          amount: 1
        '2':
          type: NONE
          id: N/A
          amount: 1
```

</details>

这是一个错误示例，输入输出直接引用了相同物品仅NBT不同的保存物品，这会导致输出产物混乱，并非你所期望的结果。

:::info 解决方案

将这些保存物品分别注册为粘液物品，然后以使用粘液物品的方式进行设置。

:::

### 2. 与乱序技艺（FinalTECH）附属的兼容问题

当你保存了一个方块物品，且注册为不可放置（`placeable: false`）的[物品](../config/items)时，在乱序的便捷合成台中合成该物品，会导致 `placeable` 失效。  
失效的方块物品可以正常作为材料参与合成。如果你放置了这种方块，导致该方块物品变为原版方块。

:::info 解决方案

查看该[视频](https://www.bilibili.com/video/BV1NM411T7aA/)了解详情。

:::

### 3. 与简易工具（SimpleUtils）附属的兼容问题

当你想使用进阶方法进行自定义时，请禁用简易工具附属中的合成台。

该合成台仅识别粘液物品的 ID，会影响进阶自定义的效果，可能会出现严重的刷物 bug。
