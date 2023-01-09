import { Link } from "gatsby"
import React from "react"

const WebTools = () => (
  <div>
    <h3 className="mb-3">Webツール</h3>
    <ul className="list-disc pl-6">
      <li>
        <Link
          className="text-primary font-semibold"
          to="/tools/time/"
          itemProp="url"
        >
          時間
        </Link>
      </li>
      <li>
        <Link
          className="text-primary font-semibold"
          to="/tools/regex/"
          itemProp="url"
        >
          正規表現チェッカー
        </Link>
      </li>
    </ul>
  </div>
)

export default WebTools
