import React from "react"
import footerStyles from "./footer.module.css"
import Container from "../container"

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <div className={footerStyles.footer}>
      <Container>
        <div className={footerStyles.content}>
          <p className={footerStyles.date}>{`© 2020-${currentYear} coffee break`}</p>
        </div>
      </Container>
    </div>
  )
}