import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const { frontmatter, html, excerpt } = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `About`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={frontmatter.title} description={frontmatter.description || excerpt} />
      <article>
        <header>
          <h1
            className="text-4xl font-bold my-4"
            itemProp="headline"
          >
            {frontmatter.title}
          </h1>
        </header>
        <section
          className="markdown"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: "/about/" } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
      }
    }
  }
`
