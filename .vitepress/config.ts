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
      { text: "API Docs", link: "https://forumspark.net/api" },
    ],

    sidebar: [
      {
        text: "User Guide",
        collapsed: true,
        items: [
          { text: "Topics & Posts", link: "/userguide/posting" },
        ],
      },
      {
        text: "Admin",
        collapsed: true,
        items: [
          { text: "Admin Overview", link: "/administration/login" },
          { text: "Board Settings", link: "/administration/settings" },
          { text: "Social Login", link: "/administration/social-login" },
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
      {
        text: "Developers",
        link: "api/",
        collapsed: true,
        items: [
          { text: "Admin API", link: "/api/" },
          { text: "Webhooks", link: "/api/webhooks" },
          { text: "Javascript API", link: "/api/js" },
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
