/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GitHub, Twitter } from "./social"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <StaticImage
          className="rounded-full"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.png"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
      </div>
      {author?.name && (
        <p>
          <strong>{author.name}</strong>
          {` `}
          <Twitter username={social?.twitter} />
          {` `}
          <GitHub username={social?.github} />
          <br />
          {author?.summary || null}
          <br />
          <Link to='/about/' className="text-primary underline">
            <span>profile</span>
          </Link>
        </p>
      )}
    </div>
  )
}

export default Bio
