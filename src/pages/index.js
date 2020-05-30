import React from "react"
import { graphql } from "gatsby"

import homeStyles from "./home.module.css";

import Container from "../components/container";
import Layout from "../components/layout";
import Card from "../components/card";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home({ data }) {
  return (
    <Layout>
      <Container>
        <Navbar />
        <div className={homeStyles.content}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Card 
              title={node.frontmatter.title}
              link={node.fields.slug}
              body={node.excerpt}
              date={node.frontmatter.date} />
          ))}
        </div>
      </Container>
      <Footer />
    </Layout>
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
