import SkillItem from "./SkillItem";

function SkillCategory({ title, skills }) {
    return (
        <div className='skill-category'>
            <h3 className='category-title'>{title}</h3>
            <ul className='skills-list'>
                {skills.map((skill, index) => (
                    <SkillItem key={index} {...skill} />
                ))}
            </ul>
        </div>
    );
}

export default SkillCategory;