import type { Experience } from "@/types/portfolio"

export const EXPERIENCES_DATA: Experience[] = [
    {
        id: 1,
        company_name: "PT Adarma Multi Digital",
        role: "IT Programmer",
        location: "Indonesia",
        start_date: "2025-06-01",
        end_date: "2026-05-30",
        is_current: false,
        description:
            "Bertanggung jawab penuh atas siklus pengembangan aplikasi web (planning, development, deployment). Membangun arsitektur backend REST API berbasis Laravel yang scalable, mengintegrasikan frontend modern, serta memastikan keandalan sistem di lingkungan produksi.",
        created_at: "2025-06-01T00:00:00.000Z",
    },
    {
        id: 2,
        company_name: "Freelance Web Developer",
        role: "Full Stack Web Developer",
        location: "Indonesia",
        start_date: "2022-12-01",
        end_date: null,
        is_current: true,
        description:
            "Merancang dan mengembangkan solusi aplikasi web end-to-end sesuai kebutuhan klien. Menerapkan standar clean code dengan Repository & Design Pattern, perancangan database yang optimal, serta integrasi antarmuka interaktif dan responsif.",
        created_at: "2022-12-01T00:00:00.000Z",
    },
    {
        id: 3,
        company_name: "MsCoffe FnB",
        role: "IT Support & Data Specialist",
        location: "Indonesia",
        start_date: "2022-07-01",
        end_date: "2022-12-31",
        is_current: false,
        description:
            "Mengembangkan sistem informasi internal untuk otomatisasi proses bisnis, mengelola integritas dan analitik data penjualan, serta memastikan kelancaran operasional infrastruktur IT dan strategi branding digital.",
        created_at: "2022-07-01T00:00:00.000Z",
    },
]
