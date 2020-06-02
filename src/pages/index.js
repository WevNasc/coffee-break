import React from "react"
import styled, { ThemeProvider } from 'styled-components';
import { graphql } from "gatsby"
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Card from "../components/card"
import Container from "../components/container"
import Footer from "../components/footer"

import { lightTheme } from "../themes"
import content from "../content"

const Main = styled.main`
  margin: 100px 0;

  @media (max-width: ${ props => props.theme.media.phone})  { 
    margin: 50px 0;
  }
`

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.edges
  const meta = data.site.siteMetadata
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={`${meta.url}/images/me.jpg`} />
        <meta property="og:locale" content={meta.locale} />
        <meta property="og:url" content={meta.url} />
        <link rel="canonical" href={meta.url} />
      </Helmet>
      <ThemeProvider theme={lightTheme} >
        <Navbar />
        <Hero
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
                body={post.node.excerpt}
                date={post.node.frontmatter.date} />
            ))}
          </Container>
        </Main>
        <Footer social={content.footer.social} />
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
    site {
      siteMetadata {
        author
        description
        keywords
        locale
        title
        url
      }
    }
  }
`
