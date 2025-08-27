import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, Outlet } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const baseUrl = "https://solutionoffice247.com";
  const canonicalUrl = `${baseUrl}${location.pathname}`;

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      
      {/* You can add header/footer here if needed */}
      <main>
        <Outlet /> {/* renders the matched child route */}
      </main>
    </>
  );
}

export default Layout;
