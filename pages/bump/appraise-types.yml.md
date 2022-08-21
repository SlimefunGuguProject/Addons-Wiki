# 鉴定类型配置 (appraise-types.yml)

`/plugins/Bump/appraise-types.yml` 为 Bump 的鉴定类型的配置文件。

## 内容

`appraise-types.yml` 的每一项都是一个鉴定类型。示例内容如下：

```yaml
example_type:
  enabled: true
  name: "示例鉴定类型名称"
  description:
  - "示例鉴定类型说明"
  permission: "bump.example.node"
  equipment-type: SLIMEFUN
  check-material: true
  materials:
  - bump:sword
  equipment-slots:
  - HAND
  attributes:
    GENERIC_ATTACK_DAMAGE:
      min: 0
      max: 30
      weight: 40
    GENERIC_ATTACK_SPEED:
      min: -3
      max: 10
      weight: 25
    GENERIC_MOVEMENT_SPEED:
      min: -0.4
      max: 0.6
      weight: 15
    GENERIC_LUCK:
      min: -3
      max: 10
      weight: 10
    GENERIC_ATTACK_KNOCKBACK:
      min: -2
      max: 12
      weight: 10
```

| 配置项 | 说明 | 有效值 |
| ----- | --- | ----- |
| *example_type* | (**必填**) 鉴定类型的ID。<br>将包装为`NamespacedKey`，因此只允许小写字母、数字、斜杠、小数点、下划线、连字符。<br>不同鉴定类型的ID**不能重复**。 | `[a-z0-9/._-]` |
| `enabled` | (**必填**) 是否启用该鉴定类型。 | `true`/`false` |
| `name` | (**必填**) 鉴定类型的显示名称，支持颜色代码`&`。 |
| `description` | (**必填**) 鉴定类型的说明，可多行，支持颜色代码`&`。 |
| `permission` | (*可选*) 选择该鉴定类型所需的权限。<br>如果不需要权限，请删除该配置，不要留空。 |
| `equipment-type` | (**必填**) 装备类型。 | **ANY** 任意物品 <br> **VANILLA** 仅原版物品 <br> **SLIMEFUN** 仅粘液科技物品 |
| `check-material` | (*可选*) 是否在鉴定时，检测物品的类型(Material)。 | `true`/`false` |
| `materials` | (*可选*) 可接受的物品类型(Material)。<br>仅在`check-material`为`true`时有效。 | 见[物品类型说明](#materials) |
| `equipment-slots` | (**必填**) 该鉴定类型可应用到的装备栏位(EquipmentSlot)。 | [装备栏位(EquipmentSlot)](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/EquipmentSlot.html) |
| `slimefun-items` | (*可选*) 当鉴定的物品为粘液科技物品时，有效的粘液科技物品ID。（装备类型为**ANY**/**SLIMEFUN**时）<br>如果该选项为空，则允许所有粘液科技物品。 | [粘液科技物品ID](https://slimefun-helper.guizhanss.cn/) |
| `attributes` | 所有的属性配置。每一条都是一个属性。 | [属性(Attribute)](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html) | 
| `attributes.X.min` | (**必填**) 属性的最小值。 |
| `attributes.X.max` | (**必填**) 属性的最大值。 |
| `attributes.X.weight` | (*可选*) 属性的权重。 | 0 ~ 100 或 -1 |

### 物品类型说明 :id=materials

不同于其他插件的直接填写`Material`值，我们同时支持MC的材料，以及我们提前编写好的一些Tag。

怎么填写MC材料呢？很简单，只需要填写材料的`NamespacedKey`即可。别忘了，你可以在[这里](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)查询材料的名称。  
所有材料的`NamespacedKey`，都是以`minecraft:`开头，再加上材料名称的小写。  
例如，石头`STONE`，应填写`minecraft:stone`。

那么，Tag是什么呢？  
这里的Tag指的是Bump中添加的Tag，我们称之为`BumpTag`。每一个BumpTag都是一系列材料的合集，设置一个BumpTag，就相当于设置其中的所有材料。  
要使用Tag，以`bump:`，并加上Tag的名称即可，当然，是小写的。  
例如，`axe`是包含所有斧头的Tag，那么引用时，填写`bump:axe`即可。  
你可以在这里找到所有的Tag，并查看其中包含的材料：[点击访问GitHub](https://github.com/SlimefunGuguProject/Bump/tree/main/src/main/resources/tags)

### 额外说明

- 鉴定类型的权限会在玩家在[鉴定仪](./Appraisal-Instrument)中选择鉴定类型时、或进行鉴定时检测，如果没有权限，则鉴定停止。
- 关于属性权重：
    - 如果所有属性都指定权重，但权重和不是100时，该鉴定类型无效，不会进行注册。
    - 所有未指定权重的属性，或权重为-1的属性，会平分剩余权重。
    - 如果不想让属性参与鉴定评级计算，应设置权重为`0`，而不是不设置权重。
- 关于属性的值：
    - 最大值必须大于等于最小值，否则该鉴定类型无效，不会进行注册。
    - 属性将采用`AttributeModifier`添加到装备上，只有 `GENERIC_MOVEMENT_SPEED`, `HORSE_JUMP_STRENGTH` 采用倍率增量的[运算模式](https://wiki.biligame.com/mc/%E5%B1%9E%E6%80%A7#%E8%BF%90%E7%AE%97%E6%A8%A1%E5%BC%8F)，其余属性则采用属性增量的运算模式。
