# 网格

![网格](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/networks/network-grid.png ':size=25%')![网格（带合成）](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/networks/network-crafting-grid.png ':size=25%')

网格可以让玩家查看当前网络中所有物品的情况。

这包括网络单元中的物品，与网络监视器连通的存储单元中的物品，自动合成机中保留的物品。  
这些物品都在一个可翻页的界面中显示出来。

左键点击任意物品可以取出1个，多次点击可以增加取出的数量。

也可以直接右键点击物品来取出一组。

## 界面

![网格界面](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/networks/network-grid-gui.png ':size=50%')![网格（带合成）界面](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/networks/network-crafting-grid-gui.png ':size=50%')

两种类型的网格的界面中都有翻页键（红色玻璃）。

通过点击蓝色玻璃可以更换排序方式。  
默认情况下，物品按照名字顺序排序。你可以更改成按照数量大小排序。  
排序方式的设置不会永久保存，将在重启后**失效**。

左键点击搜索按钮（命名牌），可以查找网络中指定的物品。  
输入物品的显示名称或ID来让网格只显示相关的物品。（目前暂不支持中文搜索原版物品）  
右键点击搜索按钮清空过滤器，以恢复显示所有物品。

网格界面中的右上角，网格（带合成）界面中的左侧顶部都可以把物品放入网络，将遵循[存储机制](./Network-Mechanism)存储物品。

带合成的网格每页会显示较少的物品，但右侧提供了合成台，可以快速合成物品。  
当进行一次合成后，右侧合成台中的物品会根据[取出机制](./Network-Mechanism)从网络中自动补充。
