import SkillItem from './SkillItem'

function SkillCategory({ title, iconClass, skills }) {
    return (
        <div className="skills-category">
            <h3 className="category-title">
                <i className={`fas fa-${iconClass}`} title={title}></i>
                {title}
            </h3>

            <ul className="skills-subcontainer">
                {skills.map((skill, index) => (
                    <SkillItem key={index} icon={skill.icon} name={skill.name} />
                ))}
            </ul>
        </div>
    )
}

export default SkillCategory