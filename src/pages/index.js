import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "home" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
      <main>
        <h1> Welcome to our Family Cook Book </h1>
        <p> inside you'll find recipes from our older generation as well as our new generation of cooks. </p>
      </main>
  </Layout>
)

export default IndexPage
