import React from "react";
import { Link } from "gatsby";

import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <React.Fragment>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span"> Home </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/about" className="link-no-style">
              <Nav.Link as="span" eventKey="about">
                About Us
              </Nav.Link>
            </Link>
            <Link to="/recipes" className="link-no-style">
              <Nav.Link as="span" eventKey="recipes">
                Recipes
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}

export default CustomNavbar;
