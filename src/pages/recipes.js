import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";
import SEO from "../components/seo";

const RecipePage = ({ data }) => (
    <Layout pageInfo={{ pageName: "recipes" }}>
        <SEO title="recipes"/>
        <Link to="/"> Home </Link>
        <h1> Recipes </h1>
        <p> Bring home our recipes and see what we're always eating </p>
            <ul>
              {
                data.allMdx.nodes.map((node) => (
                  <article key={node.id}>
                    <h2>{node.frontmatter.title}</h2>
                    <p>Posted: {node.frontmatter.date}</p>
                  </article>
                ))
              }
            </ul>
    </Layout>
)

export const RecipeQuery = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          author
          prepTime
          cookTime
          totalTime
          course
          cuisine
          servings
        }
        id
        body
      }
    }
  }
`

export default RecipePage;