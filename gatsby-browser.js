import React from "react"

// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import "./src/global.css"

// normalize CSS across browsers
// import "./src/normalize.css"
// custom CSS styles
// import "./src/style.css"

// Highlighting for code blocks
import "prism-themes/themes/prism-lucario.min.css"

import "@fortawesome/fontawesome-svg-core/styles.css"

import { ThemeProvider } from "./src/lib/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
