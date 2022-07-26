# 医药科技（自定义医疗用品）
医药科技可以让你自定义粘液药品，药品可以给予你相应的药水效果  
当然药品也有可能过期，且不能过量食用  
下面将介绍配置中的各个功能  

```yaml 
drugsFile: "drugs.yml"

fileType: "YAML"

multiFile: false

overdose:
  expire: 120 
  effects:
    nausa: # ID
      type: "CONFUSION" 
      duration: 30 
      amplifier: 1 
      required: 5 
    weak:
      type: "WEAKNESS"
      duration: 30
      amplifier: 1
      required: 10
```   

| 内容 | 描述 |
| --- | ----------- |
| drugsFile | 文件储存形式(.yml或.json)，慎改 |
| fileType | 储存文件后缀种类(YAML或JSON)，慎改 |
| multiFile | 如果启用，“drugsFile”将被视为一个目录，其中每种药物对应一个文件 |
| overdose | 药剂设置（服用过多药剂所获得的效果和药物过期设置） |
| overdose.#.expire | 药剂过期时间 |
| overdose.#.effects | 服用过多药剂所获得的效果 |
| overdose.#.effects.#.nausa | 药水效果ID，若要添加新效果，你需要更改此ID |
| overdose.#.effects.#.nausa.#.type | 药水效果ID |
| overdose.#.effects.#.nausa.#.duration | 持续时间 |
| overdose.#.effects.#.nausa.#.amplifier | 药水效果等级 |
| overdose.#.effects.#.nausa.#.required | 服用药剂的量（如果药剂计数器处于该阶段或更高阶段，则应用该效果） |
  
```yaml 
ocaine:
  name: "Cocaine"
  material: "SUGAR"
  lore:
    - ""
  recipe:
    type: "ENHANCED_CRAFTING_TABLE"
    output: 1
    ingredients:
      - "SUGAR:1"
  trigger:
    amount: 2
    effects:
      - "SPEED:30:1"
  research:
    id: "cocaine_research"
    legacyId: 666
    name: "Fast af boi"
    cost: 10
```   

| 内容 | 描述 |
| --- | ----------- |
| ocaine | 药剂ID,若要添加新药剂,需更改此ID |
| name | 药剂名称 |
| material | 药剂图标 |
| lore | 药剂描述 |
| recipe | 药剂配方 |
| recipe.#.type | 在何处制作该物品 |
| recipe.#.output |  一次性可制作多少该物品 |
| recipe.#.ingredients | 合成配方（格式: *材料:数量* 若材料以标签(#)开头，则该材料将被视为slimefun物品id） |
| trigger | 触发因素 |
| trigger.#.amount |  使用药物时，这是添加到计数器中的量（服用药物数量） |
| trigger.#.effects | 服用药剂后给予的药水效果,格式: *药水效果ID:持续时间:药效等级* |
| research | 粘液科技研究设置 |
| research.#.id | 粘液科技研究id,若要添加新药剂,需更改此ID |
| research.#.legacyId | 旧版研究ID,若要添加新药剂,需更改此ID |
| research.#.name | 玩家解锁该研究时所显示的文本 |
| research.#.cost | 玩家解锁该研究时所耗费的经验等级 |

注意: *.json文件同理，但是recipe.#.name必须为英文*
