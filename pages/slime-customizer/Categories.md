# 分类

在`/plugins/SlimeCustomizer/categories.yml`中，你可以配置分类。

每一项代表一个分类。  
目前不支持子分类，所有由自定义粘液附属添加的分类都会同时展示在粘液科技指南中。

```yaml
slime_customizer:
  category-name: "&cSlimeCustomizer"
  category-item: REDSTONE_LAMP
skull_example:
  category-name: "&cExample skull category"
  category-item: SKULL195e90ff12cea25f3cfa2b4fc8773860afc5eff0c9a7d507355816ccc68bbde3
```

| 内容 | 描述 |
| -------- | -------- |
| `slime_customizer` | 分类的ID，每个分类的ID不能相同。<br>**仅支持小写字母、数字、下划线!** |
| category-name | 分类的显示名称。<br>支持[颜色代码](./Color-codes)。 |
| category-item | 分类的展示物品。<br>填入[原版物品ID](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)或者[头颅](./Skull-Items)。 |

请记住你的分类ID，你会在其他配置文件中用到。
