import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

function SEO({ title, description }) {
  const location = useLocation();
  const baseUrl = "https://solutionoffice247.com";
  const canonicalUrl = baseUrl + location.pathname;

  return (
    <Helmet>
      {/* Title */}
      <title>{title ? `${title} | Solution Office 247` : "Solution Office 247"}</title>

      {/* Meta Description */}
      {description && <meta name="description" content={description} />}

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={title || "Solution Office 247"} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "Solution Office 247"} />
      {description && <meta name="twitter:description" content={description} />}
    </Helmet>
  );
}

export default SEO;
