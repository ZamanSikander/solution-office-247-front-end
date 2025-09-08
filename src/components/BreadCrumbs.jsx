// Breadcrumbs.jsx
import { Link, useLocation } from "react-router-dom";
import { routes } from "./routes";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";

export default function BreadCrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const crumbs = pathnames.map((_, index) => {
    const url = `/${pathnames.slice(0, index + 1).join("/")}`;
    const route = routes.find(r => r.path === url);
    return { url, label: route ? route.breadcrumb : url };
  });

  return (
    <Breadcrumb className="container mx-auto max-w-6xl px-6 py-4 mt-12">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {crumbs.map((crumb, idx) => (
          <div key={idx} className="flex items-center">
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {idx === crumbs.length - 1 ? (
                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={crumb.url}>{crumb.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
