import type { MetadataRoute } from "next"
import { SITE_CONFIG } from "@/data/profile"

export default function robots(): MetadataRoute.Robots {
    const baseUrl = SITE_CONFIG.url || "https://luthfi-ahmad.vercel.app"

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/"],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
