# 合成配方

每个物品都需要指定配方。本页将对配方部分进行统一说明。

```yaml
  crafting-recipe-type: ENHANCED_CRAFTING_TABLE
  crafting-recipe:
    1:
      type: VANILLA
      id: STICK
      amount: 1
    2:
      type: NONE
      id: N/A
      amount: 1
    3:
      type: NONE
      id: N/A
      amount: 1
    4:
      type: VANILLA
      id: STICK
      amount: 1
    5:
      type: NONE
      id: N/A
      amount: 1
    6:
      type: NONE
      id: N/A
      amount: 1
    7:
      type: NONE
      id: N/A
      amount: 1
    8:
      type: NONE
      id: N/A
      amount: 1
    9:
      type: NONE
      id: N/A
      amount: 1
```

| 内容 | 描述 | 有效输入 |
| --- | ----------- | ----------------- |
| crafting-recipe-type | 制作物品所用的多方块结构。 | 见下表 |
| crafting-recipe.#.type | 配方物品的类型。 | **NONE** 无物品 <br>**VANILLA** 原版物品 <br> **SLIMEFUN** 粘液科技物品 <br>**SAVEDITEM** [保存的物品](./Saved-Items) |
| crafting-recipe.#.id | 配方物品的[原版](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)/粘液科技/保存物品的ID。<br>物品类型为**NONE**时，不需要填写。 |
| crafting-recipe.#.amount | 配方物品的数量。<br>物品类型为**NONE**时，不需要填写。 |

## 可用的多方块结构

你只能使用这些多方块结构:

- **ENHANCED_CRAFTING_TABLE** [增强型工作台](https://slimefun-wiki.guizhanss.cn/Enhanced-Crafting-Table)
- **MAGIC_WORKBENCH** [魔法工作台](https://slimefun-wiki.guizhanss.cn/Magic-Workbench)
- **ARMOR_FORGE** [盔甲锻造台](https://slimefun-wiki.guizhanss.cn/Armor-Forge)
- **COMPRESSOR** [压缩机](https://slimefun-wiki.guizhanss.cn/Compressor)
- **PRESSURE_CHAMBER** [压力机](https://slimefun-wiki.guizhanss.cn/Pressure-Chamber)
- **SMELTERY** [冶炼炉](https://slimefun-wiki.guizhanss.cn/Smeltery)
- **ORE_CRUSHER** [矿石粉碎机](https://slimefun-wiki.guizhanss.cn/Ore-Crusher)
- **GRIND_STONE** [磨石](https://slimefun-wiki.guizhanss.cn/Grind-Stone)
- **NONE** 无法合成

## 提示

以下多方块结构的配方仅支持数量为1的物品输入:

- ENHANCED_CRAFTING_TABLE
- MAGIC_WORKBENCH
- ARMOR_FORGE
- PRESSURE_CHAMBER
