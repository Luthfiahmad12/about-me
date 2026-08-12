import { Icons } from "@/components/icons"
import { HomeIcon, NotebookIcon } from "lucide-react"
import type React from "react"
import { ReactLight } from "@/components/ui/svgs/reactLight"
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark"
import { Typescript } from "@/components/ui/svgs/typescript"
import { Nodejs } from "@/components/ui/svgs/nodejs"
import { Python } from "@/components/ui/svgs/python"
import { Golang } from "@/components/ui/svgs/golang"
import { Postgresql } from "@/components/ui/svgs/postgresql"
import { Docker } from "@/components/ui/svgs/docker"
import { Kubernetes } from "@/components/ui/svgs/kubernetes"
import { Java } from "@/components/ui/svgs/java"
import { Csharp } from "@/components/ui/svgs/csharp"

export const DATA = {
    name: "Achmad Luthfi Afif",
    title: "Achmad Luthfi Afif - Software Engineer & Full-Stack Developer",
    initials: "ALA",
    url: "https://luthfi-cv.vercel.app",
    location: "Wonosobo, Jawa Tengah, Indonesia",
    locationLink: "https://www.google.com/maps/place/Wonosobo",
    description:
        "Portfolio & Resume of Achmad Luthfi Afif - Software Engineer and Full-Stack Developer specializing in Next.js, React, Laravel, TypeScript, Go, and Web Development.",
    summary:
        "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
    avatarUrl: "/me.png",
    skills: [
        { name: "React", icon: ReactLight },
        { name: "Next.js", icon: NextjsIconDark },
        { name: "Typescript", icon: Typescript },
        { name: "Node.js", icon: Nodejs },
        { name: "Python", icon: Python },
        { name: "Go", icon: Golang },
        { name: "Postgres", icon: Postgresql },
        { name: "Docker", icon: Docker },
        { name: "Kubernetes", icon: Kubernetes },
        { name: "Java", icon: Java },
        { name: "C++", icon: Csharp },
    ],

    contact: {
        email: "hello@example.com",
        tel: "+123456789",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://dub.sh/dillion-github",
                icon: Icons.github,
                navbar: true,
            },

            LinkedIn: {
                name: "LinkedIn",
                url: "https://dub.sh/dillion-linkedin",
                icon: Icons.linkedin,

                navbar: true,
            },
            X: {
                name: "X",
                url: "https://dub.sh/dillion-twitter",
                icon: Icons.x,

                navbar: true,
            },
            Youtube: {
                name: "Youtube",
                url: "https://dub.sh/dillion-youtube",
                icon: Icons.youtube,
                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "#",
                icon: Icons.email,

                navbar: false,
            },
        },
    },
    education: [
        {
            school: "Buildspace",
            href: "https://buildspace.so",
            degree: "s3, s4, sf1, s5",
            logoUrl: "/buildspace.jpg",
            start: "2023",
            end: "2024",
        },
        {
            school: "University of Waterloo",
            href: "https://uwaterloo.ca",
            degree: "Bachelor's Degree of Computer Science (BCS)",
            logoUrl: "/waterloo.png",
            start: "2016",
            end: "2021",
        },
        {
            school: "Wilfrid Laurier University",
            href: "https://wlu.ca",
            degree: "Bachelor's Degree of Business Administration (BBA)",
            logoUrl: "/laurier.png",
            start: "2016",
            end: "2021",
        },
        {
            school: "International Baccalaureate",
            href: "https://ibo.org",
            degree: "IB Diploma",
            logoUrl: "/ib.png",
            start: "2012",
            end: "2016",
        },
    ],
    projects: [] as {
        title: string
        href: string
        dates: string
        active?: boolean
        description: string
        technologies: string[]
        links: { type: string; href: string; icon: React.ReactNode }[]
        image: string
        video?: string
    }[],
    hackathons: [] as {
        title: string
        dates: string
        location: string
        description: string
        image?: string
        links?: { title: string; href: string; icon?: React.ReactNode }[]
    }[],
} as const
