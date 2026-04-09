import SkillCategory from './SkillCategory'
import skillsData from '../../data/skillsData'

function Skills() {
    return(
        <div id="skills-container">
            {skillsData.map((category, index) => (
                <SkillCategory
                key={index}
                title={category.title}
                iconClass={category.iconClass}
                skills={category.skills}
                />
            ))}
        </div>
    )
}

export default Skills