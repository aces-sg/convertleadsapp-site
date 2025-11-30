import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FaFilePdf, FaPeopleArrows } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { SiAutocad } from "react-icons/si";

export const sections = () => {
  const imagedata = useStaticQuery(graphql`
    {
      schematic: file(relativePath: { eq: "corenet.webp" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      clash: file(relativePath: { eq: "schematic.webp" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      cde: file(relativePath: { eq: "cde.webp" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      twothree: file(relativePath: { eq: "2dto3d.webp" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  const sectiondata = [
    {
      id: "gtm-review",
      title: "Templates and Standards",
      content: `Use your existing CAD standards to ensure all drawings reflect your firm’s brand. Don’t have a standard yet? Bimeco can create reusable templates tailored to your projects.`,
      src: imagedata.clash,
    },
    {
      id: "gtm-iso",
      title: "CAD Drawings from BIM",
      content: `For complex projects with multiple services, creating a BIM model will speed up the production of CAD files. When designs change, the BIM model is updated, and the updated CAD files are automatically generated.`,
      src: imagedata.twothree,
      linkText: "Benefits of BIM",
      linkHref: "/blog/idd-ice-meetings",
    },
    {
      id: "gtm-bim",
      title: "Regulatory Compliance",
      content: `Ensure compliance with URA, BCA, PUB, SCDF, and NEA requirements. We collaborate with Qualified Persons to prepare CAD submissions that meet all regulatory standards.
`,
      linkText: null,
      linkHref:
        "/blog/scan-to-bim",
      src: imagedata.schematic,
      bgColor: "bg-white",
    }
  ];
  console.log('data is', sectiondata)
  return sectiondata
};

export const WhyData = [
  {
    id: 1,
    img: "",
    icon: <FaFilePdf size={30} />,
    title: "Step 1: Share PDF Files",
    description:
      "Arrange for the collection & transfer of CAD files.",
  },
  {
    id: 2,
    img: "./4d-bim-black.svg",
    icon: <SiAutocad size={30} />,
    title: "Step 2: PDF to CAD",
    description:
      "Our BIM teams convert your PDF files to the latest CAD formats",
  },
  {
    id: 3,
    img: "./5d-bim-black.svg",
    icon: <FaCheckCircle size={30} />,
    title: "Step 3: Review",
    description:
      "Check final CAD files for accuracy and make any necessary revisions.",
  },
];

export const HowData = [
  {
    id: 1,
    img: "",
    icon: <FaFilePdf size={30} />,
    title: "Step 1: Share Files",
    description:
      "Share .pdf, .dwg, .dgn, and other CAD formats over a secure file submission link.",
  },
  {
    id: 2,
    img: "./4d-bim-black.svg",
    icon: <FaPeopleArrows size={30} />,
    title: "Step 2: Project Assignment",
    description:
      "Our BIM experts will review your project and allocate it to the right team.",
  },
  {
    id: 3,
    img: "./5d-bim-black.svg",
    icon: <MdRateReview size={30} />,
    title: "Step 3: BIM Delivery",
    description:
      "Our BIM Team delivers your project within the agreed timeline.",
  },
];

export const faq = [
  {
    id: "cad-vs-bim",
    question: "What is the difference between CAD and BIM?",
    answer:
      "CAD files are typically 2D drawings created using software like AutoCAD or MicroStation. BIM files, on the other hand, are 3D models that contain embedded data such as materials, schedules, and cost information.",
  },
  {
    id: "cad-cost",
    question: "How much does it cost to update my CAD files?",
    answer:
      "The cost of updating CAD files depends on the volume and complexity of the files. We offer competitive pricing and can provide a quote after reviewing your files. Please prepare all available files prior to your appointment.",
  },
  {
    id: "pdf-to-cad",
    question: "My drawings are old and faded—can you still convert them to CAD?",
    answer:
      "Yes, we can. While faded drawings can be challenging to digitize, our team of experts can manually trace them to recreate accurate CAD files.",
  },
  {
    id: "bim-formats",
    question: "What CAD and BIM file formats do you support?",
    answer:
      "We support common CAD formats such as AutoCAD (.dwg) and MicroStation (.dgn), as well as BIM formats like Revit (.rvt), Archicad (.pln), and IFC.",
  },
  {
    id: 5,
    question: "Can you convert large-format engineering drawings (i.e. A0, A1, A2) to CAD?",
    answer:
      "Yes. Engineering drawings are often in A0 or A1 sizes. We have large-format scanners to digitize these documents before converting them to CAD. You can schedule an appointment for our customer service team to collect your files.",
  }
];
