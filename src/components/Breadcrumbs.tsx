import React from "react";
import { Link } from "gatsby";
import {
  ChevronRightIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const baseUrl = "https://bim.com.sg";

  // Generate dynamic breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      ...items.map((item, index) => {
        const position = index + 2;
        const isLastItem = index === items.length - 1;

        return {
          "@type": "ListItem",
          position: position,
          name: item.label,
          // Don't include "item" for the last breadcrumb (current page)
          ...(isLastItem ? {} : { item: `${baseUrl}${item.path}` }),
        };
      }),
    ],
  };

  return (
    <>
      {/* JSON-LD Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Visual Breadcrumbs */}
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="px-0 inline-flex items-center space-x-1 md:space-x-3\ list-none">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              <HomeIcon className="w-4 h-4 mr-2" />
              Home
            </Link>
          </li>
          {items.map((item, idx) => (
            <li key={item.path}>
              <div className="flex items-center">
                <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                {idx === items.length - 1 ? (
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                    {item.label.length > 15
                      ? item.label.substring(0, 15) + "..."
                      : item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2"
                  >
                    {item.label.length > 10
                      ? item.label.substring(0, 10) + "..."
                      : item.label}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
