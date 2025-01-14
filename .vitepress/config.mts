import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nanako",
  description: "立志做最可爱的 RoboMaster 开源框架",
  base: "/Nanako-docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '开发计划', link: '/dev-plan' }
    ],

    sidebar: [
      {
        text: '开发计划',
        items: [
          { text: '开发计划', link: '/dev-plan' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
