# Project Context - Portfolio Website

## Project Overview
Personal portfolio website built with Next.js, fetching data dynamically from Supabase. Originally based on Dillion Verma's portfolio template but heavily customized.

## Tech Stack
- **Framework:** Next.js 16.1.1 + React 19.2.3
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS 4.1.18 + shadcn/ui
- **Animation:** Framer Motion (via Magic UI components)
- **Database:** Supabase (PostgreSQL)
- **Content:** MDX (content-collections) — saat ini tidak dipakai; blog dihapus dari app.
- **Package Manager:** npm

## Database Schema (Supabase)

### Tables

#### 1. profiles — TIDAK DIPAKAI (deprecated)
Data profile sekarang dari `src/data/resume.tsx`. Tabel ini boleh di-drop dari DB.

#### 2. skills — TIDAK DIPAKAI (deprecated)
Data skills sekarang dari `src/data/resume.tsx`. Tabel ini boleh di-drop dari DB.

#### 3. projects (aktif)
```sql
- id: int8 (PK)
- title: text (required)
- slug: text (unique, required) - for URLs
- description: text
- content: text (Markdown)
- image_url: text
- tech_stack: text[] (array)
- demo_url: text
- repo_url: text
- is_featured: boolean
- created_at: timestamptz
```

#### 4. experience
```sql
- id: int8 (PK)
- company_name: text (required)
- role: text (required)
- location: text
- start_date: date (required)
- end_date: date
- is_current: boolean
- description: text
- created_at: timestamptz
```

#### 5. certificates
```sql
- id: int8 (PK)
- title: text (required)
- issuing_organization: text (required)
- issue_date: date
- expiry_date: date
- credential_id: text
- credential_url: text
- image_url: text
- created_at: timestamptz
```

## File Structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage (async, SSR)
│   ├── layout.tsx                  # Root layout with providers
│   ├── loading.tsx                 # Loading skeleton for homepage
│   ├── projects/
│   │   ├── page.tsx                # Projects page (async, SSR)
│   │   └── loading.tsx             # Loading skeleton
│   ├── skills/
│   │   ├── page.tsx                # Skills + Certificates page
│   │   └── loading.tsx             # Loading skeleton
│   ├── globals.css
│   └── opengraph-image.tsx
├── components/
│   ├── ui/                         # shadcn/ui components
│   │   ├── skeleton.tsx
│   │   ├── badge.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── magicui/                    # Magic UI components
│   │   ├── dock.tsx               # Animated dock (navbar)
│   │   ├── blur-fade.tsx
│   │   ├── blur-fade-text.tsx
│   │   └── flickering-grid.tsx
│   ├── section/
│   │   ├── contact-section.tsx    # Contact with social links
│   │   ├── work-section.tsx       # Work experience accordion
│   │   └── ...
│   ├── navbar.tsx                  # Bottom dock navigation
│   ├── footer.tsx                  # Site footer
│   ├── mode-toggle.tsx             # Dark/light theme toggle
│   └── icons.tsx
├── lib/
│   ├── supabase.ts                 # TypeScript types for DB
│   ├── services.ts                 # Supabase fetch functions
│   └── utils.ts                    # Utility functions
├── utils/
│   └── supabase/
│       ├── client.ts               # Browser client
│       ├── server.ts               # Server client (async)
│       └── middleware.ts           # Auth middleware
├── data/
│   └── resume.tsx                  # Static data (profile, skills)

# Config files
├── content-collections.ts          # MDX compilation config
├── next.config.mjs
├── database.schema                 # SQL schema definition
└── PROJECT_CONTEXT.md             # This file
```

## What's Been Implemented

### ✅ Completed

1. **Hybrid Data Architecture** (Updated: Profile & Skills are now static)
   - **Static Data** (from `src/data/resume.tsx`):
     - `getProfile()` - Returns static profile data
     - `getSkills()` - Returns static skills data
   - **Database Data** (from Supabase):
     - `getProjects()` - Fetch all projects
     - `getExperiences()` - Fetch work history
     - `getCertificates()` - Fetch certificates
     - `getFeaturedProjects()` - Filter featured only
     - `getProjectBySlug()` - Single project by slug
   - Tidak ada lagi fungsi yang query tabel `profiles` atau `skills`.

2. **SSR & Loading States**
   - All pages use async components
   - Loading skeletons with pulse animation
   - Files: `loading.tsx` in each route

3. **Pages**
   - **Homepage** (`/`): Hero, About, Work Experience, kontak (email/tel/sosial)
   - **Projects** (`/projects`): Grid projects dari Supabase
   - **Projects detail** (`/projects/[slug]`): Detail satu project
   - **Skills** (`/skills`): Skills (statis) + Certificates (dari DB)
   - Blog: route dihapus; dependency MDX/content-collections masih ada.

4. **Components**
   - **Navbar**: Bottom dock with 40px icons, hover scale animation (110%), tooltip
   - **Contact Section**: Menggunakan `profile` dari `getProfile()` (data statis resume.tsx)
   - **Footer**: Attribution to Magic UI Portfolio template
   - **Skeleton**: Loading component for all pages

5. **Contact Section Features**
   - Social media icons (GitHub, LinkedIn, Twitter, Instagram)
   - Email and phone links
   - Hover animations on icons
   - Primary CTA to first available social platform

6. **Database Connection**
   - Environment variables:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`

### 🔧 Technical Decisions

1. **Hybrid Data Architecture**: Profile & Skills are static (fast, zero DB calls), Projects/Experience/Certificates are dynamic from Supabase
2. **Async Server Components**: Data fetching happens server-side with async/await for DB-dependent data
3. **Loading.tsx Pattern**: Next.js App Router loading states for better UX
4. **Icon Size**: Navbar icons set to 40px (base) with 110% hover scale (no magnification effect)
5. **No Client-Side Supabase**: Using server.ts with async cookies() for SSR
6. **Static Data Priority**: Frequently accessed, rarely changed data (profile, skills) are static for optimal performance

## TODO / Future Tasks

### High Priority
- [x] Create blog detail page with dynamic OG image (blog kemudian dihapus)
- [x] Add project detail page (`/projects/[slug]`)
- [ ] Add animation on scroll (Intersection Observer)

### Medium Priority
- [ ] Add edit buttons for admin (if logged in)
- [ ] Implement view counter for projects
- [ ] Add sorting/filtering for projects
- [ ] Create dedicated `/contact` page with form

### Low Priority
- [ ] Add dark mode preference persistence
- [ ] Add sitemap.xml generation
- [ ] Optimize images with Next.js Image component
- [ ] (Opsional) Hidupkan kembali blog + RSS feed

### Potential Features
- [ ] Guestbook feature (using Supabase)
- [ ] Newsletter signup
- [ ] Analytics dashboard
- [ ] Multi-language support (i18n)

## Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_key
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

- **Hybrid Architecture**: Profile & Skills dari `resume.tsx`; Projects/Experience/Certificates dari Supabase
- Tabel `profiles` dan `skills` di DB tidak dipakai; bisa di-drop. Lihat `database.schema` untuk penandaan deprecated.
- Navbar uses `size-4` icons (16px) inside 40px containers
- Hover effect: `scale-110` with 200ms transition
- Contact section displays social icons in a row with gap-3
- Footer appears on all pages via layout.tsx
- To update profile/skills: Edit `src/data/resume.tsx` and redeploy

## References

- Original Template: https://magicui.design/docs/templates/portfolio
- Supabase JS Docs: https://supabase.com/docs/reference/javascript
- Next.js App Router: https://nextjs.org/docs/app
- shadcn/ui: https://ui.shadcn.com
- Magic UI: https://magicui.design

---
*Last updated: 2026-03-05*
*Status: Codebase dirapikan — fungsi skills-by-DB dihapus, dokumentasi diselaraskan*
