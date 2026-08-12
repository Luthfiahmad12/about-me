import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <main className="min-h-dvh flex flex-col gap-14 relative">
            {/* Hero Section Loading */}
            <section className="mx-auto w-full max-w-2xl space-y-8">
                <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
                    <div className="gap-2 flex flex-col order-2 md:order-1">
                        <Skeleton className="h-12 w-64" />
                        <Skeleton className="h-6 w-48" />
                    </div>
                    <Skeleton className="size-24 md:size-32 rounded-full order-1 md:order-2" />
                </div>
            </section>

            {/* About Section Loading */}
            <section>
                <div className="flex min-h-0 flex-col gap-y-4">
                    <Skeleton className="h-6 w-20" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                </div>
            </section>

            {/* Work Section Loading */}
            <section>
                <div className="flex min-h-0 flex-col gap-y-6">
                    <Skeleton className="h-6 w-40" />
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-3">
                                <Skeleton className="size-10 rounded-full" />
                                <div className="flex-1 space-y-2">
                                    <Skeleton className="h-4 w-48" />
                                    <Skeleton className="h-3 w-32" />
                                </div>
                                <Skeleton className="h-3 w-24" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section Loading */}
            <section>
                <Skeleton className="h-48 w-full rounded-xl" />
            </section>
        </main>
    );
}
