## 下载

1. 在此下载最新的Slimefun4 [下载Slimefun4](https://github.com/StarWishsama/Slimefun4/releases)

2. 下载SlimefunNukes [SpigotMC](https://www.spigotmc.org/resources/slimefunnukes.42670/) 或自己构建

3. 将刚刚下载的JAR文件放入**plugins**文件夹。

4. 启动服务器!

## 配置文件

您可以使用config.yml文件来调整一些特性或向插件添加新的物品。  

```yaml
blocks-per-second: 10000 # 创建弹坑时阻止移除速率。根据服务器硬件的不同，设置过高可能会导致延迟。
nukes: # 核武器列表。您可以通过复制其中一段并修改它来添加新的核武器。
# First nuke
- fuse: 30 # 炸弹点燃和爆炸之间的时间
  incendiary: false # 爆炸后是否能引发火灾
  name: '&cNuclear warhead' # 物品名称
  recipe: # 物品的配方。您可以使用Slimefun物品id或我的世界原版物品id
  - COAL_BLOCK
  - IRON_BLOCK
  - COAL_BLOCK
  - IRON_BLOCK
  - URANIUM
  - IRON_BLOCK
  - COAL_BLOCK
  - IRON_BLOCK
  - COAL_BLOCK
  id: LITTLE_NUKE # 物品的粘液科技ID。注意:它必须是独一无二的
  radius: 16 # 爆炸坑的半径
# Second nuke
- fuse: 45
  incendiary: true
  name: '&cMedium nuclear warhead'
  recipe:
  - COAL_BLOCK
  - REINFORCED_PLATE
  - COAL_BLOCK
  - REINFORCED_PLATE
  - PLUTONIUM
  - REINFORCED_PLATE
  - COAL_BLOCK
  - REINFORCED_PLATE
  - COAL_BLOCK
  id: MEDIUM_NUKE
  radius: 32
research-cost: 50 # 解锁物品所需的经验
```

## 命令和权限

该插件只有一个指令来检查你正在运行的版本

- **/sfnukes** - sfnukes.cmd
