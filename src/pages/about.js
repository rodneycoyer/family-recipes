import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageInfo={{ pageName: "about" }}>
    <SEO title="about" />
    <Link to="/"> Home </Link>
    <h1> About Us </h1>
    <p>
      We're always around drinking and cooking great food!
    </p>
  </Layout>
)

export default AboutPage;
