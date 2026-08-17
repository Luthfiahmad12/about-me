import BlurFade from "@/components/magicui/blur-fade"
import BlurFadeText from "@/components/magicui/blur-fade-text"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Markdown from "react-markdown"
import WorkSection from "@/components/section/work-section"
import EducationSection from "@/components/section/education-section"
import { getProfile, getExperiences, getEducation } from "@/lib/services"
import { Mail, Phone, Github, Linkedin, MessageCircle } from "lucide-react"
import Link from "next/link"

const BLUR_FADE_DELAY = 0.04

export default async function Page() {
    const profile = getProfile()
    const experiences = await getExperiences()
    const education = getEducation()

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: profile.full_name,
        url: "https://luthfi-cv.vercel.app",
        image: "https://luthfi-cv.vercel.app/loods-avatar.jpg",
        jobTitle: profile.title || "Software Engineer",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Wonosobo",
            addressRegion: "Jawa Tengah",
            addressCountry: "Indonesia",
        },
        sameAs: [
            profile.social_links.github,
            profile.social_links.linkedin,
        ].filter(Boolean),
    }

    return (
        <main className="min-h-dvh flex flex-col gap-14 relative">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <section id="hero">
                <div className="mx-auto w-full max-w-3xl space-y-8">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="gap-3 flex flex-col items-center">
                            <BlurFadeText
                                delay={BLUR_FADE_DELAY}
                                className="text-center text-2xl font-semibold tracking-tighter sm:text-3xl lg:text-4xl"
                                yOffset={8}
                                text={profile.full_name}
                            />
                            <BlurFadeText
                                className="text-center text-muted-foreground md:text-lg lg:text-xl font-medium"
                                delay={BLUR_FADE_DELAY * 1.5}
                                text={profile.title || "Software Engineer"}
                            />

                            {/* Contact Badges / Social Links */}
                            <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
                                <div className="flex items-center justify-center gap-3 pt-2">
                                    {profile.email && (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href={`mailto:${profile.email}`}
                                                    className="p-2.5 rounded-full border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110 shadow-sm"
                                                    aria-label="Email"
                                                >
                                                    <Mail className="size-4" />
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{profile.email}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    )}
                                    {profile.social_links.whatsapp && (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href={
                                                        profile.social_links
                                                            .whatsapp
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2.5 rounded-full border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110 shadow-sm"
                                                    aria-label="WhatsApp"
                                                >
                                                    <MessageCircle className="size-4" />
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>WhatsApp</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    )}
                                    {profile.social_links.github && (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href={
                                                        profile.social_links
                                                            .github
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2.5 rounded-full border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110 shadow-sm"
                                                    aria-label="GitHub"
                                                >
                                                    <Github className="size-4" />
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>GitHub</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    )}
                                    {profile.social_links.linkedin && (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href={
                                                        profile.social_links
                                                            .linkedin
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2.5 rounded-full border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110 shadow-sm"
                                                    aria-label="LinkedIn"
                                                >
                                                    <Linkedin className="size-4" />
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>LinkedIn</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    )}
                                </div>
                            </BlurFade>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about">
                <div className="flex min-h-0 flex-col gap-y-4">
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                            Tentang Saya
                        </h2>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        <div className="prose max-w-full text-justify text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert text-xs sm:text-sm">
                            <Markdown>
                                {profile.about_me ||
                                    "Tidak ada informasi tentang saya."}
                            </Markdown>
                        </div>
                    </BlurFade>
                </div>
            </section>

            {/* Work Experience Section */}
            <section id="work">
                <div className="flex min-h-0 flex-col gap-y-6">
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                            Pengalaman Kerja
                        </h2>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 6}>
                        <WorkSection experiences={experiences} />
                    </BlurFade>
                </div>
            </section>

            {/* Education History Section */}
            <section id="education">
                <div className="flex min-h-0 flex-col gap-y-6">
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                            Pendidikan
                        </h2>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 8}>
                        <EducationSection education={education} />
                    </BlurFade>
                </div>
            </section>
        </main>
    )
}
