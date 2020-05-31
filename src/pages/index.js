import React from "react"
import { ThemeProvider } from 'styled-components';
import { graphql } from "gatsby"
import Navbar from "../components/navbar"
import { lightTheme } from "../themes"

export default function Home({ data }) {

  return (
    <>
      <ThemeProvider theme={lightTheme} >
        <Navbar />
      </ThemeProvider>
    </>
  )
}

export const query = graphql`
  query{
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          rawMarkdownBody
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
