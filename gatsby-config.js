const path = require('path')

const siteMetadata = {
  name: 'ClaimR',
  title: 'ClaimR - Verified Location Made Easy',
  author: 'Adriaan Knapen',
  siteUrl: 'https://claimr.tools',
  description:
    'ClaimR offers Verified Location-as-a-Service for mobile devices. We use state of the art GNSS technology to fight location fraud.',
  keywords: [
    'GNSS',
    'GPS',
    'developers',
    'SDK',
    'Android',
    'React Native',
    'ClaimR',
    'location',
    'verification',
    'fraud',
    'prevention',
  ],
  language: 'en',
}

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'assets', 'images'),
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.name,
        lang: siteMetadata.language,
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
  ],
}
