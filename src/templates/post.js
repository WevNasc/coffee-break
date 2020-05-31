import React from "react"
import { graphql } from "gatsby"

import Container from "../components/container"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

import postStyles from "./post.module.css"

export default function Post({ data }) {
  const post = data.markdownRemark
  return (
    <>
      <Container>
        <Navbar />
        <h1 className={postStyles.title}>{post.frontmatter.title}</h1>
        <p className={postStyles.date}>{post.frontmatter.date}</p>
        <div className={postStyles.article}>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Container>
      <Footer />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
      }
    }
  }
`