import React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import get from 'lodash/get'
import Layout from "../components/layout"
import Seo from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const productsList = get(this.props, 'data.allMagentoProduct')
    return (
      <Layout>
        <Seo title="Home" />
        <ul class="products-list">
          {productsList.edges.map((product) => (
            <li key={product.node.id}>
              <Link to={`/${product.node.url_key}/`}>
                <img src={product.node.image.url} alt="Test" />
                <h3>{product.node.name}</h3>
                <span>{product.node.price.regularPrice.amount.currency}{product.node.price.regularPrice.amount.value}</span>
              </Link>
            </li>  
          ))}
        </ul>
        {/* <p>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </p> */}
      </Layout>
    )
  }
}
export default IndexPage

export const productsQuery = graphql`
  query Products {
    allMagentoProduct {
      edges {
        node {
          url_key
          name
          price {
            regularPrice {
              amount {
                currency
                value
              }
            }
          }
          id
          short_description {
            html
          }
          image {
            url
          }
        }
      }
    }
  }
`
