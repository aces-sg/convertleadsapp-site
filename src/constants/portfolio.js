// Portfolio validation constants
// These are the single source of truth for valid portfolio field values
// Used by both gatsby-node.js (runtime validation) and TypeScript types (compile-time)

exports.VALID_SOFTWARE_TOOLS = [
  "AutoCAD",
  "Revit",
  "Navisworks",
  "ArchiCAD",
  "MicroStation",
  "BIM 360",
  "ACC",
  "BIM Collaborate Pro",
  "ProjectWise",
  "OpenBuildings",
  "OpenPlant",
  "OpenPlant P&ID",
  "OpenRoads",
  "STAAD.Pro",
  "OpenRail",
  "Revizto",
  "Primavera P6",
  "Microsoft Project",
  "Adobe Photoshop",
  "Synchro 4D",
  "Civil 3D",
  "Dynamo",
  "dRufus",
  "BEXEL",
];

exports.VALID_DISCIPLINES = [
  "Electrical",
  "Structure",
  "Architecture",
  "Plumbing",
  "Plumbing & Sanitary",
  "Civil",
];

exports.VALID_CATEGORIES = ["road", "rail", "airport", "plant"];
