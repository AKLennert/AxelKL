// All CV content lives here so it can be updated without touching components.

export const site = {
  name: "Axel Lennert",
  url: "https://axelkl.com",
  email: "Axel@mysticalscrolls.com",
  location: "Stellenbosch · Western Cape",
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
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
];

export const hero = {
  title: "Full-stack web developer building considered digital products.",
  lede:
    "I'm Axel Lennert, a developer who designs and builds fast, reliable web " +
    "experiences across the stack, from React front-ends to Express, SQL and " +
    "Firebase back-ends. Final-year BCom Management Sciences student " +
    "(Information Systems and Logistics) at Stellenbosch University.",
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
    "and kept the team moving.",
];

export const facts = [
  { key: "Based in", val: "Stellenbosch, South Africa" },
  {
    key: "Studying",
    val: "BCom Management Sciences",
    sub: "Information Systems & Logistics · Stellenbosch University",
  },
  {
    key: "Freelance",
    val: "Mystical Scrolls",
    sub: "Web & mobile studio",
  },
  { key: "Focus", val: "Full-stack web" },
  { key: "Availability", val: "Internships, grad roles & freelance" },
];

// Most recent first. `client` is optional.
export const experience = [
  {
    role: "Founder & Web Developer",
    org: "Mystical Scrolls · freelance studio",
    client: "Client: Colyn & Associates",
    dates: "Jun 2026 – Present",
    points: [
      "Building an attorney and client management app with an attorney " +
        "directory, client referrals, invite-code onboarding and legal " +
        "calculators, on Ionic, Angular and Firebase, packaged for Android.",
      "Engaged for a follow-on business management and analysis system " +
        "with AI-generated insights.",
    ],
  },
  {
    role: "Web Development Intern",
    org: "Max Media",
    dates: "Dec 2025 – Feb 2026",
    points: [
      "Built and deployed Golfy, a golf scoring web app, as a capability " +
        "project: four-ball games, hole-by-hole scoring, leaderboards and " +
        "public profiles on Angular and Firebase.",
    ],
  },
  {
    role: "Administrative Assistant",
    org: "Uniforms Unlimited",
    dates: "Jan 2023 – Oct 2023",
    points: [
      "Processed customer and supplier orders, handled shipping and " +
        "dispatch, ran stock takes and kept the order and inventory " +
        "spreadsheets.",
    ],
  },
];

export const skills = [
  {
    title: "Front-end",
    items: [
      "JavaScript & TypeScript",
      "React · Angular",
      "Ionic · Capacitor (Android)",
      "Material UI · Vite · Zustand",
      "HTML5 · CSS3 · responsive design",
    ],
  },
  {
    title: "Back-end & data",
    items: [
      "Node.js · Express",
      "REST APIs",
      "PostgreSQL & SQL",
      "Firebase: Auth, Firestore, Functions",
      "Paystack payments & webhooks",
    ],
  },
  {
    title: "Craft & tools",
    items: [
      "Team leadership",
      "Git & GitHub workflow",
      "Testing with Vitest",
      "UI/UX design · Figma",
      "SEO & web performance",
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
      "project. As lead developer I set the architecture, ran the team's " +
      "GitHub repo, wrote 179 of 308 commits and built most of the React " +
      "front-end. I scored 89% for my contributions, the top mark in the class.",
    stack: "React · Material UI · Express · PostgreSQL",
    thumbLabel: "Pluto · Lead developer",
  },
  {
    title: "The Study Ledger",
    desc:
      "A storefront for self-paced written courses in full-stack React and " +
      "data analysis in R. Google sign-in, Paystack checkout and instant PDF " +
      "delivery, with purchases recorded only by a signature-verified " +
      "webhook and files served through short-lived signed links.",
    stack: "Angular · Firebase Auth · Firestore · Cloud Functions · Paystack",
    thumb: "/projects/study-ledger.webp",
    href: "https://notes.mysticalscrolls.com",
  },
  {
    title: "Golfy",
    desc:
      "A golf scoring app built during my Max Media internship. Players " +
      "create four-ball games, score hole by hole on any course, and track " +
      "leaderboards, game history and public profiles.",
    stack: "Angular · Angular Material · Firebase",
    thumbLabel: "Golfy · Max Media internship",
    href: "https://golfy.mysticalscrolls.com",
  },
  {
    title: "Dice & Dust",
    desc:
      "A dice-rolling roguelite, in development. The engine is pure " +
      "TypeScript with a seeded RNG, so a Cloud Function can replay every " +
      "run to verify leaderboard scores. Engine logic has 100% test coverage.",
    stack: "TypeScript · React · Zustand · Firebase · Vitest",
    thumbLabel: "Dice & Dust · In development",
  },
];
