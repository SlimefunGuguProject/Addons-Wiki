# SFMobDrops 粘液科技生物掉落

一个可以让生物掉落粘液科技物品的附属插件。

## 下载

**自动更新**: 汉化版构建#1及以后版本包含自动更新功能，默认开启。

点击这里下载 SFMobDrops
: [下载 SFMobDrops](https://builds.guizhanss.net/SlimefunGuguProject/SFMobDrops/main)

<p align="center">
  <a href="https://github.com/SlimefunGuguProject/SFMobDrops/actions/workflows/maven.yml">
    <img src="https://github.com/SlimefunGuguProject/SFMobDrops/actions/workflows/maven.yml/badge.svg" alt="Java CI"/>
  </a>
  <a href="https://builds.guizhanss.net/SlimefunGuguProject/SFMobDrops/main">
    <img src="https://builds.guizhanss.net/f/SlimefunGuguProject/SFMobDrops/main/badge.svg" alt="Build status"/>
  </a>
</p>

## 配置文件

```yaml
# 在 drops 中，每一项都代表一个掉落物配置
# 在每个掉落物配置中，以下内容必须填写:
#   - entity
#     这是掉落物所对应的生物类型, 可以在这里找到所有生物类型: https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html.
#     例如: ZOMBIE
#   - slimefunItem
#     这是粘液科技物品 ID. 你可以在这里找到大部分粘液科技物品的ID: https://slimefun-helper.guizhanss.cn/.
#     例如: MAGICAL_ZOMBIE_PILLS
#   - chance
#     这是掉落物品的几率，范围为 0-100，支持小数
#     例如: 69.420
#
# 以下内容是可选的:
#   - name
#     指定实体的名称，需要匹配才会掉落
#     例如: '&cAmazing Mob'
#   - nbtTag
#     指定实体的NBT，需要匹配才会掉落
#     例如: 'amazing_mob:some_mob_id'
#   - amount
#     掉落物品的数量
#     例如: 10
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

settings:
  autoUpdate: true
```

## 贡献

欢迎任何人参与本附属的开发！
