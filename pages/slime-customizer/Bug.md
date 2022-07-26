# 特殊Bug修复

当你写错一个物品时，后台会有相应的提示

此时，你只需要根据提示所说的做就行了

这里只列出特殊bug解决方法

如果你想要补充，欢迎提交[issue](https://github.com/SlimefunGuguProject/Addons-Wiki/issues)

## 跳配置加载

此Bug无法在后台中显示，且没有任何报错

它通常表现为以下示例

当你加载完GEO资源后跳过了Items.yml直接加载machines.yml

Bug成因:

1、你的配置中少了标点  
2、格式不对  

解决方法:  

1、补上标点/调整格式  
2、通过IntelliJ IDEA Community Edition软件检查  

使用方法:  
1、将配置拖进软件中，在软件下方会显示缺少标点，此时你只需要根据提示修改即可  
2、检察每个物品对应ID的keys，单击物品ID左边的`-`,此时会将一个物品收拢为一条ID，并在右边显示keys  
一个物品是`<9 keys>`说明该物品正常，若小于`<9 keys>`则说明该物品格式不对需要调整  

## 报错型阻止配置加载

此Bug会导致无法加载之后的配置

报错如下：

```yaml
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

这种报错看上去很怪，像是版本不完整导致的

Bug成因：

一个或多个物品引用了saveditems文件中不存在的配置，并且你在之后的物品中引用了该物品  
自定义粘液附属会正常注册引用了不存在配置的物品，当你再次引用这个错误物品时，就会出现如上报错  

解决方法:  
在Items.yml中修改你引用的SAVEDITEM里的ID

## 物品ID重复报错

此Bug会导致两者物品无法正常加载

报错如下：
```yaml
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

Bug成因：  

自定义物品的ID与其它附属里的物品ID重复

解决方法：
在以上报错中你只需要根据`io.github.thebusybiscuit.slimefun4.api.exceptions.IdConflictException: Two items have conflicting ids: SCGeoResource - 'AMBER' (SlimeCustomizer vBuild 11 zh-CN(SlimefunGuguProject) (git 00cf14c)) and SlimefunItem - 'AMBER' (SlimyTreeTaps vBuild 2 zh-CN(ybw0014) (git 8a58b9f))`  
解决相应物品的ID重复问题即可(修改你的物品ID)

## 反MC物品报错

当你保存并引用了一个违反MC法则的物品(如堆叠数为128的镐子)或引用了带有EntityType的刷怪蛋时

会出现该类型报错

“快住手啊！你到底想要干啥！”

## 使用指令时的报错

因为你配置写的有错误，自定义粘液附属插件没有加载完全

“别整活了，快去修你的Bug”