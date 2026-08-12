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
            "IT Programmer (Planning, Develop, Deployment) dalam pembuatan produk aplikasi berbasis website. Mengembangkan aplikasi web berbasis backend PHP (Laravel Framework) dan frontend modern.",
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
            "Mengembangkan aplikasi web menggunakan teknologi modern sesuai dengan kebutuhan klien. Penulisan clean code dan struktur data menggunakan pendekatan Repository Pattern dan Design Pattern.",
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
            "Mengelola data penjualan sesuai dengan pedoman. Melakukan Digital Branding dan Digital Marketing. Pembuatan sistem informasi penjualan dan pengolahan data.",
        created_at: "2022-07-01T00:00:00.000Z",
    },
]
