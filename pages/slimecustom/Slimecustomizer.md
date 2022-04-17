# SlimeCustomizer（自定义粘液附属）
这是一个Slimefun4附属，它可以让您自定义属于自己的附属，操作简单易懂!
<p align="center">
  <a href="https://thebusybiscuit.github.io/builds/NCBPFluffyBear/SlimeCustomizer/master/">
    <img src="https://thebusybiscuit.github.io/builds/NCBPFluffyBear/SlimeCustomizer/master/badge.svg" alt="Build Server"/>
  </a>
</p>

### 展示
*想要看看SlimeCustomizer的成果如何? 访问IP`wdsj.fit:6896`看看其中的海曼科技! 海曼科技就是用SlimeCustomizer编写而成的！或许海曼科技可以给你带来点启发！*

![D01SE T6S)QY7 %D85AW0~M](https://user-images.githubusercontent.com/83174104/163699938-8d7c0084-34fd-4d99-9d77-b2454c883669.png)
![$$5S%`MFTE@G}_HC}7PVS}S](https://user-images.githubusercontent.com/83174104/163699824-97081e94-e31c-4f55-a5a4-3a66e2b68484.png)
![I6VSEX7N0 PU62@962LT(N](https://user-images.githubusercontent.com/83174104/163699843-7ee4bbfb-ee2d-44b4-9a96-416ecbf61b0d.png
![IW I822IAH$I 454_GFKC~3](https://user-images.githubusercontent.com/83174104/163699853-cca04258-617a-4f77-9457-b523761b34a9.png)
![2)) B{FD~9B6D346PA S3%F](https://user-images.githubusercontent.com/83174104/163699856-e2736a6d-0503-47e2-be6f-0e0d5a756133.png)
![QZ_YRSEAD~3H%HK8~3`)T_A](https://user-images.githubusercontent.com/83174104/163699865-77285c5b-6b5b-4f0e-b313-40a5d8c1f20f.png)
![~6DA6F@_ZXLD@R5_MPK((@E](https://user-images.githubusercontent.com/83174104/163699875-bda248e5-cd88-40be-bd5e-61baa083c2d5.png)
![_0L(9MJ`3K0{DQ)VI%~X$`Y](https://user-images.githubusercontent.com/83174104/163699896-fa55a9ef-499d-4f81-b9f6-76690414eed1.png)
![$JRUW4B2WB7Z05SI{_CMFCS](https://user-images.githubusercontent.com/83174104/163699903-f654c562-048e-48b0-83a8-8f128e9f5fce.png)
![TSU{(1L}NSX6JZ~5 N5)%LN](https://user-images.githubusercontent.com/83174104/163699914-a885184e-53f5-4adb-9da8-f49600f48a50.png)


#### 汇报bug
汉化版SlimeCustomizer请在此汇报bug [issue](https://github.com/SlimefunGuguProject/SlimeCustomizer).

## 如何使用SlimeCustomizer

##### 安装插件
1. 下载SlimeCustomizer[Slimefun repo server](https://thebusybiscuit.github.io/builds/NCBPFluffyBear/SlimeCustomizer/master/)
2. 拖动jar文件至你服务器的plugins文件,定位至`\<YOUR_SERVER_LOCATION>\plugins`
3. 启动服务器以生成正确的配置文件
4. 再次关闭服务器就可以在配置文件里编辑属于你自己的附属了

##### 添加你的分类
1. 打开 `categories.yml`文件, 定位至 `\<YOUR_SERVER_LOCATION>\plugins\SlimeCustomizer`
下表展示了每块的内容

```yaml
slime_customizer:
  category-name: "&cSlimeCustomizer"
  category-item: REDSTONE_LAMP
```

| 内容 | 描述 |
| -------- | -------- |
| slime_customizer | 这是分类的ID. 如果你要添加不同的分类，你需要更改/额外添加此ID! |
| category-name | 这是显示在粘液科技书里的分类名 |
| category-item | 这里需要填入原版物品ID或者头颅（格式Skull+URL） |

如果你要添加头颅材质并获取头颅的URL
请访问https://minecraft-heads.com/custom-heads


##### 添加你的物品材料
1. 打开`items.yml`文件, 定位至 `\<YOUR_SERVER_LOCATION>\plugins\SlimeCustomizer`
下表展示了每块的内容


```yaml
EXAMPLE_ITEM:
  category: slime_customizer
  item-type: CUSTOM
  item-name: "&bExample Item"
  item-lore:
  - "&7This is an example item!"
  - "&cSlimeCustomizer now supports multiline lore!"
  item-id: STICK
  item-amount: 1
  placeable: false
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
| EXAMPLE_ITEM | 这是物品的ID.如果你要添加不同的物品，你需要更改/额外添加此ID! |
| category | 此项输入物品所在分类的ID，即你之前创建的分类ID |
| item-type | 这是你物品注册的方式 | CUSTOM (填入此项时，你可以自定义物品名称、描述、种类), SAVEDITEM (从saveditems文件里加载物品，下文会讲) |
| item-name | 这是物品的名称 |
| item-lore | 这是物品的描述 |
| item-id | 这里需要填入原版物品ID或者头颅（格式Skull+URL） |
| item-amount | 一次合成该物品时所输出的数量 |
| placeable | 物品是否可放置。不要放置工具等本来就无法放置的物品！ |
| crafting-recipe-type | 制作此物品所用的多块机器 | ENHANCED_CRAFTING_TABLE（强化工作台）, MAGIC_WORKBENCH（魔法工作台）, ARMOR_FORGE（盔甲锻造台）, COMPRESSOR（压缩机）, PRESSURE_CHAMBER（压力舱）, SMELTERY（冶炼炉）, ORE_CRUSHER（矿石粉碎机）, GRIND_STONE（磨石）, NONE (无法被合成) |
| crafting-recipe.#.type | 物品的种类 | NONE (无物品), SLIMEFUN, SAVEDITEM |
| crafting-recipe.#.id | 原版/保存物品的物品ID（保存物品ID为saveditem文件夹里对应已保存物品的文件名（默认为数字）） |
| crafting-recipe.#.amount | 物品的数量 |

*这些物品也可用于您的自定义机器/发电机！*
*所有已注册的自定义物品都可以通过crafting-recipe.#.type为SLIMEFUN下填入你自定义物品的id来引用该自定义物品（可作为配方材料，输入输出等）。 如果你想使用items.yml中的一个物品作为另一个物品的制作材料，那么这个制作材料必须事先注册。(注意材料注册顺序，处在越靠前的材料最先注册，如果一个物品处在另一个物品的上方，但上方的物品需要用到下方的物品作为配方，那么上方的物品需要在游戏里手持该物品，输入/sfc saveitem来保存该物品)*

*Slimefun物品在其元数据中会标记有关键字，以便Slimefun可以识别它们。为了确保您的SAVEDITEM在需要被其他插件识别时不会有冲突，这个标签被移除了。但是自定义物品仍有此标签。因此，在SAVEDITEM上使用`/sf give '可能会干扰其他插件，因为它将被其它插件标记。若要获取该物品的未标记版本，请改用`/sc give'。*

##### 添加你的机器
1. 打开`machines.yml`文件, 定位至`\<YOUR_SERVER_LOCATION>\plugins\SlimeCustomizer`
下表展示了每块的内容

```yaml
EXAMPLE_MACHINE:
  category: slime_customizer
  machine-name: "&bExample Machine"
  machine-lore:
  - "&7This is an example machine!"
  block-type: FURNACE
  progress-bar-item: FLINT_AND_STEEL
  stats:
    energy-consumption: 16
    energy-buffer: 64
  crafting-recipe-type: ENHANCED_CRAFTING_TABLE
  crafting-recipe:
    1:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    2:
      type: NONE
      id: N/A
      amount: 1
    3:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    4:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    5:
      type: SLIMEFUN
      id: SMALL_CAPACITOR
      amount: 1
    6:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    7:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    8:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    9:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
  recipes:
    1:
      speed-in-seconds: 5
      input:
        1:
          type: VANILLA
          id: IRON_INGOT
          amount: 9
        2:
          type: NONE
          id: N/A
          amount: 1
      output:
        1:
          type: VANILLA
          id: IRON_BLOCK
          amount: 1
        2:
          type: NONE
          id: N/A
          amount: 1
    2:
      speed-in-seconds: 5
      input:
        1:
          type: SLIMEFUN
          id: GOLD_24K
          amount: 9
        2:
          type: NONE
          id: N/A
          amount: 1
      output:
        1:
          type: SLIMEFUN
          id: GOLD_24K_BLOCK
          amount: 1
        2:
          type: NONE
          id: N/A
          amount: 1
```
| 内容 | 描述 | 有效输入 |
| --- | ----------- | ----------------- |
| EXAMPLE_MACHINE | 这是机器的ID.如果你要添加不同的机器，你需要更改/额外添加此ID! |
| category | 此项输入机器所在分类的ID，即你之前创建的分类ID |
| machine-name | 这是机器的名称 |
| machine-lore | 这是机器的描述 |
| block-type | 这里需要填入原版物品ID或者头颅（格式Skull+URL） | 
| progress-bar-item | 这里需要填入原版物品ID，这决定了机器的进度栏物品 |
| stats.energy-consumption | 这台机器每粘液刻消耗的能量，最大为2147483647 |
| stats.energy-buffer | 这台机器可储存的能量，最大为2147483647 |
| crafting-recipe-type | 制作此物品所用的多块机器 | ENHANCED_CRAFTING_TABLE（强化工作台）, MAGIC_WORKBENCH（魔法工作台）, ARMOR_FORGE（盔甲锻造台）, COMPRESSOR（压缩机）, PRESSURE_CHAMBER（压力舱）, SMELTERY（冶炼炉）, ORE_CRUSHER（矿石粉碎机）, GRIND_STONE（磨石）, NONE (无法被合成) |
| crafting-recipe.#.type | 物品种类 | NONE (无物品), VANILLA, SLIMEFUN, SAVEDITEM |
| crafting-recipe.#.id | 原版/粘液科技/保存物品的物品ID |
| crafting-recipe.#.amount | 合成该机器所需物品的数量，高级工作台所需物品数量仅能为1. |
| recipes.#.speed-in-seconds | 输出物品所需时间，最大为2147483647 |
| recipes.#.input/output.#.type | 物品的种类 | NONE (无物品), VANILLA, SLIMEFUN, SAVEDITEM |
| recipes.#.input/output.#.id | 原版/粘液科技/保存物品的物品ID |
| recipes.#.input/output.#.amount | 输入/输出物品数量 |

*提示:查看粘液科技物品ID，可在游戏内手持该粘液科技物品，输入/sf id以查看*
*每台机器只能有两种物品的输入/输出*

##### 添加你的发电机
1. 打开 `generators.yml` 文件,定位至`\<YOUR_SERVER_LOCATION>\plugins\SlimeCustomizer`
下表展示了每块的内容

```yaml
EXAMPLE_GENERATOR:
  category: slime_customizer
  generator-name: "&bExample Generator"
  generator-lore:
  - "&7This is an example generator!"
  block-type: SKULLe707c7f6c3a056a377d4120028405fdd09acfcd5ae804bfde0f653be866afe39
  progress-bar-item: FLINT_AND_STEEL
  stats:
    energy-production: 16
    energy-buffer: 64
  crafting-recipe-type: ENHANCED_CRAFTING_TABLE
  crafting-recipe:
    1:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    2:
      type: NONE
      id: N/A
      amount: 1
    3:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    4:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    5:
      type: SLIMEFUN
      id: COAL_GENERATOR
      amount: 1
    6:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    7:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    8:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    9:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
  recipes:
    1:
      time-in-seconds: 5
      input:
        type: VANILLA
        id: SPRUCE_SIGN
        amount: 1
      output:
        type: NONE
        id: N/A
        amount: N/A
    2:
      time-in-seconds: 10
      input:
        type: VANILLA
        id: BEDROCK
        amount: 1
      output:
        type: VANILLA
        id: BIRCH_PLANKS
        amount: 1
```
| 内容 | 描述 | 有效输入 |
| --- | ----------- | ----------------- |
| EXAMPLE_GENERATOR | 这是发电机的粘液ID.如果你要添加不同的发电机，你需要更改/额外添加此ID! |
| category | 此项输入机器所在分类的ID，即你之前创建的分类ID |
| generator-name | 这是发电机的名称 |
| generator-lore | 这是发电机的描述 |
| block-type | 这里需要填入原版物品ID或者头颅（格式Skull+URL） | 
| progress-bar-item | 这里需要填入原版物品ID，这决定了发电机的进度栏物品 |
| stats.energy-production | 这台发电机每粘液刻产生的能量，最大为2147483647 |
| stats.energy-buffer | 这台发电机可储存的能量，最大为2147483647 |
| crafting-recipe-type | 制作此物品所用的多块机器 | ENHANCED_CRAFTING_TABLE（强化工作台）, MAGIC_WORKBENCH（魔法工作台）, ARMOR_FORGE（盔甲锻造台）, COMPRESSOR（压缩机）, PRESSURE_CHAMBER（压力舱）, SMELTERY（冶炼炉）, ORE_CRUSHER（矿石粉碎机）, GRIND_STONE（磨石）, NONE (无法被合成) |
| crafting-recipe.#.type | 物品种类 | NONE (无物品), VANILLA, SLIMEFUN, SAVEDITEM |
| crafting-recipe.#.id | 原版/粘液科技/保存物品的物品ID |
| crafting-recipe.#.amount | 合成该机器所需物品的数量，高级工作台所需物品数量仅能为1. |
| recipes.#.time-in-seconds | 该物品发电的持续时间，最大为2147483647 |
| recipes.#.input/output.type | 物品的种类 | NONE (无物品), VANILLA, SLIMEFUN, SAVEDITEM |
| recipes.#.input/output.id | 原版/粘液科技/保存物品的物品ID |
| recipes.#.input/output.amount | 输入/输出物品数量 |

##### 添加你的太阳能发电机
1. 打开`solar-generators.yml` file, located at `\<YOUR_SERVER_LOCATION>\plugins\SlimeCustomizer`
下表展示了每块的内容

```yaml
EXAMPLE_SOLAR_GENERATOR:
  category: slime_customizer
  generator-name: "&bExample Solar Generator"
  generator-lore:
  - "&7This is an example solar generator!"
  block-type: DAYLIGHT_DETECTOR
  stats:
    energy-production:
      day: 256
      night: 128
  crafting-recipe-type: ENHANCED_CRAFTING_TABLE
  crafting-recipe:
    1:
      type: VANILLA
      id: BEDROCK
      amount: 1
    2:
      type: NONE
      id: N/A
      amount: 1
    3:
      type: VANILLA
      id: BEDROCK
      amount: 1
    4:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    5:
      type: SLIMEFUN
      id: COAL_GENERATOR
      amount: 1
    6:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    7:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    8:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
    9:
      type: VANILLA
      id: IRON_BLOCK
      amount: 1
```
| Key | Description | Acceptable Inputs |
| --- | ----------- | ----------------- |
| EXAMPLE_SOLAR_GENERATOR | 这是太阳能发电机的粘液ID.如果你要添加不同的太阳能发电机，你需要更改/额外添加此ID! |
| category | 此项输入太阳能发电机所在分类的ID，即你之前创建的分类ID |
| generator-name | 这是太阳能发电机的名称 |
| generator-lore | 这是太阳能发电机的描述 |
| block-type | 这里需要填入原版物品ID或者头颅（格式Skull+URL)| 
| stats.energy-production.day | 白天该发电机每粘液刻所生产的能量 |
| stats.energy-production.night | 夜晚该发电机每粘液刻所生产的能量 |
| crafting-recipe-type | 制作此物品所用的多块机器 | ENHANCED_CRAFTING_TABLE（强化工作台）, MAGIC_WORKBENCH（魔法工作台）, ARMOR_FORGE（盔甲锻造台）, COMPRESSOR（压缩机）, PRESSURE_CHAMBER（压力舱）, SMELTERY（冶炼炉）, ORE_CRUSHER（矿石粉碎机）, GRIND_STONE（磨石）, NONE (无法被合成) |
| crafting-recipe.#.type | 物品种类 | NONE (无物品), VANILLA, SLIMEFUN, SAVEDITEM |
| crafting-recipe.#.id | 原版/粘液科技/保存物品的物品ID |
| crafting-recipe.#.amount | 输入/输出物品数量，高级工作台物品数量仅能为1 |

##### 添加你的生物掉落物
###### （注意：该项会在自定义物品（items.yml）前注册，所以你可以在自定义物品的合成配方中直接引用生物掉落物，而无需再在游戏内保存物品）
###### 原版SlimeCustomizer不享有上述功能
1. 打开`mob-drops.yml`文件, 定位至`\<YOUR_SERVER_LOCATION>\plugins\SlimeCustomizer`
下表展示了每块的内容

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
| Key | Description | Acceptable Inputs |
| --- | ----------- | ----------------- |
| EXAMPLE_DROP | 这是生物掉落物的粘液ID.如果你要添加不同的生物掉落物，你需要更改/额外添加此ID! |
| category | 此项输入生物掉落物所在分类的ID，即你之前创建的分类ID |
| item-type | 这是你物品注册的方式 | CUSTOM (填入此项时，你可以自定义物品名称、描述、种类), SAVEDITEM (从saveditems文件里加载物品，下文会讲) |
| item-name | 这是生物掉落物的名称 (只适用于item-type填入CUSTOM时) |
| item-lore | 这是生物掉落物的描述 (只适用于item-type填入CUSTOM时) |
| item-id | 这里需要填入原版物品ID或者头颅（格式Skull+URL) |
| item-amount | 该掉落物一次性可掉落的数量 |
| mob | 掉落该物品的实体 |
| chance | 掉落该物品的几率 (0 - 100) |
| recipe-display-item | 出现在粘液科技书中关于如何获得该掉落物的显示图标 |

#### 使用头颅材质
想要为你的物品添加透漏材质? 在`block-type` 中填入 `SKULL<hash>`(即上文所说的Skull+URL). 发电机配置中展示了头颅材质的示例.
如何创建skull hash: https://bukkit.org/threads/create-your-own-custom-head-texture.424286/

#### 使用自定义物品
SlimeCustomizer 支持所有自定义物品! 这些物品可以来自其他插件，甚至是重命名/重存储的物品!

###### 如何保存物品
##### 保存一个物品
1. 手持你想要保存的物品
2. 输入 `/sc saveitem` (您必须拥有op权限)

你的保存物品的保存位置将会出现在聊天栏中。您可以将该文件重命名为不带空格的任何名称。此名称将在您的.yml配置中使用。

###### 示例: 手持泥土, 输入 /sc saveitem. 导航至 `\plugins\SlimeCustomizer\saveditems` 并将`0.yml` 重命名为 `DIRT.yml` 
##### 使用你的报错物品
你的保存物品可以用于制作配方、机器的输入/输出和发电机的输入/输出。  
在`type`中, 填入 `SAVEDITEM` 并在 `id` 中填入保存物品的.yml文件名

###### 示例:
```yaml
1:
  type: SAVEDITEM
  id: DIRT    
```
上述id中的DIRT，即将`0.yml` 重命名为 `DIRT.yml`中，.yml文件前的英文名
#### 重要提示
- 这些多方块机器 (ENHANCED_CRAFTING_TABLE, MAGIC_WORKBENCH, ARMOR_FORGE, PRESSURE_CHAMBER) 只接受数量大小为1的配方输入
- 你配置的速度/时间和能量的产生/消耗在游戏中可能不完全一致，这取决于你的粘液刻。粘液刻是适应性的，所以物品描述中会显示当前粘液刻所对应的正确时间（真实时间）
- 当合成配方或机器输入/输出的“type”设置为“NONE”时，其下的所有字段都可以忽略。
- 如果您更新了SlimeCustomizer，并且SlimeCustomizer添加了新功能，新功能可能会出现在与上述示例不同的位置。请随意移动它们。

## 权限
| **权限** | **描述** |
| --------------------- | ---------------------------------------- |
| slimecustomizer.admin | 允许使用SlimeCustomizer的管理员指令 |

## 指令
| **指令** | **权限** | **参数** | **描述** |
| ----------- | -------------- | -------------- | --------------- |
| saveitem | slimecustomizer.admin | | 保存你手中的物品并转化为saveditem文件中的yml文件. 阅读 #如何保存物品 以获取更多信息. |
| give | slimecustomizer.admin | \<player_name\> \<item_id\> \<amount\> | 给予玩家物品. |
| getsaveditem | slimecustomizer.admin | gui / \<item_id\> \<player_name\> \<amount\> | 用于获取/给予保存物品 |

## 与其他粘液科技附属的兼容性
为了与其他粘液科技附属中的物品兼容，SlimeCustomizer软依赖于以下附属:
  - ChestTerminal
  - ColoredEnderChests
  - DyedBackpacks
  - EcoPower
  - ElectricSpawners
  - ExoticGarden
  - ExtraGear
  - ExtraHeads
  - HotbarPets
  - luckyblocks-sf
  - PrivateStorage
  - SlimefunOreChunks
  - SlimyTreeTaps
  - SoulJars
  - CommandOverride
  - CS-CoreLib
  - EmeraldEnchants2
  - QuickMarket
  - QuickSell
  - RankPrefixPlus
  - LiteXpansion
  - MobCapturer
  - SoundMuffler
  - ExtraTools
  - TranscEndence
  - Liquid
  - SFCalc
  - SlimefunWarfare
  - Slimy-Power-Suits
  - FluffyMachines
  - SlimyRepair
  - InfinityExpansion
  - FoxyMachines
  - GlobalWarming
  - DynaTech
  - GeneticChickengineering
  - HeadLimiter
  - SlimeXpansion
  - Barrels
  - ClayTech
  - FNAmplifications
  - SMG
  - EMC2
  - Simple-Storage
  - AlchimiaVitae
  - SlimeTinker
  - PotionExpansion
  - FlowerPower
  - Galactifun
  - Element-Manipulation
  - CrystamaeHistoria
  - DankTech2
  - Networks
  - VillagerUtil
  - MissileWarfare
  - SensibleToolbox

新的附属不太可能被添加到这个列表中。如果您正在制作一个新的附属或拥有一个私人附属，并希望在SlimeCustomizer中使用它，请在你的plugin.yml中添加以下内容
```yaml
loadbefore:
    - SlimeCustomizer
```

对上述教程还有什么不懂的，可加QQ群：205679802 讨论
