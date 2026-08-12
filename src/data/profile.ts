import type { Profile } from "@/types/portfolio"

export const PROFILE_DATA: Profile = {
    id: "static-profile",
    full_name: "Achmad Luthfi Afif",
    title: "Software Engineer & Web Developer",
    about_me:
        "Passionate Software Engineer dedicated to building high-performance web applications and digital experiences. Experienced in Next.js, React, TypeScript, and modern web architectures. Focused on creating intuitive, fast, and scalable software solutions.",
    email: "hello@example.com",
    phone: "+62 812 3456 7890",
    location: "Jakarta, Indonesia",
    avatar_url: "/me.png",
    resume_url: null,
    social_links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
    },
    updated_at: new Date().toISOString(),
}
