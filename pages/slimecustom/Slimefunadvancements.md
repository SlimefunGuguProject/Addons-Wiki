# SlimefunAdvancements 粘液科技进度

这是一个 Slimefun 附属，可以给 Slimefun 添加一个可配置的进度系统。

## 下载

**自动更新**: 汉化版构建#1及以后版本包含自动更新功能，默认开启。

点击这里下载 SlimefunAdvancements: [下载 SlimefunAdvancements](https://builds.guizhanss.net/ybw0014/SlimefunAdvancements-CN/main)

<p align="center">
  <a href="https://github.com/ybw0014/SlimefunAdvancements-CN/actions/workflows/build.yml">
    <img src="https://github.com/ybw0014/SlimefunAdvancements-CN/actions/workflows/build.yml/badge.svg" alt="Java CI"/>
  </a>
  <a href="https://builds.guizhanss.net/ybw0014/SlimefunAdvancements-CN/main">
    <img src="https://builds.guizhanss.net/f/ybw0014/SlimefunAdvancements-CN/main/badge.svg" alt="Build status"/>
  </a>
</p>

## 配置

你可以在 `plugins/SFAdvancements/` 文件夹中查看配置文件

### groups.yml

你可以在该配置文件中设置进度的分组信息。

分组键名只能使用英文、数字、下划线。

分组会在`advancements.yml`文件中使用，你可以将不同分类的进度分配到不同的分组中。  
每个分组都可以设置一个展示物品(`display`)，会在游戏内菜单中展示出来。你可以在下一小节了解如何配置展示物品。

### 物品设置

你可以使用以下方法来展示物品:

- 方法一: 物品ID (可以是 [原版物品ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) 或者 [粘液科技物品ID](https://sf-items.walshy.dev/) )
- 方法二: 在`type`字段中指定物品ID，可选`name`字段指定显示名称，可选`lore`字段指定描述
- 方法三: 序列化

你可以在游戏中手持物品并使用`/sfa dumpitem`指令，在控制台中获得物品的序列化配置。

支持彩色字符`&`。

`groups.yml` 方法一示例:

```yaml
my_cool_group:
  display: NETHER_STAR

my_other_group:
  display: ELECTRIC_MOTOR
```

`groups.yml` 方法二示例:

```yaml
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

`groups.yml` 方法三示例:

```yaml
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

### advancements.yml

你可以在该配置文件中设置所有的进度。

进度的键名只能使用英文、数字、下划线（将被注册为 NamespacedKey `sfadvancements:<key>`）。

一个进度必须指定`group`, `display`, `name`, `criteria`  
可选: `rewards`

以下为各个部分的说明:

- `group`: 指定进度组，对应`groups.yml`中定义的键名。
- `display`: 展示物品，参考 (物品设置)[#物品设置] 部分。
- `name`: 进度的展示名称，玩家完成进度后会在公屏聊天中展示
- `criteria`: 完成进度的条件
- `rewards`: 完成进度后的奖励

支持彩色字符`&`。

#### 进度完成条件

每个进度可以设置多个条件。

同一进度中，每个条件的键名不能重复，但不同进度的条件的键名可以重复。  
键名只能使用英文、数字、下划线。

如果条件没有指定名称，那么键名将作为名称使用。

一个条件必须指定`type`  
可选: `name`

以下为各个部分的说明:

- `name`: 条件的名称（其实应该是描述）
- `type`: 条件的类型

以下为插件自带的可用类型:

- `consume`
  - 食用物品
  - 需要在 `item` 中指定食用的物品（参考 (物品设置)[#物品设置] 部分）
  - 可以指定食物以及药水，包括粘液科技中的各种肉干，以及异域花园中的部分果汁
  - **重要**: 请注意，异域花园中的"可食用"水果/植物/食物(实际上是玩家头颅)不适用于该条件，请使用 `interact`
  - 可以在`amount`指定需要食用的数量
- `interact`
  - 右键点击使用物品
  - 需要在 `item` 中指定右键点击的物品（参考 (物品设置)[#物品设置] 部分）
  - 可以在 `amount` 指定点击的数量
- `inventory`
  - 物品栏中拥有物品
  - 需要在 `item` 中指定物品（参考 (物品设置)[#物品设置] 部分）
  - 可以在 `amount` 指定需要的数量
- `multiblock`
  - 与粘液科技中的多方块结构交互
  - 需要在 `multiblock` 中指定多方块结构的 ID
- `place`
  - 放置方块
  - 需要在 `item` 中指定需要放置的方块（参考 (物品设置)[#物品设置] 部分）
  - 可以在 `amount` 指定放置的数量
  - 目前玩家可以重复在一个位置破坏并放置方块，来完成该条件。建议将数量设置为1个
- `research`
  - 完成研究
  - 需要在 `research` 中指定研究的 NamespacedKey
    - NamespacedKey 的格式为 "插件:键名", 在 Slimefun 中的研究为 "slimefun:research"
      - 例如: "slimefun:ender_talismans"
- `mobkill`
  - 击杀指定的生物
  - 需要在 `entity` 中指定生物类型
  - 生物类型为`EntityType`小写加下划线的形式 (例如 `stray`, `cave_spider`, `glow_squid`, etc.)
  - 可以通过 `amount` 指定击杀的数量

#### 奖励

每个进度可以设置多种奖励（目前仅有`commands`类型)。

奖励的键名为奖励的类型（必须对应）。

目前有以下奖励类型:
- command
  - 指令
  - 一个字符串列表，每一行都是需要执行的指令
  - 在指令中使用 `%p%` 来表示完成进度的玩家名称

## 权限

`sfa.command.<command name>`: 允许执行对应的指令

## 自定义 (developers)

请参阅 [api.md](./api.md)

## TODO 计划中:
- ~~条件系统~~
  - ~~物品栏~~
  - 合成 (等待 [Slimefun/Slimefun4#3439](https://github.com/Slimefun/Slimefun4/pull/3439))
  - ~~交互~~
      - ~~放置~~
  - ~~完成研究~~
- ~~配置~~
- ~~奖励~~
- 添加成就
- ~~权限~~
- 从其他插件加载进度
- 更好地说明文件, ~~builds page~~
- 树状展示
- 进度 API (crazy)
- 作弊菜单
- 文档
