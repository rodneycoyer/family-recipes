module.exports = {
  pathPrefix: "/family-recipes",
  siteMetadata: {
    title: `Haubbay - ហូបបាយ`,
    description: `a collection of family recipes.`,
    author: `Rodney Coyer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `cloud`,
        collection: `recipes`,
        connectionString: `mongodb+srv://role_user:hwveClr35sQr6R7j@sandbox.vl2sq.mongodb.net/`,
        extraParams: {
          ssl: true,
          authSource: `admin`,
          retryWrites: `true`
        },
      }
    },
    {
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
