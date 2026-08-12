import BlurFade from "@/components/magicui/blur-fade"
import { getSkills, getCertificates } from "@/lib/services"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const BLUR_FADE_DELAY = 0.04

export default async function SkillsPage() {
    // Skills now come from static DATA (resume.tsx)
    // Only certificates come from DB
    const skills = getSkills()
    const certificates = await getCertificates()

    // Format date untuk sertifikat
    const formatDate = (dateString: string | null) => {
        if (!dateString) return null
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
        })
    }

    return (
        <main className="min-h-dvh flex flex-col gap-14 relative">
            <section id="skills-header">
                <div className="flex flex-col gap-y-4 items-center justify-center text-center">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
                            Skills & Technologies
                        </h1>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <p className="text-muted-foreground md:text-lg/relaxed max-w-2xl">
                            Here are the technologies and tools I work with to
                            build amazing products and experiences.
                        </p>
                    </BlurFade>
                </div>
            </section>

            <section id="skills-grid">
                {skills.length === 0 ? (
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <p className="text-muted-foreground text-center">
                            No skills added yet.
                        </p>
                    </BlurFade>
                ) : (
                    <div className="flex flex-wrap justify-center gap-3">
                        {skills.map((skill, id) => (
                            <BlurFade
                                key={skill.id}
                                delay={BLUR_FADE_DELAY * 3 + id * 0.05}
                            >
                                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-12 px-6 flex items-center gap-3 hover:bg-muted transition-colors">
                                    <span className="text-foreground text-base font-medium">
                                        {skill.name}
                                    </span>
                                    {skill.level && (
                                        <Badge
                                            variant="outline"
                                            className="text-[10px]"
                                        >
                                            {skill.level}
                                        </Badge>
                                    )}
                                </div>
                            </BlurFade>
                        ))}
                    </div>
                )}
            </section>

            {/* Certificates Section */}
            {certificates.length > 0 && (
                <section id="certificates">
                    <div className="flex flex-col gap-y-8">
                        <BlurFade delay={BLUR_FADE_DELAY * 4}>
                            <div className="flex flex-col gap-y-4 items-center justify-center text-center">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                                    Certificates
                                </h2>
                                <p className="text-muted-foreground md:text-lg/relaxed max-w-2xl">
                                    Professional certifications and
                                    achievements.
                                </p>
                            </div>
                        </BlurFade>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {certificates.map((cert, id) => (
                                <BlurFade
                                    key={cert.id}
                                    delay={BLUR_FADE_DELAY * 5 + id * 0.05}
                                >
                                    <Card className="p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="shrink-0">
                                                {cert.image_url ? (
                                                    <Image
                                                        src={cert.image_url}
                                                        alt={cert.title}
                                                        className="w-16 h-16 object-contain rounded-lg"
                                                    />
                                                ) : (
                                                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                                                        <Award className="w-8 h-8 text-muted-foreground" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-lg leading-tight">
                                                    {cert.title}
                                                </h3>
                                                <p className="text-muted-foreground text-sm mt-1">
                                                    {cert.issuing_organization}
                                                </p>
                                                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                                                    <span>
                                                        Issued:{" "}
                                                        {formatDate(
                                                            cert.issue_date,
                                                        )}
                                                    </span>
                                                    {cert.expiry_date && (
                                                        <span>
                                                            · Expires:{" "}
                                                            {formatDate(
                                                                cert.expiry_date,
                                                            )}
                                                        </span>
                                                    )}
                                                </div>
                                                {cert.credential_id && (
                                                    <p className="text-xs text-muted-foreground mt-1">
                                                        Credential ID:{" "}
                                                        {cert.credential_id}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        {cert.credential_url && (
                                            <Link
                                                href={cert.credential_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                                            >
                                                View Credential
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
