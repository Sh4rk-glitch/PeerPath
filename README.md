# Peerpath Workspace ✦

Peerpath is a high-fidelity, interactive digital learning platform built around cinematic physics engines, fluid kinetic typography, and persistent student tracking tracks. It seamlessly bridges a premium public storytelling presence with a comprehensive, analytics-driven student workspace layout context.

---

## 🚀 Architectural Blueprint

The platform's engine is split into two foundational layers driven by user authentication state parameters:

* **Anonymous Landing Space:** A smooth, unpinned interactive runway driven by GSAP scrolling triggers, custom multi-layered WebGL line fragment shaders (`Three.js`), and precision 3D gyroscopic element components.
* **Authenticated Dashboard Core:** A secured client-side router web app (`React Router DOM`) synced directly with a remote PostgreSQL cluster backend via Supabase database mutations.

---

## 🛠️ The Tech Stack Core

* **Frontend Core:** React, TypeScript, Vite
* **Animation Dynamics:** GSAP (GreenSock Animation Platform) with custom ScrollTrigger architectures
* **Backdrop Shader Matrices:** Three.js (WebGL ShaderMaterial implementation)
* **Database & Auth Management:** Supabase (GoTrue authentication + secure cloud PostgreSQL tables)
* **Platform Routing Engine:** React Router DOM (Dynamic sub-route outlets)

---

## 📂 Core Repository Directory

```text
 └── src/
     ├── components/
     │   ├── Navbar.tsx               # Centered layout relative header navigation
     │   ├── Hero.tsx                 # Continual interactive wave canvas gateway
     │   ├── SignInSection.tsx        # Toggle-ready 3D glassmorphic auth card console
     │   ├── FloatingLines.tsx        # Vector line shader canvas engine (WebGL)
     │   ├── ParticleFooter.tsx       # Secure high-contrast vignette canvas stack
     │   ├── DashboardLayout.tsx      # Persistent sidebar workspace shell layout wrapper
     │   ├── DashboardHome.tsx        # Live hub tracking metric dashboard with auto-snapping SVG timelines
     │   ├── LessonsPage.tsx          # Multi-subject curriculum module preview grid
     │   ├── PlannerPage.tsx          # Timeline management workspace
     │   └── AnalyticsPage.tsx        # Advanced concept precision logs tracking maps
     ├── lib/
     │   └── supabaseClient.ts        # Client initialization engine connection configuration
     └── pages/
         └── Home.tsx                 # Central traffic router & feature-flag deploy gateway