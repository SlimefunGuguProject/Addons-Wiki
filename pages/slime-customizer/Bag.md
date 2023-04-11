# 自定义背包

!> **警告**：如果您想要使用这个特性，请禁用简易工具（SimpleUtils）中的简易工作台。该工作台仅识别粘液物品ID，会对自定义附属的进阶功能有较大影响，可能会有刷物品的风险。

你可以通过保存物品的方式自定义任何款式的背包。

通俗点来说，就是修改背包的物品外观。

示例：

```yaml
item:
  ==: org.bukkit.inventory.ItemStack
  v: 2975
  type: PLAYER_HEAD
  meta:
    ==: ItemMeta
    meta-type: SKULL
    display-name: '{"extra":[{"bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"dark_gray","text":"示例背包"}],"text":""}'
    lore:
    - '{"text":""}'
    - '{"extra":[{"bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":"容量:
      "},{"italic":false,"color":"gray","text":"54 (背包)"}],"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":"ID:
      <ID>"}],"text":""}'
    - '{"text":""}'
    - '{"extra":[{"bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":"右键"},{"bold":true,"italic":false,"color":"gray","text":"
      打开"}],"text":""}'
    PublicBukkitValues:
      slimefun:slimefun_item: RADIANT_BACKPACK
    skull-owner:
      ==: PlayerProfile
      uniqueId: 2661dae7-26e2-4fc3-b5c3-d07cda269d24
      name: CS-CoreLib
      properties:
      - name: textures
        value: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmMwNWYwNjlhYjkyYWU1ZTEwOWNhMDRlZDdhZGRlMDFlZDQ4MDIxMDc5ZWVjMTYyYjU4M2UzYTc3NGVlYjZhMiJ9fX0=
```

通过修改`properties`中的`value`改变背包外观  
`value`可在 [头颅网站](https://minecraft-heads.com/custom-heads) 中查找(任意点开一个头颅，翻到网页最下方即可查看)  
通过修改`slimefun:slimefun_item:`后的粘液背包ID，选择背包容量

注意：
`- '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":"ID:<ID>"}],"text":""}'`
这行lore不得修改，否则将会失去背包属性
