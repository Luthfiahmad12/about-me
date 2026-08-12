/* eslint-disable @next/next/no-img-element */
"use client"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Markdown from "react-markdown"

function ProjectImage({ src, alt }: { src: string; alt: string }) {
    const [imageError, setImageError] = useState(false)

    if (!src || imageError) {
        return <div className="w-full h-48 bg-muted" />
    }

    return (
        <img
            src={src}
            alt={alt}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
        />
    )
}

interface Props {
    title: string
    href?: string
    description: string
    dates: string
    tags: readonly string[]
    link?: string
    image?: string
    video?: string
    links?: readonly {
        icon: React.ReactNode
        type: string
        href: string
    }[]
    className?: string
}

export function ProjectCard({
    title,
    href,
    description,
    dates,
    tags,
    link,
    image,
    video,
    links,
    className,
}: Props) {
    const isInternalLink = href?.startsWith("/")

    return (
        <div
            className={cn(
                "group flex flex-col h-full border border-border rounded-xl overflow-hidden bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer",
                className,
            )}
        >
            <div className="relative shrink-0 overflow-hidden">
                <Link
                    href={href || "#"}
                    target={isInternalLink ? undefined : "_blank"}
                    rel={isInternalLink ? undefined : "noopener noreferrer"}
                    className="block"
                >
                    {video ? (
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : image ? (
                        <ProjectImage src={image} alt={title} />
                    ) : (
                        <div className="w-full h-48 bg-muted" />
                    )}
                </Link>
                {links && links.length > 0 && (
                    <div className="absolute top-2 right-2 flex flex-wrap gap-2 z-10">
                        {links.map((l, idx) => (
                            <Link
                                href={l.href}
                                key={idx}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Badge
                                    className="flex items-center gap-1.5 text-xs bg-black/80 text-white hover:bg-black backdrop-blur-md"
                                    variant="default"
                                >
                                    {l.icon}
                                    {l.type}
                                </Badge>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-1">
                        <Link
                            href={href || "#"}
                            target={isInternalLink ? undefined : "_blank"}
                            rel={isInternalLink ? undefined : "noopener noreferrer"}
                            className="hover:underline"
                        >
                            <h3 className="font-semibold text-base sm:text-lg leading-snug group-hover:text-primary transition-colors">
                                {title}
                            </h3>
                        </Link>
                        <time className="text-xs font-medium text-muted-foreground">
                            {dates}
                        </time>
                    </div>
                    <Link
                        href={href || "#"}
                        target={isInternalLink ? undefined : "_blank"}
                        rel={isInternalLink ? undefined : "noopener noreferrer"}
                        className="text-muted-foreground group-hover:text-primary transition-colors p-1 rounded-sm"
                        aria-label={`Open ${title}`}
                    >
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </Link>
                </div>
                <div className="text-xs sm:text-sm flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
                    <Markdown>{description}</Markdown>
                </div>
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                        {tags.map((tag) => (
                            <Badge
                                key={tag}
                                className="text-[11px] font-medium border border-border/60 h-6 px-2.5 bg-muted/40"
                                variant="outline"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
