import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type ToolsTechnologiesProps = {
  title?: string;
  description?: string;
  descriptionHtml?: string;
  topRowTools?: Array<{ name: string; image: any }>;
  bottomRowTools?: Array<{ name: string; image: any }>;
};

const ToolsTechnologies = ({
  title = "Tools & Technologies",
  description = "We use leading tools for reliable results",
  descriptionHtml,
  topRowTools,
  bottomRowTools,
}: ToolsTechnologiesProps) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  // Function to get image data by relative path
  const getImageByPath = (imagePath: string) => {
    return data.allFile.nodes.find(
      (node) => node.relativePath === imagePath
    );
  };

  const defaultTopRow = [
    { name: "Sketchup", image: "company/sketchup.png" },
    { name: "Archicad", image: "company/archicad.png" },
    { name: "Autodesk", image: "company/autodesk.png" },
  ];

  const defaultBottomRow = [
    { name: "Revit", image: "company/revit.png" },
    { name: "Solibri", image: "company/solibri.png" },
  ];

  const topTools = topRowTools || defaultTopRow;
  const bottomTools = bottomRowTools || defaultBottomRow;

  return (
    <section className="py-10 md:py-16 bg-[#FEF4B4]">
      <div className="tw-container">
        <div className="flex flex-col items-start justify-between gap-6 md:items-center md:flex-row mb-8">
          <div className="text-center flex flex-col max-w-3xl md:text-left">
            <h2 className="text-3xl md:text-4xl text-black font-extrabold -tracking-[0.9px] max-w-[680px] mb-3">
              {title}
            </h2>
            {descriptionHtml ? (
              <p
                className="text-gray-700 text-base md:text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
              />
            ) : (
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">{description}</p>
            )}
          </div>

          <div className="grid grid-rows-1 md:grid-rows-2 gap-6">
            <div className="flex flex-row gap-4">
              {topTools.map((tool) => {
                const imageData = getImageByPath(tool.image);
                return (
                  <div
                    key={tool.name}
                    className="flex-1 bg-white rounded-lg p-6 flex items-center justify-center min-w-[140px] min-h-[100px]"
                  >
                    {imageData && imageData.childImageSharp && (
                      <GatsbyImage
                        image={getImage(imageData)}
                        alt={tool.name}
                        className="h-auto w-auto max-w-[110px] max-h-[80px]"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-row gap-4">
              {bottomTools.map((tool) => {
                const imageData = getImageByPath(tool.image);
                return (
                  <div
                    key={tool.name}
                    className="flex-1 bg-white rounded-lg p-6 flex items-center justify-center min-w-[140px] min-h-[100px]"
                  >
                    {imageData && imageData.childImageSharp && (
                      <GatsbyImage
                        image={getImage(imageData)}
                        alt={tool.name}
                        className="w-auto h-auto max-w-[110px] max-h-[80px]"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsTechnologies;
