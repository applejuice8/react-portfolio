export interface SkillItemProps {
    name: string
    icon: string
}

function SkillItem({ name, icon }: SkillItemProps) {
    return(
        <li className="skill-item">
            <img src={`/images/skills/${icon}`} alt={name} className="skill-icon" />
            <span>{name}</span>
        </li>
    )
}

export default SkillItem