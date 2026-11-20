# Babita Dhiman — Frontend Developer Portfolio

React + Vite + Tailwind CSS v4 portfolio.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Where to edit

| What | File |
|---|---|
| Name, email, GitHub, LinkedIn, resume path, experience months, typing roles | `src/data/site.js` |
| Projects (filters + counts are generated automatically) | `src/data/projects.js` |
| Section copy (About, Skills, Services, Education) | `src/components/*.jsx` |
| Colours / global styles | `src/index.css` |
| Resume | `public/resume.pdf` |

## Before publishing

- Replace `your-email@example.com`, GitHub and LinkedIn URLs in `src/data/site.js`
- Add `public/resume.pdf`
- There is no contact form; the Hero, Services and Footer buttons open the visitor's email app using the email in `src/data/site.js`.
