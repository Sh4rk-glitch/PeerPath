# Peerpath

Peerpath is an advanced digital learning system using cinematic physics engines, fluid kinetic typography, and continuous student tracking tracks. Peerpath provides a seamless connection between a premium public storytelling interface and a comprehensive student interface based on analytics.
---

## 🚀 Architectural Blueprint

The engine of the platform is divided into two essential layers powered by parameters of user authentication state:

* **Anonymous Landing Space:** A smooth and unpinned runway powered by GSAP scroll-triggering, custom multi-layer WebGL line fragment shaders (`Three.js`), and precise 3D gyroscopic element components.
* **Authenticated Dashboard Kernel:** A secure router web app (`React Router DOM`) which is directly connected to the remote PostgreSQL database cluster backend through Supabase database mutations.

---

## 🛠️ The Tech Stack Kernel

* **Frontend Kernel:** React, TypeScript, Vite
* **Animation Dynamics:** GSAP (GreenSock Animation Platform) with custom ScrollTrigger architectures
* **Backdrop Shader Matrices:** Three.js (WebGL ShaderMaterial)
* **Database & Authentication Service:** Supabase (GoTrue authentication + secure cloud PostgreSQL tables)
* **Routing Engine of the Platform:** React Router DOM (dynamic sub-route outlets)

---

## 📂 Repository Directory

```text
 └── src/
     ├── components/
     │   ├── Navbar.tsx               # Center layout with respect to header navigation
     │   ├── Hero.tsx                 # Continuous interactive wave canvas gateway
     │   ├── SignInSection.tsx        # Toggle-able 3D glassmorphic authentication card console
     │   ├── FloatingLines.tsx        # Vector line shader canvas engine (WebGL)
     │   ├── ParticleFooter.tsx       # High contrast secure vignette canvas stack
     │   ├── DashboardLayout.tsx      # Sidebar workspace shell layout wrapper
     │   ├── DashboardHome.tsx        # Live hub tracking metrics dashboard with automatic snapping SVG timelines
     │   ├── LessonsPage.tsx          # Multi-disciplinary curriculum module preview grid
     │   ├── PlannerPage.tsx          # Timeline management workspace
     │   └── AnalyticsPage.tsx        # Concept precision logs tracking maps
     ├── lib/
     │   └── supabaseClient.ts        # Client initialization engine connection configuration
     └── pages/
         └── Home.tsx                 # Traffic router and feature-flag deploy gateway
