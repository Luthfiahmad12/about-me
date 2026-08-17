import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SITE_CONFIG } from "@/data/profile"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "@/app/globals.css"
import { FlickeringGrid } from "@/components/magicui/flickering-grid"

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["400", "500", "600", "700"],
})

const geistMono = Geist_Mono({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-mono",
})

export const metadata: Metadata = {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
        default: SITE_CONFIG.title,
        template: `%s | ${SITE_CONFIG.name}`,
    },
    description: SITE_CONFIG.description,
    icons: {
        icon: "/logo.svg",
        shortcut: "/logo.svg",
        apple: "/logo.svg",
    },
    openGraph: {
        title: `${SITE_CONFIG.name}`,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        siteName: `${SITE_CONFIG.name}`,
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: `${SITE_CONFIG.name}`,
        card: "summary_large_image",
    },
    verification: {
        google: "",
        yandex: "",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased relative",
                    geist.variable,
                    geistMono.variable,
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="light">
                    <TooltipProvider delayDuration={0}>
                        <div className="absolute inset-0 top-0 left-0 right-0 h-25 overflow-hidden z-0 pointer-events-none">
                            <FlickeringGrid
                                className="h-full w-full"
                                squareSize={2}
                                gridGap={2}
                                style={{
                                    maskImage:
                                        "linear-gradient(to bottom, black, transparent)",
                                    WebkitMaskImage:
                                        "linear-gradient(to bottom, black, transparent)",
                                }}
                            />
                        </div>
                        <div className="relative z-10 max-w-3xl mx-auto py-8 pb-24 sm:py-16 px-4 sm:px-6">
                            {children}
                            <Footer />
                        </div>
                        <Navbar />
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
