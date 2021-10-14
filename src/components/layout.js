import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { RiGatsbyFill, RiReactjsFill } from "react-icons/ri"
import { GrGraphQl } from "react-icons/gr"

import { Container, Row, Col, Jumbotron } from "react-bootstrap"
import Navbar from "./navBar"

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
                  <RiGatsbyFill />
                  <a href="https://www.gatsbyjs.org" style={{ color: "white" }}> Gatsby.js </a>
                  {' '}
                  <RiReactjsFill />
                  <a href="https://www.reactjs.org" style={{ color: "white" }}> React.js </a>
                  {" "}
                  <GrGraphQl />
                  <a href="https://www.reactjs.org" style={{ color: "white" }}> GraphQl </a>
                  <br />
                  © rodney coyer {new Date().getFullYear()}
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
