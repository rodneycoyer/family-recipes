import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Card, CardGroup, CardImg, Col, Row, Image, Container } from "react-bootstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";

const RecipeIndex = ({ data }) => {

  return (
    <Layout pageInfo={{ pageName: "recipes" }}>
      <SEO title="recipes"/>
      <Link to="/"> Home </Link>
      <h1> Recipes </h1>
      <p> Click on one of our Family Recipes and taste the amazing flavors from home. </p>
          <Row className="justify-content-start">
              {
                data.allMdx.nodes.map((node) => (
                  <Col key={node.id} className="mb-3" xs={12} md={6} lg={4}>
                    <CardGroup >
                      <Card className="recipe-card">
                        <Link to={`/recipes/${node.slug}`}>
                          <GatsbyImage
                            id="image"
                            objectFit="cover"
                            image={getImage(node.frontmatter.hero_image)}
                            alt={node.frontmatter.hero_image_alt}
                          />
                        </Link>
                        <Card.Body>
                          <Card.Title> <h1>{node.frontmatter.title}</h1> </Card.Title>
                          <Card.Text className="mb-0"><strong>{node.frontmatter.totalTime}</strong> </Card.Text>
                          <Card.Text className="mb-0"> <h5>updated: {node.frontmatter.date}</h5> </Card.Text>
                          <Card.Text className="mb-0"> <h5>created by: {node.frontmatter.author}</h5> </Card.Text>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                  </Col>
                ))
              }
          </Row>
    </Layout>
  );
}

export const RecipeIndexQuery = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          author
          hero_image_alt
          hero_image {
              childImageSharp {
                  gatsbyImageData(
                    width: 800
                    height: 800
                    blurredOptions: {width: 100}
                    transformOptions: {cropFocus: CENTER}
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
              }
          }
          prepTime
          cookTime
          totalTime
        }
        id
        slug
      }
    }
  }
`

export default RecipeIndex;