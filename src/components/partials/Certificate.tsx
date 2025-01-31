import { certificates } from '../../utils/data'

export default function Certificate() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certificates.map((item, index) => (
                    <div key={index}>
                        <a href={item.link} target="blank">
                            <div
                                className={`relative group w-auto h-auto p-4 border border-gray-200 rounded-lg dark:border-neutral-700 shadow shadow-sm ${
                                    item.link
                                        ? 'hover:shadow-lg hover:border-gray-300'
                                        : 'cursor-not-allowed'
                                }`}
                            >
                                <img
                                    src={
                                        item.logo ??
                                        'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/certificate_logo.png'
                                    }
                                    alt=""
                                    className="w-24 mb-3 text-gray-600"
                                />
                                {/* nama */}
                                <p className="font-semibold text-base text-gray-800 dark:text-neutral-200 hover:text-gray-600">
                                    {item.name}
                                </p>
                                {/* penyelenggara */}
                                <p className="mt-1 text-base text-gray-600 dark:text-neutral-400">
                                    {item.organizer}
                                </p>
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg">
                                    <p className="text-gray-900 font-semibold text-base">
                                        Lihat Kredensial
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}
