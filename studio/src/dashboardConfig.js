export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60af8d57ae557b00ba2cc117",
                  title: "Sanity Studio",
                  name: "didi-hands-on-jamstack-studio",
                  apiId: "d08d122f-a442-4451-8553-c32a8c5b8eb6",
                },
                {
                  buildHookId: "60af8d574906a700c01ee362",
                  title: "Blog Website",
                  name: "didi-hands-on-jamstack",
                  apiId: "06bac631-3d91-4ef7-8b35-954b28294bdf",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/didldot/didi-hands-on-Jamstack",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://didi-hands-on-jamstack.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
