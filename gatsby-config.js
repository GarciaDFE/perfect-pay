module.exports = {
  siteMetadata: {
    title: `Test | Marcial Garcia`,
    description: `Teste para vaga de Dev Front End na Perfect Pay`,
    siteUrl: `https://perfect-pay.netlify.app`,
    author: `Marcial Garcia`,
    social: [
      {
        name: "twitter",
        url: "<link project in the Twitter>"
      },
      {
        name: "youtube",
        url: "<link project in the Youtube>"
      },
      {
        name: "facebook",
        url: "<link project in the Facebook>"
      },
      {
        name: "instagram",
        url: "<link project in the Instagram>"
      },
      {
        name: "whatsapp",
        url: "<link project in the Professional WhatsApp>"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `perfect-pay`,
        short_name: `perfect-pay`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#2ECC71`,
        display: `template-ui`,
        icon: `src/images/globals/favicon.ico`, // 512x512px.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional
        color: `tomato`,
        // Disable the loading spinner in the middle view
        showSpinner: false,
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
