import React, { useCallback, useEffect, useState } from "react"

const light = "light"
const dark = "dark"

const defaultState = {
  theme: light, // light|dark
  toggleTheme: () => {}
}

export const ThemeContext = React.createContext(defaultState)

// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = useCallback(() => {
    setTheme(theme === light ? dark : light)
    localStorage.setItem("dark", JSON.stringify(!(theme === dark)))
  }, [theme])

  useEffect(() => {
    const lsDark = JSON.parse(localStorage.getItem("dark"))
    if (lsDark) {
      setTheme(dark)
    } else if (supportsDarkMode()) {
      setTheme(dark)
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
