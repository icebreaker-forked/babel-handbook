import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'plugin-handbook', link: '/translations/zh-Hans/plugin-handbook.md' },
      { text: 'user-handbook', link: '/translations/zh-Hans/user-handbook.md' }
    ],

    sidebar: [

    ],
    // https://github.com/vuejs/vitepress/issues/2762
    // https://github.com/vuejs/vitepress/discussions/480#discussioncomment-2225141
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
