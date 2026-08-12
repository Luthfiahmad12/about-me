import { GraduationCap, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Education } from "@/types/portfolio"

interface EducationSectionProps {
    education: Education[]
}

export default function EducationSection({ education }: EducationSectionProps) {
    if (education.length === 0) {
        return (
            <div className="text-muted-foreground text-sm">
                Belum ada riwayat pendidikan yang ditambahkan.
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-4 w-full">
            {education.map((edu) => (
                <div
                    key={edu.id}
                    className="border border-border rounded-xl p-4 sm:p-5 bg-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-primary/40 transition-colors shadow-sm"
                >
                    <div className="flex items-start gap-3.5 flex-1 min-w-0">
                        <div className="size-10 rounded-full border border-border bg-muted/60 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                            <GraduationCap className="size-5 text-primary" />
                        </div>
                        <div className="flex flex-col gap-1 min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                                {edu.link ? (
                                    <Link
                                        href={edu.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-base hover:underline inline-flex items-center gap-1 leading-tight"
                                    >
                                        {edu.school}
                                        <ExternalLink className="size-3 text-muted-foreground" />
                                    </Link>
                                ) : (
                                    <h3 className="font-semibold text-base leading-tight">
                                        {edu.school}
                                    </h3>
                                )}
                            </div>
                            <p className="text-sm font-medium text-muted-foreground">
                                {edu.degree}
                            </p>
                            {edu.description && (
                                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                    {edu.description}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="text-xs font-mono text-muted-foreground shrink-0 bg-muted/40 px-2.5 py-1 rounded-md border border-border/40">
                        {edu.period}
                    </div>
                </div>
            ))}
        </div>
    )
}
