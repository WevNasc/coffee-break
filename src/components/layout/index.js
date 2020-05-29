import React from "react"
import layoutStyles from "./layout.module.css"

export default function Container({ children }) {
  return <div className={layoutStyles.root}>{children}</div>
}