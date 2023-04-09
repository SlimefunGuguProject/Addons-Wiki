# 辐射物品

本章将介绍如何套用辐射物品

首先，请勿修改任何关于辐射标识的lore，若您修改了有关辐射标识的lore，服务器将会报错

所以我建议先保存粘液科技中带有辐射的物品，然后在`saveditems`文件中修改物品的名称/描述/头颅材质等内容

关于带有各辐射等级的粘液物品，下文会进行列举

在此先放一个示例

```yaml
item:
  ==: org.bukkit.inventory.ItemStack
  v: 2865
  type: GOLD_INGOT
  meta:
    ==: ItemMeta
    meta-type: UNSPECIFIC
    display-name: '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gold","text":"§x§c§c§9§3§2§f辐§x§c§c§a§3§2§f射§x§c§c§b§3§2§f之§x§c§c§c§3§2§f锭"}],"text":""}'
    lore:
    - '{"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"green","text":"☢"},{"italic":false,"color":"gray","text":"
      辐射等级: "},{"italic":false,"color":"dark_green","text":"高"}],"text":""}'
    custom-model-data: 2200468
    PublicBukkitValues:
      slimefun:slimefun_item: BLISTERING_INGOT_3
```

上述示例是一个标准的自定义后带有辐射标识的物品，您无需修改lore里的任何内容

当然，上述示例物品套用的是粘液科技起泡锭的ID`BLISTERING_INGOT_3`

简单来说，想要自定义带辐射的物品，需先保存一个带辐射的粘液物品，然后在配置里进行修改

## 辐射等级

辐射分为:`低、中、高、极高、致死`

辐射等级为低时无需穿戴防化服，辐射等级为中、高、极高、致死需穿戴防化服，但是这几个辐射等级之间**没有任何区别**

即辐射等级为`中`时与辐射等级为`致死`时的效果是一样的，没有任何区别

在此例举粘液科技原版中带有各辐射等级标识的物品

### 低

一小撮铀

保存配置如下：

```yaml
item:
  ==: org.bukkit.inventory.ItemStack
  v: 3120
  type: PLAYER_HEAD
  meta:
    ==: ItemMeta
    meta-type: SKULL
    display-name: '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"red","text":"一小撮铀"}],"text":""}'
    lore:
    - '{"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"green","text":"☢"},{"italic":false,"color":"gray","text":"
      辐射等级: "},{"italic":false,"color":"yellow","text":"低"}],"text":""}'
    custom-model-data: 2200214
    PublicBukkitValues:
      slimefun:slimefun_item: TINY_URANIUM
    skull-owner:
      ==: PlayerProfile
      uniqueId: 1cb73513-3dbb-34ea-a5a5-47c9757ebac3
      name: CS-CoreLib
      properties:
      - name: textures
        value: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzhiMjlhZmE2ZDZkYzkyM2UyZTEzMjRiZjgxOTI3NTBmN2JkYmRkYzY4OTYzMmEyYjZjMThkOWZlN2E1ZSJ9fX0=
```

### 中

一小块铀

保存配置如下：

```yaml
item:
  ==: org.bukkit.inventory.ItemStack
  v: 3120
  type: PLAYER_HEAD
  meta:
    ==: ItemMeta
    meta-type: SKULL
    display-name: '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"red","text":"一小块铀"}],"text":""}'
    lore:
    - '{"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"green","text":"☢"},{"italic":false,"color":"gray","text":"
      辐射等级: "},{"italic":false,"color":"yellow","text":"中"}],"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"dark_gray","text":"⇨
      "},{"italic":false,"color":"dark_red","text":"需要防化服!"}],"text":""}'
    custom-model-data: 2200215
    PublicBukkitValues:
      slimefun:slimefun_item: SMALL_URANIUM
    skull-owner:
      ==: PlayerProfile
      uniqueId: 1cb73513-3dbb-34ea-a5a5-47c9757ebac3
      name: CS-CoreLib
      properties:
      - name: textures
        value: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzhiMjlhZmE2ZDZkYzkyM2UyZTEzMjRiZjgxOTI3NTBmN2JkYmRkYzY4OTYzMmEyYjZjMThkOWZlN2E1ZSJ9fX0=
```

### 高

铀、起泡锭等

保存配置如下：

```yaml
item:
  ==: org.bukkit.inventory.ItemStack
  v: 3120
  type: PLAYER_HEAD
  meta:
    ==: ItemMeta
    meta-type: SKULL
    display-name: '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"dark_red","text":"铀"}],"text":""}'
    lore:
    - '{"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"green","text":"☢"},{"italic":false,"color":"gray","text":"
      辐射等级: "},{"italic":false,"color":"dark_green","text":"高"}],"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"dark_gray","text":"⇨
      "},{"italic":false,"color":"dark_red","text":"需要防化服!"}],"text":""}'
    custom-model-data: 2200216
    PublicBukkitValues:
      slimefun:slimefun_item: URANIUM
    skull-owner:
      ==: PlayerProfile
      uniqueId: 1cb73513-3dbb-34ea-a5a5-47c9757ebac3
      name: CS-CoreLib
      properties:
      - name: textures
        value: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzhiMjlhZmE2ZDZkYzkyM2UyZTEzMjRiZjgxOTI3NTBmN2JkYmRkYzY4OTYzMmEyYjZjMThkOWZlN2E1ZSJ9fX0=
```

### 极高

钚、钚铀混合氧化物核燃料等

保存配置如下：

```yaml
item:
  ==: org.bukkit.inventory.ItemStack
  v: 3120
  type: PLAYER_HEAD
  meta:
    ==: ItemMeta
    meta-type: SKULL
    display-name: '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"dark_green","text":"钚铀混合氧化物核燃料"}],"text":""}'
    lore:
    - '{"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"green","text":"☢"},{"italic":false,"color":"gray","text":"
      辐射等级: "},{"italic":false,"color":"red","text":"极高"}],"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"dark_gray","text":"⇨
      "},{"italic":false,"color":"dark_red","text":"需要防化服!"}],"text":""}'
    custom-model-data: 2200507
    PublicBukkitValues:
      slimefun:slimefun_item: BOOSTED_URANIUM
    skull-owner:
      ==: PlayerProfile
      uniqueId: fe87447b-0b50-32fb-a0b9-359af29f38ef
      name: CS-CoreLib
      properties:
      - name: textures
        value: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjgzN2NhMTJmMjIyZjQ3ODcxOTZhMTdiOGFiNjU2OTg1Zjg0MDRjNTA3NjdhZGJjYjZlN2YxNDI1NGZlZSJ9fX0=
```

### 致死

粘液科技原版没有辐射等级为致死的物品

但是在至尊研究院2.0(Supreme)附属里有，如果您需要自定义该辐射等级的物品，请先确保您安装了至尊研究院2.0(Supreme)

保存配置如下：

```yaml
item:
  ==: org.bukkit.inventory.ItemStack
  v: 3120
  type: PLAYER_HEAD
  meta:
    ==: ItemMeta
    meta-type: SKULL
    display-name: '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":"智慧突变蜜蜂
      I"}],"text":""}'
    lore:
    - '{"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"green","text":"☢"},{"italic":false,"color":"gray","text":"
      辐射等级: "},{"italic":false,"color":"dark_red","text":"致死"}],"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":"减少"},{"italic":false,"color":"green","text":"20%"},{"italic":false,"color":"gray","text":"
      电力消耗"}],"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gray","text":"处理速度
      "},{"italic":false,"color":"yellow","text":"(2 * 物品组数 * 0.15625)"}],"text":""}'
    - '{"text":""}'
    - '{"extra":[{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"dark_aqua","text":"至尊组件"}],"text":""}'
    PublicBukkitValues:
      slimefun:slimefun_item: SUPREME_INTELLIGENCE_BEE_I
    skull-owner:
      ==: PlayerProfile
      uniqueId: a6701d1f-b558-36df-a24b-7c809e4ef30b
      name: CS-CoreLib
      properties:
      - name: textures
        value: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTQ0NWMzZGVmNjg5NDI3ZmQ4ZGY4Y2FkODI0YzBhNmI1NTNkNGY4NDdlYjAzNzA1MTk2YTY5YzdlZWQ5NDZhZiJ9fX0=
```