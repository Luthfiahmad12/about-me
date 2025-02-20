import { FaSearch } from 'react-icons/fa'

interface cardProjectProps {
    img?: string
    name?: string
}

function CardProject({ img, name }: cardProjectProps) {
    return (
        <div className="border rounded-sm">
            <img
                className="w-full size-40 object-cover bg-gray-100"
                src={img}
                alt="Project"
            />
            <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg">
                    <FaSearch className="shrink-0 size-3  text-gray-500" />
                    <span className="text-xs">{name ?? 'Details'}</span>
                </div>
            </div>
        </div>
    )
}

export { CardProject }
