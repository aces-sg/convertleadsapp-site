import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          titleTemplate
          description
          image
          siteUrl
          url
          favicon
          twitterUsername
        }
      }
      siteconfigYaml: allSiteconfigYaml {
        nodes {
          region
          site {
            title
            titleTemplate
            description
            siteUrl
            url
            image
            favicon
            twitterUsername
            regionName
            currency
            locale
          }
          contact {
            company
            officeLabel
            phone
            phoneFormatted
            whatsapp
            email
            supportEmail
            address {
              street
              unit
              city
              state
              postal
              country
              full
            }
            hours
            hoursShort
          }
          social {
            linkedIn
            twitter
            facebook
            instagram
          }
          business {
            registrationType
            registrationNumber
            taxId
          }
        }
      }
    }
  `);

  // Determine region from environment variable or default to 'sg'
  const region = process.env.GATSBY_REGION || process.env.REGION || "sg";

  // Get regional configuration from YAML by filtering nodes array
  const regionalConfig = data.siteconfigYaml.nodes.find(
    (node) => node.region === region
  );

  // Merge basic siteMetadata with regional config
  return {
    ...data.site.siteMetadata,
    ...regionalConfig.site,
    region: regionalConfig.region,
    contact: regionalConfig.contact,
    social: regionalConfig.social,
    business: regionalConfig.business,
  };
};
