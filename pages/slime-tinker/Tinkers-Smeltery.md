# 匠魂冶炼炉 :id=tinkers-smeltery

匠魂冶炼炉是粘液匠魂中最重要的[工作站](./Workstations)，它是一个多方块结构。

## 建造 :id=building

一个可用的匠魂冶炼炉如下图所示:

![匠魂冶炼炉](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/slime-tinker/tinkers-smeltery.png ':size=50%')

其中，最上面的3个方块与最下面的3个方块是[焦黑石砖](./Materials#seared-brick-block)。中间左侧的方块是[焦黑液罐](./Materials#seared-tank)，中间右侧的方块是[焦黑浇筑口](./Materials#spout)。  
最中间的方块是[冶炼炉控制器](./Materials#smeltery-controller)。当所有方块都放在正确位置时，右键点击冶炼炉控制器即可打开，否则会弹出一条消息。

## 使用 :id=usage

右键点击打开冶炼炉控制器，可以看到以下界面：

![匠魂冶炼炉控制器](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/slime-tinker/tinkers-smeltery-controller.png ':size=50%')

### 输入栏 :id=input-slot

输入栏是由淡蓝色染色玻璃包括的部分。可以在该栏位中放入任何可熔化的金属粒/锭/块以及岩浆桶。

### 模具/模具原型栏 :id=cast-slot

模具/模具原型栏是由黄绿色染色玻璃包括的部分。可以在该栏位中放入模具、模具原型或模具制作材料。具体内容请查看[铸件](./Casts)分类。

### 输出栏 :id=output-slot

输出栏是由橙色染色玻璃包括的部分。浇筑的模具与部件会在此处出现。

### 岩浆罐 :id=lava-tank

岩浆罐是存储岩浆的地方，最多可存储1000单位的岩浆。在输入栏放入岩浆桶可填充250单位的岩浆。  
岩浆用于熔化输入的金属粒/锭/块。

以下是熔化金属所需的岩浆:

| 金属 | 岩浆消耗（单位） |
| --- | ------- |
| 粒 | 1 |
| 锭 | 9 |
| 块 | 81 |

### 金属罐 :id=metal-tank

金属熔化后成为熔融金属，存储在这里。可以点击**金属罐**按钮来改变金属的顺序。

以下是熔化金属所得的熔融金属:

| 金属 | 熔融金属（单位） |
| --- | ------- |
| 粒 | 1 |
| 锭 | 9 |
| 块 | 81 |

### 清除金属 :id=purge-metal

可以通过这个按钮清除最上层金属，或所有金属。

### 冶炼合金 :id=alloy

将所有熔融金属混合，尝试冶炼合金。

### 浇铸 :id=pour

在模具/模具原型栏放入正确的物品，即可进行浇铸。浇铸将使用金属罐最上层的熔融金属。

### 储物区 :id=storage

最下方的18格为储物区，可以在这里存储物品。物品会在控制器被破坏时掉落。
