import { FaBuildingWheat, FaLaptopCode } from 'react-icons/fa6'
import { WorkList } from '../List'
import { Works } from '../../utils/data'

export default function WorkExperiencesPage() {
    return (
        <div className="mt-10 sm:mt-14">
            <h2 className="mb-5 font-bold text-lg text-gray-800">
                Work experience
            </h2>

            {/* list experience */}
            <WorkList
                lists={Works}
                listIcon={[<FaLaptopCode />, <FaBuildingWheat />]}
            />
        </div>
    )
}
