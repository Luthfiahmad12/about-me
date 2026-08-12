import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <main className="min-h-dvh flex flex-col gap-14 relative">
            {/* Header Loading */}
            <section className="flex flex-col gap-y-4 items-center justify-center text-center">
                <Skeleton className="h-12 w-64" />
                <Skeleton className="h-6 w-full max-w-2xl" />
                <Skeleton className="h-6 w-3/4 max-w-xl" />
            </section>

            {/* Projects Grid Loading */}
            <section>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 auto-rows-fr">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="border border-border rounded-xl overflow-hidden">
                            <Skeleton className="w-full h-48" />
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between gap-2">
                                    <div className="space-y-2">
                                        <Skeleton className="h-5 w-40" />
                                        <Skeleton className="h-3 w-24" />
                                    </div>
                                    <Skeleton className="h-4 w-4" />
                                </div>
                                <div className="space-y-2">
                                    <Skeleton className="h-3 w-full" />
                                    <Skeleton className="h-3 w-full" />
                                    <Skeleton className="h-3 w-2/3" />
                                </div>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {[1, 2, 3].map((j) => (
                                        <Skeleton key={j} className="h-6 w-16" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
