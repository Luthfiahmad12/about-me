import Certificate from '../components/partials/Certificate'
import TechStack from '../components/partials/TechStack'

export default function Skills() {
    return (
        <>
            <div id="techstack">
                <h2 className="font-bold text-lg text-gray-800">TechStack</h2>
                <div className="mt-5">
                    <TechStack />
                </div>
            </div>
            <div className="mt-10" id="certificate">
                <h2 className="font-bold text-lg text-gray-800">Sertifikat</h2>
                <div className="mt-5">
                    <Certificate />
                </div>
            </div>
        </>
    )
}
