import type { Certificate } from "@/types/portfolio"

export const CERTIFICATES_DATA: Certificate[] = [
    {
        id: 1,
        title: "AWS Certified Developer – Associate",
        issuing_organization: "Amazon Web Services",
        issue_date: "2023-05-15",
        expiry_date: "2026-05-15",
        credential_id: "AWS-DEV-123456",
        credential_url: "https://aws.amazon.com/verification",
        image_url: null,
        created_at: "2023-05-15T00:00:00.000Z",
    },
    {
        id: 2,
        title: "Meta Front-End Developer Professional Certificate",
        issuing_organization: "Meta / Coursera",
        issue_date: "2022-11-20",
        expiry_date: null,
        credential_id: "META-FED-789012",
        credential_url: "https://coursera.org/verify",
        image_url: null,
        created_at: "2022-11-20T00:00:00.000Z",
    },
]
