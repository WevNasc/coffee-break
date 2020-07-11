import React from "react"
import { graphql } from "gatsby"
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../components/global'
import Container from "../components/container"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import SEO from "../components/seo"

import { lightTheme } from "../themes";

export default function Post({ data }) {
  const post = data.markdownRemark
  return (
    <>
      <SEO title={post.frontmatter.title}
        description={post.excerpt}
        image={post.frontmatter.image}
        slug={post.fields.slug} />
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <article>  
          <Navbar background={post.frontmatter.image}
            title={post.frontmatter.title}
            date={post.frontmatter.date} />
          <Container>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </Container>
        </article>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
        image
      }
      excerpt
    }
  }
`