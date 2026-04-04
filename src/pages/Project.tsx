import { Project, ProjectList } from "../utils/data"
import { useState } from "react"
import Modal from "../components/Modal"
import { CardProject } from "../components/Card"

export default function ProjectPage() {
    const [isModalOpen, setModalOpen] = useState(false)
    const [isSelectedData, setSelectedData] = useState<Project | null>(null)

    const openModal = (project: Project) => {
        setSelectedData(project)
        setModalOpen(true)
    }
    const closeModal = () => {
        setSelectedData(null)
        setModalOpen(false)
    }

    return (
        <>
            <h2 className="font-bold text-lg text-gray-800">Projects</h2>
            <span className="text-gray-600 text-sm mb-5">
                Beberapa Project yang saya buat
            </span>
            <div className="mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 rouded-lg">
                    {ProjectList.map((project) => (
                        <button
                            onClick={() => openModal(project)}
                            key={project.id}
                            className="relative group w-full shadow-sm hover:shadow-lg"
                        >
                            <CardProject img={project.image} />
                        </button>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isSelectedData && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    title={isSelectedData.name}
                >
                    <p className="text-justified">
                        {isSelectedData.description}
                    </p>
                </Modal>
            )}
        </>
    )
}
