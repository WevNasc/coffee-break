import React from "react"
import { ThemeProvider } from 'styled-components';
import { graphql } from "gatsby"
import Navbar from "../components/navbar"
import Header from "../components/header"
import { lightTheme } from "../themes"
import me from "../images/me.jpg"

export default function Home({ data }) {

  return (
    <>
      <ThemeProvider theme={lightTheme} >
        <Navbar />
        <Header 
          title={`Hey,\n I am Weverson!`}
          body="This is coffee break, my blog, if you are someone interested in software engenniering and want to know how the things really works, this is the right place!"
          image={{src: me, alt: "Weverson Nascimento"}} />
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
