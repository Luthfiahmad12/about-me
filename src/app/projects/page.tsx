import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { getProjects } from "@/lib/services";
import { Icons } from "@/components/icons";

const BLUR_FADE_DELAY = 0.04;

export default async function ProjectsPage() {
    const projects = await getProjects();

    // Format date untuk ditampilkan
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
        });
    };

    return (
        <main className="min-h-dvh flex flex-col gap-14 relative">
            <section id="projects-header">
                <div className="flex flex-col gap-y-4 items-center justify-center text-center">
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
                            My Projects
                        </h1>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <p className="text-muted-foreground md:text-lg/relaxed max-w-2xl">
                            I&apos;ve worked on a variety of projects, from simple
                            websites to complex web applications. Here are a few of my
                            favorites.
                        </p>
                    </BlurFade>
                </div>
            </section>
            <section id="projects-grid">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 auto-rows-fr">
                    {projects.length === 0 ? (
                        <BlurFade delay={BLUR_FADE_DELAY * 3}>
                            <p className="text-muted-foreground text-center col-span-2">
                                No projects added yet.
                            </p>
                        </BlurFade>
                    ) : (
                        projects.map((project, id) => {
                            // Build links array dari demo_url dan repo_url
                            const links = [];
                            if (project.demo_url) {
                                links.push({
                                    icon: <Icons.globe className="size-3" />,
                                    type: "Website",
                                    href: project.demo_url,
                                });
                            }
                            if (project.repo_url) {
                                links.push({
                                    icon: <Icons.github className="size-3" />,
                                    type: "Source",
                                    href: project.repo_url,
                                });
                            }

                            return (
                                <BlurFade
                                    key={project.id}
                                    delay={BLUR_FADE_DELAY * 3 + id * 0.05}
                                    className="h-full"
                                >
                                    <ProjectCard
                                        href={`/projects/${project.slug}`}
                                        title={project.title}
                                        description={project.description || ""}
                                        dates={formatDate(project.created_at)}
                                        tags={project.tech_stack}
                                        image={project.image_url || ""}
                                        video=""
                                        links={links}
                                    />
                                </BlurFade>
                            );
                        })
                    )}
                </div>
            </section>
        </main>
    );
}
