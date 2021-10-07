import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";

const RecipePost = ({ data }) => {
    return (
        <Layout>
            <Link to="/recipes"> Back </Link>
            <h1> {data.mdx.frontmatter.title} </h1>
            <p>posted: {data.mdx.frontmatter.date}</p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export const RecipePostQuery = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
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
            body
        }
    }
`

export default RecipePost;