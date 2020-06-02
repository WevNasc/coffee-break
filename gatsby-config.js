module.exports = {
  siteMetadata: {
    title: "Coffee Break | hey, I am Weverson!",
    description: "This is coffee break. If you are someone interested in software engenniering and want to know the way things really work, this is the right place!",
    keywords: "blog, software engenniering, development, tutorials",
    author: "Weverson Nascimento",
    url: "https://www.coffeebreak.fun",
    locale: "en_US",
    social: {
      twitter: "https://twitter.com/WevNasc"
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/articles/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/vendor/typography`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`
  ],
}
