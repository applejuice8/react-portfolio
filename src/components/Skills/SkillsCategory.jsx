import SkillItem from "./SkillItem";

function SkillsCategory({ title, skills }) {
    return (
        <div className='skills-category'>
            <h2 className='category-title'>{title}</h2>
            <ul className='skills-list'>
                {skills.map((skill, index) => (
                    <SkillItem key={index} {...skill} />
                ))}
            </ul>
        </div>
    );
}

export default SkillsCategory;