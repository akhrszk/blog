import React, { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { ThemeContext } from "../lib/theme"

const ThemeToggleButton = ({ className }) => {
  const { toggleTheme, theme } = useContext(ThemeContext)
  const textColor = theme === "light" ? "text-orange-500" : "text-yellow-300"
  const styles = [
    textColor,
    "p-2",
    ...(className ?? '').split(' ')
  ]
  return (
    <button
      className={styles.join(' ')}
      onClick={() => toggleTheme()}
    >
      {theme === "light" ? <FontAwesomeIcon icon={faSun} size="lg" /> : <FontAwesomeIcon icon={faMoon} size="lg" />}
    </button>
  )
}

export default ThemeToggleButton
