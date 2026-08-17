import type { Profile } from "@/types/portfolio"

export const PROFILE_DATA: Profile = {
    id: "luthfi-profile",
    full_name: "Achmad Luthfi Afif",
    title: "Software Engineer",
    about_me:
        "Membangun produk digital yang berdampak nyata adalah passion saya. Dengan pengalaman lebih dari 3 tahun, spesialisasi saya ada pada *modern web ecosystem* (React, Next.js, TypeScript). Saya selalu mengeksplorasi batas inovasi, terutama memadukan AI dengan web development. Bagi saya, *engineering* adalah seni memecahkan masalah kompleks menjadi solusi yang simpel dan elegan.",
    email: "luthfiafif625@gmail.com",
    location: "Jawa Tengah, Indonesia",
    avatar_url: "/loods-avatar.jpg",
    resume_url: null,
    social_links: {
        github: "https://github.com/Luthfiahmad12",
        linkedin: "https://linkedin.com/in/luthfi-afif12",
        whatsapp: "https://wa.me/6282138682214",
    },
    updated_at: new Date().toISOString(),
}

export const SITE_CONFIG = {
    name: "Achmad Luthfi Afif",
    title: "About Me",
    url: "https://luthfi-cv.vercel.app",
    description: "About Me - Portfolio & Resume of Achmad Luthfi Afif, Software Engineer and Full-Stack Developer.",
}
