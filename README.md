# Achmad Luthfi Afif — Personal Portfolio & Resume

A modern, interactive personal portfolio website & resume for **Achmad Luthfi Afif** (Software Engineer & Full-Stack Developer). Built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Shadcn UI**, and **Magic UI**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FLuthfiahmad12%2Fabout-me)

---

## Key Features

- **Full Indonesian Localization**: Unified Bahasa Indonesia content and locale date formatting (`id-ID`).
- **Comprehensive SEO & Performance**:
  - Next.js App Router dynamic `sitemap.ts` and `robots.ts` generators.
  - `JSON-LD Schema.org` (`Person` & `WebSite`) integration for rich search snippets.
  - Dynamic OpenGraph and Twitter Card social preview cards.
- **Official Tech SVG Icons**: High-quality vector icons for Laravel, PHP, JavaScript, Tailwind CSS, Gin Framework (Gopher), Vue.js, Flutter, Go, React, and Next.js.
- **Modular Static Data**: Clean static data management for profile, work experience, education history, certificates, skills, and projects in `src/data/`.
- **Responsive & Premium Design**: Mobile-first responsive layout tailored for all screen sizes.
- **Dark & Light Theme**: Seamless theme toggling powered by `next-themes`.

---

## Tech Stack & Tools

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) & [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) & [Magic UI](https://magicui.design/)
- **Icons**: [Lucide Icons](https://lucide.dev/) & Custom Tech SVGs
- **Deployment**: [Vercel](https://vercel.com/)

---

## Getting Started Locally

1. **Clone this repository**:
   ```bash
   git clone https://github.com/Luthfiahmad12/about-me.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd about-me
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the local development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

---

## Project Directory Structure

```text
about-me/
├── src/
│   ├── app/                # Next.js App Router (Pages, Metadata, & Routes)
│   ├── components/         # UI Components, Layout, & SVG Icons
│   ├── data/               # Static Data (Profile, Projects, Experience, Education, Skills)
│   ├── lib/                # Data Services & Utility Functions
│   └── types/              # TypeScript Definitions
├── public/                 # Static Assets, Images, Logos, & Fonts
└── README.md
```

---

## License

Licensed under the [MIT License](LICENSE).
