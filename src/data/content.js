// All CV content lives here so it can be updated without touching components.

export const site = {
  name: "Axel Lennert",
  url: "https://axelkl.com",
  email: "Axel@mysticalscrolls.com",
  location: "Cape Town · South Africa",
  cv: "/CV/Axel-Lennert-CV.pdf",
  status: "Open to internships, graduate roles & freelance",
};

export const links = {
  github: { href: "https://github.com/AKLennert", label: "GitHub / AKLennert" },
  linkedin: {
    href: "https://www.linkedin.com/in/aklennert",
    label: "LinkedIn / in/aklennert",
  },
};

export const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
];

export const hero = {
  title: "Full-stack web developer building considered digital products.",
  lede:
    "I'm Axel Lennert, a developer who designs and builds fast, reliable web " +
    "experiences across the stack, from React front-ends to Express, SQL and " +
    "Firebase back-ends. Final-year BCom Information Systems student at " +
    "Stellenbosch University.",
};

export const about = [
  "I turn complex ideas into intuitive, well-built web experiences: landing " +
    "pages, full-stack apps, and custom back-ends. I care about the details " +
    "most people never notice, and the performance everyone feels.",
  "I've been building for as long as I can remember: I coded my first " +
    "program in 2014, built my first server in 2019, and started web " +
    "development in 2020. Today I'm studying Information Systems at " +
    "Stellenbosch, still relentlessly curious and still shipping.",
  "This year I was lead developer on Pluto, a family finance app built by " +
    "a four-person team. I set the architecture, ran our GitHub repository " +
    "and kept the team moving, and we finished with the top mark in the " +
    "class (89%).",
];

export const facts = [
  { key: "Based in", val: "South Africa" },
  {
    key: "Studying",
    val: "BCom Information Systems",
    sub: "Stellenbosch University · Final year",
  },
  {
    key: "Recognition",
    val: "Top of class, 89%",
    sub: "Lead developer · group project",
  },
  { key: "Focus", val: "Full-stack web" },
  { key: "Availability", val: "Internships, grad roles & freelance" },
];

export const skills = [
  {
    title: "Front-end",
    items: [
      "JavaScript & TypeScript",
      "React · Angular",
      "Material UI · Vite",
      "HTML5 · CSS3",
      "Responsive design",
    ],
  },
  {
    title: "Back-end & data",
    items: [
      "Node.js · Express",
      "REST APIs",
      "SQL & relational databases",
      "Firebase / Firestore",
      "Auth, hosting & analytics",
    ],
  },
  {
    title: "Craft & tools",
    items: [
      "Team leadership",
      "Git & GitHub workflow",
      "UI/UX design · Figma",
      "SEO fundamentals",
      "Web performance",
    ],
  },
];

// Each project: title, desc, stack, and optionally
//   thumb      – screenshot under /public (16:10 works best), e.g. "/projects/x.webp"
//   thumbLabel – placeholder text shown when there's no screenshot
//   href       – live site
//   repo       – public source code
export const projects = [
  {
    title: "Pluto",
    desc:
      "A family finance and budgeting app, built as a university group " +
      "project. As lead developer I set the architecture and ran the team's " +
      "GitHub repo; the project earned the top mark in the class (89%).",
    stack: "React · Material UI · Express · SQL",
    thumbLabel: "Pluto · Lead developer",
  },
  {
    title: "The Study Ledger",
    desc:
      "A storefront for self-paced written courses in full-stack React and " +
      "data analysis in R. Google sign-in, Paystack checkout and instant PDF " +
      "delivery, with every future lesson added to a buyer's library free.",
    stack: "Angular · Firebase Auth · Firestore · Cloud Functions · Paystack",
    thumb: "/projects/study-ledger.webp",
    href: "https://notes.mysticalscrolls.com",
  },
  {
    title: "AxelKL.com",
    desc:
      "This site: a personal CV and portfolio built with React and Vite, " +
      "hosted on Firebase with a live contact form and analytics.",
    stack: "React · Vite · JavaScript · Firebase",
    thumb: "/projects/axelkl.webp",
    repo: "https://github.com/AKLennert/AxelKL",
  },
];
