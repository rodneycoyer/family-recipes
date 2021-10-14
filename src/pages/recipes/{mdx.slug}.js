import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

const RecipePost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image)

    return (
        <Layout>
            <Link to="/recipes"> Back </Link>
            <h1> {data.mdx.frontmatter.title} </h1>
            <p>posted: {data.mdx.frontmatter.date} author: {data.mdx.frontmatter.author} </p>
            <GatsbyImage
                className="mb-3"
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
            />
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
            hero_image_alt
            hero_image {
                childImageSharp {
                    gatsbyImageData(
                    width: 600
                    height: 600
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
            course
            cuisine
            servings
            }
            body
        }
    }
`

export default RecipePost;