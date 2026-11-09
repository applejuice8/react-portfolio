import SkillCategory from './SkillCategory'
import { skillsData } from '../../data'
import './Skills.css'

function Skills() {
    return(
        <div id="skills-container">
            {skillsData.map((category) => (
                <SkillCategory key={category.title} {...category} />
            ))}
        </div>
    )
}

export default Skills
