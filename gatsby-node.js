const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `blog` })
    const date = new Date(node.frontmatter.date)
    createNodeField({
      node,
      name: `slug`,
      value: `/blog/${date.getFullYear()}/${date.getMonth()}/${date.getDate()}${slug}`,
    })
    createNodeField({
      node,
      name: "name",
      value: slug.replace(/\//g, "")
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              name
            }
            frontmatter {
              date
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.fields.slug,
        name: node.fields.name
      },
    })
  })
}