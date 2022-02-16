import React, { useContext } from "react"
import { Link } from "gatsby"
import { ThemeContext } from "../lib/theme"
import { Helmet } from "react-helmet"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <h4>
        <Link className="text-primary" to="/">{title}</Link>
      </h4>
    )
  }

  const { theme } = useContext(ThemeContext)

  return (
    <>
      <Helmet htmlAttributes={{ class: theme }} />
      <div className="max-w-xl container my-10 px-5" data-is-root-path={isRootPath}>
        <header className="mb-8">{header}</header>
        <main>{children}</main>
        <footer>
          &copy;
          {` `}
          <Link to="/">akihr.io</Link>
          {` `}
          - {new Date().getFullYear()}, Built with
          {` `}
          <a
            href="https://www.gatsbyjs.com"
            className="text-primary underline"
          >
            Gatsby
          </a>
        </footer>
      </div>
    </>
  )
}

export default Layout
