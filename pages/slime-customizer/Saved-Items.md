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
  type: SAVEDITEM
  item-name: "&b保存物品示例(配置自动忽略名称)"
  item-lore:
  - "&7配置自动忽略lore"
  item-id: DIRT
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

crafting-recipe以下是在配方中引用saveditem物品

机器、电容、发电机、太阳能发电机同理