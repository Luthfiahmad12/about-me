import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <main className="min-h-dvh flex flex-col gap-14 relative">
            {/* Header Loading */}
            <section className="flex flex-col gap-y-4 items-center justify-center text-center">
                <Skeleton className="h-12 w-64" />
                <Skeleton className="h-6 w-full max-w-2xl" />
            </section>

            {/* Skills Grid Loading */}
            <section>
                <div className="flex flex-wrap justify-center gap-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <Skeleton key={i} className="h-12 w-32 rounded-xl" />
                    ))}
                </div>
            </section>

            {/* Certificates Section Loading */}
            <section className="flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center text-center">
                    <Skeleton className="h-8 w-40" />
                    <Skeleton className="h-5 w-full max-w-2xl" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[1, 2].map((i) => (
                        <div key={i} className="border border-border rounded-xl p-6 space-y-4">
                            <div className="flex items-start gap-4">
                                <Skeleton className="w-16 h-16 rounded-lg" />
                                <div className="flex-1 space-y-2">
                                    <Skeleton className="h-5 w-full" />
                                    <Skeleton className="h-4 w-32" />
                                    <Skeleton className="h-3 w-24" />
                                </div>
                            </div>
                            <Skeleton className="h-4 w-32" />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
