import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  rootSidebar: [
    {
      type: 'doc',
      id: 'list',
      label: 'Wiki 列表'
    },
    {
      type: 'doc',
      id: 'download',
      label: '下载与安装'
    },
  ],
  // auto generated sidebars
  'crystamae-historia': [{ type: 'autogenerated', dirName: 'crystamae-historia' }],
  'infinity-expansion': [{ type: 'autogenerated', dirName: 'infinity-expansion' }],
  'networks': [{ type: 'autogenerated', dirName: 'networks' }],
  'slime-customizer': [{ type: 'autogenerated', dirName: 'slime-customizer' }],
};

export default sidebars;
