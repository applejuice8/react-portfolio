import { useTheme } from '../../context/ThemeContext'
import type { Education } from '../../types'

/** "September 2024" -> "2024" */
const yearOf = (value: string) => value.split(' ').pop() ?? value

/** "September 2024 - Current" -> "2024 – Now", "September 2023 - September 2024" -> "2023 – 2024" */
function yearSpan(year: string) {
    const [start, end = ''] = year.split(' - ')
    return `${yearOf(start)} – ${/^(current|present)$/i.test(end.trim()) ? 'Now' : yearOf(end)}`
}

function EducationItem({ name, programme, grade, year, logos }: Education) {
    const { isLight } = useTheme()

    return (
        <li className="education">
            <div className="logo-container">
                {logos.map((item, index) => (
                    <img key={index}
                    src={`/images/education/${isLight ? item.light : item.dark}`}
                    alt={item.name}
                    className="school-logo"
                    />
                ))}
            </div>

            <div className="education-details">
                <p className="year">{yearSpan(year)}</p>
                <h3 className="programme">{programme}</h3>
                <p className="school-name">{name}</p>
                <p className="grade">{grade.replace(': ', ' ')}</p>
            </div>
        </li>
    )
}

export default EducationItem
