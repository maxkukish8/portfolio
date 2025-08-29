# Portfolio — Maksym Kulish

A single-page portfolio built with Vue 3 and TypeScript.
Design direction draws on Ukrainian folk-art motifs and modern, minimal UI.
Visual inspiration: Keita Yamada (p5aholic).


# 🚀 Features

- One-page layout with sidebar nav (Home, Projects, Contact, FAQ, Copycats)
- Animated nav marker (dust burst, smooth positioning)
- Scroll-driven “spinning plates” in the hero (direction & speed follow wheel/trackpad)
- Responsive design (desktop & mobile)
- Light/Dark theme toggle (two explicit buttons)
- Accessible patterns (keyboard, visible focus, reduced motion support)
- Strict TypeScript with typed component props
- Modular architecture (business logic separated from UI)
- Less with tokens, shared variables, and themeable CSS variables


# Stack & Architecture

- Framework & Language: Vue 3, TypeScript
- Routing/State: vue-router; Pinia (optional, modularized by feature)
- Styling: Less, design tokens, theming (light/dark via :root / .dark)
- Tooling: Vite, ESLint/Prettier, vite-tsconfig-paths (path aliases)
- A11y & UX: WCAG-minded semantics, keyboard nav, prefers-reduced-motion


# Project Structure

src/
├─    assets/  
│        ├─image/            # images & icons (e.g., plate.png/2/3.png, github icons)  
│        ├─fonts/            # local webfonts (optional)  
├─    components/  
│        ├─ReaperIcon.vue  
│        ├─SpinningPlate.vue  
├─    features/  
│        ├─projects/  
│            ├─ui/ProjectsList.vue  
│            ├─model/          # business logic (types, mappers, services)  
├─   pages/
│        ├─Home/HomePage.vue  
│        ├─Projects/ProjectsPage.vue  
│        ├─Contact/ContactPage.vue  
│        ├─StackArchitecture/StackArchitecturePage.vue  
├─    router/  
│        ├─index.ts  
├─    shared/  
│        ├─styles/           # Less: variables, tokens, global resets  
│        ├─ui/               # shared UI: SidebarNav.vue, ThemeToggle.vue, etc.  
├─    App.vue  
├─    main.ts  


# Path Aliases (tsconfig + Vite)

- @/* → src/*
- @ui/* → src/shared/ui/*
- @pages/* → src/pages/*
- @features/* → src/features/*


# Getting Started

## Prerequisites
- Node.js 18+
- npm (or pnpm/yarn if you prefer)

## Install
npm install

## Dev Server
npm run dev

## Production Build & Preview
npm run build  
npm run preview

## Lint & Format (if configured)
npm run lint  
npm run format

## Theming
- Theme is toggled by adding/removing a .dark class on <html>.
- Two explicit buttons Light / Dark persist the choice in localStorage. 
- Color tokens live in Less and compile to CSS variables (consumed by components).
- 
## Accessibility
- Semantic landmarks (<nav>, <main>, headings)
- Keyboard navigation, visible :focus-visible states
- Motion-sensitive effects honor @media (prefers-reduced-motion: reduce)
- Reasonable color contrast targets (AA).
│ Tip: verify with Lighthouse / axe DevTools.

## Performance Notes
- Route-level code splitting via dynamic imports
- Lightweight CSS (Less → minimal CSS variables)
- GPU-friendly transforms for animations (transform, not top/left)
- 
## Credits
- Design inspiration: Keita Yamada — p5aholic.me
  │“Design inspired by Keita Yamada (p5aholic).”
- Cultural influence: Ukrainian folk-art elements and textures.
- Fonts & Icons: Kyiv*Type — commissioned for the Kyiv city identity by Projector, Dmytro Bulanov Creative Büro, and Banda Agency.