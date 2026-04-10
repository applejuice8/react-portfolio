function SkillItem({ name, icon }) {
    return(
        <li className="skill-item">
            <img src={`/images/skills/${icon}`} alt={name} className="skill-icon" />
            <span>{name}</span>
        </li>
    )
}

export default SkillItem