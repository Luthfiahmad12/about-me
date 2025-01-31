import Footer from './components/partials/Footer'
import Header from './components/partials/Header'
import AppRoutes from './routes'

export default function App() {
    return (
        <>
            <Header />
            <main>
                <div className="w-full max-w-2xl mx-auto pt-10 md:pt-16 px-6 sm:px-6 lg:px-8">
                    <AppRoutes />
                </div>
            </main>
            <Footer />
        </>
    )
}
