import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../../components/bio"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Divider from "../../components/Divier"
import Input from "../../components/Input"
import Textarea from "../../components/Textarea"

const title = "正規表現チェッカー"

const RegexChecker = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || title
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={title} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 className="text-4xl font-bold my-4" itemProp="headline">
            {title}
          </h1>
        </header>
        <section class="my-6">
          <div class="grid grid-flow-row-dense grid-cols-2 gap-x-2 gap-y-6">
            <div class="col-span-2">
              <Input label="正規表現" />
            </div>
            <div>
              <Textarea label="検索対象の文字列" class="h-32" />
            </div>
            <div>
              <Textarea label="検索結果" class="h-32" disabled />
            </div>
          </div>
        </section>
      </article>
      <Divider />
      <footer className="py-6">
        <Bio />
      </footer>
    </Layout>
  )
}

export default RegexChecker

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
