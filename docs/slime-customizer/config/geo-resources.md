---
sidebar_position: 4
---

# 自然资源

```yaml title="geo-resources.yml"
EXAMPLE_GEO:
  category: slime_customizer
  item-type: CUSTOM
  item-name: "&b示例自然资源"
  item-lore:
    - "&7这是一个示例自然资源!"
  item-id: STICK
  max-deviation: 1
  biome:
    BEACH: 9
  environment:
    NORMAL: 3
    NETHER: 6
```

| 内容 | 描述 | 有效输入 |
| --- | ----------- | ----------------- |
| `EXAMPLE_GEO` | 物品的 ID。<br />该 ID 不能与任何其他物品的 ID 相同！ | **仅支持大写字母、数字、下划线!** |
| category | 物品所在分类的 ID。 | 自定义粘液附属的[分类](./categories) ID，或[其他分类的标识符](./categories#use-existing-categories)。 |
| item-type | 物品注册的方式。 | **CUSTOM** 填入此项时，你可以自定义物品名称、描述、种类。<br />**SAVEDITEM** 从[保存的物品](../common/saved-items)中加载物品。 |
| item-name | 物品的名称。<br />支持[颜色代码](../common/color-codes)。 | |
| item-lore | 物品的描述。<br />支持[颜色代码](../common/color-codes)。<br />如果不想添加描述可以将整个字段删除。 | |
| item-id | 物品的标识符。 | [原版物品 ID（Material）](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或[头颅](../common/skull-items)或保存的物品的ID。 |
| max-deviation | 每个区块自然资源数量的最大偏差。 | 正整数 |
| biome | 自然资源在各个生物群系的默认数量。<br />*可选，但biome与environment至少要有一个。* | |
| environment | 自然资源在各个世界类型的默认数量。<br />*可选，但biome与environment至少要有一个。* | |

## 关于每个区块自然资源数量的说明

自然资源的数量会根据区块的生物群系、世界类型、以及最大偏差决定。

### 生物群系 `biome`

`biome` 部分为生物群系的设置。你可以在[这里](https://jd.papermc.io/paper/1.19/org/bukkit/block/Biome.html)找到生物群系的ID。  
需要注意的是，1.18 的生物群系有较大改动。在查询生物群系的 ID 时，最好找到与你服务端版本一致的的生物群系列表。  
你可以将地址中的 `1.19` 替换为对应的主要版本（`1.18`、`1.16`等）。

```text
https://jd.papermc.io/paper/1.19/org/bukkit/block/Biome.html
```

### 世界类型 `environment`

`environment`部分为世界类型的设置。你可以在[这里](https://jd.papermc.io/paper/1.19/org/bukkit/World.Environment.html)找到世界类型的 ID。

- `NORMAL` 主世界
- `NETHER` 下界
- `THE_END` 末地

### 默认资源数量

首先，自然资源拥有一个默认数量，这个数量会受到生物群系与世界类型的影响。  
当你在 `biome` 设置了某个生物群系的资源数量时，如果区块的生物群系匹配，那么该区块的默认数量则为该生物群系的资源数量。  
如果 `biome` 没有匹配的生物群系，那么会继续到 `environment`（世界类型）部分进行匹配，如果匹配成功，那么该区块的默认数量则为该世界类型的资源数量。  
如果生物群系与世界类型都没有匹配的，那么该区块的默认数量则为0。

:::note 示例

在示例配置文件中，如果区块的生物群系为沙滩，那么区块的默认资源数量为9。  
如果区块的生物群系是丛林，因为 `biome` 中没有匹配的生物群系，但 `environment` 有匹配的世界类型 `NORMAL`，所以区块的默认资源数量为3。  
如果区块在末地，因为没有任何匹配，所以区块的默认资源数量为0。

:::

### 最终资源数量

最终资源数量是默认资源数量，并加上偏差值。`max-deviation` 定义了最大的偏差值。

如果默认数量不是0，那么最终资源数量的范围为 $默认数量 \pm 偏差值$。

该数量在扫描时确定，且不会再更改。
