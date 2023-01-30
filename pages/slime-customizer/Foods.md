# 自定义食品

利用套粘液nbt法自定义食品

你可以下载 [异域花园](https://builds.guizhanss.net/ybw0014/ExoticGarden/master) 拓展你的食品饱和等级

这里给出一个示例
```yaml
item:
  ==: org.bukkit.inventory.ItemStack
  v: 2975
  type: PLAYER_HEAD
  meta:
    ==: ItemMeta
    meta-type: SKULL
    display-name: '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gold","text":"咖啡"}],"text":""}'
    lore:
    - '{"text":""}'
    - '{"extra":[{"bold":false,"italic":true,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":"恢复
      "},{"italic":true,"color":"aqua","text":"7.0 "},{"italic":true,"color":"gray","text":"点饥饿值"}],"text":""}'
    PublicBukkitValues:
      slimefun:slimefun_item: PINACOLADA
    skull-owner:
      ==: PlayerProfile
      uniqueId: 50a30516-8992-36e4-8e4c-794973b72281
      name: CS-CoreLib
      properties:
      - name: textures
        value: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzY0YzBiYWFlYTM5NDU4NjQwNWUxNTU3ZjU3ZTUwNTlmNGQ0YjAzYmYwN2FhMmJhMGYyMDkzODQ3MWQyNzFhYiJ9fX0=
```

这是以异域花园中的椰林飘香为原型修改而成的咖啡

椰林飘香可以恢复7点饥饿值，而自定义出的咖啡同样可以

如果要自定义其它食品，你只需要修改`type`(物品类型)、`display-name`(物品名称)、`lore`(物品描述)

以及`properties:`中的`value`(头颅外观)、`slimefun:slimefun_item:`之后的粘液物品ID即可

操作方法:

在异域花园里选择一个你想要的对应饥饿值的食品(如对应3点饥饿值的食品)

主手拿着该食品并用`/sc saveitem`指令保存后修改上述条目即可

如果你不想以头颅样式的食品作为蓝本

你可以在异域花园里选择原版物品样式的食品，重复以上操作，更替`slimefun:slimefun_item:`后的ID为异域花园里其它食品的ID即可

注：修改`slimefun:slimefun_item:`后的ID是为了选择食品的饥饿值
