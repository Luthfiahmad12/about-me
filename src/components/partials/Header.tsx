import { useState } from 'react'
import { NavLink } from 'react-router'
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm px-2">
            <nav className="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-2xl mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto shadow shadow-sm">
                <div className="px-4 md:px-0 flex justify-between items-center">
                    {/* logo */}
                    <div className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80">
                        <span className="capitalize font-bold text-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                            {'About Me'}
                        </span>
                    </div>

                    {/* toggle hidden */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="flex justify-center items-center text-gray-500 rounded-full"
                        >
                            {isOpen ? (
                                <FaXmark className="shrink-0 size-4" />
                            ) : (
                                <FaBarsStaggered className="shrink-0 size-4" />
                            )}
                        </button>
                    </div>
                </div>

                {/* link */}
                <div
                    className={`overflow-hidden transition-all duration-300 basis-full grow md:block ${
                        isOpen ? '' : 'hidden'
                    }`}
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? 'py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 focus:outline-none'
                                    : 'py-0.5 md:py-3 px-4 md:px-1 font-medium text-gray-800 focus:outline-none'
                            }
                            end
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/project"
                            className={({ isActive }) =>
                                isActive
                                    ? 'py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 focus:outline-none'
                                    : 'py-0.5 md:py-3 px-4 md:px-1 font-medium text-gray-800 focus:outline-none'
                            }
                            end
                        >
                            Project
                        </NavLink>
                        <NavLink
                            to="/skills"
                            className={({ isActive }) =>
                                isActive
                                    ? 'py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 focus:outline-none'
                                    : 'py-0.5 md:py-3 px-4 md:px-1 font-medium text-gray-800 focus:outline-none'
                            }
                            end
                        >
                            Skills
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}
