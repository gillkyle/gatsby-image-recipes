import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allSitePage: { nodes: pages },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    {pages.map((page, index) => {
      if (index < 5) return
      return (
        <>
          <Link to={page.path}>{page.path}</Link>
          <br />
        </>
      )
    })}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    allSitePage {
      nodes {
        path
      }
    }
  }
`
