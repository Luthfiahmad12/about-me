import type { Experience } from "@/types/portfolio"

export const EXPERIENCES_DATA: Experience[] = [
    {
        id: 1,
        company_name: "Tech Solutions Inc.",
        role: "Senior Software Engineer",
        location: "Jakarta, Indonesia",
        start_date: "2023-01-01",
        end_date: null,
        is_current: true,
        description:
            "Leading the frontend engineering team in building next-generation web applications using Next.js and TypeScript. Improving web performance, accessibility, and user interaction standards.",
        created_at: "2024-01-01T00:00:00.000Z",
    },
    {
        id: 2,
        company_name: "Digital Innovators Co.",
        role: "Frontend Developer",
        location: "Bandung, Indonesia",
        start_date: "2021-06-01",
        end_date: "2022-12-31",
        is_current: false,
        description:
            "Developed scalable web dashboards and consumer-facing web apps. Collaborated closely with UI/UX designers to translate Figma mockups into pixel-perfect React components.",
        created_at: "2023-01-01T00:00:00.000Z",
    },
    {
        id: 3,
        company_name: "Creative Labs Studio",
        role: "Junior Web Developer",
        location: "Remote",
        start_date: "2020-01-01",
        end_date: "2021-05-31",
        is_current: false,
        description:
            "Maintained client websites, integrated RESTful APIs, and optimized page speed scores.",
        created_at: "2022-01-01T00:00:00.000Z",
    },
]
