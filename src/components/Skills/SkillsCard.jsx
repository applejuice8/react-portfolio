function SkillsCard({ name, src }) {
    return (
        <li className='skill-item'>
            <img src={src} alt={name} className='skill-icon' />
            <span>{name}</span>
        </li>
    );
}

export default SkillsCard;