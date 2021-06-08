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
                    "60bed84c1c6e57a6df2b609d",
                  title: "Sanity Studio",
                  name: "flavor-chef-studio",
                  apiId: "60de8716-c21a-46a6-988a-11f5de17a56c",
                },
                {
                  buildHookId: "60bed84cd226c78aa51875d8",
                  title: "Blog Website",
                  name: "flavor-chef",
                  apiId: "124a6bac-58b5-4f47-98b2-0a66c0799f5e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/hamletavetisian/flavor-chef",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://flavor-chef.netlify.app",
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
