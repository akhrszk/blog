import { Link } from "gatsby"
import React from "react"

const sites = [
  {
    title: "正規表現チェッカー",
    url: "https://tools.akihiro.dev/regex-checker/",
  },
  { title: "JSON整形ツール", url: "https://tools.akihiro.dev/json-formatter/" },
  {
    title: "URL エンコーダー & デコーダー",
    url: "https://tools.akihiro.dev/url-encoder-decoder/",
  },
]

const WebTools = () => (
  <div>
    <h3 className="mb-3">Webツール</h3>
    <ul className="list-disc pl-6">
      {sites.map(({ title, url }) => (
        <li key={url}>
          <Link
            className="text-primary font-semibold"
            to={url}
            itemProp="url"
            target="_blank"
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default WebTools
