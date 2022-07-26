# 引用后注册物品

依据[物品注册顺序]((./Registering))

物品注册顺序至关重要

排在之后的物品可以引用排在之前的物品

排在之后的配置可以引用排在之前的配置里的物品

然而，你不能将后注册物品作为前注册物品的合成材料

例如：items.yml的物品无法引用machines.yml的机器

若要将machines.yml的机器作为items.yml的物品的合成材料

你需要在游戏里使用`/sc saveitem`指令保存对应机器

然后通过SAVEDITEM引用

引用详见[引用保存的物品](./Saved-Items)