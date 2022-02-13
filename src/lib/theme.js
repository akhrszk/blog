import React, { useCallback, useState } from "react"

const light = "light"
const dark = "dark"

const defaultState = {
  theme: light, // light|dark
  toggleTheme: () => {}
}

export const ThemeContext = React.createContext(defaultState)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(light)
  const toggleTheme = useCallback(() => {
    setTheme(theme === light ? dark : light)
  }, [theme])
  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
