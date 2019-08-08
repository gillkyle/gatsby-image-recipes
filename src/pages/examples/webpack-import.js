import React from "react"
import Dog from "../../images/corgi.jpg"

import Layout from "../../components/layout"

export default () => {
  return (
    <Layout>
      <img src={Dog} alt="A corgi smiling happily" />
    </Layout>
  )
}
