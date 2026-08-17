/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade"
import { getSkills, getCertificates } from "@/lib/services"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { SkillIcon } from "@/components/skill-icon"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Keahlian & Teknologi | Portfolio Achmad Luthfi Afif",
    description: "Daftar keahlian, teknologi, bahasa pemrograman, dan sertifikasi profesional Achmad Luthfi Afif.",
    openGraph: {
        title: "Keahlian & Teknologi | Portfolio Achmad Luthfi Afif",
        description: "Daftar keahlian, teknologi, bahasa pemrograman, dan sertifikasi profesional Achmad Luthfi Afif.",
    },
}

const BLUR_FADE_DELAY = 0.04

export default async function SkillsPage() {
    const skills = getSkills()
    const certificates = await getCertificates()

    // Format date untuk sertifikat dalam Bahasa Indonesia
    const formatDate = (dateString: string | null) => {
        if (!dateString) return null
        const date = new Date(dateString)
        return date.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "short",
        })
    }

    return (
        <main className="min-h-dvh flex flex-col gap-14 relative">
            {/* Skills Header */}
            <section id="skills-header">
                <div className="flex flex-col gap-y-4 items-center justify-center text-center">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
                            Keahlian & Teknologi
                        </h1>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                            Teknologi, bahasa pemrograman, dan tools yang saya gunakan dalam merancang dan menguji aplikasi web modern.
                        </p>
                    </BlurFade>
                </div>
            </section>

            {/* Skills Content (Grouped by Level) */}
            <section id="skills-grid" className="flex flex-col gap-10">
                {skills.length === 0 ? (
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <p className="text-muted-foreground text-center">
                            Belum ada keahlian yang ditambahkan.
                        </p>
                    </BlurFade>
                ) : (
                    <>
                        {/* Core Stack */}
                        <div className="flex flex-col gap-4">
                            <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-xl font-bold tracking-tight">
                                        Keahlian Utama (Core Stack)
                                    </h2>
                                    <span className="text-[11px] font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20">
                                        Production Ready
                                    </span>
                                </div>
                                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                                    Teknologi yang saya gunakan secara aktif untuk membangun aplikasi web produksi yang cepat dan andal.
                                </p>
                            </BlurFade>

                            <div className="flex flex-wrap gap-2.5 pt-1">
                                {skills
                                    .filter((s) => s.level === "Core" || !s.level)
                                    .map((skill, id) => (
                                        <BlurFade
                                            key={skill.id}
                                            delay={BLUR_FADE_DELAY * 3 + id * 0.03}
                                        >
                                            <div className="group border bg-card border-border rounded-xl h-11 px-4 flex items-center gap-2.5 shadow-sm hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                                                <SkillIcon
                                                    name={skill.name}
                                                    className="size-4 sm:size-5 shrink-0 transition-transform duration-200 group-hover:scale-110"
                                                />
                                                <span className="text-foreground text-xs sm:text-sm font-semibold">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        </BlurFade>
                                    ))}
                            </div>
                        </div>

                        {/* Exploring / Familiar Stack */}
                        {skills.some((s) => s.level === "Exploring") && (
                            <div className="flex flex-col gap-4">
                                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-xl font-bold tracking-tight">
                                            Eksplorasi & Familiar
                                        </h2>
                                        <span className="text-[11px] font-medium bg-muted text-muted-foreground px-2 py-0.5 rounded-full border border-border">
                                            Learning & Research
                                        </span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                                        Teknologi yang sedang saya pelajari, eksplorasi dalam eksperimen kode, atau pahami konsep dasarnya.
                                    </p>
                                </BlurFade>

                                <div className="flex flex-wrap gap-2.5 pt-1">
                                    {skills
                                        .filter((s) => s.level === "Exploring")
                                        .map((skill, id) => (
                                            <BlurFade
                                                key={skill.id}
                                                delay={BLUR_FADE_DELAY * 4.5 + id * 0.03}
                                            >
                                                <div className="group border bg-card/60 border-border/80 rounded-xl h-11 px-4 flex items-center gap-2.5 shadow-sm hover:border-primary/40 hover:bg-card hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                                                    <SkillIcon
                                                        name={skill.name}
                                                        className="size-4 sm:size-5 shrink-0 opacity-80 group-hover:opacity-100 transition-all duration-200 group-hover:scale-110"
                                                    />
                                                    <span className="text-muted-foreground group-hover:text-foreground text-xs sm:text-sm font-medium transition-colors">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            </BlurFade>
                                        ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </section>

            {/* Certificates Section */}
            {certificates.length > 0 && (
                <section id="certificates" className="pt-4">
                    <div className="flex flex-col gap-y-8">
                        <BlurFade delay={BLUR_FADE_DELAY * 5}>
                            <div className="flex flex-col gap-y-2 items-center justify-center text-center">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                                    Sertifikasi
                                </h2>
                                <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
                                    Sertifikasi profesional dan lisensi keahlian yang telah diraih.
                                </p>
                            </div>
                        </BlurFade>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {certificates.map((cert, id) => (
                                <BlurFade
                                    key={cert.id}
                                    delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                                >
                                    <Card className="p-5 flex flex-col justify-between gap-4 hover:border-primary/50 hover:shadow-md transition-all duration-200 shadow-sm h-full">
                                        <div className="flex items-start gap-3.5">
                                            <div className="shrink-0">
                                                {cert.image_url ? (
                                                    <img
                                                        src={cert.image_url}
                                                        alt={cert.title}
                                                        className="w-12 h-12 object-contain rounded-lg border border-border"
                                                    />
                                                ) : (
                                                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                                                        <Award className="w-6 h-6 text-primary" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-base leading-snug">
                                                    {cert.title}
                                                </h3>
                                                <p className="text-muted-foreground text-xs mt-1 font-medium">
                                                    {cert.issuing_organization}
                                                </p>
                                                <div className="flex items-center gap-2 mt-2 text-[11px] text-muted-foreground">
                                                    <span>
                                                        Diterbitkan: {formatDate(cert.issue_date)}
                                                    </span>
                                                </div>
                                                {cert.credential_id && (
                                                    <p className="text-[11px] text-muted-foreground mt-0.5 font-mono">
                                                        ID: {cert.credential_id}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        {cert.credential_url && (
                                            <Link
                                                href={cert.credential_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline mt-auto pt-2.5 border-t border-border/50"
                                            >
                                                Lihat Sertifikat
                                                <ExternalLink className="w-3 h-3" />
                                            </Link>
                                        )}
                                    </Card>
                                </BlurFade>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    )
}
