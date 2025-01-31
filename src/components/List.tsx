import React from 'react'
import { FaSchool } from 'react-icons/fa6'

interface itemTech {
    name?: string
    icon?: React.ReactNode
}

export interface ListTechStackProps {
    name: string
    techs: itemTech[]
    iconClassName?: string
}

function ListTechStack({ name, techs, iconClassName }: ListTechStackProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-1">
            <div className="min-w-40">
                <span className="block text-sm text-gray-500 dark:text-neutral-500">
                    {name}
                </span>
            </div>
            <ul>
                {techs.map((tech, index) => (
                    <li
                        key={index}
                        className="me-2 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200 after:content-[',']"
                    >
                        {/* Gabungkan className eksternal dengan ikon */}
                        {React.cloneElement(tech.icon as React.ReactElement, {
                            className: `${iconClassName}`,
                        }) ?? (
                            <img
                                src={tech.icon as string}
                                className="text-gray-600"
                                alt="Tech Icon"
                            />
                        )}
                        {tech.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export interface workItemProps {
    name: string
    periode: string
    desc?: string
    icon?: React.ReactNode
    tasks: string[]
}

interface WorkListProps {
    lists: workItemProps[]
    listIcon: React.ReactNode[]
}

function WorkList({ lists, listIcon }: WorkListProps) {
    return (
        <>
            {lists.map((list, index) => (
                <div key={index} className="group relative flex gap-x-5">
                    {/* icon */}
                    <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                        <div className="relative z-10 size-5 flex justify-center items-center">
                            {React.cloneElement(
                                listIcon[index] as React.ReactElement,
                                {
                                    className:
                                        'shrink-0 size-5 text-gray-600 dark:text-neutral-400',
                                }
                            )}
                        </div>
                    </div>

                    {/* content */}
                    <div className="grow pb-8 group-last:pb-0">
                        {/* period */}
                        <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                            {list.periode}
                        </h3>
                        {/* name */}
                        <p className="font-semibold text-base text-gray-800 dark:text-neutral-200">
                            {list.name}
                        </p>
                        {/* desc */}
                        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                            {list.desc}
                        </p>
                        <ul className="list-disc ms-6 mt-3 space-y-1.5">
                            {list.tasks.map((task) => (
                                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                                    {task}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    )
}

export interface educationItem {
    link?: string
    periode?: string
    major?: string
    university?: string
}

interface EducationListProps {
    lists: educationItem[]
}

function EducationList({ lists }: EducationListProps) {
    return (
        <>
            {lists.map((list, index) => (
                <div key={index}>
                    <a href={list.link} target="blank">
                        <div
                            className={`w-auto h-auto p-4 border border-gray-200 rounded-lg dark:border-neutral-700 shadow shadow-sm ${
                                list.link
                                    ? 'hover:shadow-lg hover:border-gray-300'
                                    : 'cursor-not-allowed'
                            }`}
                        >
                            <FaSchool className="shrink-0 size-7 mb-3 text-gray-600" />
                            {/* periode */}
                            <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                                {list.periode}
                            </h3>
                            {/* major */}
                            <p className="font-semibold text-base text-gray-800 dark:text-neutral-200">
                                {list.major}
                            </p>
                            {/* univeristy */}
                            <p className="mt-1 text-base text-gray-600 dark:text-neutral-400">
                                {list.university}
                            </p>
                        </div>
                    </a>
                </div>
            ))}
        </>
    )
}

export { ListTechStack, WorkList, EducationList }
