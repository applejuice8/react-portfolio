import EducationItem from './EducationItem'
import educationData from '../../data/educationData'
import './Education.css'

function Education() {
    return(
        <ol id="education-list">
            {educationData.map((item, index) => (
                <EducationItem key={index} {...item} />
            ))}
        </ol>
    )
}

export default Education
