import React from "react"
import { graphql } from "gatsby"

import Bio from "../../components/bio"
import Divider from "../../components/Divier"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TimeUtils from "../../components/TiimeUtils"
import NowTime from "../../components/NowTime"

const PAGE_TITLE = "時間"

const WebToolsTime = ({ data, location }) => {
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
          <p className="text-xl mb-8">
            <NowTime format="yyyy-MM-dd HH:mm:ss" />
          </p>
        </header>
        <section class="my-6">
          <TimeUtils />
        </section>
      </article>
      <Divider />
      <footer className="py-6">
        <Bio />
      </footer>
    </Layout>
  )
}

export default WebToolsTime

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
