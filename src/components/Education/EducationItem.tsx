import { useTheme } from '../../context/ThemeContext'
import { getImage } from '../../lib/assets'
import { logoFile } from '../../lib/logos'
import type { DateRange, Education } from '../../data/types'

/** "September 2024" -> "2024" */
const yearOf = (value: string) => value.split(' ')[1] ?? value

/** "2024 – Now" or "2023 – 2024" */
const yearSpan = ({ start, end }: DateRange) => `${yearOf(start)} – ${end === 'Present' ? 'Now' : yearOf(end)}`

function EducationItem({ name, programme, gradeLabel, grade, period, logos }: Education) {
    const { isLight } = useTheme()

    return (
        <li className="education">
            <div className="logo-container">
                {logos.map((item, index) => (
                    <img key={index}
                    src={getImage('education', logoFile(item, isLight))}
                    alt={item.name}
                    className="school-logo"
                    />
                ))}
            </div>

            <div className="education-details">
                <p className="year">{yearSpan(period)}</p>
                <h3 className="programme">{programme}</h3>
                <p className="school-name">{name}</p>
                <p className="grade">{gradeLabel} {grade}</p>
            </div>
        </li>
    )
}

export default EducationItem
