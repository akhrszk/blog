import React, { useContext } from "react"
import { ThemeContext } from "../lib/theme"

const ToggleThemeButton = () => {
  const { toggleTheme, theme } = useContext(ThemeContext)
  return (
    <button
      onClick={() => toggleTheme()}
    >
      {theme}
    </button>
  )
}

export default ToggleThemeButton
