# advancements.yml

你可以在该配置文件中设置所有的进度。

## 说明

```yaml
portable_workbench:
  group: basic
  display:
    type: CRAFTING_TABLE
    name: "&a便携合成"
    lore:
      - "使用一次便携工作台"
  name: "&a[便携合成]"
  hidden: true
  criteria:
    interact:
      name: "使用一次便携工作台"
      type: interact
      amount: 1
      item:
        type: PORTABLE_CRAFTER
  rewards:
    commands:
      - "experience add %p% 3 levels"
```

以下为各个部分的说明:

| 内容 | 描述 |
| -------- | -------- |
| portable_workbench | 这是进度的ID。<br>**只能用英文、数字、下划线!** |
| `group` | **必须**。这是该进度所属的进度组。<br>对应着[`groups.yml`](./groups.yml)中设置的分组ID。 |
| `display` | **必须**。这是该进度的展示物品。<br>详见[物品设置](./Item-Settings)。 |
| `name` | **必须**。这是该进度的显示名称。<br>会在完成进度后的公屏通知中展示，支持颜色代码`&`。<br>*建议: 使用与原版进度一致的格式。*<br>*例如:* `&a[便携合成]` |
| `hidden` | **可选**。是否隐藏进度。<br>隐藏后进度将不在列表中展示，直到玩家完成进度后才会显示。 |
| `criteria` | **必须**。这是该进度的完成条件。<br>详见[完成条件](#criteria)。 |
| `rewards` | *可选*。这是该进度的完成奖励。<br>详见[奖励](#rewards)。 |

----

### 完成条件 :id=criteria

每个进度可以设置多个条件，完成所有条件后才算完成进度。

```yaml
  criteria:
    pickaxe:
      name: "获得爆炸镐"
      type: inventory
      item:
        type: EXPLOSIVE_PICKAXE
    shovel:
      name: "获得爆炸铲"
      type: inventory
      item:
        type: EXPLOSIVE_SHOVEL
```

| 内容 | 描述 |
| -------- | -------- |
| pickaxe, shovel | 这是进度条件的ID。<br>**只能用英文、数字、下划线!**<br>同一个进度中，每个条件的ID不能相同。 |
| `type` | **必须**。这是该条件的类型。<br>详见下文的各种条件类型。 |
| `name` | *可选*。这是该条件的描述。<br>如果未指定，则会使用条件的ID作为描述。 |

另外，根据条件类型的不同，还有一些其他的参数需要填写。

#### consume 食用物品 :id=consume

**类型**: `consume`

该类型的条件需要玩家食用指定的食物、药水。  
可以是原版，也可以是粘液科技中的任何以可食用物品为基础的物品（如粘液科技中的怪物肉干，异域花园中的部分果汁）。

**重要**: 请注意，该条件仅适用于拥有原版食用动画的物品，异域花园中的"可食用"水果/植物/食物(实际上是玩家头颅)不适用于该条件，请使用[`interact`](#interact)。

```yaml
  criteria:
    consume:
      name: "饮用金苹果汁"
      type: consume
      amount: 5
      item:
        type: GOLDEN_APPLE_JUICE
```

| 内容 | 描述 |
| -------- | -------- |
| `item` | **必须**。指定该条件所需的物品。<br>参考[物品设置](./Item-Settings)。 |
| `amount` | *可选*。需要食用的物品数量，默认为1。 |

#### interact 右键使用物品 :id=interact

**类型**: `interact`

该类型的条件需要玩家右键使用指定的物品。

```yaml
  criteria:
    interact:
      name: "使用一次便携工作台"
      type: interact
      amount: 1
      item:
        type: PORTABLE_CRAFTER
```

| 内容 | 描述 |
| -------- | -------- |
| `item` | **必须**。指定该条件所需的物品。<br>参考[物品设置](./Item-Settings)。 |
| `amount` | *可选*。需要使用的次数，默认为1。 |

#### inventory 拥有物品 :id=inventory

**类型**: `inventory`

该类型的条件需要玩家物品栏中拥有指定物品。

检测会在玩家开启、关闭物品栏，或捡起物品时进行。

```yaml
  criteria:
    oregrinder:
      name: "获得电力碎矿机"
      type: inventory
      amount: 1
      item:
        type: ELECTRIC_ORE_GRINDER
```

| 内容 | 描述 |
| -------- | -------- |
| `item` | **必须**。指定该条件所需的物品。<br>参考[物品设置](./Item-Settings)。 |
| `amount` | *可选*。满足条件所需的物品数量，默认为1。 |

#### multiblock 与多方块结构交互 :id=multiblock

**类型**: `multiblock`

该类型的条件需要玩家与指定的多方块结构交互。

```yaml
  criteria:
    ore_crusher:
      name: "使用一次矿石粉碎机"
      type: multiblock
      multiblock: ORE_CRUSHER
```

| 内容 | 描述 |
| -------- | -------- |
| `multibloack` | **必须**。多方块结构的ID。 |

粘液原版包含的多方块结构:

- **ENHANCED_CRAFTING_TABLE** [增强型工作台](https://slimefun-wiki.guizhanss.cn/Enhanced-Crafting-Table)
- **MAGIC_WORKBENCH** [魔法工作台](https://slimefun-wiki.guizhanss.cn/Magic-Workbench)
- **ARMOR_FORGE** [盔甲锻造台](https://slimefun-wiki.guizhanss.cn/Armor-Forge)
- **COMPRESSOR** [压缩机](https://slimefun-wiki.guizhanss.cn/Compressor)
- **PRESSURE_CHAMBER** [压力机](https://slimefun-wiki.guizhanss.cn/Pressure-Chamber)
- **SMELTERY** [冶炼炉](https://slimefun-wiki.guizhanss.cn/Smeltery)
- **ORE_CRUSHER** [矿石粉碎机](https://slimefun-wiki.guizhanss.cn/Ore-Crusher)
- **GRIND_STONE** [磨石](https://slimefun-wiki.guizhanss.cn/Grind-Stone)

#### place 放置方块 :id=place

**类型**: `place`

该类型的条件需要玩家放置指定方块。

目前暂时没有对已放置方块的检测，所以玩家可以通过在同一地点重复放下并破坏方块来完成条件，因此，一般将数量设置为1。

```yaml
  criteria:
    build:
      name: "放置一个能源调节器"
      type: place
      amount: 1
      item:
        type: ENERGY_REGULATOR
```

| 内容 | 描述 |
| -------- | -------- |
| `item` | **必须**。指定该条件所需的物品。<br>参考[物品设置](./Item-Settings)。 |
| `amount` | *可选*。满足条件所需的物品数量，默认为1。 |

#### break 破坏方块 :id=break

**类型**: `break`

该类型的条件需要玩家破坏指定方块。

配置参数与`place`放置方块一致，因此不再赘述。

#### research 完成研究 :id=research

**类型**: `research`

该类型的条件需要玩家解锁指定研究。

```yaml
  criteria:
    research:
      name: "研究末影护身符"
      type: research
      research: "slimefun:ender_talismans"
```

| 内容 | 描述 |
| -------- | -------- |
| `research` | **必须**。研究的 NamespacedKey ID。<br>你可以在[粘液科技小助手](https://slimefun-helper.guizhanss.cn)中查询研究的键名。 |

#### mobkill 击杀指定生物 :id=mobkill

**类型**: `mobkill`

该类型的条件需要玩家击杀指定类型的生物。

```yaml
  criteria:
    kill_ender_dargon:
      name: "击杀末影龙"
      type: mobkill
      amount: 1
      entity: ender_dragon
```

| 内容 | 描述 |
| -------- | -------- |
| `entity` | **必须**。指定该条件所需的生物类型。<br>生物类型为`EntityType`小写加下划线的形式<br>(例如 `stray`, `cave_spider`, `glow_squid`, 等.) |
| `amount` | *可选*。满足条件所需击杀的生物数量，默认为1。 |

#### search 使用搜索功能 :id=search

**类型**: `search`

该类型的条件需要玩家使用粘液科技的搜索功能（可通过粘液科技指南书，或`/sf search`指令）来搜索指定字符。

```yaml
  criteria:
    search_cargo:
      name: "搜索货运"
      type: search
      search: "货运"
```

| 内容 | 描述 |
| -------- | -------- |
| `search` | **必须**。指定该条件所需的搜索字符。搜索内容需要与该字符完全一致，才可以完成。 |

#### 更多条件 :id=more-criterion

以上是现有的进度完成条件。如果你想添加更多类型的条件，请参阅粘液科技进度提供的API。

----

### 奖励 :id=rewards

每个进度可以设置多种类型的奖励。

```yaml
  rewards:
    commands:
      - "experience add %p% 3 levels"
```

| 内容 | 描述 |
| -------- | -------- |
| commands | 为奖励类型(需要完全对应)。<br>详见下文的各种奖励类型。 |

#### command 指令 :id=command

**类型**: `command`

目前完成进度仅有这一种奖励类型，以控制台的身份执行指令。

```yaml
  rewards:
    commands:
      - "experience add %p% 3 levels"
      - "sf give %p% COPPER_DUST"
```

每一行为一条指令，从上到下按顺序执行。

可以在指令中使用 `%p%` 来表示完成进度的玩家名称。

!> 该条目的双引号是非必须的，如果你的指令中包含双引号，则需要将最外围的双引号去掉
