# 铸造厂

铸造厂是一个多方块结构，可以储存某一种矿粉，并根据需要随时取出矿粉或锭。

## 建造

铸造厂建造过程必须按顺序进行，否则会导致铸造厂无法使用（弹出没有权限的信息）。

1. 按照指南中所示，在世界中摆放好机器（建议**最后**摆放超热炉）

!> 不要在炼药锅中填充任何液体

![建造铸造厂1](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/fluffy-machines/foundry-setup-1.png ':size=25%')

2. 右键点击超热炉，会弹出以下提示。  
这表示铸造厂建造无误，如果没有弹出注册成功的提示，请拆除后重新摆放。

![建造铸造厂2](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/fluffy-machines/foundry-setup-2.png ':size=50%')

3. 使用岩浆桶填充**超热炉**

!> 注意，**不是填充炼药锅**，而是超热炉

填充完毕后，超热炉会亮起来，下方的炼药锅中也出现了"岩浆"。

![建造铸造厂3](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/fluffy-machines/foundry-setup-3.png ':size=25%')

4. 完成，现在你可以右键点击超热炉来使用铸造厂了

!> 任何时候都不要在下方的炼药锅中填充液体，这会导致铸造厂无法使用

## 使用

右键点击超热炉即可打开铸造厂。

你可以在左侧放入矿粉或锭。一个铸造厂只能储存一种类型的矿粉，最多可存储 138,240 个矿粉。

在中间可以取出矿粉，右侧可以直接取出锭。

![铸造厂界面](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/fluffy-machines/foundry-gui.png ':size=25%')

### 接入货运

你可以将铸造厂接入货运，但我不推荐这么做。

要想让铸造厂接入货运，你需要：

1. 在建造铸造厂时，先在超热炉的位置放置一个箱子；
2. 将货运输出节点对准箱子放置；
3. 拆除箱子，换上超热炉。

这样，就可以将矿粉或锭通过货运送入到铸造厂里了。

为什么不推荐这么做呢？  
因为铸造厂中只有手动点击取出矿粉/锭时才会输出物品，这导致铸造厂无法作为全自动流水线的一部分。
