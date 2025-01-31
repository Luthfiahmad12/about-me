import { FaLaravel } from 'react-icons/fa6'
import vitelogo from '../../assets/vite.png'
import { ListTechStack } from '../List'

export default function TechStack() {
    const technologies = [
        {
            name: 'HTML',
            icon: (
                <img src="https://devicon-website.vercel.app/api/html5/plain.svg?color=%234B5563" />
            ),
        },
        {
            name: 'CSS',
            icon: (
                <img src="https://devicon-website.vercel.app/api/css3/plain.svg?color=%234B5563" />
            ),
        },
        {
            name: 'PHP',
            icon: (
                <img src="https://devicon-website.vercel.app/api/php/plain.svg?color=%234B5563" />
            ),
        },
        {
            name: 'Javascript',
            icon: (
                <img src="https://devicon-website.vercel.app/api/javascript/plain.svg?color=%234B5563" />
            ),
        },
    ]

    const frameworks = [
        {
            name: 'Tailwind CSS',
            icon: (
                <img src="https://devicon-website.vercel.app/api/tailwindcss/plain.svg?color=%234B5563" />
            ),
        },
        {
            name: 'Bootstrap CSS',
            icon: (
                <img src="https://devicon-website.vercel.app/api/bootstrap/plain.svg?color=%234B5563" />
            ),
        },
        {
            name: 'Laravel',
            icon: <FaLaravel />,
        },
        {
            name: 'React JS',
            icon: (
                <img src="https://devicon-website.vercel.app/api/react/original.svg?color=%234B5563" />
            ),
        },
        {
            name: 'Node JS',
            icon: (
                <img src="https://devicon-website.vercel.app/api/nodejs/plain.svg?color=%234B5563" />
            ),
        },
    ]

    const tools = [
        {
            name: 'VS Code',
            icon: (
                <img src="https://devicon-website.vercel.app/api/vscode/plain.svg?color=%234B5563" />
            ),
        },
        {
            name: 'Vite',
            icon: <img src={vitelogo} />,
        },
        {
            name: 'Git',
            icon: (
                <img src="https://devicon-website.vercel.app/api/git/plain.svg?color=%234B5563" />
            ),
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
