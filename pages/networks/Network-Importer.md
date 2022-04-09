# 网络入口

![网络入口](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/networks/network-importer.png ':size=25%')

网络入口的目标就是让玩家可以通过货运网络将物品送入网络中。

网络入口共有9格，可以通过货运网络送入物品。

每个 Slimefun tick, 网络会从网络入口中接收物品，并遵循[存储机制](./Network-Mechanism)将物品送入网络中。

?> 不同于货运节点（输入），网络入口并不会从相邻的方块获取物品。网络入口主要是作为网络与货运的接口。

?> 通过货运作为中转，网络入口可以用于将原版箱子中的物品送入网络。
