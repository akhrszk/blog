import React, { useContext } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { ThemeContext } from "../lib/theme"
import ThemeToggleButton from "./ThemeToggleButton"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="flex-grow">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <h4 className="flex-grow">
        <Link className="text-primary" to="/">{title}</Link>
      </h4>
    )
  }

  const { theme } = useContext(ThemeContext)

  return (
    <>
      <Helmet htmlAttributes={{ class: theme }} />
      <div className="max-w-2xl container my-10 px-5" data-is-root-path={isRootPath}>
        <header className="mb-8 flex items-start">
          {header}
          {isRootPath && <ThemeToggleButton className="block shrink-0" />}
        </header>
        <main>{children}</main>
        <footer>
          &copy;
          {` `}
          <Link to="/">akihiro.dev</Link>
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
