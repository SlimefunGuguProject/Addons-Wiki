# 自定义盔甲/武器

本章节主要讲解武器，盔甲同理

**警告**： 请先将服务器中的简易工具（SimpleUtils）附属删除！！！

```yaml
item:
  ==: org.bukkit.inventory.ItemStack
  v: 2975
  type: NETHERITE_SWORD
  meta:
    ==: ItemMeta
    meta-type: UNSPECIFIC
    display-name: '{"extra":[{"bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"#FDA8","text":"示例武器"}],"text":""}'
    lore:
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":"伤害
      III"}],"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":"生命偷取
      II"}],"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":"过量治疗"}],"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":"神圣重击
      II"}],"text":""}'
    - '{"extra":[{"bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"#E0F2","text":"神秘的力量"}],"text":""}'
    enchants:
      DAMAGE_ARTHROPODS: 180
      FIRE_ASPECT: 180
      LOOT_BONUS_MOBS: 180
      DAMAGE_ALL: 180
      DAMAGE_UNDEAD: 180
      SWEEPING_EDGE: 180
    attribute-modifiers:
      GENERIC_ATTACK_DAMAGE:
      - ==: org.bukkit.attribute.AttributeModifier
        amount: 180.0
        name: GENERIC_ATTACK_DAMAGE
        slot: HAND
        uuid: f3dfcc8c-902f-4e14-b287-060fa197652e
        operation: 0
      GENERIC_ATTACK_SPEED:
      - ==: org.bukkit.attribute.AttributeModifier
        amount: 18.0
        name: GENERIC_ATTACK_SPEED
        slot: HAND
        uuid: dc004afe-8025-44c3-853b-2bcc8cfcdf3c
        operation: 0
      GENERIC_MAX_HEALTH:
      - ==: org.bukkit.attribute.AttributeModifier
        amount: 1.8
        name: GENERIC_MAX_HEALTH
        slot: HAND
        uuid: 1f407cd1-1a0f-42c4-a2e9-21fd9775b36d
        operation: 1
    PublicBukkitValues:
      slimefun:slimefun_item: ELUCIDATOR
```

该武器是以神秘附属里的武器为蓝本套用的  
物品类型/名称/描述上章已讲，本章不重复讲  
`enchants`为该物品的附魔，后面跟的是等级  
`attribute-modifiers`为该物品的属性  
有关属性名称等内容，详见[Attribute](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/package-summary.html)  
`slimefun:slimefun_item`后的ID可以套用其它附属中有技能属性的盔甲/武器
