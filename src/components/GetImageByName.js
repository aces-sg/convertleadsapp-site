import { useStaticQuery, graphql } from "gatsby";

const GetImageByName = (name) => {
  const data = useStaticQuery(
    graphql`
      query AllImageQuery {
        allImageSharp {
          edges {
            node {
              parent {
                ... on File {
                  id
                  base
                }
              }

              gatsbyImageData
            }
          }
        }
      }
    `
  );
  const getImageHome = (name) => {
    var imageData = null;
    data.allImageSharp.edges.map((n) => {
      if (n.node.parent.base === name) {
        imageData = n.node.gatsbyImageData;
      }

      return imageData;
    });
    return imageData;
  };

  return getImageHome(name);
};

export default GetImageByName;
