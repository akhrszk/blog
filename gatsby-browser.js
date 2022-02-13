import React from "react"

// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
// import "./src/normalize.css"
// custom CSS styles
// import "./src/style.css"

import "./src/global.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import "@fortawesome/fontawesome-svg-core/styles.css"

import { ThemeProvider } from "./src/lib/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
