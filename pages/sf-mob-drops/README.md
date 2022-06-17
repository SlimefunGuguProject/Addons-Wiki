# 主页

SfMobDrops 是一个 Slimefun 附属，可以通过配置，让生物掉落粘液科技物品。

其非官方中文名为粘液科技生物掉落。[点击此处](/Install#SfMobDrops)下载粘液科技生物掉落汉化版。

## 配置文件

在`config.yml`中，`drops`字段的每一项都代表一个设置。  

```yaml
drops:
  # 基础样例
  - entity: ZOMBIE
    slimefunItem: MAGICAL_ZOMBIE_PILLS
    chance: 4.20

  # 复杂样例
  - entity: ENDER_DRAGON
    slimefunItem: ANCIENT_RUNE_SOULBOUND
    chance: 100
    name: '&cAmazing Dragon'
    nbtTag: 'plugin_name:awesome_mob'
    amount: 6
```

每个设置的字段如下:

| 字段 | 描述 |
| -------- | -------- |
| `entity` | **必须**。生物类型([EntityType](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html))。 |
| `slimefunItem` | **必须**。掉落的[粘液科技物品ID](https://slimefun-helper.guizhanss.cn/)。 |
| `chance` | **必须**。掉落概率，范围为0-100，支持小数。 |
| `name` | *可选*。指定实体的名称，只有一致时，才会处理自定义掉落。 |
| `nbtTag` | *可选*。指定实体的NBT标签，只有一致时，才会处理自定义掉落。 |
| `amount` | *可选*。满足条件所需击杀的生物数量，默认为1。 |
