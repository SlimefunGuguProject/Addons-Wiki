# 分类 (旧版)

!> 该页面为旧版分类系统的文档，新版文档请查看[这里](./Categories)

在`/plugins/SlimeCustomizer/categories.yml`中，你可以配置分类。

每一项代表一个分类。

```yaml
slime_customizer:
  category-name: "&cSlimeCustomizer"
  category-item: REDSTONE_LAMP
skull_example:
  category-name: "&cExample skull category"
  category-item: SKULL195e90ff12cea25f3cfa2b4fc8773860afc5eff0c9a7d507355816ccc68bbde3
nested_category:
  parent: "this"
  category-name: "&c父分类"
  category-item: NETHER_STAR
sub_category:
  parent: "nested_category"
  category-name: "&c子分类"
  category-item: STONE
```

| 内容 | 描述 |
| -------- | -------- |
| `slime_customizer` | 分类的ID，每个分类的ID不能相同。<br>**仅支持小写字母、数字、下划线!** |
| category-name | 分类的显示名称。<br>支持[颜色代码](./Color-codes)。 |
| category-item | 分类的展示物品。<br>填入[原版物品ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或者[头颅](./Skull-Items)。 |
| parent | 父分类/子分类设置。 |

请记住你的分类ID，你会在其他配置文件中用到。

## 设置父分类/子分类

!> 该功能为汉化版独有

你现在可以设置父分类与子分类了，就像无尽贪婪中有基础机器、高级机器等子分类。无尽贪婪则是一个父分类。

默认情况下，没有`parent`字段的分类为普通分类。

要设置父分类，你需要设置`parent`字段为`this`。

要设置子分类，你需要设置`parent`字段为父分类的ID。

一个父分类可以有多个子分类。你不能设置一个子分类作为父分类，也不能设置普通分类作为父分类。
