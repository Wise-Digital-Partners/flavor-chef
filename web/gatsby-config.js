/* eslint-disable prettier/prettier */
// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");
const isProd = process.env.NODE_ENV === "production";
const previewEnabled = true;
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://flavor-chef.netlify.app/",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    siteUrl,
    author: `WISE Digital Partners`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
          quality: 100,
          breakpoints: [640, 768, 1024, 1280, 1536],
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", 
            disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", 
            disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: `uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/downloads`,
        name: `downloads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // develop: true,
        tailwind: true,
        purgeOnly: [
          "node_modules/@fortawesome/fontawesome-pro/css/all.min.css",
        ],
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.
        SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd || previewEnabled, // drafts in dev & Gatsby Cloud Preview
      },
    },
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: `3269465088`,
    //     access_token: "a valid access token",
    //     instagram_id: "your instagram_business_account id",
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Flavor Chef`,
        short_name: `Flavor Chef`,
        start_url: `/`,
        background_color: `#0D77AE`,
        theme_color: `#0D77AE`,
        display: `standalone`,
        icon: `static/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-P587WP7",
        includeInDevelopment: false,
        // defaultDataLayer: { platform: "gatsby" },
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
  ],
};
