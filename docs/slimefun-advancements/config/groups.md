---
sidebar_position: 1
---

# 进度组配置

进度组将被[进度](./advancements)使用，用于将进度分组展示。

```yaml title="groups.yml"
basic:
  display:
    type: SLIME_BALL
    name: "&f基础"
    lore:
      - "&7&o粘液科技的核心玩法"
  background: "bedrock"
```

| 内容 | 描述 |
| -------- | -------- |
| basic | 分组的ID。<br />**只能用小写字母、数字、下划线!** |
| `display` | **必须**。分组的展示物品。<br />详见[设置物品](../set-item)。 |
| `background` | *可选*。分组在原版进度界面中的背景，默认为基岩。你可以通过[该网站](https://mcasset.cloud/)查询所有可用的背景（在`assets/minecraft/textures/block/`目录中）。 |
