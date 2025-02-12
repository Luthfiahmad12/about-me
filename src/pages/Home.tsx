import { ProfileData } from '../utils/data'
import {
    FaLinkedinIn,
    FaRegEnvelope,
    FaWhatsapp,
    FaGithub,
} from 'react-icons/fa6'
import WorkExperiencesPage from '../components/partials/Experience'
import EducationsPage from '../components/partials/Education'
export default function Home() {
    const { img, name, title, email, desc, social } = ProfileData

    return (
        <>
            {/* profile */}
            <div className="flex lg:flex-col justify-center items-center gap-x-3">
                <div className="shrink-0">
                    <img
                        className="shrink-0 size-16 lg:size-24 border border-gray-200 rounded-full object-cover"
                        src={img}
                        alt="Avatar"
                    />
                </div>

                <div className="grow lg:text-center">
                    <h1 className="text-lg font-bold text-gray-900 capitalize">
                        {name}
                    </h1>
                    <p className="text-base font-semibold text-gray-600 capitalize">
                        {title}
                    </p>
                </div>
            </div>

            {/* desc */}
            <div className="mt-8 font-medium">
                <p className="text-md text-gray-600 text-justify">{desc}</p>
                <ul className="mt-5 flex flex-col gap-y-3">
                    <li className="flex items-center gap-x-2.5">
                        <FaRegEnvelope className="size-5 text-gray-600" />
                        <a
                            href={`mailto:${email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2"
                        >
                            {email}
                        </a>
                    </li>
                    <li className="flex items-center gap-x-2.5">
                        <FaLinkedinIn className="size-5 text-gray-600" />
                        <a
                            href={`https://linkedin.com/in/${social.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2"
                        >
                            {social.linkedin}
                        </a>
                    </li>
                    <li className="flex items-center gap-x-2.5">
                        <FaWhatsapp className="size-5 text-gray-600" />
                        <a
                            href={`https://wa.me/${
                                social.wa
                            }?text=${encodeURIComponent(
                                'Halo, saya ingin bekerja sama dengan anda.'
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2"
                        >
                            {social.wa}
                        </a>
                    </li>
                    <li className="flex items-center gap-x-2.5">
                        <FaGithub className="size-5 text-gray-600" />
                        <a
                            href={`https://github.com/${social.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2"
                        >
                            {social.github}
                        </a>
                    </li>
                </ul>
            </div>

            {/* works */}
            <WorkExperiencesPage />
            {/* educations */}
            <EducationsPage />
        </>
    )
}
