# 生物掉落

在`/plugins/SlimeCustomizer/mob-drops.yml`中，你可以配置生物掉落物品。

!> 自定义粘液附属汉化版对[注册顺序](./Registering)进行了改动，生物掉落将在[物品](./Items)前注册。因此，你可以在物品[物品](./Items)中直接引用生物掉落的物品。

```yaml
EXAMPLE_DROP:
  category: slime_customizer
  item-type: CUSTOM
  item-name: "&bExample Drop"
  item-lore:
    - "&7This is an example mob-drop!"
    - "&cExample drops are not obtainable"
  item-id: STICK
  item-amount: 1
  mob: GHAST
  chance: 0
  recipe-display-item: GHAST_SPAWN_EGG
```
| 内容 | 描述 | 有效输入 |
| --- | ----------- | ----------------- |
| EXAMPLE_DROP | 物品的ID。<br>该ID不能与任何其他物品的ID相同! | **仅支持大写字母、数字、下划线!** |
| category | 物品所在[分类](./Categories)的ID。 |
| item-type | 物品注册的方式。 | **CUSTOM** 填入此项时，你可以自定义物品名称、描述、种类 <br>**SAVEDITEM** 从[保存的物品](./Saved-Items)中加载物品。 |
| item-name | 物品的名称。<br>支持[颜色代码](./Color-codes)。 |
| item-lore | 物品的描述。<br>支持[颜色代码](./Color-codes)。 |
| item-id | 物品所使用的[原版物品ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或[头颅](./Skull-Items)或保存的物品的ID。 |
| item-amount | 每次掉落物品的数量。 | 正整数 |
| mob | 掉落该物品所需的[实体类型](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)。 |
| chance | 物品的掉落概率。 | 0 - 100（只能是整数） |
| recipe-display-item | 用于展示如何获得掉落物的[原版物品ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)。 |
