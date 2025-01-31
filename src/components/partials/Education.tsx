import { EducationList } from '../List'
import { EducationsItems } from '../../utils/data'

export default function EducationsPage() {
    return (
        <div className="mt-10 sm:mt-14">
            <h2 className="mb-5 font-bold text-lg text-gray-800 dark:text-neutral-200">
                Education History
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <EducationList lists={EducationsItems} />
            </div>
        </div>
    )
}
