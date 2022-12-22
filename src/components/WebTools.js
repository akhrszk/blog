import { Link } from "gatsby"
import React from "react"

const WebTools = () => (
  <div>
    <h3 className="mb-3">Webツール</h3>
    <ul>
      <li className="text-primary font-semibold">
        <Link to="/tools/regex" itemProp="url">
          正規表現チェッカー
        </Link>
      </li>
    </ul>
  </div>
)

export default WebTools
