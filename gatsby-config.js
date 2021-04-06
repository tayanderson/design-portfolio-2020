require("dotenv").config()

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    menu: [
      { name: "Work", to: "/" },
      { name: "About", to: "/about" },
      { name: "Contact", to: "/contact" },
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/tayloranderson1/",
      github: "https://github.com/tayanderson",
    },
    locale: "en",
    title: `Taylor Anderson`,
    description: `Web Designer & Front-end Developer based in Chicago, IL.`,
    author: `Taylor Anderson`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('postcss-nested'),
          require('autoprefixer'),
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-101131077-1", // Google Analytics / GA
        ],
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-scroll-reveal`,
  ],
}
