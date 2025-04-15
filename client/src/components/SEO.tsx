import { Helmet } from "react-helmet";
import { siteMetadata, structuredData } from "@/lib/seo";

const SEO = () => {
  return (
    <Helmet>
      <title>{siteMetadata.title}</title>
      <meta name="description" content={siteMetadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={siteMetadata.description} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteMetadata.siteUrl} />
      <meta property="twitter:title" content={siteMetadata.title} />
      <meta property="twitter:description" content={siteMetadata.description} />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap"
        rel="stylesheet"
      />

      {/* Font Awesome */}
      <script src="https://kit.fontawesome.com/3b49be2743.js" crossOrigin="anonymous"></script>

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Canonical Link */}
      <link rel="canonical" href={siteMetadata.siteUrl} />
    </Helmet>
  );
};

export default SEO;
