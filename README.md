# Peerpath — Home Page Prototype

This repository contains a minimal Vite + React + TypeScript scaffold for the Peerpath home page with scroll-triggered animations and a Supabase client.

Quick start

```bash
# install
npm install

# dev server
npm run dev
```

Environment

- Copy `.env.example` to `.env` and set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` for Supabase.

Animations

- The project includes a small `AnimatedWrapper` using IntersectionObserver for scroll-triggered reveal effects. Replace or augment with `reactbits.dev` components once you provide them.

Sign in

- The homepage now has a Supabase-powered magic link sign-in section and nav account state handling.

Next steps

- Wire real content from Supabase tables (hero, features).
- Add the reactbits.dev animation components you will provide and integrate them into `AnimatedWrapper` or directly into component files.
- Deploy to Vercel using the `npm run build` output.
