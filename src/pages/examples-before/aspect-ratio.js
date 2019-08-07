import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "corgi.jpg" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio # returns the images aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Img
        fluid={{
          ...data.file.childImageSharp.fluid,
          aspectRatio: 1, // override the original returned aspectRatio
        }}
      />
    </Layout>
  )
}
