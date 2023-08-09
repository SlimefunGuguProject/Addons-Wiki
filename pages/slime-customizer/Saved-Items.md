# 保存的物品

自定义粘液附属支持任何自定义物品，可以是来自其它任何插件的物品。

## 保存物品

1. 手持你想要保存的物品
2. 输入 `/sc saveitem`

注:当你的配置写的有错误从而导致不完全加载时，无法使用`/sc saveitem`指令及自定义的相关物品/机器

你的保存物品的保存位置将会出现在聊天栏中。您可以将该文件重命名，但建议使用英文、数字、下划线的任意组合。此名称将在您的.yml配置中使用。

> 示例: 手持泥土, 输入`/sc saveitem`。然后查看 `\plugins\SlimeCustomizer\saveditems` 目录，并将 `0.yml` 重命名为 `DIRT.yml`。 

## 使用保存的物品

你可以使用保存的物品作为自定义粘液附属的物品，或用于物品配方、机器输入/输出等。

通常来说，你需要将物品类型设置为`SAVEDITEM`，并在`item-id`或`id`处填写保存的物品的文件名（不包含`.yml`后缀）。

所有保存的物品必须写在Items.yml文件中

以下为部分示例:

```yaml
1:
  type: SAVEDITEM
  id: DIRT    
```

以下为完整注册Saveditem示例

```yaml
EXAMPLE_ITEM:
  category: slime_customizer
  item-type: SAVEDITEM  # 注意此处需要修改为SAVEDITEM
  item-name: "&b保存物品示例(配置自动忽略名称)"
  item-lore:
  - "&7配置自动忽略lore"
  item-id: DIRT # 此处为保存物品的文件名
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

需要注意的是，在此你修改不了saveditem的名称和描述

你需要在该物品的保存文件里或在游戏保存sc物品前修改物品的名称和描述

上述id中的`DIRT`，是上文中提到的 `DIRT.yml` 去掉 `.yml` 后缀所得。

## 引用保存的物品

以示例物品为样本

```yaml
EXAMPLE_ITEM:
  category: slime_customizer
  item-type: CUSTOM
  item-name: "&b物品名称"
  item-lore:
  - "&7物品描述 "
  item-id: STICK
  item-amount: 1
  placeable: false
  crafting-recipe-type: ENHANCED_CRAFTING_TABLE
  crafting-recipe:
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

`crafting-recipe`以下是在配方中引用saveditem物品

机器、电容、发电机、太阳能发电机同理

## 注意事项

在使用saveditems时需要额外注意几点

1、若要在配方或机器的输入输出中引用`SAVEDITEM`时，建议先将此saveditems在`items.yml`文件里进行注册，赋予它一个粘液ID，否则会导致**配方之间，输入输出之间**的窜门(特别是**相同物品仅nbt不同**的时候)

这里举一个在海曼科技里的**错误**示例:

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

这是一个错误示例，输入输出直接引用了相同物品仅nbt不同的SAVEDITEM，这会导致输出产物混乱，并非你所编写的那样

解决方法:将这些saveditems在`items.yml`中一一注册，赋予这些物品粘液ID，然后再通过`type: SLIMEFUN`来引用它们

2、这是一个与乱序技艺（FinalTECH）附属冲突的一个bug

利用saveitem保存一个方块物品并在`items.yml`文件引用它们，且这些方块是不可被放置的，即`placeable: false`，在乱序的便捷合成台中合成该方块物品，会导致placeable失效，但失效placeable的物品可以正常作为材料参与合成，若您放置了失效placeable的方块物品，会导致该方块物品变为原版方块

bug详情与解决方案[见此](https://www.bilibili.com/video/BV1NM411T7aA/?spm_id_from=333.999.0.0)

3、若您想制作下几章教程中的武器、背包等，请**务必删除您服务器中的简易工具附属**！

简易工具附属的英文名是`SimpleUtils`,请务必删除它

该附属中的工作台只读ID，会导致非常严重的刷物品bug
