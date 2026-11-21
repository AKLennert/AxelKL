# AxelKL.com

Personal CV and portfolio for Axel Lennert, live at [axelkl.com](https://axelkl.com).

Built with React 19 + Vite (JavaScript) and React Router, hosted on Firebase Hosting (project `axelkl-cv`).

## Develop

```sh
npm install
npm run dev       # http://localhost:5173
npm run lint
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Deploy

```sh
npm run build
firebase deploy --only hosting
```

## Editing content

- **CV content** (hero text, about, facts, skills, projects, links) lives in `src/data/content.js`.
- **CV PDF**: replace `public/CV/Axel-Lennert-CV.pdf`.
- **Project screenshots**: put images in `public/projects/` and set `thumb: "/projects/name.png"` on the project in `content.js`.
- **Styles**: `src/styles/site.css` (light/dark tokens at the top).

## Structure

```
src/
  main.jsx              router + analytics bootstrap
  App.jsx               routes: /, /contact, /thanks, 404
  firebase.js           Firebase config; Analytics is lazy-loaded once measurementId is set
  data/content.js       all CV copy
  components/           Nav, Footer, Hero, About, Skills, Work, ContactCta, ...
  pages/                Home, Contact (FormSubmit), Thanks, NotFound
  hooks/                useTheme, useActiveSection, useDocumentTitle
```

The contact form posts to FormSubmit, which emails the message and redirects to `/thanks`.
