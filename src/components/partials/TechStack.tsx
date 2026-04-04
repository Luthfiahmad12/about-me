import {
    FaBootstrap,
    FaCss3Alt,
    FaGitAlt,
    FaHtml5,
    FaJs,
    FaLaravel,
    FaNodeJs,
    FaPhp,
    FaReact,
} from "react-icons/fa6"
import { ListTechStack } from "../List"
import { VscVscode } from "react-icons/vsc"
import { SiVite } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"

export default function TechStack() {
    const technologies = [
        {
            name: "HTML",
            icon: <FaHtml5 />,
        },
        {
            name: "CSS",
            icon: <FaCss3Alt />,
        },
        {
            name: "PHP",
            icon: <FaPhp />,
        },
        {
            name: "Javascript",
            icon: <FaJs />,
        },
    ]

    const frameworks = [
        {
            name: "Tailwind CSS",
            icon: <RiTailwindCssFill />,
        },
        {
            name: "Bootstrap CSS",
            icon: <FaBootstrap />,
        },
        {
            name: "Laravel",
            icon: <FaLaravel />,
        },
        {
            name: "React JS",
            icon: <FaReact />,
        },
        {
            name: "Node JS",
            icon: <FaNodeJs />,
        },
    ]

    const tools = [
        {
            name: "VS Code",
            icon: <VscVscode />,
        },
        {
            name: "Vite",
            icon: <SiVite />,
        },
        {
            name: "Git",
            icon: <FaGitAlt />,
        },
    ]

    return (
        <div>
            <div className="space-y-3">
                <ListTechStack
                    iconClassName="shrink-0 size-6 me-1"
                    name="Languages"
                    techs={technologies}
                />
                <ListTechStack
                    iconClassName="shrink-0 size-6 me-1"
                    name="Frameworks"
                    techs={frameworks}
                />
                <ListTechStack
                    iconClassName="shrink-0 size-6 me-1"
                    name="Tools"
                    techs={tools}
                />
            </div>
        </div>
    )
}
