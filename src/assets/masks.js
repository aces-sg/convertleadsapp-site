export const emailMask = [
  {
    regexp: /[\w\[\]`!@#$%\^&*()={}:;<>+'-]*/,
    placeholder: "Your Email Address",
  }
];

export const passwordRequirements = [
  {
    regexp: new RegExp(
      "(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$ %^&*-]).{8,}"
    ),
    message: "Password requirements not met.",
    status: "error"
  },
];

export const passwordRulesStrong = [
  {
    regexp: new RegExp("(?=.*?[A-Z])"),
    message: "One uppercase letter",
    status: "error",
  },
  {
    regexp: new RegExp("(?=.*?[a-z])"),
    message: "One lowercase letter",
    status: "error",
  },
  {
    regexp: new RegExp("(?=.*?[#?!@$ %^&*-])"),
    message: "One special character",
    status: "error",
  },
  {
    regexp: new RegExp(".{8,}"),
    message: "At least 8 characters",
    status: "error",
  },
];

export const phoneMask = [
  {
    length: 2,
    options: ["+65", "+60"],
    regexp: /^[0-9]{1,6}$/,
    placeholder: "+6598182777",
  },
  {
    regexp: /^[0-9]{1,12}$/,
    placeholder: "",
  },
];

export const otpMask = [
  {
    length: 6,
    regexp: /^[0-9]{1,12}$/,
    placeholder: "******"
  },
];

export const types = [
  "null",
  "alumni",
  "engineer",
  "dropout",
  "terminated",
  "breach-contract",
  "external",
  "senior-engineer",
  "freelancer",
  "technical-specialist",
  "bim-coordinator",
]

export const status = [
  "unpaid",
  "paid",
  "confirmed"
]

export const gender = ["male", "female", "others"]

export const defaultOptions = {
  "nationality": ["Singaporean", "Singapore PR", "Malaysian", "Others"],
  "gender": ["male", "female", "others"],
  "permits": [
    "Singaporean",
    "Singapore PR",
    "Work Permit",
    "SPASS",
    "Employment Pass",
    "Others"
  ],
  "ns": ["Completed", "Enlisting", "Exempted", "N.A."],
  "position": ["BIM Engineer", "HR Executive", "Finance Executive", "Others"],
  "institution": [ 
    "Singapore Polytechnic (SP)",
    "Ngee Ann Polytechnic (NP)",
    "Nanyang Polytechnic (NYP)",
    "Temasek Polytechnic (TP)",
    "Republic Polytechnic (RP)",
    "ITE College Central",
    "ITE College East",
    "ITE College West",
    "National University of Singapore",
    "Nanyang Technological University",
    "Singapore Management University",
    "Singapore University of Technology and Design",
    "Singapore Institute of Technology",
    " Singapore University of Social Sciences",
    " Others"],
    "referral": ["Social Media", "Company's Career Page", "Referral from Friend", "Wendy ( HR )", "ST Koh ( HR )"]
}

export const interviewTimes = [
  "09:00 AM",
  "10:00 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
]