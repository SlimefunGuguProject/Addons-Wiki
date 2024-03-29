# 第一章

## 概览

网络附属添加了全新的网络系统。这个网络系统是一个附带货运功能的存储系统。

网络附属的物品分为四类：

**合成材料**：合成附属中其他物品所需的物品。

**网络管理工具**：方便操作集成网络设备的工具。

**网络物品**：集成网络的组件。

**量子存储设备**：网络附属添加的存储装置。

本章先讲材料和网络物品。

## 材料

网络附属添加了 12 种材料。

这些材料的合成配方**非常套娃**，与其他粘液科技的附属相同。

除此之外，它们横跨整个工业分支的发展过程。

最基础的材料是人造绿宝石碎片，它由石块和人造绿宝石合成。

提醒一下，在磨石中处理泥土，也可以得到石块。

利用这种方法，你可以在泥土充足的情况下稳定获取石块。

网络附属的材料可以分为数个阶段：

- 早期：人造绿宝石碎片、光学玻璃、光缆；

- 前中期：光学之星、放射性光学之星、缩小底座；

- 中后期：简易纳米机器人、高级纳米机器人、人工智能核心；

- 后期：充能人工智能核心，古代人工智能核心、跨越维度的存在。

各位若有需要，可以自行查阅它们的配方，这里不再赘述。

接下来我们讨论一下网络物品中的内容。


## 网络组件

“网络物品”分类中，共有 26 种不同的网络组件。

合成它们大都需要光学玻璃和光缆。

**所有**组件都可以扩展网络，但是它们**只能**将相邻的 6 个方块组件加入到网络当中。

我们从基础组件开始。

## 基础组件

**网络控制器**是网络的核心。它的地位相当于电力网络中的**能源调节器**和货运网络中的**货运管理器**。

每个网络中只能有一个网络控制器。

但与粘液网络不同，如果一个网络中有多个网络控制器，多余的控制器会被强制踢掉。

每个 NTW 网络中最多只能有 2000 个（默认设置，**不包括**网络控制器自己）。如果节点过多，部分节点可能会无法正常工作。

节点过多的网络中，网络控制器会持续发出烟雾，以警告玩家。



**网桥**可以用来扩展网络。

网桥相对便宜，用来扩展网络非常不错。

而且不少组件的合成都需要网桥，因此网桥还是挺重要的。



要想总览整个网络的储物情况，**网格**必不可少。

你可以在网格的界面中直接查看网络的储物情况，并直接存取网络中的物品。

![网格界面](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/networks/wanggegui.png ':size=25%')

网格可以用 8 颗光学之星升级为网格（带合成）。

升级后的网格自带一个工作台，支持强化工作台和原版工作台的配方（前者优先级更高）。



**网络单元**可以用来扩大网络的储物容量。

它具有 54 个槽位，可以直接打开并存取物品。

但它**不能**与货运系统交互。



**网络阻断器**可以限制某种物品传入网络。

一个网络阻断器只能约束一种物品。    

![网络阻断器界面](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/networks/zuduanqi.png ':size=25%')

网络阻断器的界面，左侧为约束的物品

物品输入网络时，存放到网络阻断器的优先级最高。

网络阻断器还会**阻止**其他组件获得同类物品。

但输出物品时，网络阻断器的优先级就不是最高的了。



**网络清除器**可以清除网络中的某种物品，类似于货运网络中的垃圾箱。

你需要在网络清除器中提前设置需要移除的物品。

设置后，网络中的所有同类物品都会被立刻清除。



网络不仅能储物，还能储电。

**网络电容**可以储存来自电网的电力，供网络组件使用。

网络电容共有 4 级。它的升级过程属于套娃，不再赘述。

网络电容在电网中**不是电容**，而是用电器。



网络的电可以通过**网络插口**输出。

网络插口输电时，会额外消耗 20% 的电能。

一个网络插口只能绑定 1 个方向的电力设备。你需要在界面中手动设置。

要想查询网络的储电情况，可以放一个**网络电表**。

点击网络电表，即可查看网络总体的储电情况。

## 链接组件

除了上述物品，你还可以通过一些网络组件，将其他设备与网络连接起来。



**网络监视器**可以将相邻的存储单元接入网络中。

这里的“存储单元”，包括无尽贪婪附属的存储单元，和网络附属添加的量子存储。

一个网络监视器，只能绑定一个方向的存储单元。

![网络监视器界面](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/networks/jianshiqi.png ':size=25%')

网络监视器的界面，被附魔的方块对应选中的方块

网络监视器既能将物品**存入**存储单元，也可以从存储单元**取走**物品。

但是空的单元除外，因此你最好先往存储单元里装点什么。

另外，绑定后，存储单元**依然不是网络组件**，因此它**不计入**网络单元的数目，但同时也**不能**扩展网络。



**网络入口**和**网络出口**可以让网络和货运网络交互。

网络入口有 9 个槽位，可以**接收**传输过来的物品。

网络出口可以将网络中的物品**传出**网络。

不过一个网络出口只能传输一种物品。

![网络出口界面](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/networks/chukou.png ':size=25%')

网络出口的界面，左边是设置的物品


**网络抓取器**和**网络推送器**可以和普通机器交互。

和网络监视器相似，你需要先绑定一个机器。

网络抓取器可以从绑定的机器中抓取物品，每次抓取 1 个槽位。

网络推送器可以将物品推送到绑定的机器中。

每个推送器只能推送**两种**物品。

![抓取器与推送器](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/networks/zhuaqutuisong.png ':size=35%')

**网络原版容器抓取器**和**网络原版容器推送器**可以和原版容器交互。

和网络监视器相似，你需要先绑定一个容器。

它们的作用与网络抓取器和网络推送器类似，这里不再赘述。

虽然它们是网络组件，但是它们**不能**与网络**直接交互**，这一点不同于其他组件。

你分别需要**网络抓取器**和**网络推送器**，再次绑定后才能完成运输。



网络无线发射器和网络无线接收器是高级组件，合成它们需要纳米机器人（及以上）的材料。

网络无线发射器可以将其所在网络的物品，**跨网络（但不跨维度）**地发送到网络无线接收器中。

使用之前，你需要先用**网络无线配置器**绑定发射器和接收器。

网络无线配置器的合成需要跨越维度的存在，更为昂贵。

![网络无线配置器](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/networks/wuxianpeizhi.png ':size=25%')

绑定方法如图所述

一台**网络无线发射器**只能传输 1 种物品，你需要在**网络无线发射器**中**提前设置**。

每次传输都会消耗 7.5 KJ 的电量，最多传送 64 个物品。

网络无线发射器的界面    

![网络无线发射器](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/networks/fasheqi.png ':size=25%')

最后，我放一张图，整理一下上面提到的设备吧：

![流程图](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/networks/liuchengtu.png ':size=50%')