import React from "react";
import { Link } from "gatsby";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
} from "gatsby-plugin-image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useAnalytics } from "hooks/useAnalytics";

type SectionProps = {
  id: string;
  title: string;
  content: string;
  contentHtml?: string;
  linkText?: string;
  linkHref?: string;
  bgColor?: string;

  /** Preferred: pass processed image data */
  imageData?: IGatsbyImageData | null;

  /** Also supported: pass a File node or the result of GetImageByName(...) */
  src?: any;

  /** Fallback: plain image URL */
  imageUrl?: string | null;

  /** Optional alt text */
  alt?: string;
};

type TwoColumnProps = {
  title: string;
  description: string;
  sections: SectionProps[];
};

const TwoColumn = ({
  title,
  description,
  sections,
}: TwoColumnProps) => {
  const { trackClick } = useAnalytics();

  const handleSectionLinkClick = (
    sectionId: string,
    linkHref: string,
    pageName: string = "home"
  ) => {
    trackClick("section_link_click", {
      event_category: "engagement",
      event_label: `${pageName}-${sectionId}`,
      destination_url: linkHref,
      page_location: `${pageName}_benefits`,
    });
  };

  const renderSectionImage = (section: SectionProps) => {
    const { imageData, src, imageUrl, alt } = section;

    // Highest priority: explicit gatsby image data
    const gatsbyImage =
      (imageData && getImage(imageData)) ||
      (src && getImage(src)) ||
      null;

    if (gatsbyImage) {
      return (
        <GatsbyImage
          className="lg:w-[500px] rounded-lg shadow-shadow-sm"
          alt={alt || "Section image"}
          image={gatsbyImage}
        />
      );
    }

    if (imageUrl) {
      return (
        <img
          className="lg:w-[500px] rounded-lg shadow-shadow-sm object-cover max-h-[400px] w-full"
          src={imageUrl}
          alt={alt || "Section image"}
          loading="lazy"
        />
      );
    }

    // Graceful placeholder if no image
    return (
      <div className="lg:w-[500px] rounded-lg shadow-shadow-sm bg-gray-100 h-[220px] md:h-[260px] lg:h-[320px] flex items-center justify-center text-gray-400 text-sm">
        No image
      </div>
    );
  };

  return (
    <section className="bg-white sm:py-12" id="about">
      <div className="py-8">
        <div className="tw-container">
          <h3 className="text-3xl md:text-4xl text-black font-extrabold -tracking-[0.9px] text-center mb-0">
            {title}
          </h3>
          <p className="text-center text-3xl mb-0">{description}</p>
        </div>
      </div>

      {sections?.map((section: SectionProps, index) => (
        <div
          id={section.id}
          key={section.id || index}
          className={`py-5 md:py-8 ${section.bgColor || ""}`}
        >
          <div className="tw-container">
            <div
              className={`flex flex-col items-center justify-between w-full gap-4 md:gap-6 lg:gap-8 md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-[400px] lg:w-[500px] xl:w-[600px] max-h-[400px]">
                {renderSectionImage(section)}
              </div>

              <div className="flex-1 text-left">
                <h3 className="mb-2 font-semibold text-black md:text-xl lg:text-2xl lg:mb-3">
                  {section.title}
                </h3>
                {section.contentHtml ? (
                  <p
                    className="mb-0 text-sm text-gray-500 md:text-base"
                    dangerouslySetInnerHTML={{
                      __html: section.contentHtml,
                    }}
                  />
                ) : (
                  <p className="mb-0 text-sm text-gray-500 md:text-base">
                    {section.content}
                  </p>
                )}

                <div className="mt-5 md:mt-8 lg:mt-10">
                  {section.linkText && (
                    <Link
                      id={`${section.id}-link`}
                      className="flex text-black underline items-center"
                      to={section.linkHref || "#"}
                      onClick={() =>
                        handleSectionLinkClick(
                          `${section.id}-link`,
                          section.linkHref || "#"
                        )
                      }
                    >
                      <ChevronRightIcon className="inline-block w-3 h-3 mr-2" />
                      {section.linkText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TwoColumn;
