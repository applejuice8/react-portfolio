import SkillsCard from "./SkillsCard";

function SkillsCategory({ title, skills }) {
    return (
        <div className='skill-category'>
            <h3 className='category-title'>{title}</h3>
            <ul className='skills-list'>
                {skills.map((skill, index) => (
                    <SkillsCard key={index} {...skill} />
                ))}
            </ul>
        </div>
    );
}

export default SkillsCategory;