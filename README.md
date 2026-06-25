<div align="center">

# 🚀 Ansh Suyal — Full Stack Developer Portfolio

### A modern, animated, MERN-developer portfolio built with React 19, TypeScript, and Tailwind CSS v4.

[![Live Demo](https://img.shields.io/badge/Live-Demo-6366f1?style=for-the-badge&logo=vercel&logoColor=white)](https://your-live-url.vercel.app)


[View Demo](#-live-demo) · [Report Bug](https://github.com/anshsuyal/My--portfolio/issues) · [Request Feature](https://github.com/anshsuyal/My--portfolio/issues)

</div>

---

## 📖 About

This repository powers the personal portfolio website of **Ansh Suyal**, a final-year BCA student and aspiring Full Stack (MERN) Developer. The site is built as a fully client-rendered single-page application with React Router, animated section transitions, a WebGL hero background, and a working contact form — designed to give recruiters and hiring managers a fast, visual overview of skills, experience, and shipped projects.

The goal of this codebase is to demonstrate **production-grade frontend engineering practices**: strict TypeScript, component composition, accessible markup, theming, and performance-conscious animation — not just a static HTML resume.

---

## ✨ Features

- 🎨 **Animated hero section** with an interactive WebGL distortion sphere (`@react-three/fiber` + `three.js`)
- 🌗 **Light/Dark theme toggle** with `localStorage` persistence and system-aware defaults
- 🧭 **Smooth-scroll navigation** with active-section highlighting (`useActiveSection`) and a mobile slide-in menu
- 🪄 **Scroll-based motion design** throughout every section using `framer-motion` + `lenis` smooth scrolling
- 📬 **Functional contact form** with client-side validation (name/email/message length + format checks) and optional Formspree integration
- 🧩 **Reusable UI primitives** — glass cards, magnetic buttons, animated counters, typewriter effect, glow buttons
- 🖱️ **Custom cursor glow** and tilt-on-hover interactions for a tactile feel
- 📱 **Fully responsive** mobile-first layout
- 🔍 **SEO-ready** — meta description, Open Graph tags, Twitter card tags via `react-helmet-async`
- 🛡️ **Error boundary** wrapping the app to fail gracefully instead of showing a blank screen
- ♿ **Accessible** image `alt` text, `aria-label`s on icon-only controls, and `prefers-reduced-motion` support via `useReducedMotion`

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19, React Router 7 |
| **Language** | TypeScript (strict) |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`) |
| **Animation** | Framer Motion, Lenis (smooth scroll) |
| **3D / Graphics** | Three.js, `@react-three/fiber`, `@react-three/drei` |
| **Forms / Notifications** | Native `<form>` + Formspree, Sonner (toasts) |
| **Linting** | ESLint 10, `typescript-eslint` |
| **Deployment** | Vercel (SPA rewrites configured) |

---

## 🏗 Architecture Overview

The app is a single-route SPA (one `Home` page composed of stacked `<section>` components) rather than a multi-page app — appropriate for a portfolio's UX, but worth knowing going in.

```
main.tsx → BrowserRouter → ErrorBoundary → App (Routes) → AppLayout → Home
                                                                          │
                                          ┌───────────────────────────────┼──────────────────────────────┐
                                          ▼                               ▼                              ▼
                                       Hero            About · Skills · Projects · Experience        Contact
```

- **`pages/`** – route-level page composition (currently just `Home`)
- **`sections/`** – one component per landing-page section (Hero, About, Skills, Projects, Experience, Contact)
- **`components/layout/`** – chrome shared across the app (Navbar, Footer, ScrollProgress, CursorGlow, LoadingScreen)
- **`components/ui/`** – small, reusable, presentation-only primitives (buttons, cards, counters)
- **`hooks/`** – isolated browser/state concerns (theme, media queries, mouse position, typing effect, tilt, active section)
- **`constants/site.ts`** – single source of truth for all personal data (name, links, projects, skills, experience) — content is fully decoupled from JSX, so updating copy never requires touching component logic

State is local-only (no global store) — appropriate at this scale, and avoids over-engineering with Redux/Context for a content site.

---

## 📁 Folder Structure

```
My--portfolio/
├── public/                     # Static assets served as-is
│   ├── Ansh_Sharma_Resume.docx
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── animations/              # Shared framer-motion variants
│   ├── assets/                  # Local images used in components
│   ├── components/
│   │   ├── layout/               # Navbar, Footer, LoadingScreen, ScrollProgress, CursorGlow
│   │   ├── ui/                   # GlassCard, GlowButton, MagneticButton, Particles, etc.
│   │   ├── ErrorBoundary.tsx
│   │   ├── HeroCanvas.tsx        # Three.js hero background
│   │   └── Seo.tsx               # Per-page meta tags via Helmet
│   ├── constants/
│   │   └── site.ts               # All copy: profile, projects, skills, experience
│   ├── hooks/                    # useTheme, useTilt, useTyping, useMediaQuery, etc.
│   ├── pages/
│   │   └── Home.tsx
│   ├── sections/                 # Hero, About, Skills, Projects, Experience, Contact
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── eslint.config.js
├── vite.config.ts
├── vercel.json                   # SPA rewrite rules for deployment
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/anshsuyal/My--portfolio.git

# Move into the project directory
cd My--portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Type-check (`tsc -b`) and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |



## 📘 Usage

This is a single-page personal site — there's no routing to configure beyond the root route. To make it your own:

1. Edit `src/constants/site.ts` to update name, contact details, social links, skills, experience, and project entries.
2. Replace images in `src/assets/`.
3. Set `VITE_FORMSPREE_ENDPOINT` so the contact form actually delivers messages.
4. Run `npm run build` and deploy the `dist/` folder.

---

## 📸 Screenshots
<img width="1917" height="906" alt="image" src="https://github.com/user-attachments/assets/19f11de0-f7a5-4df8-b373-466f46011c44" />
<img width="1917" height="901" alt="image" src="https://github.com/user-attachments/assets/cc61045a-5e79-4f3c-8baf-5c939af937b5" />



---

## 🌐 Live Demo

🔗 **[your-live-url.vercel.app](https://your-live-url.vercel.app)

---


## 📬 Contact

**Ansh Suyal**
📧 [sharmaansh9386@gmail.com]
💼 [LinkedIn](https://www.linkedin.com/in/ansh-sharma-14072005w22)
🐙 [GitHub](https://github.com/anshsuyal)

---
