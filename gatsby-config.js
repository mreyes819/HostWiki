module.exports = {
  siteMetadata: {
    title: `Spacious`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Host Wiki Guide`,
        short_name: `Wiki`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/Spacious-Logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `b2rma6a4h8lf`,
        accessToken: `5614137cbd9547c9c82f8e28ab5179cdd2bf3e5f40cddbed8782e42dae78c654`,
      },
    },    

  ],
}
