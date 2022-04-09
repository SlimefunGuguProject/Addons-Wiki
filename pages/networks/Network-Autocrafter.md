# 网络自动合成机

![网络自动合成机](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/networks/network-autocrafter.png ':size=25%')![网络自动合成机(预留版)](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/networks/network-autocrafter-withholding.png ':size=25%')

网络自动合成机可以通过提供的[已编码的网络蓝图](./Crafting-Blueprint)来自动合成物品。

每个 Slimefun tick，合成机会尝试使用蓝图配方，并从网络中获取合适的材料进行合成。

合成机需要消耗网络电力来进行工作。

### 区别

普通版本的自动合成机会不断地合成物品，直到移除蓝图或原材料不足。

而预留版则会在输出栏满1组物品后停止合成。由于该特性，预留版的电力消耗比普通版本更高。

| 等级 | 每次合成电力消耗 |
| --- | ------- |
| 普通版 | 64 |
| 预留版 | 128 |
