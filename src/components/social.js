import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"

export const GitHub = ({ username }) => (
  <a className="text-[#181717]" href={`https://github.com/${username || ``}`}>
    <FontAwesomeIcon icon={faGithub} />
  </a>
)

export const Twitter = ({ username }) => (
  <a className="text-[#1DA1F2]" href={`https://twitter.com/${username || ``}`}>
    <FontAwesomeIcon icon={faTwitter} />
  </a>
)