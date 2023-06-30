# 附属插件依赖检测

在`/plugins/SlimeCustomizer/sc-addon.yml`中，你可以添加自定义附属依赖的插件

```yaml
depend:
  - Slimefun
```

该配置文件定义了必须启用的插件  

如果列表中的任意一个插件没有启用，则本插件将不会启用

!> 你可以把 Slimefun 删除（毕竟没Slimefun本附属根本不会运行）

示例：

如果你的自定义附属引用了无尽贪婪附属插件里的物品  

您需要向配置文件中添加无尽贪婪的`artifactId`

```yaml
depend:
  - Slimefun
  - InfinityExpansion
```

# 如何查看artifactId

获取附属插件的源码，点击`pom.xml`，找到<artifactId>之后的名称
