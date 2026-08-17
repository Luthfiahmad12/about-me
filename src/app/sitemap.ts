import type { MetadataRoute } from "next"
import { SITE_CONFIG } from "@/data/profile"
import { getProjects } from "@/lib/services"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = SITE_CONFIG.url || "https://luthfi-ahmad.vercel.app"
    const projects = await getProjects()

    const projectUrls = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(project.created_at || Date.now()),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/skills`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        ...projectUrls,
    ]
}
