<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
</div>

<h1 align="center">🌿 GreenNest Botanical Storefront</h1>

<p align="center">
  A high-fidelity, luxury editorial e-commerce landing page designed for a modern botanical nursery. 
  <br />
  <strong><a href="https://koustav2303.github.io/greennest-editorial-ui/">View Live Demo »</a></strong>
</p>

---

## 📖 Overview

GreenNest is a conceptual frontend architecture project focused on pushing the boundaries of modern web UI. Instead of a standard retail grid, this project employs a **cinematic, magazine-style layout** featuring asymmetrical bento grids, glassmorphism, hardware-accelerated scroll carousels, and complex GSAP scroll animations. 

Built with an emphasis on 60FPS performance and pixel-perfect responsive design across mobile, tablet, and ultra-wide displays.

## ✨ Key Features

- **Cinematic Hero Architecture:** Layered parallax depth-of-field with floating organic assets and soft-light overlays.
- **Advanced Bento Grids:** Highly asymmetrical, mathematically precise CSS Grid layouts that adapt seamlessly from mobile to desktop.
- **GSAP Scroll Choreography:** The footer features a massive, screen-spanning typography reveal and staggered interactions triggered by standard scroll events using `@gsap/react`.
- **Glassmorphic Navigation:** Context-aware floating navbar with backdrop-blur rendering.
- **Custom Hardware-Accelerated Carousels:** Buttery-smooth horizontal snap-scrolling for products and testimonials.
- **Zero-Dependency Accordions:** 60FPS CSS-Grid-based height transitions for FAQ components without relying on heavy external UI libraries.

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v3 (Utility-first)
- **Animation Engine:** GSAP (GreenSock) & ScrollTrigger
- **Iconography:** Lucide React (Native SVGs)
- **Deployment:** GitHub Pages & gh-pages

## 📂 Project Structure

```text
src/
├── assets/                  # High-res static images and vectors
├── components/              # Modular UI architecture
│   ├── about/               # Brand story bento grid
│   ├── best-selling/        # High-contrast product slider
│   ├── categories/          # Nested editorial visual grids
│   ├── contact/             # Form and studio details
│   ├── features-banner/     # Trust indicators & Lucide icons
│   ├── footer/              # The GSAP animated ultimate footer
│   ├── newsletter-faq/      # Lead capture & CSS-grid accordions
│   ├── plant-care/          # Service carousels and statistics
│   ├── seasonal-gallery/    # Product packs and visual inspiration
│   ├── tips-guides/         # Blog preview cards
│   ├── Hero.jsx             # The cinematic landing view
│   └── Navbar.jsx           # Floating glassmorphic header
├── App.jsx                  # Master component orchestrator
└── index.css                # Global styles & Tailwind directives