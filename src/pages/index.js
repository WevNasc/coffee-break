import React from "react"
import styled from 'styled-components';

import { ThemeProvider } from 'styled-components';
import { graphql } from "gatsby"
import { lightTheme } from "../themes"

import Navbar from "../components/navbar"
import Header from "../components/header"
import Card from "../components/card"
import Container from "../components/container"

const Main = styled.main`
  margin-top: 100px;
`

const content = {
  header: {
    title: `Hey,\n I am Weverson!`,
    body: "This is coffee break, my blog, if you are someone interested in software engenniering and want to know how the things really works, this is the right place!",
    image: { src: "images/me.jpg", alt: "Weverson Nascimento" }
  }
}

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.edges
  return (
    <>
      <ThemeProvider theme={lightTheme} >
        <Navbar />
        <Header
          title={content.header.title}
          body={content.header.body}
          image={content.header.image} />
        <Main>
          <Container>
            {posts.map(post => (
              <Card
                key={post.node.id}
                image={post.node.frontmatter.image}
                title={post.node.frontmatter.title}
                link={post.node.fields.slug}
                body={post.node.excerpt} />
            ))}
          </Container>
        </Main>
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
            image
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
