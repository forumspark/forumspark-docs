import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ForumSpark Docs",
  description: "Documentation for the ForumSpark network",
  lastUpdated: true,
  themeConfig: {
    logo: "/forumspark.svg",
    siteTitle: false,

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Forum Spark", link: "https://forumspark.net" },
      { text: "Support Forum", link: "https://support.forumspark.net" },
    ],

    sidebar: [
      {
        text: "Admin",
        collapsed: true,
        items: [
          { text: "Admin Overview", link: "/administration/login" },
          { text: "Board Settings", link: "/administration/settings" },
        ],
      },
      {
        text: "Theme Guide",
        link: "theme/",
        collapsed: true,
        items: [
          { text: "Intro", link: "/theme/" },
          { text: "Board Templates", link: "/theme/board-template" },
        ],
      },
    ],

    socialLinks: [
      // { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  vite: {
    server: {
      port: 5175,
    },
  },
});
