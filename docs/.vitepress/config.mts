import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "RMerchant Docs",
  description: "RMerchant information",
  themeConfig: {
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Plugin Commands', link: '/commands' },
          { text: 'Plugin Permissions', link: '/permissions' },
          { text: 'Recipe Configuration', link: '/recipes' },
          { text: 'Configuration', link: '/configuration' }
        ]
      },
      {
        text: 'Integrations',
        items: [
          { text: 'Regions', link: '/integrations/regions' },
          { text: 'Packet', link: '/integrations/packet' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/bhUHanxEem' }
    ]
  }
})
