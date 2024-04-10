const { graphql } = require("gatsby");

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    // ===================================================================================
    // Images and static
    // ===================================================================================

    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/c/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`,
      },
    },

    // ===================================================================================
    // Markdown
    // ===================================================================================

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-interactive-gifs`,
            options: {
              root: `${__dirname}`,
              src: `${__dirname}/src/gifs`,
              dest: `${__dirname}/public/static/gifs`,
              play: `${__dirname}/src/images/play.png`,
              placeholder: `${__dirname}/src/images/placeholder.gif`,
              loading: `${__dirname}/src/images/loading.gif`,
              relativePath: `/static/gifs`,
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 650,
            },
          },
        ],
      },
    },
  ],
};
