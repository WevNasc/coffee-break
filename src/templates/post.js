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
        <Navbar background={post.frontmatter.image} 
                title={post.frontmatter.title}  
                date={post.frontmatter.date}/>
        <Container>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        image
      }
    }
  }
`