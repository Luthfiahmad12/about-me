"use client"

import { Dock, DockIcon } from "@/components/magicui/dock"
import { ModeToggle } from "@/components/mode-toggle"
import { Separator } from "@/components/ui/separator"
import { buttonVariants } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Home, FolderGit2, Code2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
    { href: "/", icon: Home, label: "Beranda" },
    { href: "/projects", icon: FolderGit2, label: "Proyek" },
    { href: "/skills", icon: Code2, label: "Keahlian" },
]

export default function Navbar() {
    const pathname = usePathname()

    return (
        <div className="fixed inset-x-0 bottom-4 z-30">
            <Dock
                iconSize={40}
                iconMagnification={40}
                iconDistance={0}
                className="z-50 pointer-events-auto relative h-12 px-2 py-1.5 w-fit mx-auto border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5"
            >
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <DockIcon key={item.href}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.href}
                                        aria-label={item.label}
                                        className={cn(
                                            "flex h-full w-full items-center justify-center rounded-full transition-all duration-200",
                                            "hover:bg-accent hover:text-accent-foreground hover:scale-110",
                                            "active:scale-95",
                                            isActive &&
                                                "bg-primary text-primary-foreground hover:bg-primary/90",
                                        )}
                                    >
                                        <item.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    )
                })}
                <Separator orientation="vertical" className="h-full" />
                <DockIcon>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <ModeToggle className="cursor-pointer h-full w-full rounded-full" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Tema</p>
                        </TooltipContent>
                    </Tooltip>
                </DockIcon>
            </Dock>
        </div>
    )
}
