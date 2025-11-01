import skills from './skillsData';
import SkillsCategory from './SkillsCategory';

function SkillsSection() {
    return (
        <section id='skills'>
            {Object.entries(skills).map(([title, items]) => (
                <SkillsCategory key={title} title={title} items={items} />
            ))}
        </section>
    );
}

export default SkillsSection;