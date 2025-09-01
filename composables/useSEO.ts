import DevConfig from "~/developer.json";

interface SEOData {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  author?: string;
}

export const useSEO = (data: SEOData = {}) => {
  const route = useRoute();

  const devConfig = DevConfig;

  const defaultTitle = `${devConfig.name} | ${devConfig.role}`;
  const defaultDescription = `${devConfig.name} - ${devConfig.role}. Frontend developer from Uzbekistan with 2+ years building scalable web applications using Vue.js ecosystem.`;
  const defaultImage = "/images/demo-share.png";
  const baseUrl = "https://axadev.uz";

  const seoData = {
    title: data.title || defaultTitle,
    description: data.description || defaultDescription,
    image: data.image || defaultImage,
    url: data.url || `${baseUrl}${route.path}`,
    type: data.type || "website",
    keywords: data.keywords || [
      "developer",
      "portfolio",
      "web development",
      devConfig.role?.toLowerCase(),
    ],
    author: data.author || devConfig.name,
  };

  useHead({
    title: seoData.title,
    meta: [
      { name: "description", content: seoData.description },
      { name: "keywords", content: seoData.keywords.join(", ") },
      { name: "author", content: seoData.author },

      { property: "og:title", content: seoData.title },
      { property: "og:description", content: seoData.description },
      { property: "og:image", content: seoData.image },
      { property: "og:url", content: seoData.url },
      { property: "og:type", content: seoData.type },
      { property: "og:site_name", content: defaultTitle },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seoData.title },
      { name: "twitter:description", content: seoData.description },
      { name: "twitter:image", content: seoData.image },
      {
        name: "twitter:creator",
        content: `@${
          devConfig.contacts?.social?.twitter?.user ||
          devConfig.contacts?.social?.github?.user
        }`,
      },

      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow" },
    ],
  });

  // Structured Data (JSON-LD)
  useHead({
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: devConfig.name,
          jobTitle: devConfig.role,
          description: seoData.description,
          url: seoData.url,
          image: seoData.image,
          sameAs: [
            `https://github.com/${devConfig.contacts?.social?.github?.user}`,
            `https://linkedin.com/in/${devConfig.contacts?.find_me_also_in?.sources?.linkedin?.user}`,
            `https://twitter.com/${devConfig.contacts?.social?.twitter?.user}`,
          ].filter(Boolean),
        }),
      },
    ],
  });

  return seoData;
};
