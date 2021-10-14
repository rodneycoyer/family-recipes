import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Card, CardGroup, CardImg, Col, Row, Image } from "react-bootstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";

const RecipeIndex = ({ data }) => {

  return (
    <Layout pageInfo={{ pageName: "recipes" }}>
      <SEO title="recipes"/>
      <Link to="/"> Home </Link>
      <h1> Recipes </h1>
      <p> Click on one of our Family Recipes and taste the amazing flavors from home. </p>
          <Row className="justify-content-center">
            <CardGroup>
              {
                data.allMdx.nodes.map((node) => (
                  <main key={node.id}>
                      <Col className="mb-3" sm={6} lg={4}>
                        <Card className="recipe-card">
                          <Link to={`/recipes/${node.slug}`}>
                            <GatsbyImage
                              objectFit="cover"
                              image={getImage(node.frontmatter.hero_image)}
                              alt={node.frontmatter.hero_image_alt}
                            />
                          </Link>
                          <Card.Body>
                            <Card.Title className="text-center"> {node.frontmatter.title} </Card.Title>
                            <Card.Text className="text-center mb-1"><strong>{node.frontmatter.totalTime}</strong> </Card.Text>
                            <Card.Text className="text-center mb-0">created by: {node.frontmatter.author}  </Card.Text>
                            <Card.Text className="text-center">updated: {node.frontmatter.date}  </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                  </main>
                ))
              }
            </CardGroup>
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
                    width: 550
                    height: 500
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