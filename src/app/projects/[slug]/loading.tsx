import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <main className="min-h-dvh flex flex-col gap-8 relative">
            {/* Back Button Loading */}
            <Skeleton className="h-9 w-36" />

            {/* Header Loading */}
            <section className="flex flex-col gap-4">
                <div className="flex gap-2">
                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-5 w-32" />
                </div>

                <Skeleton className="h-12 w-3/4 max-w-xl" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-2/3" />

                {/* Action Buttons Loading */}
                <div className="flex gap-3 pt-2">
                    <Skeleton className="h-10 w-32" />
                    <Skeleton className="h-10 w-32" />
                </div>
            </section>

            {/* Image Loading */}
            <Skeleton className="w-full h-[400px] rounded-xl" />

            {/* Tech Stack Loading */}
            <div className="flex flex-col gap-3">
                <Skeleton className="h-6 w-24" />
                <div className="flex flex-wrap gap-2">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-8 w-28" />
                    <Skeleton className="h-8 w-20" />
                </div>
            </div>

            {/* Content Loading */}
            <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
            </div>
        </main>
    )
}
