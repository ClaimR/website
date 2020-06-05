module.exports = {
  siteMetadata: {
    title: 'ClaimR',
    author: 'Adriaan Knapen',
    description: 'Verified location-as-a-service API.',
  },
  plugins: [
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
  ],
}
