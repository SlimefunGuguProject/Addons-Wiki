import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: '粘液科技附属中文 Wiki',
  tagline: '非官方中文 Wiki',
  favicon: 'images/favicon.ico',

  url: 'https://slimefun-addons-wiki.guizhanss.cn/',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
    },
  ],

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/SlimefunGuguProject/Addons-Wiki/tree/master/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '粘液附属中文 Wiki',
      logo: {
        alt: 'Wiki Logo',
        src: 'images/logo.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'rootSidebar',
          position: 'left',
          label: 'Wiki 列表',
        },
        {
          href: 'https://builds.guizhanss.com/',
          position: 'left',
          label: '附属下载',
        },
        {
          href: 'https://hsd.hikari.bond/',
          position: 'left',
          label: '粘液物品数据库',
        },
        {
          href: 'https://github.com/SlimefunGuguProject/Addons-Wiki',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '粘液科技官方版',
          items: [
            {
              label: 'GitHub 仓库',
              href: 'https://github.com/Slimefun/Slimefun4',
            },
          ],
        },
        {
          title: '粘液科技汉化版',
          items: [
            {
              label: 'GitHub 仓库',
              href: 'https://github.com/StarWishsama/Slimefun4',
            },
            {
              label: 'QQ 群 807302496',
              href: 'https://qm.qq.com/q/e1ow0EiP5K',
            },

          ],
        },
        {
          title: '粘液科技汉化版附属',
          items: [
            {
              label: '汉化组 GitHub',
              href: 'https://github.com/SlimefunGuguProject',
            },
            {
              label: 'QQ 群 205679802',
              href: 'https://qm.qq.com/q/30BNjvNCMM',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ybw0014. 本站内容以 CC BY-NC-SA 4.0 协议发布`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    zoom: {
      selector: '.image-gallery .image img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    },
    algolia: {
      appId: 'ATI3VKTB81',
      apiKey: 'abe82c0148dfc17e87c2d18ba5061e7f',
      indexName: 'slimefun-addons-guizhanss',
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    'docusaurus-plugin-sass',
    'docusaurus-plugin-image-zoom',
    [
      '@gracefullight/docusaurus-plugin-cloudflare-analytics',
      { token: 'be17739788d94d68a5d1b74a8f56de6a' },
    ],
  ],
};

export default config;
