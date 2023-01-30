# 主要配置 (config.yml)

`/plugins/Bump/config.yml` 为 Bump 的主要配置文件。

## 内容

`config.yml`的内容如下：

```yaml
version: 4

options:
  auto-update: true
  lang: en-US
  enable-researches: true

weapons:
  projectile-duration: 10

appraise:
  stars:
    100: 20
    98: 10
    96: 9
    92: 8
    88: 7
    82: 6
    74: 5
    64: 4
    48: 3
    30: 2
    10: 1
```

| 配置项 | 说明 | 有效值 |
| ----- | --- | ----- |
| `version` | 配置文件的版本，**不要改动！** |
| `options.auto-update` | 是否启用自动更新，默认开启。 |
| `options.lang` | Bump所使用的语言，默认为英文。 | 简体中文改为`zh-CN`，其他语言详见[支持的语言](https://github.com/SlimefunGuguProject/Bump#supported-languages) |
| `options.enable-researches` | 是否开启研究，默认开启。 |
| `weapons.projectile-duration` | Bump武器发射的弹射物持续时间，单位为粘液刻，默认为10。 | 0 ~ 60 |
| `appraise.stars` | 鉴定总分与星级的关系，详见[鉴定系统说明 - 星级评分](./Appraisal-Instrument)。 |
