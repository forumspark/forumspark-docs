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
      { text: "Introduction", link: "/" },
      {
        text: "Admin Guide",
        collapsed: false,
        items: [
          { text: "Overview", link: "/administration/overview" },
          {
            text: "Board Configuration",
            collapsed: true,
            items: [
              { text: "Settings", link: "/administration/config/settings" },
              { text: "Emoticons", link: "/administration/config/emoticons" },
              { text: "Word Filters", link: "/administration/config/word-filters" },
              { text: "Reactions", link: "/administration/config/reactions" },
              { text: "Shoutbox", link: "/administration/config/shoutbox" },
              { text: "Topic Labels", link: "/administration/config/topic-labels" },
              { text: "Topic Templates", link: "/administration/config/topic-templates" },
            ],
          },
          {
            text: "Sections & Structure",
            collapsed: true,
            items: [
              { text: "Section Management", link: "/administration/structure/section-management" },
            ],
          },
          {
            text: "User Management",
            collapsed: true,
            items: [
              { text: "User Approvals", link: "/administration/users/user-approvals" },
              // { text: "Editing Users", link: "/administration/users/editing-users" },
              // { text: "User Roles & Permissions", link: "/administration/users/user-roles" },
              // { text: "Banning & Moderation", link: "/administration/users/banning" },
            ],
          },
          { text: "Social Login", link: "/administration/social-login" },
        ],
      },
      {
        text: "User Guide",
        collapsed: true,
        items: [
          { text: "Topics & Posts", link: "/userguide/posting" },
          // { text: "Notifications & Subscriptions", link: "/userguide/notifications" },
          // { text: "Formatting & BBCode", link: "/userguide/formatting" },
        ],
      },
      {
        text: "Theme Guide",
        link: "/theme/",
        collapsed: true,
        items: [
          { text: "Intro", link: "/theme/" },
          // { text: "Customising Themes", link: "/theme/customising" },
          // { text: "CSS Overrides", link: "/theme/css-overrides" },
          // { text: "Theme Directory & Sharing", link: "/theme/directory" },
          { text: "Board Templates", link: "/theme/board-template" },
        ],
      },
      {
        text: "Developers",
        link: "/api/",
        collapsed: true,
        items: [
          { text: "Admin API", link: "/api/" },
          { text: "Webhooks", link: "/api/webhooks" },
          { text: "Javascript API", link: "/api/js" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/forumspark" },
    ],
  },
  vite: {
    server: {
      port: 5175,
    },
  },
});
