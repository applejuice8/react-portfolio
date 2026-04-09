import EducationItem from './EducationItem'
import educationData from '../../data/educationData'

function Education() {
    return(
        <div id="education-container">
            {educationData.map((item, index) => (
                <EducationItem key={index} {...item} />
            ))}
        </div>
    )
}

export default Education