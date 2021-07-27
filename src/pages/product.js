import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Product = () => (
  <Layout>
    <h1>Product Page</h1>
    <p>Welcome to page product</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Product
