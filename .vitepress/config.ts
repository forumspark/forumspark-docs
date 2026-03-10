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
              { text: "Achievements", link: "/administration/config/achievements" },
              { text: "Bulletins", link: "/administration/config/bulletins" },
              { text: "AutoMod", link: "/administration/config/automod" },
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
            text: "Content",
            collapsed: true,
            items: [
              { text: "Custom Pages", link: "/administration/content/pages" },
              { text: "Help Pages", link: "/administration/content/help-pages" },
              { text: "Board Menu", link: "/administration/content/board-menu" },
            ],
          },
          {
            text: "User Management",
            collapsed: true,
            items: [
              { text: "User Approvals", link: "/administration/users/user-approvals" },
              { text: "Groups & Permissions", link: "/administration/users/groups" },
              { text: "Custom Profile Fields", link: "/administration/users/custom-fields" },
              { text: "Name Changes", link: "/administration/users/name-changes" },
              { text: "Banning", link: "/administration/users/banning" },
              { text: "Social Login", link: "/administration/users/social-login" },
            ],
          },
          {
            text: "Moderation",
            collapsed: true,
            items: [
              { text: "Moderation Guide", link: "/administration/moderation/moderation" },
            ],
          },
          {
            text: "ForumSpark",
            collapsed: true,
            items: [
              { text: "Custom Domains", link: "/administration/forumspark/custom-domains" },
              { text: "Directory Listing", link: "/administration/forumspark/directory-listing" },
            ],
          },
          {
            text: "Advanced",
            collapsed: true,
            items: [
              { text: "Security Logs", link: "/administration/advanced/security-logs" },
            ],
          },
        ],
      },
      {
        text: "User Guide",
        collapsed: true,
        items: [
          { text: "Topics & Posts", link: "/userguide/posting" },
          { text: "Polls", link: "/userguide/polls" },
          { text: "Private Messages", link: "/userguide/private-messages" },
          { text: "Notifications", link: "/userguide/notifications" },
          { text: "Your Profile", link: "/userguide/profile" },
          { text: "Search", link: "/userguide/search" },
          { text: "Formatting & BBCode", link: "/userguide/formatting" },
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
