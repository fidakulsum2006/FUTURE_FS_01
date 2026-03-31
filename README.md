# My Portfolio

A personal portfolio website built with React to showcase profile, skills, and selected projects.

Live site: [future-fs-01-tau-taupe.vercel.app](https://future-fs-01-tau-taupe.vercel.app)

## Overview

This project includes:

- Hero section with introduction and quick actions
- About section with highlights and metrics
- Skills section
- Projects section with project cards and tech stack tags
- Contact section with client-side form validation and status messages
- Scroll reveal animations with reduced-motion support

## Tech Stack

- React
- JavaScript (ES6+)
- CSS (component-based styles)
- Create React App tooling (`react-scripts`)

## Project Structure

```text
my_portfolio/
  public/
  src/
    components/
      Navbar.js
      Hero.js
      About.js
      Skills.js
      Projects.js
      Contact.js
    styles/
      Navbar.css
      Hero.css
      About.css
      Skills.css
      Projects.css
      Contact.css
    images/
    App.js
    App.css
    index.js
  package.json
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm start
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode.
- `npm test` - Runs tests in watch mode.
- `npm run build` - Creates a production build in the `build/` folder.
- `npm run eject` - Ejects CRA config (irreversible).

## Customization Guide

- Update personal intro and headline: `src/components/Hero.js`
- Update bio and about content: `src/components/About.js`
- Update skills list: `src/components/Skills.js`
- Update project cards and images: `src/components/Projects.js` and `src/images/`
- Update contact details and links: `src/components/Contact.js`
- Update overall reveal behavior: `src/App.js`

## Deployment

Production URL: [https://future-fs-01-tau-taupe.vercel.app](https://future-fs-01-tau-taupe.vercel.app)

Build the production bundle:

```bash
npm run build
```

Deploy the generated `build/` directory using any static hosting platform (for example: Netlify, Vercel, GitHub Pages, or Firebase Hosting).

## Notes

- The contact form currently performs frontend validation only (no backend email/API integration yet).
- Replace placeholder social links with your real GitHub and LinkedIn profiles before deployment.
