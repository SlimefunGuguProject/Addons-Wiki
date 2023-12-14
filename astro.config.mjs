import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import remarkHeadingId from 'remark-heading-id'
import rehypeExternalLinks from 'rehype-external-links'

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: '粘液科技附属 中文Wiki',
    description: '本站包含了粘液科技各大附属的中文Wiki。',
    logo: {
      src: './src/assets/favicon.png'
    },
    favicon: '/favicon.png',
    customCss: [
      '@fontsource/noto-sans',
      '@fontsource/noto-sans-sc',
      './src/styles/docs.css'
    ],
    social: {
      github: 'https://github.com/SlimefunGuguProject/Addons-Wiki'
    },
    defaultLocale: 'root',
    locales: {
      root: {
        label: '简体中文',
        lang: 'zh-CN'
      }
    },
    head: [
      // uncomment the following to enable cloudflare analytics
      // {
      //   tag: 'script',
      //   attrs: {
      //     src: 'https://static.cloudflareinsights.com/beacon.min.js',
      //     'data-cf-beacon': '{"token": ""}',
      //     defer: true
      //   }
      // }
    ],
    sidebar: [
      {
        label: '首页',
        link: '/'
      },
      {
        label: '附属教程',
        link: '/tutorial'
      },
      {
        label: '附属下载',
        link: '/download'
      },
      {
        label: '附属列表',
        autogenerate: { directory: '/addon' }
      }
    ]
  }), tailwind({
    applyBaseStyles: false
  })],
  markdown: {
    remarkPlugins: [
      remarkHeadingId
    ],
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ]
  }
})
