import React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import get from 'lodash/get'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Feefo from "../components/feefo"

class IndexPage extends React.Component {
  render() {
    const productsList = get(this.props, 'data.allMagentoProduct')
    return (
      <Layout>
        <Seo title="Home" />
        <Feefo />
        <ul className="products-list">
          {productsList.edges.map((product) => (
            <li key={product.node.id}>
              <Link to={`/${product.node.url_key}/`}>
                {/* <img src={product.node.image.url} alt="Test" /> */}
                <h3>{product.node.name}</h3>
                {/* <span>{product.node.price.regularPrice.amount.currency}{product.node.price.regularPrice.amount.value}</span> */}
              </Link>
            </li>  
          ))}
        </ul>
      </Layout>
    )
  }
}
export default IndexPage

export const productsQuery = graphql`
  query Products {
    allMagentoProduct(filter: {type_id: {eq: "simple"}}) {
      edges {
        node {
          url_key
          name
          id
          image {
            url
          }
        }
      }
    }
  }
`
