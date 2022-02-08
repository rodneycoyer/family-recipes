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
            <h1> Welcome to our Family Cook Book </h1>
            <p> inside you'll find recipes from our older generation as well as our new generation of cooks. </p>
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
