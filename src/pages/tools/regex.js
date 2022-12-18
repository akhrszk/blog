import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../../components/bio"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Divider from "../../components/Divier"
import RegexChecker from "../../components/RegexChecker"

const PAGE_TITLE = "正規表現チェッカー"

const WebToolsRegex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || PAGE_TITLE
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={PAGE_TITLE} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 className="text-4xl font-bold my-4" itemProp="headline">
            {PAGE_TITLE}
          </h1>
        </header>
        <section class="my-6">
          <RegexChecker />
        </section>
      </article>
      <Divider />
      <footer className="py-6">
        <Bio />
      </footer>
    </Layout>
  )
}

export default WebToolsRegex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
