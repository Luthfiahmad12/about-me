import type { Project } from "@/types/portfolio"

export const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: "AdarmaCloud Platform",
        slug: "adarmacloud-platform",
        description:
            "Platform SaaS (Software as a Service) untuk Manajemen Sekolah, Sistem PPDB, dan Manajemen Tagihan.",
        content:
            "## Overview\n\nAdarmaCloud Platform adalah sistem informasi manajemen sekolah komprehensif yang mempermudah proses Penerimaan Peserta Didik Baru (PPDB), manajemen akademis, serta sistem pembayaran dan pengolahan tagihan secara digital.",
        image_url: "/projects/adarmacloud.png",
        tech_stack: ["Laravel", "PHP", "React", "MySQL", "Tailwind CSS"],
        demo_url: null,
        repo_url: null,
        is_featured: true,
        created_at: "2025-06-01T00:00:00.000Z",
    },
    {
        id: 2,
        title: "Dandio Platform",
        slug: "dandio-platform",
        description:
            "Platform Manajemen Perbaikan Elektronik. Penghubung antara pelanggan dan mekanik terpercaya.",
        content:
            "## Overview\n\nDandio Platform dirancang untuk menjembatani pemilik perangkat elektronik dengan penyedia jasa perbaikan profesional, menyediakan sistem pelacakan status perbaikan dan estimasi biaya transparan.",
        image_url: "/projects/dandio.png",
        tech_stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
        demo_url: null,
        repo_url: null,
        is_featured: true,
        created_at: "2024-10-01T00:00:00.000Z",
    },
    {
        id: 3,
        title: "DarmaPay Platform",
        slug: "darmapay-platform",
        description:
            "Platform Payment Point Online Bank (PPOB) untuk pelaku usaha UMKM. Sistem pembayaran digital lengkap dengan margin yang menguntungkan.",
        content:
            "## Overview\n\nDarmaPay merupakan platform PPOB yang memungkinkan pelaku usaha kecil dan menengah (UMKM) untuk melayani transaksi tagihan bulanan (PLN, PDAM, Pulsa, E-Money) dengan integrasi payment gateway cepat.",
        image_url: "/projects/ppob.png",
        tech_stack: ["Laravel", "PHP", "REST API", "MySQL"],
        demo_url: null,
        repo_url: null,
        is_featured: true,
        created_at: "2024-08-01T00:00:00.000Z",
    },
    {
        id: 4,
        title: "Sekar Satria Platform",
        slug: "sekar-satria-platform",
        description:
            "Sistem ERP (Enterprise Resource Planning) sederhana untuk kebutuhan Internal Perusahaan Sekar Satria Group.",
        content:
            "## Overview\n\nSistem ERP terintegrasi untuk pengelolaan aset, inventaris, dan pencatatan arus kas internal perusahaan Sekar Satria Group.",
        image_url: "/projects/sekar-satria.png",
        tech_stack: ["Laravel", "PHP", "MySQL"],
        demo_url: null,
        repo_url: null,
        is_featured: true,
        created_at: "2024-05-01T00:00:00.000Z",
    },
    {
        id: 5,
        title: "e-Commerce Kedai MSCoffe",
        slug: "ecommerce-kedai-mscoffe",
        description: "Sistem penjualan dan pemesanan kopi berbasis web.",
        content:
            "## Overview\n\nAplikasi web e-commerce untuk pemesanan varian kopi khas kedai MSCoffe secara mudah.",
        image_url: "/projects/project-2.png",
        tech_stack: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
        demo_url: null,
        repo_url: null,
        is_featured: false,
        created_at: "2023-11-01T00:00:00.000Z",
    },
    {
        id: 6,
        title: "Berkah Mandiri Sayur",
        slug: "berkah-mandiri-sayur",
        description:
            "Sistem Manajemen Pengelolaan Jual Beli Sayur berbasis web.",
        content:
            "## Overview\n\nSistem inventaris dan pengelolaan rantai pasok jual beli hasil tani sayur-mayur segar.",
        image_url: "/projects/project-1.png",
        tech_stack: ["PHP", "MySQL", "Bootstrap"],
        demo_url: null,
        repo_url: null,
        is_featured: false,
        created_at: "2023-08-01T00:00:00.000Z",
    },
    {
        id: 7,
        title: "Bagas Luxury Camp",
        slug: "bagas-luxury-camp",
        description:
            "Sistem Informasi dan booking online pada Bagas Luxury Camp berbasis web.",
        content:
            "## Overview\n\nWebsite profil tempat wisata dan reservasi penginapan outdoor / glamping secara online.",
        image_url: "/projects/project-3.png",
        tech_stack: ["PHP", "JavaScript", "MySQL"],
        demo_url: null,
        repo_url: null,
        is_featured: false,
        created_at: "2023-05-01T00:00:00.000Z",
    },
    {
        id: 8,
        title: "Pemasaran Gazebo UD TALI JAYA",
        slug: "gazebo-ud-tali-jaya",
        description:
            "Sistem Informasi dan pemasaran gazebo pada UD TALI JAYA berbasis web.",
        content:
            "## Overview\n\nKatalog digital dan platform reservasi produk kerajinan gazebo kayu berkualitas tinggi.",
        image_url: "/projects/gazebo.png",
        tech_stack: ["PHP", "MySQL", "Bootstrap"],
        demo_url: null,
        repo_url: null,
        is_featured: false,
        created_at: "2023-02-01T00:00:00.000Z",
    },
    {
        id: 9,
        title: "Manajemen Reseller PT CARICA SUMBING",
        slug: "reseller-carica-sumbing",
        description:
            "Sistem manajemen reseller pada PT CARICA SUMBING berbasis web.",
        content:
            "## Overview\n\nPlatform pengelolaan agen dan reseller untuk distribusi produk olahan khas Carica Sumbing.",
        image_url: "/projects/reseller.png",
        tech_stack: ["PHP", "MySQL", "JavaScript"],
        demo_url: null,
        repo_url: null,
        is_featured: false,
        created_at: "2022-11-01T00:00:00.000Z",
    },
    {
        id: 10,
        title: "Sistem Pembayaran SPP PAUD KASIH IBU",
        slug: "sistem-spp-paud",
        description: "Sistem pembayaran SPP pada PAUD KASIH IBU.",
        content:
            "## Overview\n\nAplikasi pencatatan keuangan dan tunggakan SPP siswa PAUD berbasis web.",
        image_url: "/projects/paud.png",
        tech_stack: ["PHP", "MySQL"],
        demo_url: null,
        repo_url: null,
        is_featured: false,
        created_at: "2022-08-01T00:00:00.000Z",
    },
]
