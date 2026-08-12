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
import { getProfile, getExperiences } from "@/lib/services"
import { DATA } from "@/data/resume"
import { Mail, Phone, Github, Linkedin } from "lucide-react"
import Link from "next/link"

const BLUR_FADE_DELAY = 0.04

export default async function Page() {
    const profile = getProfile()
    const experiences = await getExperiences()

    // Get initials from full name
    const initials = profile.full_name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()

    // Get first name
    const nameParts = profile.full_name.split(" ")
    const firstName = nameParts.length > 1 ? nameParts[1] : nameParts[0]

    return (
        <main className="min-h-dvh flex flex-col gap-14 relative">
            <section id="hero">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
                        <div className="gap-4 flex flex-col order-2 md:order-1">
                            <BlurFadeText
                                delay={BLUR_FADE_DELAY}
                                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                                yOffset={8}
                                text={`Hi, I'm ${firstName}`}
                            />
                            <BlurFadeText
                                className="text-muted-foreground max-w-150 md:text-lg lg:text-xl"
                                delay={BLUR_FADE_DELAY}
                                text={profile.title || "Software Developer"}
                            />
                            <BlurFade delay={BLUR_FADE_DELAY * 2}>
                                <div className="flex items-center gap-4 pt-2">
                                    {DATA.contact.email && (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href={`mailto:${DATA.contact.email}`}
                                                    className="p-2 rounded-full border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                                                    aria-label="Email"
                                                >
                                                    <Mail className="size-5" />
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{DATA.contact.email}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    )}
                                    {DATA.contact.tel && (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href={`tel:${DATA.contact.tel}`}
                                                    className="p-2 rounded-full border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                                                    aria-label="Phone"
                                                >
                                                    <Phone className="size-5" />
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{DATA.contact.tel}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    )}
                                    {DATA.contact.social.GitHub?.url && (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href={
                                                        DATA.contact.social
                                                            .GitHub.url
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-full border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                                                    aria-label="GitHub"
                                                >
                                                    <Github className="size-5" />
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>github.com</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    )}
                                    {DATA.contact.social.LinkedIn?.url && (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href={
                                                        DATA.contact.social
                                                            .LinkedIn.url
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-full border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                                                    aria-label="LinkedIn"
                                                >
                                                    <Linkedin className="size-5" />
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>linkedin.com</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    )}
                                </div>
                            </BlurFade>
                        </div>
                        <BlurFade
                            delay={BLUR_FADE_DELAY}
                            className="order-1 md:order-2"
                        >
                            <Avatar className="size-20 md:size-28 border rounded-full shadow-lg ring-4 ring-muted">
                                <AvatarImage
                                    alt={profile.full_name}
                                    src={profile.avatar_url || undefined}
                                />
                                <AvatarFallback>{initials}</AvatarFallback>
                            </Avatar>
                        </BlurFade>
                    </div>
                </div>
            </section>
            <section id="about">
                <div className="flex min-h-0 flex-col gap-y-4">
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <h2 className="text-xl font-bold">About</h2>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
                            <Markdown>
                                {profile.about_me ||
                                    "No about information available."}
                            </Markdown>
                        </div>
                    </BlurFade>
                </div>
            </section>
            <section id="work">
                <div className="flex min-h-0 flex-col gap-y-6">
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <h2 className="text-xl font-bold">Work Experience</h2>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 6}>
                        <WorkSection experiences={experiences} />
                    </BlurFade>
                </div>
            </section>
        </main>
    )
}
