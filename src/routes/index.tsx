import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import ProjectPage from '../pages/Project'
import Skills from '../pages/Skills'
import { Analytics } from '../components/Analytics'

export default function AppRoutes() {
    return (
        <>
            <Analytics />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>
        </>
    )
}
