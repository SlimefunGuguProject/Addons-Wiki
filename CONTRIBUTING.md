# 粘液附属中文 Wiki 编写规范

我们欢迎任何补充 Wiki 内容的 PR，但在进行编辑前，我们建议你阅读这篇编写规范。

本 Wiki 使用 [Docusaurus 3](https://docusaurus.io/) 构建，文档内容全部使用 Markdown 编写（部分 MDX）。

## 文件夹名称规范

我们所有的页面保存在 `/docs/` 文件夹中，在该文件夹中有多个文件夹分别以不同的附属名称命名。  
所有的图片都保存在 `/images/` 文件夹中。

文件夹名称应为附属名称的小写，单词之间使用`-`连接。例如：

- InfinityExpansion -> `infinity-expansion`
- FluffyMachines -> `fluffy-machines`
- Networks -> `networks`

## 文件名命名规范

每个附属的根目录下必须有 `index.md` 或 `index.mdx` 文件，用于显示附属的首页。

其他文件的命名规则如下：

- 文件名应以 `.md` 为后缀。如果使用到了 React 组件，则使用 `.mdx` 为后缀。
- 文件名每个单词的字母都应为小写，单词之间使用`-`连接。
- 文件名应有意义，且与文件内容相关。

例如：

- `faq.md`
- `barrels.md`
- `infinity-forge.md`

## 内容规范

附属 Wiki 的内容规范与 粘液科技中文 Wiki 的[内容规范](https://slimefun-wiki.guizhanss.cn/Expanding-the-Wiki?id=step-3-general-guidelines-dos-and-donts)基本一致。

你可以使用 Docusaurus 的 [Markdown 特性](https://docusaurus.io/zh-CN/docs/markdown-features)与组件来丰富文档的内容。
