/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Globe } from "lucide-react"
import Markdown from "react-markdown"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import BlurFade from "@/components/magicui/blur-fade"
import { getProjectBySlug } from "@/lib/services"

interface ProjectPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const { slug } = await params
    const project = await getProjectBySlug(slug)

    if (!project) {
        return {
            title: "Project Not Found",
        }
    }

    return {
        title: `${project.title} | Projects`,
        description: project.description || `Details about ${project.title}`,
    }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
    const { slug } = await params
    const project = await getProjectBySlug(slug)

    if (!project) {
        notFound()
    }

    // Format date untuk ditampilkan
    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    const BLUR_FADE_DELAY = 0.04

    return (
        <main className="min-h-dvh flex flex-col gap-8 relative">
            {/* Back Button */}
            <BlurFade delay={BLUR_FADE_DELAY}>
                <Link href="/projects">
                    <Button variant="ghost" size="sm" className="gap-2 -ml-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Projects
                    </Button>
                </Link>
            </BlurFade>

            {/* Project Header */}
            <section className="flex flex-col gap-4">
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                    <div className="flex flex-wrap items-center gap-2">
                        {project.is_featured && (
                            <Badge variant="default" className="bg-primary">
                                Featured
                            </Badge>
                        )}
                        <time className="text-sm text-muted-foreground">
                            {formatDate(project.created_at)}
                        </time>
                    </div>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
                        {project.title}
                    </h1>
                </BlurFade>

                {project.description && (
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>
                    </BlurFade>
                )}

                {/* Action Buttons */}
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                    <div className="flex flex-wrap gap-3 pt-2">
                        {project.demo_url && (
                            <a
                                href={project.demo_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="gap-2">
                                    <Globe className="h-4 w-4" />
                                    Live Demo
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                </Button>
                            </a>
                        )}
                        {project.repo_url && (
                            <a
                                href={project.repo_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline" className="gap-2">
                                    <Github className="h-4 w-4" />
                                    View Code
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                </Button>
                            </a>
                        )}
                    </div>
                </BlurFade>
            </section>

            {/* Project Image */}
            {project.image_url && (
                <BlurFade delay={BLUR_FADE_DELAY * 6}>
                    <div className="relative overflow-hidden rounded-xl border border-border">
                        <img
                            src={project.image_url}
                            alt={project.title}
                            className="w-full h-auto max-h-[500px] object-cover"
                        />
                    </div>
                </BlurFade>
            )}

            {/* Tech Stack */}
            {project.tech_stack && project.tech_stack.length > 0 && (
                <BlurFade delay={BLUR_FADE_DELAY * 7}>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-lg font-semibold">Tech Stack</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.tech_stack.map((tech) => (
                                <Badge
                                    key={tech}
                                    variant="outline"
                                    className="text-sm px-3 py-1"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </BlurFade>
            )}

            {/* Project Content */}
            {project.content && (
                <BlurFade delay={BLUR_FADE_DELAY * 8}>
                    <div className="prose dark:prose-invert max-w-none">
                        <Markdown>{project.content}</Markdown>
                    </div>
                </BlurFade>
            )}
        </main>
    )
}
