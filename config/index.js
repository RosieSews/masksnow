module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: "MasksNOW", // Navigation and Site Title
  siteTitleAlt: "The MasksNOW coalition", // Alternative Site title for SEO
  siteTitleManifest: "masksNOW",
  siteUrl: "https://masksnow.org", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteHeadline: "We Can Do It!", // Headline for schema.org JSONLD
  siteBanner: "img/mn-og-image.png", // Your image for og:image tag. You can find it in the /static folder
  favicon: "img/favicon.png", // Your image for favicons. You can find it in the /src folder
  siteDescription:
    "#MasksNOW is an initiative bringing together makers to solve the PPE shortage for hospitals, healthcare facilities, and first responders by creating home made masks and linking sewests in local organizations.", // Your site description
  author: "@masksnoworg", // Author for schemaORGJSONLD
  siteLogo: "img/mn-og-image.png", // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@minimal', // Twitter Username - Optional
  // ogSiteName: 'minimal', // Facebook Site Name - Optional
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "UA-161473355-1",

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: "#0B3160",
  backgroundColor: "#fff"
};
