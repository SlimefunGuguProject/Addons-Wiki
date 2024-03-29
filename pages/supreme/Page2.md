# 第二章

本章是至尊研究院的机器与电力部分的教程。

如果你在本文中遇到了不认识的物品，可以先阅读上一章。

本文更新时，汉化版还没有根据原版 v1.4.0 进行调整。

因此，本文可能与最新版本的内容存在不一致的地方，还请谅解。

本文所说的“机器合成配方”，如无特殊说明，均指一级机器的合成配方。

## 多方块机器的电力版

核心工厂、魔法工厂、装备工厂都有它们对应的电力机器。

**电芯机**是核心工厂的电力版本，合成它需要：2× 电动马达 + 2× 次级电器 + 2× 除锈零件 + 人造红宝石 + 黑金刚石镶边储能电容 + 核动力无职业机器人。

电芯机的配方与核心工厂的配方完全一致。

电芯机的界面如下： 

![电芯机GUI](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/supreme/dianxinji.png ':size=25%')

和大部分粘液科技的机器相似，左侧为输入栏，右侧为输出栏。

与其他插件的机器不同，至尊研究院的机器每个粘液刻最多只会消耗一格物品（具体来说，是合成配方中的“一格”物品），而不是一次性全部耗掉。电芯机也不例外。

如果数量不够，合成进度会在最后一刻卡住，直到你放入更多材料为止。

也就是说，在使用电芯机等机器时，你可以先放入一部分材料，而不是等到集齐之后再放入全部材料。

当然，如果消耗速度赶不上合成速度（比如三级机器），那么最后一刻会将剩余的所需材料一次性消耗掉。

电芯机具有三个等级，升级后功率和效率都会提升。

**电力魔法工厂**是魔法工厂的电力版本，合成它需要：哭泣的黑曜石 + 人造红宝石 + 黑金刚石镶边储能电容 + 2× 电动马达 + 2× 电器 + 2× 至尊下界合金。

电力魔法工厂的配方与魔法工厂的配方完全一致。

电力魔法工厂的界面与电芯机基本一致，我就不再展示了。

电力魔法工厂具有三个等级，升级后功率和效率都会提升。

**电力装备组装机**是装备工厂的电力版本，合成它需要：附魔台 + 铁砧 + 锻造台 + 人造红宝石 + 黑金刚石镶边储能电容 + 2× 电动马达 + 2× 石化零件。

与装备工厂不同，电力装备组装机只能升级装备，合成普通装备是不可行的。

电力装备组装机的界面与电芯机基本一致，我就不再展示了。

电力装备组装机具有三个等级，升级后功率和效率都会提升。

以上三台机器的具体数值通用，如下表：

![通用数值](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/supreme/tongyongbiao.png ':size=25%')

## 生物收集器

生物收集器可以收集附近生物的战利品。合成它需要： 重生锚 + 人造红宝石 + 核动力屠夫机器人 + 2× 精金板 + 2× 次级电器 + 2× 除锈零件。

生物收集器的界面如下：

![生物收集器GUI](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/supreme/shoujiqi.png ':size=25%')

左上角为生物收集器使用的工具。

一般来说，这个位置只需要放三种工具之一：玻璃瓶、剪刀和铁剑。



每次工作时，玻璃瓶会被消耗，而剪刀和铁剑会失去 2 点耐久度（无视耐久附魔，不无视无法破坏）。

只有一定范围内有生物，且对应的工具正确时，生物收集器才会开始工作。

但开始工作后，这个生物就没必要在范围内，甚至没必要存在，直到下一次工作开始之前。

以玻璃瓶 + 蜜蜂 -> 蜂蜜瓶为例，生物收集器的工具为玻璃瓶，且一定范围内有蜜蜂时，生物收集器会消耗一个玻璃瓶，然后开始合成蜂蜜瓶。

开始工作后，蜜蜂飞出范围，或者被击杀后，生物收集器仍会继续工作。

但下一次工作开始前，如果玻璃瓶不够，或者范围内没有蜜蜂，那么生物收集器不会合成下一瓶蜂蜜。



生物收集器对于工具的实质并不关心。

实际上，上面那张图中的“铁剑”不是普通铁剑，而是斩首剑。

你甚至可以往工具栏放入多功能工具，当一个无限耐久的剪刀使用。



生物收集器可以获取的东西很多，我只提几个比较重要的：

玻璃瓶 + 蜜蜂 -> 蜂蜜瓶；

玻璃瓶 + 凋灵 -> 附魔之瓶；（1.4.0 改为合成装满的学识之瓶）

玻璃瓶 + 末影龙 -> 龙息；

剪刀 + 守卫者 -> 海绵；

剪刀 + 凋灵 -> 压缩碳；

铁剑 + 凋灵 -> 下界之星；

铁剑 + 劫掠兽 -> 不死图腾；

铁剑 + 女巫 -> 玻璃瓶。



生物收集器组装机具有三个等级，升级后功率、效率和生物的搜寻范围都会提升。

具体数值如下：

![生物收集器数值](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/supreme/shoujiqibiao.png ':size=25%')

1.4.0 之后，生物收集器的加工时长可以在配置文件中修改。默认值仍然是 15 秒。

## 虚拟花园

合成虚拟花园需要：去皮诡异菌核 + 2× 人造红宝石 + 高级农夫机器人 + 2× 精金板 + 2× 除锈零件 + 石化零件。

它的界面与生物收集器基本一致，如下图所示：

![生物收集器数值](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/supreme/xunihuayuan.png ':size=25%')

按照指南的说法，虚拟花园可以“培育一些资源”。

实际上它支持的合成配方比较杂，比“培育”的范围要广一些。

具体来说，虚拟花园的合成配方可以分为如下几类：

由花朵产出对应的染料。

这里的花朵必须是小花，而且不能是凋零玫瑰（凋零玫瑰有另外的配方）。

不过，虚拟花园可以产出所有种类的染料。下列配方我也归入此类之中：

竹子 -> 黄绿色染料；

棕色蘑菇 -> 灰色染料；

缠怨藤 -> 青色染料；

可可豆 -> 棕色染料；唯二合理的配方

仙人掌 -> 绿色染料。唯二合理的配方

生产农作物。

支持的农作物：马铃薯、胡萝卜、甜菜、小麦、甘蔗、甜浆果、西瓜、南瓜和下界疣。

种子不是自身的作物，需要在输入端放入种子，而不是对应的产物。

西瓜产出的是西瓜方块。

另外，还有如下配方：

南瓜 -> 雕刻过的南瓜；

苹果 -> 苹果；

凋零玫瑰 -> 凋零玫瑰。

由树苗产出对应的原木。

绯红菌和诡异菌也有类似的配方。

杂项。

将雪块、蜂蜜块或黏土块放入输入端，可以产出（雪球 / 蜂蜜瓶 / 黏土球）。

以此法生产蜂蜜瓶不需要空玻璃瓶。

另外还有几种“培育”方块的配方：

虽然这些配方自身有一定的合理性，但是把这些配方套给一个自称“花园”的机器……总感觉风格上不太搭。

末影水晶 -> 末地石；

磨制花岗岩 -> 花岗岩；

磨制闪长岩 -> 闪长岩；

磨制安山岩 -> 安山岩。

虽然上述配方中使用了“原料 -> 产物”的格式，但实际上，虚拟花园在生产过程中不会消耗输入端的物品。



虚拟花园具有三个等级，升级后功率和效率都会提升。

具体数值如下：

![通用数值](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/supreme/tongyongbiao.png ':size=25%')

1.4.0 之后，虚拟花园的加工时长可以在配置文件中修改。默认值仍然是 15 秒。

## 铸锭机

**至尊铸锭机**可以冶炼金属锭，合成它需要：高炉 + 电动铸锭机（Ⅲ）+ 电力冶炼炉（Ⅱ）+ 碳压机 - Ⅲ + 2× 次级电器 + 2× 除锈零件 + 石化零件。

它的界面与生物收集器基本一致，这里不再赘述。



至尊铸锭机支持的配方比原版粘液科技的电铸锭机更为广泛。

具体来说，至尊铸锭机支持的合成配方如下：

**·** 32× 矿粉 -> 32× 对应金属锭（金粉冶炼的是 4 克拉金锭）;

**·** 32× 4 克拉金锭 -> 32× 6 克拉金锭；

**·** 32× (n - 2) 克拉金锭 -> (40 - n)× n 克拉金锭（n 为产物金锭的克拉数，n∈[8,24]∩N*）

    **·** 例：32 个 6 克拉金锭（8 - 2），可以冶炼出 32（40 - 8）个 8 克拉金锭；

          但是 32 个 22 克拉金锭（24 - 2），只能冶炼出 16（40 - 24）个 24 克拉金锭。

**·** 32× 镍锭 -> 16× 钴锭；

**·** 32× 钢锭 -> 16× 大马士革钢锭；

**·** 32× 石英块 -> 32× 硅；

**·** 32× 硅 -> 16× 硅铁；

**·** 64× 下界岩 -> 8× 硫酸盐。


至尊铸锭机具有三个等级，升级后功率和效率都会提升。

具体数值如下：

![通用数值](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/supreme/tongyongbiao.png ':size=25%')

## 至尊魔法工作台

至尊魔法工作台和原版粘液科技的魔法工作台没有任何关系。

合成至尊魔法工作台需要：附魔台 + 电动淘金机（Ⅲ）+ 电力碎矿机（Ⅲ）+ 核动力无职业机器人 + 人造红宝石 + 2× 次级电器 + 2× 除锈零件。

至尊魔法工作台的界面与生物收集器基本一致，这里不再赘述。



从配方来看，与其叫“魔法工作台”，更像是“懒人合成台”。

它的配方如下：

**·** 圆石 -> 沙砾 -> 沙子 -> 灵魂沙 -> 下界石英（32:32，32:16，32:16，32:32）；

**·** 小麦 -> 下界疣 -> 魔法结晶 - Ⅰ-> 魔法结晶 - Ⅱ-> 魔法结晶 - Ⅲ（32:16，32:32，32:8，32:8）；

**·** 末影珍珠 -> 末影之眼 -> 末影结晶 - Ⅰ-> 末影结晶 - Ⅱ-> 末影结晶 - Ⅲ（16:8，32:32，32:8，32:8）；

      **·** 省掉了烈焰粉。

**·** 青金石 ->人造蓝宝石 -> 人造绿宝石（32:8，32:16）；

      **·** 彻底排除了玻璃和铝的需求。

**·** 煤炭 -> 碳 -> 压缩碳 -> 碳块 -> 人造钻石 -> 黑金刚石（32:8，32:8，32:4，16:16，16:8）；

      **·** 省掉了玻璃板和燧石的需求。

**·** 硅铁 -> 光伏电池（32:16）；

**·** 钴锭 -> 磁铁 -> 电磁铁 -> 电动马达 -> 加热线圈（32:16，32:16，32:16，32:16）；

**·** 碎矿 -> 一小撮铀 -> 一小块铀 -> 铀 -> 起泡锭（33%）-> 起泡锭（66%）-> 起泡锭（32:8，32:8，32:8，32:16，32:16，32:16）；

      **·** 其他机器做得到吗.png

**·** 钢锭 -> 钢板（32:8）；

**·** 强化合金锭 -> 钢筋板（32:8）。

虽然这台机器确实把“懒人”这方面做到了极致，但它有个比较烦人的地方：输入槽位只有一个。

换句话说，你没法在输入端缓存一些原料。

要想用至尊魔法工作台做生产线，你必须合成多台机器。

不过瑕不掩瑜，我个人还是比较看好的。



至尊魔法工作台具有三个等级，升级后功率和效率都会提升。

具体数值如下：

![通用数值](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/supreme/tongyongbiao.png ':size=25%')

## 魔法祭坛

**魔法祭坛**可以合成大部分魔法分支的材料。合成它需要：古代祭坛 + 4× 古代基座 + 人造红宝石 + 电器 + 输送零件。

魔法祭坛的界面与电芯机基本一致，不再赘述。

魔法祭坛的合成配方与原版粘液科技中合成这些物品的配方相同。

魔法祭坛可以合成大部分魔法分支的材料，除了两种结晶和坏死颅骨。不过问题不大。



魔法祭坛具有三个等级，升级后功率和效率都会提升。

具体数值如下：

![通用数值](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/supreme/tongyongbiao.png ':size=25%')

## 铸造机

**铸造机**可以将至尊核心转化为特殊资源，合成它需要：核动力无职业机器人 + 人造红宝石 + 3× 电动铸锭机（Ⅲ） + 2× 电力冶炼炉（Ⅱ）+ 2× 次级电器。

从功能上来看，它和无尽贪婪的资源合成器类似。

但恐怕它和资源合成器一样乏善可陈。

我只提几个（可能？）有用的配方：

**·** 6× 至尊金 + 3× 至尊苹果 -> 128× 附魔金苹果；

**·** 6× 至尊黑染料 + 3× 至尊铁 -> 128× 原油桶；

至尊黑染料的主要作用，可能也是唯一能被注意到的作用。

你这原油来源是不是有点……

**·** 6× 至尊拴绳 + 3× 至尊沙砾 -> 128× 塑料纸。

感觉比上面的原油桶配方更离谱……



铸造机的界面与电芯机基本一致。

铸造机具有三个等级，升级后功率和效率都会提升。

铸造机至少在功率上，和前面那些模板化的设置有所差别了。

当然，差别也不大。

##电动合成机

**电动合成机**在我看来很不成熟，我不建议你使用它。

如果确实有合成需要，我建议你使用它的合成材料——自动合成机来代替。

铸造机的界面与电芯机基本一致。

电动合成机具有三个等级，升级后功率和效率都会提升。

具体数值如下：

![通用数值](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/supreme/tongyongbiao.png ':size=25%')

## 虚拟水族馆

按照指南的说法，**虚拟水族馆**可以用来“收集在海洋中的物品”。

实际上也确实是这样。

合成虚拟水族馆需要：高级渔夫机器人 + 钓鱼竿 + 2× 次级电器 + 2× 人造红宝石 + 石化零件 + 2× 精金板。



虚拟水族馆的产物有九种，可以划入四类：

**·** 海绵、海晶灯；

**·** 生鳕鱼、生鲑鱼、热带鱼、墨囊；

**·** 鹦鹉螺壳；

**·** 木棍、线；

虚拟水族馆的界面与生物收集器类似。

虚拟水族馆需要工具才能工作，它能使用钓鱼竿、三叉戟和金锄。

使用不同的工具，产出不同物品的概率也不同。

如果想要海绵和海晶灯，那我建议你使用三叉戟（概率分别为 10%）。

每次工作时，工具会失去 2 点耐久度（无视耐久附魔，不无视无法破坏）。

如果你**真的没有别的办法**获取海绵，再考虑虚拟水族馆吧。



虚拟水族馆具有三个等级，升级后功率和效率都会提升。

具体数值如下：

![通用数值](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/supreme/tongyongbiao.png ':size=25%')

1.4.0 之后，虚拟水族馆的加工时长可以在配置文件中修改。默认值仍然是 15 秒。

# 矿机

至尊矿机很有特色。它在很多方面都和原版粘液科技中的自动合成机类似。

至尊矿机共有七个等级，合成最低级的石头矿机需要：2× 钻石镐 + 煤发电机 + 矿工机器人 + 次级电器 + 4× 精金板。



至尊矿机必须放在一个容器上方才能工作。

这个容器可以是箱子，也可以是陷阱箱、木桶或潜影盒。

![矿机](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/supreme/kuangji.png ':size=25%')

矿机的界面如下图所示：

![矿机GUI](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/supreme/kuangjigui.png ':size=25%')

左侧为矿机的开关。右侧的萤石灯（不工作时为黑曜石）可以查看矿机的工作情况。

默认设置下，矿机每次产出物品需要 1 秒。

前四级矿机每次产出物品需要 20J，后三级则只需 10J。



矿机可以生产的物品与其等级有关。

矿机升级至钍矿机时，可以产出一点钍。

钍是至尊研究院添加的新材料，具有多种形态和合成物。

再叙述一堆材料的合成配方未免太过乏味。钍及其衍生物的合成，我只展示一张图：

![流程图](https://gzassets.cn/minecraft/plugin/slimefun/wiki/addons/images/supreme/liuchengtu2.png ':size=50%')

钍可用于机器的升级，钍的合成物则用于发电机、电容和装备的升级。



满级矿机可以产出至尊金块，至尊金块可以在魔法工厂合成至尊。

至尊用于最高级机器和装备的升级。



另外，至尊矿机可以在设置文件中关闭，也可以在设置文件中调整矿机的产出。

不过，至尊金块和钍一般只能靠矿机获得，所以我不建议关闭它们。

## 发电机

至尊研究院加入了七种发电机，我们依次介绍。

## 生物沼气发电机

合成基础生物沼气发电机，需要：硅 + 电动马达 + 3× 铝锭 + 4× 小型电容。

生物沼气发电机要求一定范围内至少有牛、哞菇、羊、猪四种生物中的一种。

基础等级的功率默认为 50 W。

生物沼气发电机共有三级。升级后，功率和搜寻范围都会提升。具体如下：

等级功率（W）搜寻范围基础503 格中级2006 格高级8009 格

## 火电发电机

合成基础火电发电机需要：火杖 + 煤发电机 + 至尊红石 + 2× 古金合金 + 2× 次级电器 + 2× 运输零件。它的功率为 2.5 kW。

根据指南，火电发电机发电时，“下方需点火”。

这个“火”的范围其实比想象中宽泛。除了火和灵魂火，岩浆，甚至是营火和灵魂营火，也可以让火电发电机发电。

基础火电发电机可以升级。升级后的功率为 25 kW。

基础火力发电机相对比较容易合成，而且发电稳定、不受维度限制、功率高。可以造一个。

## 风力发电机

合成基础风力发电机需要：风杖 + 生物发电机 + 至尊青金石 + 2× 铱合金 + 2× 次级电器 + 2× 运输零件。它的功率为 2.5 kW。

风力发电机的发电要求很简单，只要周围 4 格中有 1 格是空气方块即可。

风力发电机在末地不能发电。

基础风力发电机可以升级。升级后的功率为 25 kW。

基础风力发电机也比较容易合成，而且发电稳定、功率高。可以一试。

## 水利发电机

合成基础水利发电机（翻译如此）需要：水杖 + 镁发电机 + 至尊钻石 + 2× 锰合金 + 2× 次级电器 + 2× 运输零件。它的功率为 2.5 kW。

水利发电机要求下方的方块是水，否则不能发电。

基础水利发电机可以升级。升级后的功率为 25 kW。

## 光能发电机

合成基础光能发电机需要：雷杖 + 充能太阳能发电机 + 至尊石英 + 钛合金 + 钛板 + 2× 次级电器 + 2× 运输零件。它的功率为 2.5 kW。

光能发电机的发电要求为：上方接收到足够的自然光照。

但显然，下界和末地根本没有自然光照。

所以光能发电机的使用较为局限。再加上其功率不占优势，我不建议你使用它。

基础光能发电机可以升级，升级后的功率为 25 kW。

## 地能发电机

合成基础地能发电机需要：自然资源开采机 + 岩浆发电机（Ⅱ） + 至尊下界合金 + 2× 精金合金 + 2× 次级电器 + 2× 石化零件。它的功率为 5 kW。

地能发电机的合成明显比其他发电机难。

地能发电机的发电条件其实不是“埋入地下”，毕竟这样的判定代码很不好写。

实际上它的发电条件更像是光能发电机的反面：在下界和末地可以发电，其他地方只有上方自然光照不足时才能发电。

基础地能发电机可以升级，升级后的功率为 75 kW。

## 万用发电机

万用发电机在任意条件下都可以发电。

它的合成需要充能钍等材料，实际上是上述发电机的再生级。

基础万用发电机的功率为 1 MW，升级后变为 2 MW。

注：无尽贪婪中，单台发电机的最高功率仅有 0.24 MW。

## 电容

至尊研究院还添加了多种电容。

电容共有五级，它们的最大储量依次为：1 MJ，4 MJ，16 MJ，100 MJ 和 无限。

虽然最高级的至尊电容名义上是无限储量的，但它的实际储量并不是无限，而是 1.6 GJ。

实际上也和无限差不多了。

1.6 GJ 实际上是个很大的量。如果单个电网中有两个及以上的至尊电容，有电量溢出的风险。

因此，一个电网中应该只有一个至尊电容。


至尊研究院的机器先讲这么多。

下一章教程，我们来讲一讲至尊研究院的生物科技部分。