# groups.yml

你可以在该配置文件中设置进度的分组信息。

分组会在[`advancements.yml`](./advancements.yml)文件中使用，你可以将不同分类的进度分配到不同的分组中。  

## 说明

```yaml
basic:
  display:
    type: SLIME_BALL
    name: "&f基础"
    lore:
      - "&7&o粘液科技的核心玩法"
```

| 内容 | 描述 |
| -------- | -------- |
| basic | 这是分组的ID。<br>**只能用英文、数字、下划线!** |
| `display` | **必须**。这是分组的展示物品。<br>详见[物品设置](./Item-Settings)。 |
| `display` | *可选*。这是分组在原版进度界面中的背景，默认为基岩。你可以通过[mcasset.cloud网站](https://mcasset.cloud/)查询所有可用的背景（在`assets/minecraft/textures/block/`目录中）。 |
