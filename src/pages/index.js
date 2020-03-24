import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MdEditor from "../components/mdEditor"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MdEditor />
  </Layout>
)

export default IndexPage
