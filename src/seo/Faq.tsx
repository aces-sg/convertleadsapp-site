import React from "react";

const FAQServiceBIMSubmission = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What file formats are supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By default, we support Archicad and Revit formats because most buildings are modelled in that software. However, a growing number of companies require BIM models to be exported in a localised version of IFC (i.e. openBIM). We cater to such requests as well.",
      },
    },
    {
      "@type": "Question",
      name: "How detailed will the BIM models be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For 80% of requirements, LOD 350 is sufficient. However, for clients with additional specifications in pdf that they want to model into their BIM model, they can submit those files as well.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a warranty period for the BIM models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All completed models are managed via our internal file submission systems. We will allow unlimited modifications until the project is marked as complete.",
      },
    },
    {
      "@type": "Question",
      name: "Do you accept PDF drawings / point cloud files?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While most clients need to convert CAD drawings to BIM, we understand that some clients may only have pdf files to work with. We can also help develop BIM drawings from pdf files and also point clouds.",
      },
    },
    {
      "@type": "Question",
      name: "Will the BIM team be stationed onsite?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We understand that in some cases, you may need the BIM manager to be available in-person to conduct co-ordination meetings, and this is an available option under our plan.",
      },
    },
  ],
};

const FaqCadService = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between CAD and BIM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CAD files are typically 2D drawings created using software like AutoCAD or MicroStation. BIM files, on the other hand, are 3D models that contain embedded data such as materials, schedules, and cost information.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to update a single CAD file?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The typical cost to update a single CAD file ranges from SGD 50 to 100. A project setup fee may apply for new projects.",
      },
    },
    {
      "@type": "Question",
      name: "My drawings are old and faded—can you still convert them to CAD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we can. While faded drawings can be challenging to digitize, our team of experts can manually trace them to recreate accurate CAD files.",
      },
    },
    {
      "@type": "Question",
      name: "What CAD and BIM file formats do you support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We support common CAD formats such as AutoCAD (.dwg) and MicroStation (.dgn), as well as BIM formats like Revit (.rvt), Archicad (.pln), and IFC.",
      },
    },
    {
      "@type": "Question",
      name: "Can you scan large-format engineering drawings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Engineering drawings are often in A0 or A1 sizes. We have large-format scanners to digitize these documents before converting them to CAD. You can schedule an appointment for our customer service team to collect your files.",
      },
    },
    {
      "@type": "Question",
      name: "Will you revise the drawings if there are changes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide timely revisions based on your updated design inputs throughout the project.",
      },
    },
    {
      "@type": "Question",
      name: "Are your drafters familiar with local submission codes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We assign drafters experienced with URA, BCA, and SCDF requirements to ensure compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Can you follow our CAD standards and templates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Share your templates, title blocks, and layering conventions at project start, and we’ll align accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "What types of inputs and software do you support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with hand sketches, PDFs, and CAD files using AutoCAD, MicroStation, and other major platforms.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer fast turnaround and quality assurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We accommodate urgent requests where possible and follow a structured QA/QC process to ensure accuracy and consistency.",
      },
    },
    {
      "@type": "Question",
      name: "What type of CAD drawings can you create?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Whether you're a civil contractor or piping consultant, our team can create detailed CAD drawings tailored to your scope.",
      },
    },
  ],
};

const FaqProjectWise = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "@id": "#what-is-cde",
      name: "What is a Common Data Environment (CDE)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CDE is a centralized platform for collecting, managing, and sharing all project information—documents, models, and data—across the asset lifecycle.",
      },
    },
    {
      "@type": "Question",
      "@id": "#cde-vs-dropbox",
      name: "How is a CDE different from Google Drive or Dropbox?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike general file-sharing tools, a CDE provides BIM-specific functionality like model federation, clash detection, version control, and ISO 19650 workflows.",
      },
    },
    {
      "@type": "Question",
      "@id": "#iso-19650-compliance",
      name: "Is ProjectWise ISO 19650 compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ProjectWise supports ISO 19650 naming conventions, approval workflows, and metadata structures to ensure international BIM compliance.",
      },
    },
    {
      "@type": "Question",
      "@id": "#supported-file-formats",
      name: "What file formats can ProjectWise handle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ProjectWise supports Revit (.rvt), IFC, DWG, PDF, and many other common BIM and CAD formats via Synchronizers and iTwin plugins.",
      },
    },
    {
      "@type": "Question",
      "@id": "#web-review",
      name: "Can I review and comment on models in a web browser?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ProjectWise provides a web-based viewer for reviewing, federating, and commenting on models without requiring desktop software. Imodels are created from BIM applications for further review on the web.",
      },
    },
    {
      "@type": "Question",
      "@id": "#who-uses-cde",
      name: "Who should use the CDE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ProjectWise is suitable for architects, engineers, contractors, project managers, quantity surveyors, and asset owners—anyone involved in the project delivery process.",
      },
    },
    {
      "@type": "Question",
      "@id": "#access-control",
      name: "How is access controlled in ProjectWise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Access can be restricted by role, folder, document, or workflow stage, ensuring users only see the data relevant to them.",
      },
    },
    {
      "@type": "Question",
      "@id": "#pricing-tiers",
      name: "What are the licensing options for ProjectWise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ProjectWise is offered through tiered pricing plans: Manage (SGD 396), Engineer (SGD 1507), and Validate (SGD 2816), each offering different levels of functionality.",
      },
    },
    {
      "@type": "Question",
      "@id": "#support-included",
      name: "Does ProjectWise include training and support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Bimeco includes onboarding, training services, and customer support as part of your ProjectWise subscription.",
      },
    },
    {
      "@type": "Question",
      "@id": "#digital-twin-integration",
      name: "Can ProjectWise integrate with digital twins and facilities management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. ProjectWise ensures structured handover data that can feed directly into digital twin platforms for long-term operational efficiency.",
      },
    },
  ],
};

const FAQProductBIM = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Buildings Worksuite a CAD application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buildings Worksuite includes both CAD and BIM tools. It’s a comprehensive platform designed for drafting, modeling, and coordinating across design and construction disciplines.",
      },
    },
    {
      "@type": "Question",
      name: "Does it support BIM formats such as Revit, ArchiCAD, and IFC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Buildings Worksuite supports industry-standard BIM formats including Revit, ArchiCAD, and IFC. This ensures smooth interoperability when developing coordinated construction models.",
      },
    },
    {
      "@type": "Question",
      name: "Is Buildings Worksuite ISO 19650 compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buildings Worksuite provides BIM authoring capabilities that support ISO 19650 workflows. For full CDE compliance and document control, it can be integrated with ProjectWise.",
      },
    },
    {
      "@type": "Question",
      name: "Does Buildings Worksuite have clash detection features?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Buildings Worksuite allows you to model MEP and structural systems in 3D and perform basic clash detection. For advanced clash detection and coordination workflows, ProjectWise is recommended.",
      },
    },
    {
      "@type": "Question",
      name: "Can I review and mark up issues in Buildings Worksuite?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buildings Worksuite is primarily a BIM authoring tool. For web-based model review, markup, and issue tracking, we recommend using ProjectWise Manage in combination with the Worksuite.",
      },
    },
  ],
};

export const faqBimJsonLd = () => {
  let schema: string = JSON.stringify(FAQServiceBIMSubmission);
  return <script type="application/ld+json">{schema}</script>;
};

export const faqCadJsonLd = () => {
  let schema: string = JSON.stringify(FaqCadService);
  return <script type="application/ld+json">{schema}</script>;
};

export const faqProjectwiseJsonLd = () => {
  let schema: string = JSON.stringify(FaqProjectWise);
  return <script type="application/ld+json">{schema}</script>;
};

export const FAQSoftwareBIMJsonLd = () => {
  let schema: string = JSON.stringify(FAQProductBIM);
  return <script type="application/ld+json">{schema}</script>;
};

// Dynamic FAQ schema generator for service pages
interface FaqItem {
  question: string;
  answer: string;
}

export const generateFaqSchema = (faqs: FaqItem[]) => {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return schema;
};

export const DynamicFaqJsonLd = ({ faqs }: { faqs: FaqItem[] }) => {
  const schema = generateFaqSchema(faqs);
  if (!schema) return null;

  const schemaString = JSON.stringify(schema);
  return <script type="application/ld+json">{schemaString}</script>;
};
