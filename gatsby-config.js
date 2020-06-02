module.exports = {
  siteMetadata: {
    title: "Coffee Break | hey, I am Weverson!",
    description: "This is coffee break. If you are someone interested in software engenniering and want to know the way things really work, this is the right place!",
    keywords: "blog, software engenniering, development, tutorials",
    author: "Weverson Nascimento",
    url: "https://www.coffeebreak.fun",
    locale: "en_US",
    social: {
      twitter: "https://twitter.com/WevNasc",
      github: "https://github.com/wevnasc",
      linkedin: "https://www.linkedin.com/in/wnascimentto/"
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/vendor/typography`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`
  ],
}
