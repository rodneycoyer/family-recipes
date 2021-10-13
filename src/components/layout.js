import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col, Jumbotron } from "react-bootstrap"

import Navbar from "./navBar"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main">
          <Navbar pageInfo={pageInfo} />
          <Jumbotron fluid className="jumbotron-home" />
          <Container className="mb-3">
            <main>{children}</main>
          </Container>
        </Container>
        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <span>
                  © {new Date().getFullYear()}, Built using
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </span>
              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
