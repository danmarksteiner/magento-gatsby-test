import * as React from "react"
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
// import { Helmet } from 'react-helmet'

import Layout from "../components/layout"

import "./product.scss"

class Product extends React.Component {
  render() {
    const product = get(this.props, 'data.magentoProduct')
    const productVariationsData = get(this.props, 'data.allMagentoProduct')
    return (
      <Layout>
        {product.image &&
          <img src={product.image.url} alt={product.image.name} />
        }
        <h1>{product.name}</h1>
        <div className="product-reviews"><p>(Input Reevoo here) Read Reviews</p></div>
        <div className="product-low-price"><p>As low as: £70.06 Excl. VAT</p></div>
        <div className="product-options">
          <div className="product-option">
            <h4>Size</h4>
            <select>
              <option>Choose an Option...</option>
              <option value="5466" option-id="5466">1830x760mm 6ft x 2ft 6”</option>
              <option value="5467" option-id="5467">1830x685mm 6ft x 2ft 3”</option>
              <option value="5468" option-id="5468">1830x610mm 6ft x 2ft</option>
              <option value="5469" option-id="5469">1830x480mm 6ft x 19”</option>
              <option value="5470" option-id="5470">1520x760mm 5ft x 2ft 6”</option>
              <option value="5471" option-id="5471">1520x685mm 5ft x 2ft 3”</option>
              <option value="5472" option-id="5472">1520x610mm 5ft x 2ft</option>
              <option value="5473" option-id="5473">1220x760mm 4ft x 2ft 6”</option>
              <option value="5474" option-id="5474">1220x685mm 4ft x 2ft 3”</option>
              <option value="5475" option-id="5475">1220x610mm 4ft x 2ft</option>
              <option value="5476" option-id="5476">915x760mm 3ft x 2ft 6”</option>
              <option value="5477" option-id="5477">915x685mm 3ft x 2ft 3”</option>
              <option value="5478" option-id="5478">915x610mm 3ft x 2ft</option>
            </select>
          </div>
          <div className="product-option">
            <h4>Height</h4>
            <select>
              <option value="0" option-id="0">Choose an Option...</option>
              <option value="5433" option-id="5433">760mm 30” BUFFET/ADULT</option>
              <option value="5434" option-id="5434">700mm 27.5” ADULT</option>
              <option value="5435" option-id="5435">635mm 25” JUNIOR</option>
              <option value="5436" option-id="5436">584mm 23” INFANT</option>
              <option value="5437" option-id="5437">546mm 21.5” PRE-SCHOOL</option>
              <option value="5438" option-id="5438">508mm 20” NURSERY</option>
            </select>
          </div>
          <div className="product-option">
            <h4>Colour</h4>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        {console.log(productVariationsData)}
        <p>Welcome to page product</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default Product

export const productQuery = graphql`
  query ProductBySlug($url_key: String!, $name: String!) {
    magentoProduct(url_key: { eq: $url_key }) {
      name
      image {
        url
        name
      }
    }
    allMagentoProduct(filter: {type_id: {eq: "simple"}, name: {ne: $name}}) {
      nodes {
        type_id
        name
      }
    }
    allMagentoCategory {
      edges {
        node {
          name
          id
          url_key
          url_path
          level
        }
      }
    }
  }
`