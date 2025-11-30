// Central configuration for all portfolio profiles

export interface PortfolioProfile {
  slug: string;
  name: string;
  description: string;
  photoRelativePath: string;
}

export const portfolioProfiles: Record<string, PortfolioProfile> = {
  azree: {
    slug: "azree",
    name: "Muhammad Azree Bin Abdul Karim",
    description:
      "BIM Manager and BIM Trainer with more than 5 years of experience in the Built Environment. Proficient in CAD and BIM software, capable of coordinating and managing all trades (Architecture, Civil, Structure, Mechanical, and Electrical) according to project requirements. Bachelor of Engineering (Hons) in Electrical Power Engineering.",
    photoRelativePath: "profiles/azree.png",
  },
  ben: {
    slug: "ben",
    name: "Benigno Baltazar Doctolero",
    description:
      "BIM Manager with extensive expertise in CAD and BIM workflows. With seven years of hands-on site experience and a strong foundation as a BIM Coordinator, he excels in managing multidisciplinary teams, optimizing BIM processes, and resolving design conflicts efficiently.",
    photoRelativePath: "profiles/ben.jpeg",
  },
  darsh: {
    slug: "darsh",
    name: "Darshiini Pillai",
    description:
      "BIM Lead with experience delivering multi-disciplinary rail and infrastructure projects. Skilled in Revit, AutoCAD, Navisworks, and ACC/BIM 360, with expertise in clash detection, CSD/SEM/CCSM, as-built consolidation, and full drawing production for lifts, escalators, and architectural/structural interfaces. Singapore PR; B.Sc. (Architecture), MBA (in progress).",
    photoRelativePath: "profiles/darshiini-pillai.jpeg",
  },
  faiz: {
    slug: "faiz",
    name: "Faiz Zalani",
    description:
      "BIM Coordinator with expertise in model coordination, P&ID management, and infrastructure projects. Skilled in Revit, AutoCAD, Navisworks, OpenPlant, and Revizto, he ensures accurate equipment integration, data synchronization, and compliance with project standards.",
    photoRelativePath: "profiles/faiz.jpeg",
  },
  fath: {
    slug: "fath",
    name: "Nur Fathiah Binti Mohd Shah",
    description:
      "BIM Coordinator with hands-on delivery across Architectural, Structural, and MEP (ACMV/Electrical/Piping) scopes. Experienced in end-to-end drawing production, BIM model management, clash detection (Navisworks), multidisciplinary coordination, and precast/façade detailing.",
    photoRelativePath: "profiles/fathiah-mohd-shah.jpeg",
  },
  low: {
    slug: "low",
    name: "Low Pak Sing",
    description:
      "Seasoned project management professional with over 40 years of experience, including 25+ years specializing in coordination, program planning, and project controls. His expertise spans sports facilities, airports, high-rise buildings, rail infrastructure, and tunneling projects.",
    photoRelativePath: "profiles/low.png",
  },
  sulatt: {
    slug: "sulatt",
    name: "Su Latt Tun",
    description:
      "Dedicated and ambitious Civil Engineer with over four years of experience in the built environment sector, specializing in BIM coordination, structural drafting, and site supervision. She has a proven track record working with major contractors like Lendlease Singapore and Gammon Construction.",
    photoRelativePath: "profiles/sulatt.png",
  },
  tristan: {
    slug: "tristan",
    name: "Tristan D'Conceicao",
    description:
      "BIM Coordinator with experience in infrastructure and rail projects. Skilled in OpenRoads, OpenBuildings, Revit, AutoCAD, and Microstation. Expertise in 3D modeling, coordination, and technical training for BIM workflows.",
    photoRelativePath: "profiles/tristan.png",
  },
};
