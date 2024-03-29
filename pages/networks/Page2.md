# 第二章

本章是网络附属的工具与存储教程。

如无特殊说明，本篇中所有数据都是默认设置下的。

本文中，默认鼠标主键为左键。


## 工具

**网络探测器**可以获取网络的部分信息。

它由硬铝锭、光缆和网桥合成，非常便宜。



用网络探测器右击想要探测的**网络控制器**，聊天栏会显示对应网络的绝大部分信息：

![网格信息](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/networks/xinxi.png ':size=25%')

这张表有几个特别的地方：

原版容器抓取器和原版容器推送器都算入到“网络推送器”中。

不包含阻断器、无线发射器和无线接收器等机器。

在网络节点数量较多时，网络探测器的作用就很重要了。



我在教程一开始曾说，网络附属的网络是一个**存储**系统。

我这么说，很大程度上是因为**网络远程访问器**。

网络远程访问器较贵，需要人工智能核心来合成。

在使用前，玩家需要在潜行状态下，右击一个**网格（不能是带合成的）**以将其绑定。

如果玩家与对应网格的距离不超过 150 格，他可以使用网络远程访问器，**直接访问**绑定的网格。

网络远程访问器可以升级三次，最高级的访问器可以跨维度、无视距离地访问网络。

但是相应地，也需要更贵的材料来合成。



**网络绘制器**由光缆和蜜脾合成。什么蜡烛

对网络控制器使用后，其对应的网络中，部分机器在进行操作后会产生粒子效果。

这玩意显然是个调试器。



**网络配置器**由网络绘制器、放射性光学之星和人工智能核心合成。

简单来说，这玩意可以将网络机器的设置进行**复制、粘贴**。

先潜行 + 右击复制一个机器的设置，再右击另一个机器粘贴。

不过，粘贴需要消耗你物品栏中的物品，所以它不能拿来搞物品复制。



用**网络扳手**右击网络机器，即可**快速将机器拆除**。

网络扳手共有三级，1 级网络扳手可以使用 200 次。

即使是使用过的扳手，你仍然可以将其升级。

3 级网络扳手最多能用 9999 次，够你用很久了。


## 自动合成

网络附属中，有的机器可以用网络中储存的物品，自动合成需要的产物。

首先，你得有一台**网络配方编码器**。

它由基础电路板、货运马达、机器人内存核心和高级自动合成机合成，是网络组件之一。

![网络配方解码器](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/networks/jiemaqi.png ':size=25%')

配方编码器可以将空白的**合成蓝图**（光缆 + 纸合成）转化为编码后的蓝图。

将空白蓝图放入槽位，并在中间摆放一个**增强型工作台**支持的配方，即可完成编码。

编码会**消耗**配方中的物品。

将编码后的蓝图放入**网络自动合成机**（需要简易纳米机器人），合成机即可自动从网络中获取材料，合成对应的产物，并放回货运系统中。

网络自动合成机的界面可谓极简，只有一个蓝图槽位和一个输出槽位。

图我就不放了。

**网络自动合成机**可以升级为**预留版**。预留版的合成机不会立刻将合成的物品放回网络系统中，但是你可以用货运系统抽走它的产物。


## 量子存储

网络附属添加了自己独特的物品存储单元，称为**量子存储**。

首先你得有个网络量子工作台，它由网桥、光缆、光学玻璃、高级电路板合成。

它虽然由网桥合成，却**不是**网络组件。

它没啥特色，所以我们不讨论它。



在网络量子工作台，你可以合成或升级量子存储单元。

每个量子存储单元只能存储一种物品。

存储单元共有八级，最低级的能存储 4096 个物品。

它的合成比较简单，只需光缆、光学玻璃和货运马达。

升级材料相对而言也比较便宜。

最高级的量子存储最多能放 2147483647 个物品。

除非你玩至尊研究院，否则这个容量应该够用到关服了。



那么，量子存储应该怎么使用呢？

首先，你需要指定量子存储存放的物品类型。

指定后，你就可以在输入端放入物品，或是在输出端，和无尽存储单元一样。

![量子储存GUI](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/networks/liangzichucun.png ':size=25%')

量子存储的界面，左侧为输入端，右侧为输出端

除此之外，量子存储可以接入货运系统中，但它不是网络组件。想要让网络访问它，你得用网络监视器中继一下，就像无尽存储单元一样。

拆除后，内部存储的物品也会保留在存储单元内，只有最多一组物品会溢出。

总结：这就是个网络附属的特化版无尽存储单元。
