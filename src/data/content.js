// All CV content lives here so it can be updated without touching components.

export const site = {
  name: "Axel Lennert",
  url: "https://axelkl.com",
  email: "Axel@mysticalscrolls.com",
  location: "Cape Town · South Africa",
  cv: "/CV/Axel-Lennert-CV.pdf",
  status: "Open to internships & freelance",
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
    "experiences across the stack, from React front-ends to SQL and Firebase " +
    "back-ends. Third-year BCom Information Systems student at Stellenbosch " +
    "University.",
};

export const about = [
  "I turn complex ideas into intuitive, well-built web experiences: landing " +
    "pages, full-stack apps, and custom back-ends. I care about the details " +
    "most people never notice, and the performance everyone feels.",
  "I've been building for as long as I can remember: I coded my first " +
    "program in 2014, built my first server in 2019, and started web " +
    "development in 2020. Today I'm studying Information Systems at " +
    "Stellenbosch, still relentlessly curious and still shipping.",
];

export const facts = [
  { key: "Based in", val: "South Africa" },
  {
    key: "Studying",
    val: "BCom Information Systems",
    sub: "Stellenbosch University · 3rd year",
  },
  { key: "Focus", val: "Full-stack web" },
  { key: "Availability", val: "Internships & freelance" },
];

export const skills = [
  {
    title: "Front-end",
    items: [
      "JavaScript & TypeScript",
      "React · Angular",
      "Vite",
      "HTML5 · CSS3",
      "Responsive design",
    ],
  },
  {
    title: "Back-end & data",
    items: [
      "SQL & databases",
      "Firebase / Firestore",
      "Auth & hosting",
      "REST APIs",
      "Analytics",
    ],
  },
  {
    title: "Craft & tools",
    items: ["UI/UX design", "Git & GitHub", "SEO fundamentals", "Web performance"],
  },
];

// Add a `thumb` (path under /public) and optional `href` to each project.
export const projects = [
  {
    title: "AxelKL.com",
    desc:
      "This site: a personal CV and portfolio built with React and Vite, " +
      "hosted on Firebase with a live contact form and analytics.",
    stack: "React · Vite · JavaScript · Firebase",
    thumbLabel: "project screenshot",
    href: "https://github.com/AKLennert/AxelKL",
  },
  {
    title: "Coming soon",
    desc:
      "Each project gets a screenshot, a one-line outcome, and its stack. " +
      "Placeholder for now.",
    stack: "React · TypeScript · SQL",
    thumbLabel: "your project here",
  },
];
