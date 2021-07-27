module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-magento2",
      options: {
          graphqlEndpoint: "http://gopaktest.magento.com/graphql",
          
          // real-time catalog updates (optional)
          // pubsubEndpoint: 'https://pubsub.mobelop.com/graphql',
          // pubsubApiKey: '****', // contact info@mobelop.com to get one for free
          // watch: true,
          
          // this is optional
          // queries: {
          //     // see example query in src/nodes/queries/products.js
          //     allProductsQuery: `... custom GraphQL query for fetching all the products you need to publish on Gatsby website ...`,
          //     // see example query in src/nodes/queries/categories.js
          //     categoryQuery: `... custom GraphQL query for fetching all the categories & product ids ...`
          // }
      }
    },
    `gatsby-plugin-sass`
  ],
}