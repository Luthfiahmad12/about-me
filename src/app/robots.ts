import type { MetadataRoute } from "next"
import { DATA } from "@/data/resume"

export default function robots(): MetadataRoute.Robots {
    const baseUrl = DATA.url || "https://luthfi-ahmad.vercel.app"

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/"],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
