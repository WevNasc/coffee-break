import React from "react"
import navbarStyles from "./navbar.module.css"

export default function Navbar() {
  return (
    <nav className={navbarStyles.navbar} >
      <a href="/" className={navbarStyles.title}>Coffee Break</a>
      <a href="https://github.com/wevnasc/coffee-break" className={navbarStyles.button}>Github</a>
    </nav>
  )
}