import clsx from 'clsx'
import { useEffect, useState } from 'react'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    children: React.ReactNode
    className?: string
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    children,
    className,
}) => {
    const [transition, setTransition] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setTransition(true)
        } else {
            const timer = setTimeout(() => setTransition(false), 300) // sesuaikan dengan durasi transisi
            return () => clearTimeout(timer)
        }
    }, [isOpen])

    return (
        <div
            className={clsx(
                'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300',
                {
                    'opacity-100': transition,
                    'opacity-0 pointer-events-none': !transition,
                }
            )}
        >
            <div
                className={clsx(
                    'bg-white rounded-lg shadow-lg transform transition-transform duration-300 w-11/12 max-w-sm md:max-w-md lg:max-w-lg',
                    {
                        'scale-100': transition,
                        'scale-90': !transition,
                    },
                    className
                )}
            >
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-lg font-bold capitalize">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 text-2xl"
                    >
                        &times;
                    </button>
                </div>
                <div className="p-4 text-base">{children}</div>
                <div className="flex justify-end p-4">
                    <button
                        onClick={onClose}
                        className="px-3 py-2 bg-red-700 text-white rounded hover:bg-red-800"
                    >
                        <p className="text-sm uppercase">Close</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
