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
          // graphqlEndpoint: "http://gopaktest.magento.com/graphql",
          graphqlEndpoint: "http://gopakstage.butterfly.london/graphql",
          
          // real-time catalog updates (optional)
          // pubsubEndpoint: 'https://pubsub.mobelop.com/graphql',
          // pubsubApiKey: '****', // contact info@mobelop.com to get one for free
          // watch: true,
          
          // this is optional
          queries: {
            //     // see example query in src/nodes/queries/products.js
            //     allProductsQuery: `... custom GraphQL query for fetching all the products you need to publish on Gatsby website ...`,
            //     // see example query in src/nodes/queries/categories.js
          allProductsQuery: `query {
            products (
              filter:{}
              pageSize: 25000
              currentPage: 1
            ) {
              
              items {
                id
                sku
                name
                type_id
                meta_title
                meta_keyword
                meta_description
                options_container
                image {
                  disabled
                  label
                  position
                  url
                }
                small_image {
                  disabled
                  label
                  position
                  url
                }
                url_key
          
                ... on CustomizableProductInterface {
                  options {
                    title
                    required
                    sort_order
                    uid
                  }
                }
                ... on VirtualProduct {
                  options_container
                  
                }
                categories {
                  uid
                  name
                  url_path
                }
              }
            }
          }`,
        }    
      }
    },
    `gatsby-plugin-sass`
  ],
}