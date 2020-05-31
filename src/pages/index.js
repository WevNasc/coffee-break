import React from "react"
import { ThemeProvider } from 'styled-components';
import { graphql } from "gatsby"
import Navbar from "../components/navbar"
import Header from "../components/header"
import Card from "../components/card"
import { lightTheme } from "../themes"

export default function Home({ data }) {

  return (
    <>
      <ThemeProvider theme={lightTheme} >
        <Navbar links={[
          { href: "/", name: "articles" },
          { href: "/about", name: "about" }
        ]} />
        <Header 
          title="Hi, I am Weverson!"
          body="I am a backend software engineer that loves coffee..." />
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Card
              title={node.frontmatter.title}
              link={node.fields.slug}
              body={node.excerpt}
              date={node.frontmatter.date} />
          ))}
        </div>
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
