# 分类

!> 该页面为新版分类系统的文档，旧版文档请查看[这里](./Categories-legacy)

在`/plugins/SlimeCustomizer/categories.yml`中，你可以配置分类。

每一项代表一个分类。

```yaml
slime_customizer:
  type: normal
  category-name: "&c普通分类"
  category-item: REDSTONE_LAMP
  tier: 0
nested_group:
  type: nested
  category-name: "&c父分类"
  category-item: BEDROCK
sub_group:
  type: sub
  category-name: "&c子分类"
  category-item: DIRT
  parent: nested_group
seasonal_group:
  type: seasonal
  category-name: "&c季节性分类"
  category-item: DIAMOND
  month: 9
locked_group:
  type: locked
  category-name: "&c锁定分类"
  category-item: DIAMOND
  parents:
    - slimefun:basic_machines
```

| 内容 | 描述 |
| -------- | -------- |
| `slime_customizer` | 分类的ID，每个分类的ID不能相同。<br>**仅支持字母、数字、下划线!**<br>新分类系统不再强制使用小写字母，但从物品引用分类时，请注意分类ID的大小写。 |
| type | (**必填**) 分类的类型。可用类型：<br>- `normal`: 普通分类<br>- `nested`: 父分类<br>- `sub`: 子分类<br>- `seasonal`: 季节性分类<br>- `locked`: 锁定分类 |
| category-name | (**必填**) 分类的显示名称。<br>支持[颜色代码](./Color-codes)。 |
| category-item | (**必填**) 分类的展示物品。<br>填入[原版物品ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或者[头颅](./Skull-Items)。 |
| tier | (*可选*) 分类的优先级，默认为3。<br>分类的优先级是一个整数，低优先级的分类将优先显示。 |
| parent | (分类类型为子分类`sub`时**必填**) 父分类的ID。<br>只能是自定义附属中定义的父分类ID。 |
| month | (分类类型为季节性分类`seasonal`时**必填**) 季节性分类的显示月份，范围为1-12。 |
| parents | (分类类型为锁定分类`locked`时**必填**) 锁定分类所需的其他分类的`NamespacedKey`列表。<br>详见下方说明。 |

请记住你的分类ID，你会在其他配置文件中用到。

## 分类类型说明

### 父分类与子分类

以无尽贪婪附属举例，无尽贪婪是一个父分类，其中有基础机器、高级机器等子分类。

一个父分类可以有多个子分类，父分类不能向其添加物品。

### 季节性分类

季节性分类是仅会在一年中的指定月份时出现在粘液科技指南中，其余时间则隐藏的分类。

季节性分类中的物品在任何时间都可以合成。

### 锁定分类

锁定分类是需要所有所需分类中的物品都解锁后，才能查看的分类。  
粘液科技中的"能源与电力"分类使用的就是锁定分类。

在配置文件中，锁定分类所需的分类以`NamespacedKey`形式呈现。

`NamespacedKey`是一个携带插件名称的key。你可以翻阅插件的源代码来获取各个分类的`NamespacedKey`。  
你可以从[这里](https://github.com/StarWishsama/Slimefun4/blob/master/src/main/java/io/github/thebusybiscuit/slimefun4/implementation/setup/DefaultItemGroups.java)查看粘液科技所有分类的`NamespacedKey`。  
可以注意到，定义基础机器分类的行中有`new NamespacedKey(Slimefun.instance(), "basic_machines")`，这意味着该`NamespacedKey`的字符串形式为`slimefun:basic_machines`。

如果想让**锁定分类所需的其他分类**是您所自定义的分类，您需在您自定义的分类名前加上`slimecustomizer:`，例如`slimecustomizer:haimantech`

### 注意

您无法将自定义的子分类插入至其它附属的父分类中

## 拓展功能

### 将物品添加至别的附属分类中

您可以将您所自定义的物品/机器等添加至别的附属分类中，但是您需要注意以下几点：  
1、所添加到的附属分类必须为子分类，您无法将物品添加至main（主分类）  
2、您需在自定义物品/机器等配置的`category:`一栏遵循如右格式:  `existing: + namespacedkey（子分类名）` ,子分类名可以通过`/sc categories`指令查看  
示例:

```yaml
EXAMPLE_ITEM:
  category: existing:slimefun:misc # 将物品添加至粘液科技原版的杂项分类里
  item-type: CUSTOM
  item-name: "&b示例物品"
  item-lore:
  - "&7这只是个示例物品"
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
将物品添加至其它附属的分类中同理，子分类名均可以通过`/sc categories`指令查看  
3、您无法将物品添加至部分例如无尽贪婪附属的分类中，因为无尽贪婪附属用的`FlexItemGroup`不是标准的子分类，即您无法将自定义物品添加至父分类和非标准分类中

### 将您自定义的子分类添加至其它附属的标准父分类中

在最新版本，您可以将您自定义的分类添加至其它附属的标准分类中

在此以蓬松机器为示例：

```yaml
sub_group:
  type: sub
  category-name: "&c子分类"
  category-item: DIRT
  parent: existing:fluffymachines:fluffymachines
```

`parent:`后的格式：`existing: + namespacedkey`

上述示例可以将您自定义的子分类添加至蓬松机器附属的父分类中
