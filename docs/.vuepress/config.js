module.exports = {
  title: "MAD9034",
  description: "User Experience Design",
  base: "/f2023/", //used as the root location of the site (repo name)
  // then we can <img :src="$withBase('/foo.png')" alt="foo">
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "path/to/some/dir",
        "@root": "/f2023",
        //![Image from alias](~@alias/image.png)
        // ![Image alt text](~@root/modules/week3/myimg.jpg)
        // images inside /docs/.vuepress/public will be copied to repo root
      },
    },
  },
  themeConfig: {
    lastUpdated: "Last Updated",
    nextLinks: true,
    prevLinks: true,
    serviceWorker: {
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh",
      },
    },
    nav: [
      {
        text: "Overview",
        link: "/overview/",
      },
      {
        text: "Deliverables",
        link: "/deliverables/",
      },
      {
        text: "Modules",
        link: "/modules/week1/",
      },
    ],
    sidebar: [
      {
        title: "Content Modules",
        collapsable: true,
        sidebarDepth: 2,
        children: [
          "/modules/week1/",
          "/modules/week2/",
          "/modules/week3/",
          "/modules/week4/",
          "/modules/week5/",
          "/modules/week6/",
          "/modules/week7/",
          "/modules/week8/",
          "/modules/week0/",
        ],
      },
      {
        title: "Deliverables",
        collapsable: true,
        sidebarDepth: 3,
        children: ["/assignments/"],
      },
    ],
  },
};
