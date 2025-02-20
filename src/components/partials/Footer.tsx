import { FaHeart } from 'react-icons/fa6'

export default function Footer() {
    const curentYear = new Date().getFullYear()
    return (
        <footer className="mt-4 w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-6 border-t border-gray-200">
                <div className="relative flex justify-between items-center">
                    <p className="text-sm text-gray-600">
                        © {curentYear} Achmad Luthfi Afif.
                    </p>
                    <p className="text-sm text-gray-600">
                        Build with{' '}
                        <FaHeart className="w-4 h-4 inline-block text-gray-800" />
                    </p>
                </div>
            </div>
        </footer>
    )
}
