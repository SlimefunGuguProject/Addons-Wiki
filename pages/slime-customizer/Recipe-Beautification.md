# 配方页面美化

本章主要讲述关于配方页面的美化

如果您的自定义物品是自定义机器所产出的，而您却苦于无法向玩家准确表达获取途径，可以看看本章内容

因为自定义粘液附属暂时无法自定义RecipeType，所以我们需在配方中告诉玩家该物品的获取途径

展示图为下:

![配方页面展示](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/slime-customizer/zhanshi.png ':size=25%')

具体方法如下

1、在`items.yml`文件中写一个用于展示获取途径的物品，将`crafting-recipe-type`设为`NONE`

示例:

```yaml
HAIMAN_INFO_FENZI_4:
  category: slime_customizer_info
  item-type: CUSTOM
  item-name: "&c&l分子重组仪配方"
  item-lore:
  - "&7该物品在分子重组仪4里制作"
  item-id: SKULL57ccd36dc8f72adcb1f8c8e61ee82cd96ead140cf2a16a1366be9b5a8e3cc3fc
  item-amount: 1
  placeable: false
  crafting-recipe-type: NONE
  crafting-recipe:
    1:
      type: NONE
      id: N/A
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
      type: NONE
      id: N/A
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

2、在你想展示获取途径的物品中引用该物品

示例：

```yaml
HAIMAN_INFINITY_CONSTRUCTOR_2:
  category: slime_customizer_material
  item-type: CUSTOM
  item-name: "&f&l无尽压缩奇点"
  item-lore:
  - "&7由6个无尽奇点压缩而成"
  item-id: SKULL8af6bd2c033a838d4ff7fd555321e06cf806a75c4a2b5868c71004e02a1860a4
  item-amount: 1
  placeable: false
  crafting-recipe-type: NONE
  crafting-recipe:
    1:
      type: NONE
      id: N/A
      amount: 1
    2:
      type: SLIMEFUN
      id: INFINITY_SINGULARITY
      amount: 6
    3:
      type: NONE
      id: N/A
      amount: 1
    4:
      type: NONE
      id: N/A
      amount: 1
    5:
      type: SLIMEFUN
      id: HAIMAN_INFO_FENZI_4
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

在上述配置中，作者将展示获取途径的物品设置在了配方5，即九宫格正中间的那格

在配方的前三格，可以展示了制作该物品所需的输入材料

这样一来，该物品的获取途径被标明的清清楚楚，即在分子重组仪4中用6个无尽奇点来合成1个无尽压缩奇点

3、如果想在分类中隐藏展示获取途径的物品，您可以在Slimefun即粘液科技原版的配置文件`Items.yml`中搜索该物品的粘液ID，并将`hide-in-guide:`设置为`true`

与ban粘液科技物品同理