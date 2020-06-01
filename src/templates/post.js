import React from "react"
import { graphql } from "gatsby"
import { ThemeProvider } from 'styled-components';

import Container from "../components/container"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

import { lightTheme } from "../themes";
import content from "../content"

export default function Post({ data }) {
  const post = data.markdownRemark
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Navbar />
        <Container>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <div>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </Container>
        <Footer social={content.footer.social} />
      </ThemeProvider>
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