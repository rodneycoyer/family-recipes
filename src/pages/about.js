import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout pageInfo={{ pageName: "about" }}>
    <Seo title="about" />
    <Link to="/"> Home </Link>

    <h1>Famish - MERN stack project</h1>

    <p> I was listening to some Software Daily Podcasts that featured Netfliy engineers and thought it would be pretty cool to build something Jamstack. The philosophies and core concepts behind it's architecture make it easy to see why it's so popular build with. </p>

    <p> This is a static recipe index built using MERN stack. The idea is to use Gatsby and its built in features, GraphQL, configured plugins, and reduce everything to a single API. This gives the developer the ability to call multiple data sources using a single query. I wrote my REST API on a Node/Express server and called data from local MDX files and a remote MongoDB Atlas database using queries built with GraphiQL IDE. </p>

    <p> After I got this project off the ground, I wanted to build and deploy on a few Cloud Service Providers. Hosting on Netlify and Gatsby Cloud took minimal effort as they both provide similar hosting and scaling services. </p>

    <p> Next task was to create an EC2 instance on AWS within the free-tier. </p>

<h5>Here's a look at the major tech I used:</h5>

    <h6> Front End </h6>
    <ul>
      <li> Gatsby JS </li>
        <ul>
          <li> Plugins </li>
          <li> Markdown </li>
        </ul>
      <li> React JS </li>
      <li> SASS </li>
      <li> React-Bootstrap </li>
    </ul>

    <h6> Server, Query & Database </h6>

    <ul>
      <li> GraphQL </li>
      <li> Node JS </li>
        <ul>
          <li> Express JS </li>
          <li> Mongoose ODM </li>
          <li> REST API </li>
        </ul>
      <li> Basic-Auth </li>
      <li> .env </li>
      <li> MongoDB </li>
    </ul>

        <h6>  Deploy and Hosting </h6>

    <ul>
      <li> Netlify </li>
      <li> Gatsby Cloud </li>
      <li> AWS </li>
        <ul>
          <li> IAM </li>
          <li> EC2 </li>
          <li> Cloud Formation </li>
        </ul>
      <li> Basic-Auth </li>
      <li> .env </li>
      <li> MongoDB </li>
    </ul>




<br />

<h1> Conclusion </h1>

I decided to use Gatsby and Material-UI for my personal portfolio-page and spent more time with the theme, design, and features.

Some of the future updates I would like to make include:

* tag links
* search filter
* API's
  * create user
  * upload or create recipe
* like recipes
* comment on recipes


   
  </Layout>
)

export default AboutPage;
