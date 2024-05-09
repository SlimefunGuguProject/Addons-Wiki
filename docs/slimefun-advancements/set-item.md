---
sidebar_position: 12
---

# 设置物品

你可以使用以下三种方法来设置物品。

## 方法一：设置物品ID

你可以直接填写[原版物品ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或[粘液科技物品ID](https://slimefun-helper.guizhanss.cn)。

```yaml title="groups.yml 示例"
my_cool_group:
  display: NETHER_STAR

my_other_group:
  display: ELECTRIC_MOTOR
```

## 方法二：指定物品ID，显示名称(name)，描述(lore)

你可以通过以下字段来设置物品。

| 字段 | 描述 |
| -------- | -------- |
| `type` | **必须**。[原版物品ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或[粘液科技物品ID](https://slimefun-helper.guizhanss.cn)。 |
| `name` | *可选*。物品的显示名称，支持彩色字符`&`。 |
| `lore` | *可选*。物品的描述，支持彩色字符`&`。 |

当设置的物品为条件物品时，检测进度只会检测物品类型与名称，不会检测物品描述。

```yaml title="groups.yml 示例"
basic:
  display:
    type: SLIME_BALL
    name: "&f基础"
    lore:
      - "&7&o粘液科技的基础部分."

electric:
  display:
    type: REDSTONE
    name: "&e电力"
    lore:
      - "&7&o文明的中心."
```

## 方法三：序列化

你可以在游戏中手持物品并使用`/sfa dumpitem`指令，在控制台中获得物品的序列化配置。

```yaml title="groups.yml 示例"
hi:
  display:
    ==: org.bukkit.inventory.ItemStack
    v: 2865
    type: IRON_INGOT
    meta:
      ==: ItemMeta
      meta-type: UNSPECIFIC
      display-name: '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"aqua","text":"Zinc
        Ingot"}],"text":""}'
      PublicBukkitValues:
        slimefun:slimefun_item: ZINC_INGOT
```

:::warning

如果你打算分享你的配置文件，你需要知道序列化物品是有版本的，目标服务端的版本不能低于序列化时的服务端版本，否则会导致物品无法加载。

:::
