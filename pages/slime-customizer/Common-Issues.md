# 常见错误与解决办法

当任何分类或物品的配置有问题时，你可以在服务端找到插件给出的错误提示。

此时，你只需要根据提示所说的做就行了。

此处列出部分较为特殊的问题，以及相关解决方案。

如果你想要补充，欢迎提交[Pull Request](https://github.com/SlimefunGuguProject/Addons-Wiki/pulls)。

## 跳配置加载

该问题不会在后台报错，它的通常表现为：

当你加载完GEO资源后跳过了物品`items.yml`直接开始加载机器`machines.yml`

可能原因:

1. Yml文件格式不正确。

解决方案:

1. 严格按照YAML规范来编写；
    1. 注意中文/英文符号的正确使用，例如中文冒号`：`与英文冒号`:`；
    2. YAML对缩进有严格的要求，注意不同项目前面的空格数量。
2. 使用[该网站](https://www.bejson.com/validators/yaml_editor/)或其他任何YAML校验工具来检查YAML文件格式；
3. 使用较为高级的编辑器来时刻检查文件格式是否正确。

## 报错型阻止配置加载

该问题会导致无法加载后续物品。

报错如下：

```
[10:03:36 错误]: Error occurred while enabling SlimeCustomizer vBuild 11 zh-CN(SlimefunGuguProject) (git 00cf14c) (Is it up to date?)
java.lang.NoClassDefFoundError: io/ncbpfluffybearimecustomizer/registration/Capacitors
	at io.ncbpfluffybear.slimecustomizer.SlimeCustomizer.onEnable(SlimeCustomizer.java:142) ~[SlimeCustomizer-Build 11 zh-CN(SlimefunGuguProject) (git 00cf14c).jar:?]
	at org.bukkit.plugin.java.JavaPlugin.setEnabled(JavaPlugin.java:264) ~[purpur-api-1.18.2-R0.1-SNAPSHOT.jar:?]
	at org.bukkit.plugin.java.JavaPluginLoader.enablePlugin(JavaPluginLoader.java:370) ~[purpur-api-1.18.2-R0.1-SNAPSHOT.jar:?]
	at org.bukkit.plugin.SimplePluginManager.enablePlugin(SimplePluginManager.java:541) ~[purpur-api-1.18.2-R0.1-SNAPSHOT.jar:?]
	at org.bukkit.craftbukkit.v1_18_R2.CraftServer.enablePlugin(CraftServer.java:560) ~[purpur-1.18.2.jar:git-Purpur-1632]
	at org.bukkit.craftbukkit.v1_18_R2.CraftServer.enablePlugins(CraftServer.java:474) ~[purpur-1.18.2.jar:git-Purpur-1632]
	at net.minecraft.server.MinecraftServer.loadWorld0(MinecraftServer.java:670) ~[purpur-1.18.2.jar:git-Purpur-1632]
	at net.minecraft.server.MinecraftServer.loadLevel(MinecraftServer.java:437) ~[purpur-1.18.2.jar:git-Purpur-1632]
	at net.minecraft.server.dedicated.DedicatedServer.initServer(DedicatedServer.java:352) ~[purpur-1.18.2.jar:git-Purpur-1632]
	at net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:1180) ~[purpur-1.18.2.jar:git-Purpur-1632]
	at net.minecraft.server.MinecraftServer.lambda$spin$1(MinecraftServer.java:321) ~[purpur-1.18.2.jar:git-Purpur-1632]
	at java.lang.Thread.run(Thread.java:833) ~[?:?]
```

这种报错看上去很怪，像是版本不完整导致的。

可能原因：

一个或多个物品引用了不存在的保存的物品`saveditems`，并且在之后的物品中引用了该物品。  
自定义粘液附属会正常注册引用了不存在配置的物品，当你再次引用这个错误物品时，就会出现如上报错  

解决方案:

1. 在Items.yml中修改你引用的`SAVEDITEM`里的ID。

## 物品ID重复报错

该问题会导致ID重复的物品无法正常加载。

报错如下：

```
[09:47:43 错误]: [SlimeCustomizer] Item "AMBER" from SlimeCustomizer vBuild 11 zh-CN(SlimefunGuguProject) (git 00cf14c) has caused an Error!
[09:47:43 错误]: [SlimeCustomizer] You can report it here: https://github.com/SlimefunGuguProject/SlimeCustomizer/issues
[09:47:43 错误]: [SlimeCustomizer] Registering SCGeoResource - 'AMBER' (SlimeCustomizer vBuild 11 zh-CN(SlimefunGuguProject) (git 00cf14c)) has failed!
io.github.thebusybiscuit.slimefun4.api.exceptions.IdConflictException: Two items have conflicting ids: SCGeoResource - 'AMBER' (SlimeCustomizer vBuild 11 zh-CN(SlimefunGuguProject) (git 00cf14c)) and SlimefunItem - 'AMBER' (SlimyTreeTaps vBuild 2 zh-CN(ybw0014) (git 8a58b9f))
	at io.github.thebusybiscuit.slimefun4.api.items.SlimefunItem.checkForConflicts(SlimefunItem.java:598) ~[Slimefun-c035c58-canary.jar:?]
	at io.github.thebusybiscuit.slimefun4.api.items.SlimefunItem.register(SlimefunItem.java:427) ~[Slimefun-c035c58-canary.jar:?]
	at io.ncbpfluffybear.slimecustomizer.objects.CustomGeoResource.registerGeo(CustomGeoResource.java:68) ~[SlimeCustomizer-Build 11 zh-CN(SlimefunGuguProject) (git 00cf14c).jar:?]
	at io.ncbpfluffybear.slimecustomizer.objects.SCGeoResource.registerGeo(SCGeoResource.java:14) ~[SlimeCustomizer-Build 11 zh-CN(SlimefunGuguProject) (git 00cf14c).jar:?]
	at io.ncbpfluffybear.slimecustomizer.registration.GeoResources.register(GeoResources.java:165) ~[SlimeCustomizer-Build 11 zh-CN(SlimefunGuguProject) (git 00cf14c).jar:?]
	at io.ncbpfluffybear.slimecustomizer.SlimeCustomizer.onEnable(SlimeCustomizer.java:140) ~[SlimeCustomizer-Build 11 zh-CN(SlimefunGuguProject) (git 00cf14c).jar:?]
	at org.bukkit.plugin.java.JavaPlugin.setEnabled(JavaPlugin.java:264) ~[purpur-api-1.18.2-R0.1-SNAPSHOT.jar:?]
	at org.bukkit.plugin.java.JavaPluginLoader.enablePlugin(JavaPluginLoader.java:370) ~[purpur-api-1.18.2-R0.1-SNAPSHOT.jar:?]
	at org.bukkit.plugin.SimplePluginManager.enablePlugin(SimplePluginManager.java:541) ~[purpur-api-1.18.2-R0.1-SNAPSHOT.jar:?]
	at org.bukkit.craftbukkit.v1_18_R2.CraftServer.enablePlugin(CraftServer.java:560) ~[purpur-1.18.2.jar:git-Purpur-1632]
	at org.bukkit.craftbukkit.v1_18_R2.CraftServer.enablePlugins(CraftServer.java:474) ~[purpur-1.18.2.jar:git-Purpur-1632]
	at net.minecraft.server.MinecraftServer.loadWorld0(MinecraftServer.java:670) ~[purpur-1.18.2.jar:git-Purpur-1632]
	at net.minecraft.server.MinecraftServer.loadLevel(MinecraftServer.java:437) ~[purpur-1.18.2.jar:git-Purpur-1632]
	at net.minecraft.server.dedicated.DedicatedServer.initServer(DedicatedServer.java:352) ~[purpur-1.18.2.jar:git-Purpur-1632]
	at net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:1180) ~[purpur-1.18.2.jar:git-Purpur-1632]
	at net.minecraft.server.MinecraftServer.lambda$spin$1(MinecraftServer.java:321) ~[purpur-1.18.2.jar:git-Purpur-1632]
	at java.lang.Thread.run(Thread.java:833) ~[?:?]
```

可能原因：

你的自定义物品的ID与其它附属里的物品ID重复。

解决方案：

1. 修改ID重复物品的ID。

## 反MC物品设定报错

当你保存并引用了一个违反MC设定的物品(如堆叠数为128的镐子)或引用了带有`EntityType`的刷怪蛋时，会出现该类型报错。

解决方案:

1. 解决不了就解决搞出这个问题的人就行了。

> “快住手啊！你到底想要干啥！”

## 使用指令时的报错

当你使用指令时出现"An internal error has occured"字眼的报错信息。

可能原因：

1. 插件未完全加载，或插件未启用

解决方案：

1. 检查启动日志，修复配置文件的错误。

> “别整活了，快去修你的Bug”

## 将物品添加至主分类或非标准分类

```
[10:03:51] [Server thread/ERROR]: [SlimeCustomizer] Failed to properly load this Item
java.lang.UnsupportedOperationException: You cannot add items to a FlexItemGroup!
	at io.github.thebusybiscuit.slimefun4.api.items.groups.FlexItemGroup.add(FlexItemGroup.java:81) ~[Slimefun-6aa9b31-canary.jar:?]
	at io.github.thebusybiscuit.slimefun4.api.items.SlimefunItem.load(SlimefunItem.java:785) ~[Slimefun-6aa9b31-canary.jar:?]
	at io.github.thebusybiscuit.slimefun4.implementation.setup.PostSetup.loadItems(PostSetup.java:52) ~[Slimefun-6aa9b31-canary.jar:?]
	at io.github.thebusybiscuit.slimefun4.implementation.tasks.SlimefunStartupTask.run(SlimefunStartupTask.java:49) ~[Slimefun-6aa9b31-canary.jar:?]
	at org.bukkit.craftbukkit.v1_18_R1.scheduler.CraftTask.run(CraftTask.java:101) ~[purpur-1.18.1.jar:git-Purpur-1519]
	at org.bukkit.craftbukkit.v1_18_R1.scheduler.CraftScheduler.mainThreadHeartbeat(CraftScheduler.java:483) ~[purpur-1.18.1.jar:git-Purpur-1519]
	at net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:1227) ~[purpur-1.18.1.jar:git-Purpur-1519]
	at net.minecraft.server.MinecraftServer.lambda$spin$1(MinecraftServer.java:322) ~[purpur-1.18.1.jar:git-Purpur-1519]
	at java.lang.Thread.run(Thread.java:833) ~[?:?]
```
> 你到底在干什么啊，罚你再去把wiki重新看一遍，都说了多少遍物品只能添加至子分类里
