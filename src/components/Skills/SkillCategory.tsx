import SkillItem from './SkillItem'
import type { SkillCategory } from '../../data/types'

/** A left-aligned heading (icon and title) with a thin rule running to the edge, then the skill chips. No card around it. */
function SkillCategory({ title, iconClass, skills }: SkillCategory) {
    return (
        <div className="skills-category">
            <h3 className="category-title">
                <i className={iconClass} aria-hidden="true"></i>
                {title}
                <span className="category-rule" aria-hidden="true"></span>
            </h3>

            <ul className="skills-subcontainer">
                {skills.map((skill) => (
                    <SkillItem key={skill.name} {...skill} />
                ))}
            </ul>
        </div>
    )
}

export default SkillCategory
