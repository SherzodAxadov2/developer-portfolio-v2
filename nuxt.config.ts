const config = require("./developer.json");
const siteTitle = `${config.name} | ${config.role}`;
const siteDescription = `${config.name} - ${config.role}. Frontend developer from Uzbekistan with 2+ years building scalable web applications using Vue.js ecosystem.`;

/*
 * Nuxt 3 Config File
 Usage: https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({
  compatibilityDate: "2025-02-28",
  devtools: { enabled: true },

  /**
   * * App Config - Enhanced SEO Configuration
   */
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: siteTitle,
      titleTemplate: "%s | Sherzod Axadov",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },

        { name: "title", content: siteTitle },
        { name: "description", content: siteDescription },
        {
          name: "keywords",
          content:
            "frontend developer, vue.js, nuxt.js, javascript, typescript, web development, portfolio, uzbekistan",
        },
        { name: "author", content: config.name },
        { name: "robots", content: "index, follow" },
        {
          name: "googlebot",
          content:
            "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
        },

        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://axadev.uz/" },
        { property: "og:title", content: siteTitle },
        { property: "og:description", content: siteDescription },
        {
          property: "og:image",
          content: "https://axadev.uz/images/demo-share.png",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:site_name", content: "Sherzod Axadov Portfolio" },
        { property: "og:locale", content: "en_US" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://axadev.uz/" },
        { name: "twitter:title", content: siteTitle },
        { name: "twitter:description", content: siteDescription },
        {
          name: "twitter:image",
          content: "https://axadev.uz/images/demo-share.png",
        },
        { name: "twitter:creator", content: "@sherzodaxadov" },

        { name: "theme-color", content: "#010C15" },
        { name: "msapplication-TileColor", content: "#010C15" },
        {
          name: "google-site-verification",
          content: "70nNFYtDcCILuvKxwyqA9RXeekI2Q-jSm1-ny4UiesI",
        },
      ],
      link: [
        { rel: "canonical", href: "https://axadev.uz/" },
        { rel: "manifest", href: "/pwa/manifest.json" },
        { rel: "apple-touch-icon", href: "/pwa/icons/apple-touch-icon.png" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: config.name,
            jobTitle: config.role,
            description: siteDescription,
            url: "https://axadev.uz",
            image: "https://axadev.uz/images/demo-share.png",
            sameAs: [
              `https://github.com/${config.contacts.social.github.user}`,
              `https://linkedin.com/in/${config.contacts.find_me_also_in.sources.linkedin.user}`,
              `https://twitter.com/${config.contacts.social.twitter.user}`,
            ],
            address: {
              "@type": "PostalAddress",
              addressCountry: "UZ",
              addressRegion: "Tashkent",
            },
            alumniOf: {
              "@type": "Organization",
              name: "Tashkent University of Information Technologies",
            },
          }),
        },
      ],
    },
  },

  /**
   * * Nuxt 3 Modules
   * Official modules: https://nuxt.com/modules
   */
  modules: ["@nuxtjs/tailwindcss"],

  /**
   * * Plugins
   * Auto-loaded from plugins/ directory
   * Vercel Analytics plugin will be loaded automatically
   */

  components: {
    dirs: ["~/components"],
  },

  /**
   * * Tailwind CSS Config
   * Options: https://tailwindcss.nuxt.dev/getting-started/options/
   * Docs: https://tailwindcss.nuxt.dev
   */
  tailwindcss: {
    cssPath: "~/assets/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: true, // true to resolve the tailwind config in runtime. https://tailwindcss.nuxt.dev/getting-started/options/#exposeconfig
    injectPosition: 0,
    viewer: false,
  },

  /**
   * * Runtime Config (Environment Variables)
   * Usage: https://nuxt.com/docs/guide/going-further/runtime-config
   */
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },
});
