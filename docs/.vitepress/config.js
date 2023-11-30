import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/vitepress/",
  title: "在线文档库",
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/Leadgq/tree-lib" },
    ],
    nav: [
      {
        text: "树方法",
        link: "/guide/tree/tree",
        activeMatch: "/guide/tree/tree",
      },
      { text: "基础方法", link: "/guide/base/base" },
    ],
    search: {
      provider: "local",
    },
    footer: {
      message: "配套方法记录",
      copyright: "方法更新文档也会更新",
    },
  },
});
