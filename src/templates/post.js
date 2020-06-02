import React from "react"
import { graphql } from "gatsby"
import { ThemeProvider } from 'styled-components';
import { Helmet } from "react-helmet";

import Container from "../components/container"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

import { lightTheme } from "../themes";
import content from "../content"
import postStyle from "./post.module.css";

export default function Post({ data }) {
  const post = data.markdownRemark
  const meta = data.site.siteMetadata
  return (
    <>
     <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.frontmatter.image} />
        <meta property="og:locale" content={meta.locale} />
        <meta property="og:url" content={`${meta.url}${post.fields.slug}`} />
        <link rel="canonical" href={meta.url} />
      </Helmet>
      <ThemeProvider theme={lightTheme}>
        <Navbar background={post.frontmatter.image} 
                title={post.frontmatter.title}  
                date={post.frontmatter.date}/>
        <Container>
            <div className={postStyle.post} dangerouslySetInnerHTML={{ __html: post.html }} />
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