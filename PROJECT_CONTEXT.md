# Project Context - Portfolio Website

## Project Overview
Personal portfolio website built with Next.js 16, React 19, Tailwind CSS, and Framer Motion. 100% modular static data architecture for optimal performance, zero database queries, fast page loads, and frictionless deployment.

## Tech Stack
- **Framework:** Next.js 16.1.1 + React 19.2.3
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS 4.1.18 + shadcn/ui
- **Animation:** Motion / Framer Motion (via Magic UI components)
- **Data Architecture:** 100% Modular Static Data (`src/data/`)
- **Package Manager:** npm

## Data Models (`src/types/portfolio.ts`)

- **Profile**: Full name, title, about me, contact info, avatar URL, social links.
- **Skill**: Skill name, category, proficiency level.
- **Project**: Title, slug, description, markdown content, image URL, tech stack, live demo URL, repository URL, featured flag.
- **Experience**: Company name, role, location, start date, end date, current flag, role description.
- **Certificate**: Title, issuing organization, issue date, expiry date, credential ID, credential URL.

## File Structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout with theme & providers
│   ├── loading.tsx                 # Loading skeleton
│   ├── projects/
│   │   ├── page.tsx                # Projects list page
│   │   ├── loading.tsx             # Projects loading skeleton
│   │   └── [slug]/
│   │       └── page.tsx            # Project detail page
│   ├── skills/
│   │   ├── page.tsx                # Skills & Certificates page
│   │   └── loading.tsx             # Skills loading skeleton
│   ├── globals.css
│   └── opengraph-image.tsx
├── components/
│   ├── ui/                         # shadcn/ui components
│   ├── magicui/                    # Magic UI components (Dock, BlurFade, etc.)
│   ├── section/
│   │   ├── contact-section.tsx
│   │   └── work-section.tsx
│   ├── navbar.tsx                  # Floating dock navbar
│   ├── footer.tsx                  # Site footer
│   └── mode-toggle.tsx             # Dark/light theme toggle
├── types/
│   └── portfolio.ts                # TypeScript interfaces for portfolio data
├── lib/
│   ├── services.ts                 # Service getter functions for static data
│   └── utils.ts                    # Helper utilities
└── data/                           # Modular static data files
    ├── profile.ts                  # Personal profile & contact data
    ├── skills.ts                   # Skills & technologies list
    ├── projects.ts                 # Featured & showcase projects
    ├── experience.ts               # Work experience history
    └── certificates.ts             # Professional certifications
```

## Useful Commands

```bash
# Development
npm run dev

# Build
npm run build

# Lint
npm run lint
```

## Notes

- **Static Data Management**: Edit files under `src/data/` to update your portfolio contents.
- **Zero External DB Dependencies**: Fast, secure, and hostable on any static or serverless provider (Vercel, Netlify, Cloudflare Pages, etc.).
- **Navbar**: Floating dock with 40px icon containers and scale hover animation.
