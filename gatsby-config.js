// Gatsby built-in .env support
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: "/family-recipes",
  siteMetadata: {
    title: `Food and Drinks with Gatsby`,
    description: `Full stack with Gatsby, Node, and MongoDB.`,
    author: `Rodney Coyer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    { // connect mongoDB atlas
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `cloud`,
        collection: [`recipes`, `drinks`], // add multiple collections
        connectionString: `${process.env.GATSBY_MONGO_ATLAS}`,
        extraParams: {
          replicaSet: `Sandbox-shard-0`,
          ssl: true,
          authSource: `admin`,
          retryWrites: `true`
        },
      }
    },
    { // recipe pages from mdx
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recipes`,
        path: `${__dirname}/recipes`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Haubbay - Collection of Family Recipes`,
        short_name: `family-recipes`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`
      },
    },
  ],
}
