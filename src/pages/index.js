import React from "react"
import { Row, Col, Container, Button } from "react-bootstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "home" }}>
    <Seo title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
      <Container>
        <Row>
          <Col>
            <h1>Recipes built with Gatsby </h1>
          <p> simple project built using Gatsby, GraphQL, plugins, Node, and MongoDB </p>
          <p>Index pages and feature pages are created programmatically from data queried
            from local mdx files and a MongoDB atlas database. This was done with Gatsby's API</p>
            <Button href="/recipes"> Recipes Page </Button> {' '}
            <Button
              href="mailto:rodney.coyer@gmail.com"
              variant="success"
            >
              Submit a Recipe
            </Button>
          </Col>
        </Row>
      </Container>
  </Layout>
)

export default IndexPage
