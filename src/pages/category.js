import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Category = () => (
  <Layout>
    <h1>Category Page</h1>
    <p>Welcome to page category</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Category
