import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"

export const GitHub = ({ username }) => (
  <a className="text-[#181717] dark:text-white" href={`https://github.com/${username || ``}`}>
    <FontAwesomeIcon icon={faGithub} size="lg" fixedWidth />
  </a>
)

export const Twitter = ({ username }) => (
  <a className="text-[#1DA1F2]" href={`https://twitter.com/${username || ``}`}>
    <FontAwesomeIcon icon={faTwitter} size="lg" />
  </a>
)