## 致玩家

SlimefunNukes添加了可制造的核武器，可以搭配Slimefun一起使用。你可以通过高级武器类别使用Slimefun指南获得所有的合成配方。这些物品有放射性，所以你在携带时必须穿上防护服。  

当核弹放在地上时，你必须用打火石右击它来点燃它，根据服务器的配置，在它爆炸之前，你有有限的时间逃跑。  

一旦爆炸，它会生成一个看似球形的核弹坑，并有可能会引起火灾，你要远离爆炸点。根据爆炸的规模，弹坑可能需要更长的时间才能形成。

## 致服主

### 配置文件

您可以使用`config.yml`文件来调整一些特性或向插件添加新的物品。  

```yaml
blocks-per-second: 10000 # 创建弹坑时的方块移除速率。根据服务器硬件的不同，设置过高可能会导致延迟。
nukes: # 核武器列表。您可以通过复制其中一段并修改它来添加新的核武器。
# 第一个核弹
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
# 第二个核弹
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

### 命令和权限

该插件只有一个指令来检查你正在运行的版本

- **/sfnukes** - sfnukes.cmd
