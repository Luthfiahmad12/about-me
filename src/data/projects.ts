import type { Project } from "@/types/portfolio"

export const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: "Personal Portfolio Website",
        slug: "personal-portfolio",
        description:
            "Modern portfolio website built with Next.js 16 App Router, Tailwind CSS, and Framer Motion.",
        content:
            "## Overview\n\nThis project is a modern portfolio web application showcasing experience, projects, skills, and certifications.\n\n### Key Features\n- Responsive Design\n- Dark / Light Theme Support\n- Modular Static Data Architecture\n- Animated UI components using Framer Motion & Magic UI",
        image_url:
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60",
        tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        demo_url: "https://luthfi-cv.vercel.app",
        repo_url: "https://github.com",
        is_featured: true,
        created_at: "2024-02-15T00:00:00.000Z",
    },
    {
        id: 2,
        title: "SaaS Analytics Dashboard",
        slug: "saas-analytics-dashboard",
        description:
            "Analytics and management dashboard for subscription-based products.",
        content:
            "## Overview\n\nA full-featured SaaS dashboard featuring real-time data visualization, user management, and subscription billing metrics.\n\n### Features\n- Realtime charts\n- Clean dark mode interface\n- Role-based access control",
        image_url:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
        tech_stack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
        demo_url: "https://example.com/demo",
        repo_url: "https://github.com",
        is_featured: true,
        created_at: "2024-01-20T00:00:00.000Z",
    },
    {
        id: 3,
        title: "E-Commerce Mobile Application",
        slug: "ecommerce-mobile-app",
        description:
            "Cross-platform mobile shopping application with instant checkout integration.",
        content:
            "## Overview\n\nMobile application built for high-performance e-commerce shopping experience with smooth animations and instant checkout.",
        image_url:
            "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop&q=60",
        tech_stack: ["React Native", "TypeScript", "Redux Toolkit", "Stripe"],
        demo_url: null,
        repo_url: "https://github.com",
        is_featured: false,
        created_at: "2023-11-10T00:00:00.000Z",
    },
]
