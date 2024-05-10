---
sidebar_position: 2
---

# 分类

```yaml title="categories.yml"
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

| 字段 | 描述 |
| --- | --- |
| `slime_customizer` | 分类的 ID，每个分类的 ID 不能相同。<br />**仅支持字母、数字、下划线!**<br />建议不使用大写字母。 |
| type | (**必填**) 分类的类型。可用类型：<br />- `normal`: 普通分类<br />- `nested`: 父分类<br />- `sub`: 子分类<br />- `seasonal`: 季节性分类<br />- `locked`: 锁定分类 |
| category-name | (**必填**) 分类的显示名称。<br />支持[颜色代码](../common/color-codes)。 |
| category-item | (**必填**) 分类的展示物品。<br />填入[原版物品ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或者[头颅](./Skull-Items)。 |
| tier | (*可选*) 分类的优先级，默认为3。<br />分类的优先级是一个整数，低优先级的分类将优先显示。 |

:::info

记住分类 ID，你会在其他配置文件中用到。

:::

:::warning 注意

部分的分类类型需要额外的字段，详见下方的分类类型说明。

:::

## 分类 ID 与标识符 `NamespacedKey` {#namespaced-key}

分类 ID 是一串简单的字符串，用来分别各个分类。例子中的 `slime_customizer` 就是一个分类 ID。

`NamespacedKey` 是粘液科技用来区分各大分类的标识符，这个标识符包含了分类 ID 与分类所属的附属名称。

自定义粘液附属分类的 `NamespacedKey` 均为：`slimecustomizer:ID`，其中 `ID` 为分类的 ID。

:::info

在接下来的所有页面中，**分类 ID** 指的是自定义粘液附属的分类 ID，**标识符**则指的是任何分类的 `NamespacedKey`。

:::

:::tip

你可以通过 `/sc categories` 指令来查询本体以及所有附属的分类的标识符。

:::

### 使用其他附属的分类 {#use-existing-categories}

你现在可以将物品添加到其他附属的分类中。在填写物品的 `categories` 字段时，格式为：`existing:` + 分类的标识符。

:::note 示例

`existing:slimefun:misc` 即可将物品添加到本体的杂项分类中。

:::

## 分类类型说明

### 普通分类（normal）

一个普通分类可以包含物品。

:::warning

当普通分类中没有物品时（没有添加物品或物品全部被禁用），该分类将不会显示在粘液科技指南中。

:::

:::note 示例

当一个服务器只安装了粘液科技插件时，大部分的分类都是普通分类。

:::

### 父分类（nested）与子分类（sub）

一个父分类可以有多个子分类。父分类**只能包含子分类，不能包含物品**。

:::note 示例

对于神秘科技附属的分类来说，"神秘科技"是一个父分类，其中有"机器"、"武器与防具"等子分类。

:::

子分类拥有以下额外字段：

| 字段 | 描述 |
| --- | --- |
| parent | (**必填**) 父分类的ID。 |

父分类的 ID 可以是：

- 自定义粘液附属中定义的父分类**ID**。（在示例配置中，你只需要填写`nested_group`）
- 其他附属中添加的**标准父分类**（当然，所有自定义粘液附属定义的父分类都是标准父分类）。  
  部分附属使用的是非标准父分类，目前暂不支持添加到这些父分类中。

  格式为：`existing:` + 父分类的[标识符](#namespaced-key)。

:::note 示例

`existing:fluffymachines:fluffymachines`，可将子分类添加到蓬松机器的父分类中。

:::

### 季节性分类（seasonal）

季节性分类是仅会在一年中的指定月份时出现在粘液科技指南中，其余时间则隐藏的分类。

季节性分类中的物品在任何时间都可以合成。

季节性分类拥有以下额外字段：

| 字段 | 描述 |
| --- | --- |
| month | (**必填**) 季节性分类的显示月份，范围为1-12。 |

### 锁定分类（locked）

锁定分类是需要所有所需分类中的物品都解锁后，才能查看的分类。

锁定分类拥有以下额外字段：

| 字段 | 描述 |
| --- | --- |
| parents | (**必填**) 锁定分类所需的其他分类的[标识符](#namespaced-key)**列表**。 |

:::note 示例

粘液科技中的"能源与电力"分类使用的就是锁定分类。

该分类需要基础机器全解锁，因此该分类需要设置 `slimefun:basic_machines` 为所需的分类。

:::
