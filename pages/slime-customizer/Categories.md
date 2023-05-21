# 分类

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
| `slime_customizer` | 分类的ID，每个分类的ID不能相同。<br>**仅支持字母、数字、下划线!**<br>新分类系统不再强制使用小写字母，但从物品引用分类时，请注意分类ID的大小写。<br>建议不使用大写字母。 |
| type | (**必填**) 分类的类型。可用类型：<br>- `normal`: 普通分类<br>- `nested`: 父分类<br>- `sub`: 子分类<br>- `seasonal`: 季节性分类<br>- `locked`: 锁定分类 |
| category-name | (**必填**) 分类的显示名称。<br>支持[颜色代码](./Color-codes)。 |
| category-item | (**必填**) 分类的展示物品。<br>填入[原版物品ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或者[头颅](./Skull-Items)。 |
| tier | (*可选*) 分类的优先级，默认为3。<br>分类的优先级是一个整数，低优先级的分类将优先显示。 |
| parent | (分类类型为子分类`sub`时**必填**) 父分类的ID。<br>可以填写自定义附属中定义的父分类ID，也可以填写其他附属的标准父分类。<br>详见下方说明。 |
| month | (分类类型为季节性分类`seasonal`时**必填**) 季节性分类的显示月份，范围为1-12。 |
| parents | (分类类型为锁定分类`locked`时**必填**) 锁定分类所需的其他分类的`NamespacedKey`列表。<br>详见下方说明。 |

请记住你的分类ID，你会在其他配置文件中用到。

## 分类ID与NamespacedKey :id=namespaced-key

分类ID是一串简单的字符串，用来分别各个分类。例子中的`slime_customizer`就是一个分类ID。

`NamespacedKey`是系统用来区分分类的key，这个key包含了分类ID与分类所属的附属名称。

自定义粘液附属分类的`NamespacedKey`均为：`slimecustomizer:ID`，其中ID为分类的ID。

!> 你可以通过`/sc categories`指令来查询本体以及所有附属的分类的`NamespacedKey`。

### 使用其他附属的分类ID

你现在可以将物品添加到其他附属的分类中。在填写物品的`categories`字段时，格式为：`existing:` + 分类的`NamespacedKey`。

例如：`existing:slimefun:misc` 即可将物品添加到本体的杂项分类中。

## 分类类型说明

### 父分类(nested)与子分类(sub)

以无尽贪婪附属举例，无尽贪婪是一个父分类，其中有基础机器、高级机器等子分类。

一个父分类可以有多个子分类。你不能向父分类添加物品。

#### 子分类`parent`字段

子分类的`parent`字段可以填写自定义粘液附属中定义的父分类**ID**。

也可以填写其他附属中添加的**标准父分类**。部分附属使用的是非标准父分类，目前暂不支持添加到这些父分类中。

格式为：`existing:` + 父分类的[`NamespacedKey`](#namespaced-key)。

例如：`existing:fluffymachines:fluffymachines`，可将子分类添加到蓬松机器的父分类中。

### 季节性分类(seasonal)

季节性分类是仅会在一年中的指定月份时出现在粘液科技指南中，其余时间则隐藏的分类。

季节性分类中的物品在任何时间都可以合成。

### 锁定分类(locked)

锁定分类是需要所有所需分类中的物品都解锁后，才能查看的分类。  
粘液科技中的"能源与电力"分类使用的就是锁定分类。

在配置文件中，锁定分类所需的分类通过[`NamespacedKey`](#namespaced-key)指定。

如果想让**锁定分类所需的其他分类**是您所自定义的分类，您需在您自定义的分类名前加上`slimecustomizer:`，例如`slimecustomizer:haimantech`。
