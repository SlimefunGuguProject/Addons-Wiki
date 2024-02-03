# 常见问题/错误与解决方案

本页内容讲述编写 SlimeCustomizer 配置时可能遇到的问题，以及解决方案。  
在讨论群内提出你的问题之前，请**一定**要先阅读本页内容，因为90%的问题都能在这里自己解决。

!> SlimeCustomizer 会在加载时输出所有信息，一旦遇到错误或无效配置时，则会停止加载并禁用插件。请优先**检查服务端的启动日志**，以找到错误的原因。（这是 70% 的问题的解决方案）

## 无法使用 /sc 指令

使用指令时出现"An internal error has occured"字眼的报错信息。  
后台报错：

```
org.bukkit.command.CommandException: Cannot execute command 'sc' in plugin SlimeCustomizer
```

插件都禁用了，还怎么用指令？去**检查服务端的启动日志**。

## 跳配置加载

当某个配置文件被跳过加载时，一般是因为配置文件的格式出现问题。  

对于该问题，报错会在一开始加载插件时就出现，而不会等到加载相应文件时才出现。

解决方案:

1. 严格按照 YAML 规范来编写；
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

报错如下（其实你能看得懂英文的话，这个报错已经解释了一切：

```
io.github.thebusybiscuit.slimefun4.api.exceptions.IdConflictException: Two items have conflicting ids: SCGeoResource - 'AMBER' (SlimeCustomizer vBuild 11 zh-CN(SlimefunGuguProject) (git 00cf14c)) and SlimefunItem - 'AMBER' (SlimyTreeTaps vBuild 2 zh-CN(ybw0014) (git 8a58b9f))
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

## 将物品添加至父分类或非标准分类

```
[10:03:51] [Server thread/ERROR]: [SlimeCustomizer] Failed to properly load this Item
java.lang.UnsupportedOperationException: You cannot add items to a FlexItemGroup!
```

> 你到底在干什么啊，罚你再去把wiki重新看一遍，都说了多少遍物品不能添加到父分类里
