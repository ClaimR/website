const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'ClaimR',
    author: 'Adriaan Knapen',
    description: 'Verified location-as-a-service API.',
    siteUrl: 'https://claimr.tools',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ClaimR',
        short_name: 'ClaimR',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-heap',
      options: {
        appId: process.env.HEAP_ID,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-robots-txt',
  ],
}
