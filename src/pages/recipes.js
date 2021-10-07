import React from "react";
import { Link, graphql } from "gatsby";

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
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
    </Layout>
)

export const RecipeQuery = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default RecipePage;