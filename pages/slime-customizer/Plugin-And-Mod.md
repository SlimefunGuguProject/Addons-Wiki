# 引用其它插件/Mod物品

自定义粘液附属可以将任意插件/Mod物品添加到粘液科技书中

这里以PlayerTitle中的称号卡作为示例

```yaml
item:
  ==: org.bukkit.inventory.ItemStack
  v: 2865
  type: PAPER
  meta:
    ==: ItemMeta
    meta-type: UNSPECIFIC
    display-name: '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"green","text":"称号卡:
      "},{"bold":true,"italic":false,"color":"dark_gray","text":"["},{"bold":true,"italic":false,"color":"red","text":"示例
      "},{"bold":true,"italic":false,"color":"dark_gray","text":"]"}],"text":""}'
    lore:
    - '{"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"white","text":"[
      "},{"italic":false,"color":"red","text":"称号说明 "},{"italic":false,"color":"white","text":"]"}],"text":""}'
    - '{"extra":[{"bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"white","text":">>
      "},{"bold":false,"italic":false,"color":"green","text":"显示称号："},{"italic":false,"color":"white","text":">
      "},{"bold":true,"italic":false,"color":"dark_gray","text":"["},{"bold":true,"italic":false,"color":"red","text":"示例
      "},{"bold":true,"italic":false,"color":"dark_gray","text":"]"}],"text":""}'
    - '{"extra":[{"bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"white","text":">>
      "},{"bold":false,"italic":false,"color":"green","text":"使用天数："},{"italic":false,"color":"white","text":">
      "},{"italic":false,"color":"green","text":"永久"}],"text":""}'
    - '{"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"white","text":"[
      "},{"italic":false,"color":"red","text":"称号BUFF "},{"italic":false,"color":"white","text":"]"}],"text":""}'
    - '{"text":""}'
    - '{"extra":[{"bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"red","text":">>
      "},{"bold":false,"italic":false,"color":"green","text":"无"}],"text":""}'
    - '{"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gold","text":">>"},{"italic":false,"color":"dark_red","text":">>"},{"italic":false,"color":"dark_purple","text":">>
      "},{"bold":true,"italic":false,"color":"white","text":"点击获取 "},{"bold":false,"italic":false,"color":"gold","text":"<<"},{"italic":false,"color":"dark_red","text":"<<"},{"italic":false,"color":"dark_purple","text":"<<"}],"text":""}'
    enchants:
      LURE: 0
      DURABILITY: 31
    ItemFlags:
    - HIDE_ENCHANTS
```

利用`/sc saveitem`指令保存物品后，你只需要修改保存文件的名称，并在items.yml中引用即可，Mod物品同理

具体详见[引用保存物品](./Saved-Items)