import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";
import SEO from "../components/seo";

const RecipeIndex = ({ data }) => (
    <Layout pageInfo={{ pageName: "recipes" }}>
        <SEO title="recipes"/>
        <Link to="/"> Home </Link>
        <h1> Recipes </h1>
        <p> Bring home our recipes and see what we're always eating </p>
            <ul>
              {
                data.allMdx.nodes.map((node) => (
                  <article key={node.id}>
                    <Link to={`/recipes/${node.slug}`}>
                      {node.frontmatter.title}
                    </Link>
                    <p>Posted: {node.frontmatter.date}</p>
                  </article>
                ))
              }
            </ul>
    </Layout>
)

export const RecipeIndexQuery = graphql`
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
        }
        id
        slug
      }
    }
  }
`

export default RecipeIndex;