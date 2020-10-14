module.exports = {
  siteMetadata: {
    title: "InspiYouth",
    author: "M. Hanif Azhary",
    description: "Official website of InspiYouth"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'InspiYouth Official Website',
        short_name: 'InspiYouth',
        start_url: '/',
        background_color: '#2a2a72',
        theme_color: '#2a2a72',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
