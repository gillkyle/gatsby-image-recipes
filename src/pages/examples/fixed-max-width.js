import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "corgi.jpg" }) {
        childImageSharp {
          fixed {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Img style={{ maxWidth: 250 }} fixed={data.file.childImageSharp.fixed} />
    </Layout>
  )
}
