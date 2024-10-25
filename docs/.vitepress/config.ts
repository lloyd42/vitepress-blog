import { defineConfig } from "vitepress";
import { RSSOptions, RssPlugin } from "vitepress-plugin-rss";
import {
  // groupIconMdPlugin,
  groupIconVitePlugin,
  // localIconLoader,
} from "vitepress-plugin-group-icons";

const baseUrl = "https://lloyd42.github.io";

const RSS: RSSOptions = {
  // necessary（必选参数）
  title: "二进制模拟",
  baseUrl,
  copyright: "Copyright © 2024 lloyd42. All rights reserved.",

  // optional（可选参数）
  description: "用代码记录世界",
  language: "zh-cn",
  author: {
    name: "lloyd42",
    email: "lloyd42@foxmail.com",
    link: "https://www.github.com/lloyd42",
  },
  icon: true,
  // authors: [
  //   {
  //     name: "粥里有勺糖",
  //     email: "engineerzjl@foxmail.com",
  //     link: "https://sugarat.top",
  //   },
  //   {
  //     name: "sugar",
  //     email: "",
  //     link: "https://github.com/atqq",
  //   },
  // ],
  filename: "feed.xml",
  log: true,
  ignoreHome: true,
  ignorePublish: false,
  // filter: (post, idx) => {
  //   return true;
  // },
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      RssPlugin(RSS),
      groupIconVitePlugin({
        customIcon: {
          // ts: localIconLoader(import.meta.url, "../public/svg/typescript.svg"), //本地ts图标导入
          js: "logos:javascript", //js图标
          md: "logos:markdown", //markdown图标
          css: "logos:css-3", //css图标
        },
      }),
    ],
  },

  title: "二进制模拟",
  description: "用代码记录世界",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  base: "/",

  lastUpdated: true,

  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
    // config: (md) => {
    //   // 使用更多的 Markdown-it 插件！
    //   md.use(xxx);
    // },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",

    i18nRouting: false,

    nav: [
      { text: "首页", link: "/" },
      { text: "笔记", link: "/markdown-badge" },
    ],

    sidebar: [
      {
        text: "笔记",
        items: [
          { text: "Markdown Badge 使用入门", link: "/markdown-badge" },
          { text: "Deno 2 尝鲜", link: "/exploring-deno-2" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://www.github.com/lloyd42" }],

    outline: {
      level: "deep",
      label: "目录",
    },

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    footer: {
      message: "转载请注明本站原文地址",
      copyright: "Copyright © 2024 lloyd42. All rights reserved.",
    },

    search: {
      provider: "local",
    },
  },
});
